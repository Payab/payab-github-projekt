const button = document.querySelector(".btn-search");
button.addEventListener("click", function() {
    console.log("Hello world")
})

let knappa = true;
const lightBtn = document.querySelector(".light-Btn");
lightBtn.addEventListener ("Click", function(){
    if (knappa === tru){
        document.body.style.backgroundColor = "Pink"
        knappa = false;
    }
    else{
        document.body.style.backgroundColor = "White"
        knappa = true;
    }
})

const years = [1999, 2007, 2013, 1969, 2020];

const ages = [];
for (let t = 0; t < years.length; t++) {
  if (t === 2) continue;
  ages.push(2021 - years[t]);
}
console.log(ages);

try 
{
 let size = prompt('10');
const arr = new Array();
arr.length = size;
}
catch(error){
    alert ('Pleas insert the integer');
}
