const button = document.querySelector(".btn-search");
button.addEventListener("click", function(){
    console.log("Hello world")
})

Let knappa = true;
const lightBtn = document.querySelector (".light-Btn");
lightBtn.addEventListener ("Click", function (){
    if (knapp === tru){
        document.body.dtyle.backgroundColor = "Pink"
        knapp = false;
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
    //Put your codes to test here
}
catch (Exception error)
{
    System.out.println (error.Message);
}
