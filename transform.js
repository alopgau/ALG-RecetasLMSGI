const xml2js = require("xml2js")
const fs = require("fs")
const xml = fs.readFileSync('recetas.xml', 'utf8');

xml2js.parseString(xml, (err, result) => {
    if (err) {
        console.error("Error al parsear el XML:", err);
        return;
    }
    fs.writeFileSync("recetas.json", JSON.stringify(result,null,2))
});

