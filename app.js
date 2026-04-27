const { it } = require("node:test");

const loadJSON = () => {
    const data = await fetch("recetas.json")
    return data
}

const loadInTable = () => {
    const table = document.querySelector("table")
    data.recetas.receta.forEach(it => {
         `<tr id="${it.$[0]}">${it.nombre}<tr>`
        `<tr>${it.categoria[0]}<tr>`
        `<tr>${it.tiempo[0]}<tr>`
        `<tr>${it.dificultad[0]}<tr>`
    });
}