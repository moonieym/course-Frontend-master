// Simulador de API's

// 2. Simulador de peticiones
const get = (link, callback) => {
    const respond = (link) => {
        console.log("Respondiendo a la peticion...")
        const db = {
            "moon.json" : {
                nombre: "Moon",
                edad: 19,
                curso: "Programacion"
            },
            "chris.json" : {
                nombre: "Chris",
                edad: 27,
                curso: "Musica"
            },
            "jay.json" : {
                nombre: "Jay",
                edad: 22,
                curso: "Derecho"
            },
            "jake.json" : {
                nombre: "Jake",
                edad: 21,
                curso: "Matematicas"
            }
        }
        return db[link.substr(12)] // db["moon.json"] || db["chris.json"] || ...
    }

    setTimeout(() => {
        let r = respond(link);
        callback(r)
    },2000);
}

// 1. Funcion de render
const render = (usuario) => { // es como se veria ya en la pagina
    console.log("-------")
    console.log(`| ${usuario.nombre} |`)
    console.log("-------")
    console.log(`| ${usuario.edad} |`)
    console.log(`| ${usuario.curso} |`)
    console.log("-------")
}

// 3. Mandarlo a llamar
get("https://api/moon.json",(resp) => {
    // console.log(resp)
    render(resp)
})

get("https://api/chris.json",(resp) => {
    // console.log(resp)
    render(resp)
})