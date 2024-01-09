const isTrue = (value) => ["true", 1, true].includes(value);
const isFalse = (value) => ["false", 0, false].includes(value);
const removePropertyInObject = (target = {}, properties = []) => {
    for (const item of properties) {
        delete target[item];
    }
    return target;
};
module.exports = {
    isTrue,
    isFalse,
    removePropertyInObject
};