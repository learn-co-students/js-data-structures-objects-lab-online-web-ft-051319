let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});

    // Alternate using ES6 Spread operators:
    // return { ...driver, ...{ [key]: value } }
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, {[key]: value});

    // driver[key] = value;
    // return driver;
}

function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver);
    // Alternate using ES6 Spread operators:
    // const newObj = { ...driver }
    
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}