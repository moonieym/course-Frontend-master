let marvel_movies = {
    "Iron Man": {
        year: 2008,
        characters: [
            {
                name: "Tony Stark",
                age: 51
            },
            {
                name: "Pepper Potts",
                age: 18
            }
        ]
    },
    "Captain America": {
        year: 2011,
        characters: [
            {
                name: "Steve Rogers",
                age: 94
            },
            {
                name: "Bucky Barnes",
                age: 32
            }
        ]
    }
}

// 1. Edad de "Steve Rogers"
console.log(marvel_movies["Captain America"].characters[0].age)

// 2. Nombre del segundo personaje de "Iron Man"
console.log(marvel_movies["Iron Man"].characters[1].name)

// 3. Promedio de edad de los personajes de las peliculas de Marvel
function promedio_personajes(movies) {
    let total = 0;
    let total_characters = 0;

    let movie_names = Object.keys(movies) // ["Iron Man", "Captain America"]

    for (let i = 0; i < movie_names.length; i++) {

        total_characters += movies[movie_names[i]].characters.length

        for (let j = 0; j < movies[movie_names[i]].characters.length; j++) {
            total += movies[movie_names[i]].characters[j].age
            // total += movies[i]
        }
    }
    return total / total_characters
}

console.log(promedio_personajes(marvel_movies))