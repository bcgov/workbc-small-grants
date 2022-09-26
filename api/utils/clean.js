function clean(obj) {
    const propNames = Object.getOwnPropertyNames(obj)
    for (let i = 0; i < propNames.length; i += 1) {
        const propName = propNames[i]
        if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
            delete obj[propName]
        }
    }
}

module.exports = clean
