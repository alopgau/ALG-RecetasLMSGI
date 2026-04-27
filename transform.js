const xml2js = require("xml2js")
const fs = require("fs")
const convertXML = async () => {
    const xml = fs.readFileSync("recetas.xml", "utf-8")

    const data = xml2js.parseStringPromise(xml)
    JSON.stringify(data)
    fs.writeFileSync("recetas.json",)
}
convertXML()