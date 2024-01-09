const { Router } = require("express");
const optionController = require("./option.controller");

const router = Router();
router.post("/", optionController.create)
router.get("/by-category/:categoryId", optionController.findByCategoryId)
router.get("/by-category-slug/:slug", optionController.findByCategorySlug)
router.get("/:id", optionController.findById)
router.delete("/:id", optionController.removeById)
router.get("/", optionController.find)
router.put("/:id", optionController.update)
module.exports = {
    OptionRoutes: router
}