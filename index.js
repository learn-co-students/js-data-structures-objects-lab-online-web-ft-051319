// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj, key, val){
    console.log(obj, key, val);
    return Object.assign({}, obj, {[key] : val})
}
function destructivelyUpdateDriverWithKeyAndValue(obj, key, val){
    obj[key] = val

    return obj;
}

function deleteFromDriverByKey(obj, key){
    let result = Object.assign({}, obj)
    delete result[key]
    return result;
}

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key]
    return obj;
}