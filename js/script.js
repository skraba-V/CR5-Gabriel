"use strict";
class animal {
    constructor(name, img, gender, size, age, vaccine) {
        this.name = name;
        this.img = img;
        this.gender = gender;
        this.size = size;
        this.age = age;
        this.vaccine = vaccine;
        call.push(this);
    }
    display() {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
                <img src="${this.img}" class="card-img-top" style="height:20rem; object-fit:cover">
                <div class="text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                  <p class="card-text">Gender: ${this.gender}</p>
                  <p class="card-text">Age: ${this.age}</p>
                  <p class="card-text">Size: ${this.size}</p> 
                  <h1 class="text-center btn d-flex justify-content-center bg-${this.vaccine ? "success" : "danger"}">Vaccine: ${this.vaccine}</h1>
                </div>
              </div>
        </div>`;
    }
}
class cat extends animal {
    constructor(name, img, gender, size, age, vaccine, breed, furcolor, URLbreed) {
        super(name, img, gender, size, age, vaccine);
        this.breed = breed;
        this.furColor = furcolor;
        this.URLbreed = URLbreed;
    }
    display() {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
                <img src="${this.img}" class="card-img-top" style="height:20rem; object-fit:cover">
                <div class="text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                    <p class="card-text">Gender: ${this.gender}</p>
                    <p class="card-text">Age: ${this.age}</p>
                    <p class="card-text">Size: ${this.size}</p>
                    <h1 class="text-center btn d-flex justify-content-center bg-${this.vaccine ? "success" : "danger"}">Vaccine: ${this.vaccine}</h1>
                </div>
                <div class="container">
                <p class="card-text">Breed: ${this.breed}</p>
                <p class="card-text">Fur color: ${this.furColor}</p>
                <p class="card-text text-center">Breed info: 
                <a href="">${this.URLbreed}</a>
                </div>
                
                
            </div>
        </div>`;
    }
}
let call = [];
class dog extends animal {
    constructor(img, name, gender, size, age, vaccine, breed, training) {
        super(img, name, gender, size, age, vaccine);
        this.breed = breed;
        this.training = training;
    }
    display() {
        return `
            <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                    <img src="${this.img}" class="card-img-top" style="height:20rem; object-fit:cover">
                    <div class="text-center bg-dark text-white p-1">${this.name}</div>
                    <div class="card-body">
                      <p class="card-text">Gender: ${this.gender}</p>
                      <p class="card-text">Age: ${this.age}</p>
                      <p class="card-text">Size: ${this.size}</p> 
                      <h1 class="text-center btn d-flex justify-content-center bg-${this.vaccine ? "success" : "danger"}">Vaccine: ${this.vaccine}</h1>
                    </div>
                    <div class="container">
                    <p class="card-text">Breed: ${this.breed}</p>
                    <p class="card-text">Training: ${this.training}</p>
                    </div>
                </div>
      
            </div>`;
    }
}
new animal("Spike", "../img/pexels-pixabay-50577.jpeg", "male", "small", 4, false);
new animal("Bacon", "../img/pexels-brett-sayles-4839380.jpeg", "famale", "small", 5, true);
new cat("Feline Dion", "../img/pexels-wojciech-kumpicki-2071873.jpeg", "female", "meduim", 5, true, "Angora", "Gray", "https://www.thesprucepets.com/");
new cat("Meowley Cyrus", "../img/pexels-lina-kivaka-1741205.jpeg", "female", "small", 1, false, "Siemese", "Ginger", "https://www.thesprucepets.com/");
new dog("Sushi", "../img/pexels-behrouz-sasani-6549183.jpeg ", "famale", "large", 2, true, "Australian Shepherd", true);
new dog("Platano", "../img/pexels-charles-1851164.jpeg", "male", "small", 5, false, "Poodle", false);
new dog("Toto", "../img/pexels-igor-ferreira-3756603.jpeg", "male", "medium", 5, false, "Pug", true);
new dog("Jimmy Chew", "../img/pexels-mentatdgt-936317.jpeg", "male", "small", 5, true, "German Sheeper", true);
document.querySelector(".sortme").addEventListener("click", agesort);
document.querySelector(".sortme2").addEventListener("click", vacsort);
function agesort() {
    call.sort(function (a, v) {
        return a.age - v.age;
    });
    document.querySelector(".ruf").innerHTML = "";
    cards();
}
;
function vacsort() {
    call.sort(function (x, y) {
        return x.vaccine - y.vaccine;
    });
    document.querySelector(".ruf").innerHTML = "";
    cards();
}
;
function cards() {
    call.forEach((val) => {
        document.querySelector(".ruf").innerHTML += val.display();
    });
}
cards();
