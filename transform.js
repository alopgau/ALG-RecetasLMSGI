const xml2js = require("xml2js")
const fs = require("fs")
const convertXML = () => {
    const xml = fs.readFileSync("recetas.xml", "utf-8")
    const data = xml2js.parseStringPromise(xml)
    
    fs.writeFileSync("recetas.json",
}
convertXML()