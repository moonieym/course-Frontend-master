const container = document.getElementById("container")
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
        callback(r);
    },2000);
}

const render = (user) => {
    return `
    <div>
        <p>${user.nombre}</p>
        <hr>
        <p>${user.edad}</p>
        <p>${user.curso}</p>
    </div>
    `
}

get("https://api/moon.json",(resp) => {
    // console.log(resp)
    container.inerHTML = render(resp)

    let nombre_usuario = prompt() // interaccion del usuario

    get(`https://api/${nombre_usuario}.json`, (resp) => {
        // console.log(resp)
        container.innerHTML = render(resp)
        nombre_usuario = prompt() 

        let nombre_usuario = prompt() // interaccion del usuario

        get(`https://api/${nombre_usuario}.json`, (resp) => {
            // console.log(resp)
            container.innerHTML = render(resp)
            nombre_usuario = prompt()

            let nombre_usuario = prompt() // interaccion del usuario

            get(`https://api/${nombre_usuario}.json`, (resp) => {
                // console.log(resp)
                container.innerHTML = render(resp)
                nombre_usuario = prompt()

                let nombre_usuario = prompt() // interaccion del usuario

                get(`https://api/${nombre_usuario}.json`, (resp) => {
                    // console.log(resp)
                    container.innerHTML = render(resp)
                    nombre_usuario = prompt()
                })
            })
        })
    })
})