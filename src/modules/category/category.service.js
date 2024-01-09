const autoBind = require("auto-bind");
const CategoryModel = require("./category.model");
const OptionModel = require("../option/option.model");
const { isValidObjectId, Types } = require("mongoose");
const createHttpError = require("http-errors");
const { CategoryMessage } = require("./category.message");
const { default: slugify } = require("slugify");

class CategoryService {
    #model;
    #optionModel;
    constructor(){
        autoBind(this);
        this.#model = CategoryModel;
        this.#optionModel = OptionModel;
    }
    async find(){
        return await this.#model.find({parent: {$exists: false}});
    }
    async remove(id){
        await this.checkExistById(id);
        await this.#optionModel.deleteMany({category: id}).then(async () => {
            await this.#model.deleteMany({_id: id})
        });
        return true;
    }
    async create(categoryDto) {
        if(categoryDto?.parent && isValidObjectId(categoryDto.parent)) {
            const existCategory = await this.checkExistById(categoryDto.parent);
            categoryDto.parent = existCategory._id
            categoryDto.parents = [
                ... new Set(
                    ([existCategory._id.toString()].concat(
                        existCategory.parents.map(id => id.toString())
                    )).map(id => new Types.ObjectId(id))
                )
            ]
        }
        if(categoryDto?.slug){
            categoryDto.slug = slugify(categoryDto.slug);
            await this.alreadyExistBySlug(categoryDto.slug);
        }else {
            categoryDto.slug = slugify(categoryDto.name)
        }
        const category = await this.#model.create(categoryDto);
        return category;
    }
    async checkExistById(id) {
        const category = await this.#model.findById(id);
        if(!category) throw new createHttpError.NotFound(CategoryMessage.NotFound);
        return category;
    }
    async checkExistBySlug(slug) {
        const category = await this.#model.findOne({slug});
        if(!category) throw new createHttpError.NotFound(CategoryMessage.NotFound);
        return category;
    }
    async alreadyExistBySlug(slug) {
        const category = await this.#model.findOne({slug});
        if(category) throw new createHttpError.Conflict(CategoryMessage.AlreadyExist);
        return null;
    }
}
module.exports = new CategoryService();