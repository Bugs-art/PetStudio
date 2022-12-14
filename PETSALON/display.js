function displayPetCards(){
    //get the HTML element where we display the pets
    let petsDiv = document.getElementById("pets");
    let tmp="";
    //travel the pets array
    for(let i=0; i<petSalon.pets.length;i++){
        //getting the pet
        let aPet = petSalon.pets[i]
        //create the tmeplate (card)
        tmp+=`
            <div class="pet">
                <p>Name: ${aPet.name} </p>
                <p>Age: ${aPet.age} </p>
                <p>Gender: ${aPet.gender} </p>
                <p>Breed: ${aPet.breed} </p>
                <p>Service: ${aPet.service} </p>
                <p>Owner: ${aPet.ownerName} </p>
                <p>Phone: ${aPet.contactPhone} </p>
            </div>
        `;
    }

   //insert the card into the HTML element
   petsDiv.innerHTML=tmp;

}

function displayPetTable(){

    let table = "";
    for(let i = 0; i < petSalon.pets.length; i++)
    {
    let tablePet=petSalon.pets[i];
    //tablePet.id = i;
    table += ` 
        <tr id="${tablePet.id}">
            <th scope="row" >${tablePet.id}</th>
            <td>${tablePet.name}</td>
            <td>${tablePet.age}</td>
            <td>${tablePet.gender}</td>
            <td>${tablePet.breed}</td>
            <td>${tablePet.service}</td>
            <td>${tablePet.ownerName}</td>
            <td>${tablePet.contactPhone}</td>
            <td><button class="btn btn-danger" onClick="deletePet(${tablePet.id});"> Delete </button></td>
        </tr>` 
    }

    document.getElementById('petsTable').innerHTML = table;

}