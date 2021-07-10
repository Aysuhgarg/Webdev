let row=document.querySelector(".row-number-section");
let body=document.querySelector("container");
for(let i=1;i<=100;i++)
{
    let ndiv=document.createElement("div");
    ndiv.innerText=i;
    ndiv.classList.add("row-number");
    row.append(ndiv);
}


//counm section
let column=document.querySelector(".column-tag-section");

for(let i=0;i<26;i++)
{
    asciicode=i+65;

    let alphabet=String.fromCharCode(asciicode);

    let div=document.createElement("div");
    div.innerText=alphabet;
    div.classList.add("column-tag");
    column.append(div);
}

let cellsection=document.querySelector(".cell-section");
for(let i=1;i<=100;i++)
{
    let rowDiv=document.createElement("div");
    rowDiv.classList.add("row");
    for(let j=0;j<26;j++)
    {
      let ascii=j+65;
      let alphabet=String.fromCharCode(ascii);
      let celladdress=alphabet+i;

      let cell =document.createElement("div");

      cell.classList.add("cell");
      cell.setAttribute("data-address",celladdress);
      rowDiv.append(cell);

    }
    cellsection.append(rowDiv);
}