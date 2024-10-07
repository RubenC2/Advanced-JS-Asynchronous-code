//RESUELVE TUS EJERCICIOS AQUI
//Ejercicio 1.- Declara una funcion getAllBreeds que devuelva un array de strings 
//con todas las razas de perro > La función devuelve todas las razas de perro.



function getAllBreeds() {
    let result = fetch("https://dog.ceo/api/breeds/list/all")
    .then(res=>res.json())
    .then(data => Object.keys(data.message))
    .catch(err=>console.log("ERROR!: " + err.message))
    console.log(result);
    return result
}
console.log(getAllBreeds().then(result => console.log(result)))

// 2.- Declara una función **getRandomDog** que obtenga una imagen random de una raza.

function getRandomDog() {
    let result = fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then (data => (data.message))
    .catch(err=>console.log("ERROR!: " + err.message))
    console.log(result);
    return result
}
console.log(getRandomDog().then(result => console.log(result)))

//3.- Declara una función **getAllImagesByBreed** que obtenga todas las imágenes de la raza komondor.

function getAllImagesByBreed() {
    let result = fetch("https://dog.ceo/api/breed/komondor/images")
    .then(res=>res.json())
    .then (data => (data.message))
    .catch(err=>console.log("ERROR!: " + err.message))
    console.log(result);
    return result
}
console.log(getAllImagesByBreed().then(result => console.log(result)))

//4.- Declara una funcion **getAllImagesByBreed2(breed)** 
//que devuelva las imágenes de la raza pasada por el argumento

function getAllImagesByBreed2(breed) {

    let url = `https://dog.ceo/api/breed/${breed}/images`

    let result = fetch(url)
    .then(res=>res.json())
    .then (data => (data.message))
    .catch(err=>console.log("ERROR!: " + err.message))
    console.log(result);
    return result
}
console.log(getAllImagesByBreed2("komondor").then(result => console.log(result)))