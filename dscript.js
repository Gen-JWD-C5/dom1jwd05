let btnFirstName = document.querySelector("#btnFirstName");  // grab the first button element - # indicates that you chose an id element
let firstName = document.querySelector("#firstName");
let errMsg = document.querySelector("#errMsg");
let secondDiv = document.querySelector("#secondDiv");

function displaySecondBlock(){  // write  the function
    if(firstName.value === ""){
        errMsg.innerHTML = "Please enter your name";
        errMsg.style.color = "red";
    }else{
        secondDiv.style.display = "block";
        errMsg.innerHTML = ""; // to clear error message when name is entered.
    }
}

// add an event Listener to the function
btnFirstName.addEventListener("click", displaySecondBlock);  // the first parameter tells the listener when to execute

// ------ create birth stone array object
let objBirthStones = [
    {
      stone_name: "Garnet",
      month: 1,
      thumbnail: "garnet.png",
    },
    {
      stone_name: "Amethyst",
      month: 2,
      thumbnail: "amethyst.png",
    },
    {
      stone_name: "Aquamarine",
      month: 3,
      thumbnail: "aquamarine.png",
    },
    {
      stone_name: "Diamond",
      month: 4,
      thumbnail: "diamond.png",
    },
  ];

  //----- create second functions
let btnNext = document.querySelector("#btnNext");
let thirdDiv = document.querySelector("#thirdDiv")
let birthMonth = document.querySelector("#birthMonth");
let thirdDivP = document.querySelector("#thirdDiv > p");  // p is child of thirdDiv i.e choose third div, choose p
let thirdDivImg = document.querySelector("#thirdDiv > figure");

function displayThirdBlock(){
   thirdDiv.style.display = "block";
// ----- display info in third block
    for(i=0; i <=objBirthStones.length; i++){
        if(birthMonth.value == objBirthStones[i].month){
            thirdDivP.innerHTML = `Dear ${firstName.value}, your birthstone is ${objBirthStones[i].stone_name}`;
            thirdDivImg.innerHTML = `<img src="./bsimages/${objBirthStones[i].thumbnail}">`
           break 
        }
    }
}

btnNext.addEventListener("click", displayThirdBlock);


