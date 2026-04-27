const loadJSON = () => {
    const data = await fetch("recetas.json")
    return data
}
