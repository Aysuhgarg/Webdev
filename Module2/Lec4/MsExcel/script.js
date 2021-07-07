let row=document.querySelector(".row-number-section");
let body=document.querySelector("container");
for(let i=1;i<=100;i++)
{
    let ndiv=document.createElement("div");
    ndiv.innerText=i;
    ndiv.classList.add("row-number");
    row.append(ndiv);
}