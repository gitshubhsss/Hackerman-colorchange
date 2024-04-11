// let username=prompt("enter a username");
let container=document.querySelector(".container");
const h2=document.createElement("h2")
const h1=document.createElement("h1")
const h4=document.createElement("h4");
const username=prompt("Enter the username");
const h5=document.createElement("h5");


let randomNum=Math.floor(Math.random()*100);
async function hackerMan(){
    h1.innerText="Initializing hack program";
    await getData(h1,1000);
    h2.innerText=`hacking ${username} username`;
    await getData(h2,2000);
    h4.innerText=`user name found ${username+randomNum}`
    await getData(h4,4000);
    h5.innerText="connecting to facebook";
    await getData(h5,5000)


}
function getData(el,delay){
       setTimeout(() => {
        container.appendChild(el)
       }, delay);
}


hackerMan();
