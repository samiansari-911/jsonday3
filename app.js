let Smartphone = {
    Name : "Iphone 12",
    BAttery : "6000MAh",
    Rom : "8gb",
    Ram : "560gb" ,
    Camera : "70Mp",
    Price : "250k" 
}

let string = JSON.stringify(Smartphone)

localStorage.setItem("Mobile Data" , string ) 

let data =localStorage.getItem("Mobile Data")

console.log(data);


function displayResult(){

let JSONtoObj = JSON.parse(data)

// console.log(JSONtoObj);

document.getElementById("con").innerHTML = ""

for(let a in JSONtoObj){

    document.getElementById("con").innerHTML += (a + " : " + JSONtoObj[a] + "<br>");

}

}

addEventListener('click', displayResult)


