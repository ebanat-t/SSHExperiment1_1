function appendDatatoJSON (addData) {
    const fs = require('fs')
    const originalObject = JSON.parse(fs.readFileSync('../../../src/assets/data.json', 'utf8'))

    originalObject.list.push(addData)

    fs.writeFileSync('./src/assets/data.json', JSON.stringify(originalObject))
    console.log('wrote data to json file')
}

export { appendDatatoJSON }

