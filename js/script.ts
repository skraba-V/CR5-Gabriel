class animal{
    name: string;
    img: string;
    gender: string;
    size: string;
    age: number;
    vaccine: boolean;
    constructor (name: string, img: string, gender: string, size: string, age: number, vaccine: boolean) {
        this.name = name;
        this.img = img;
        this.gender = gender;
        this.size = size;
        this.age = age;
        this.vaccine = vaccine;
        call.push(this)
    }
    
    display() {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12 tzl justify-content-center">
            <div class="card" style="width: 18rem;">
                <img src="${this.img}" class="card-img-top" style="height:20rem; object-fit:cover">
                <div class="text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                  <p class="card-text">Gender: ${this.gender}</p>
                  <p class="card-text">Age: ${this.age}</p>
                  <p class="card-text">Size: ${this.size}</p> 
                  <h1 class="text-center btn-vaccine btn d-flex dibo justify-content-center bg-${this.vaccine?"success":"danger"}">${this.vaccine?"Im Done <img src='../img/hand.thumbsup.fill@2x.png' class='iconica'>":"I need vaccine <img src='../img/hand.thumbsup.fill@2x kopija.png' class='iconica'>"}</h1>
                </div>
              </div>
        </div>`
    }
    
   
}

class cat extends animal {
    breed: string;
    furColor: string;
    URLbreed: string;
    constructor(name: string, img: string, gender: string, size: string, age: number, vaccine: boolean, breed: string, furcolor:string, URLbreed: string) {
    super(name, img, gender, size, age, vaccine);
    this.breed = breed;
    this.furColor = furcolor;
    this.URLbreed = URLbreed;
    }
    
    display() {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12 tzl justify-content-center">
            <div class="card" style="width: 18rem;">
                <img src="${this.img}" class="card-img-top" style="height:20rem; object-fit:cover">
                <div class="text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                    <p class="card-text">Gender: ${this.gender}</p>
                    <p class="card-text">Age: ${this.age}</p>
                    <p class="card-text">Size: ${this.size}</p>
                    <h1 class="text-center btn dibo d-flex justify-content-center bg-${this.vaccine?"success":"danger"}">${this.vaccine?"Im Done <img src='../img/hand.thumbsup.fill@2x.png' class='iconica'>":"I need vaccine <img src='../img/hand.thumbsup.fill@2x kopija.png' class='iconica'>"}</h1>
                </div>
                <div class="container">
                <p class="card-text">Breed: ${this.breed}</p>
                <p class="card-text">Fur color: ${this.furColor}</p>
                <p class="card-text">Breed info: 
                <a href="">${this.URLbreed}</a>
                </div>
                
                
            </div>
        </div>`
    }
}
let call: Array<animal> = [];


class dog extends animal {
    breed: string;
    training: boolean;
    constructor(img: string, name: string, gender: string, size: string, age: number, vaccine: boolean, breed: string, training: boolean) {
    super(img, name, gender, size, age, vaccine);
    this.breed = breed;
    this.training = training;
    }

    display() {
        return `
            <div class="col-lg-4 col-md-6 col-sm-12 tzl justify-content-center">
                <div class="card" style="width: 18rem;">
                    <img src="${this.img}" class="card-img-top" style="height:20rem; object-fit:cover">
                    <div class="text-center bg-dark text-white p-1">${this.name}</div>
                    <div class="card-body">
                      <p class="card-text">Gender: ${this.gender}</p>
                      <p class="card-text">Age: ${this.age}</p>
                      <p class="card-text">Size: ${this.size}</p> 
                      <h1 class="text-center btn dibo d-flex justify-content-center bg-${this.vaccine?"success":"danger"}">${this.vaccine?"Im Done <img src='../img/hand.thumbsup.fill@2x.png' class='iconica'>":"I need vaccine <img src='../img/hand.thumbsup.fill@2x kopija.png' class='iconica'>"}</h1>
                    </div>
                    <div class="container">
                    <p class="card-text">Breed: ${this.breed}</p>
                    <p class="card-text">Training: ${this.training}</p>
                    </div>
                </div>
      
            </div>`
    }
}



new animal ("Spike", "../img/pexels-pixabay-50577.jpeg", "male", "small", 4, false);
new animal ("Bacon", "../img/pexels-brett-sayles-4839380.jpeg", "famale", "small", 5, true); 
new cat ("Feline Dion", "../img/pexels-wojciech-kumpicki-2071873.jpeg", "female", "meduim", 5, true, "Angora", "Gray", "https://www.thesprucepets.com/");
new cat ("Meowley Cyrus", "../img/pexels-lina-kivaka-1741205.jpeg", "female", "small", 1, false, "Siemese", "Ginger", "https://www.thesprucepets.com/");
new dog ("Sushi", "../img/pexels-behrouz-sasani-6549183.jpeg ", "famale", "large", 2, true, "Australian Shepherd", true);
new dog ("Platano", "../img/pexels-charles-1851164.jpeg", "male", "small", 5, false, "Poodle", false);
new dog ("Toto", "../img/pexels-igor-ferreira-3756603.jpeg", "male", "medium", 5, false, "Pug", true);
new dog ("Jimmy Chew", "../img/pexels-mentatdgt-936317.jpeg", "male", "small", 5, true, "German Sheeper", true);


(document.querySelector(".sortme") as HTMLElement).addEventListener("click", agesort);
(document.querySelector(".sortme2") as HTMLElement).addEventListener("click", vacsort);

function agesort () {
    
    call.sort(function(a, v) {
        return a.age - v.age});
    (document.querySelector(".ruf") as HTMLElement).innerHTML ="";
    cards();
};

function vacsort () {
    
    
    call.sort(function(pl, gl) {
        return pl.vaccine - gl.vaccine});
    (document.querySelector(".ruf") as HTMLElement).innerHTML ="";
    cards();
};


function cards() {
    const animalscontainer = (document.querySelector(".ruf") as HTMLElement);
    animalscontainer.innerHTML = "";
    call.forEach((val) => {
        animalscontainer.innerHTML += val.display();
    });
    chng ();
}
cards();

function chng(){
    let btns = document.getElementsByClassName("dibo");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
        call[i].vaccine=!call[i].vaccine;
        cards();
  });
}
}











