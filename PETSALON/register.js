//object literal {}
let petSalon = {
    //attributes
    name: "The Fashion Pet",
    phone: "666-666-666",
    address:{
        country: "Mex",
        city: "Tijuana",
        street: "Universidad",
        number: "263-k",
        zip: "22141"
    },
    pets:[]

}



//Constructor
// <---------- this are the arguments (local vars)------>
let counter=0;
function Pet(name,age,gender,breed,service,owner,phone){
    //the real attributes are the next:
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=owner;
    this.contactPhone=phone;
    this.id=counter++;
}
//create a new pet
let scooby = new Pet("Scooby", 59, "Male", "Mixed", "Grooming","Shaggy", "777-777-777");
let scrappy = new Pet("Scrappy", 49,"Male", "Mixed", "Vaccine", "Shaggy", "777-777-777");

//push the pet into the array
petSalon.pets.push(scooby, scrappy);

//getting the values from the inputs
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputOwner=document.getElementById("txtOwnerName");
let inputPhone=document.getElementById("txtPhone");
let selectService = document.getElementById("selService");


//register function
function register(){
    console.log("Registering a new pet..")
    //create the obj
    let thePet = new Pet (inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputOwner.value,inputPhone.value,selectService.value);
    //push the pet into the array
    petSalon.pets.push(thePet)
    //display the array
    clearInputs();
    displayNumberofPets();
    displayPetCards();
    displayPetTable();

}

function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    selService.value="";
    inputOwner.value="";
    inputPhone.value="";
}
function displayNumberofPets(){
    document.getElementById("numberOfPets").innerHTML=`We have ${petSalon.pets.length} pets in the system.`;

}
function deletePet(petID){
    //remove the pet from the table
    document.getElementById(petID).remove();
    //declared a local variable
    let petIndex;
    //travel the array 
    for(let i=0; i<petSalon.length; i++){
        //storting the value of the array on a variable
        let pet = petSalon.pets[i]; 

        //if the petId is correct or not
        if(pet.id == petID){
            petIndex = i;
        }
    }
    //Splice to remove the pet from the array
    petSalon.pets.splice(petIndex, 1);
    displayNumberofPets();
    displayPetCards();
    displayPetTable();
    
    
}

function init(){
    //creat a new pet
    let scooby = new Pet("Scooby", 59,"Male","Dane","Grooming","Shaggy", "777-777-777");
    let scrappy = new Pet("Scrappy", 49, "Male", "Mixed", "Vaccine", "Shaggy", "777-777-777");
    //push the pet into the array
    petSalon.pets.push(scooby, scrappy);
    
    displayPetCards();
    displayPetTable();


}

window.onload = init;