let row=document.querySelector(".row-number-section");
let body=document.querySelector("container");

let a3= document.querySelector(".selected-cell-div");
let column=document.querySelector(".column-tag-section");
let cellsection=document.querySelector(".cell-section");


let lastcell;

cellsection.addEventListener("scroll", function (e) {
    row.style.transform = `translateY(-${e.currentTarget.scrollTop}px)`;
  
    column.style.transform = `translateX(-${e.currentTarget.scrollLeft}px)`;
  });

for(let i=1;i<=100;i++)
{
    let ndiv=document.createElement("div");
    ndiv.innerText=i;
    ndiv.classList.add("row-number");
    row.append(ndiv);
}


//counm section

for(let i=0;i<26;i++)
{
    asciicode=i+65;

    let alphabet=String.fromCharCode(asciicode);

    let div=document.createElement("div");
    div.innerText=alphabet;
    div.classList.add("column-tag");
    column.append(div);
}

for(let i=1;i<=100;i++)
{
    let rowDiv=document.createElement("div");
    rowDiv.classList.add("row");
    for(let j=0;j<26;j++)
    {
      let ascii=j+65;
      let alphabet=String.fromCharCode(ascii);
      let celladdress=alphabet+i;

      let celldiv =document.createElement("div");
      celldiv.classList.add("cell");
      celldiv.contentEditable=true;

      celldiv.setAttribute("data-address",celladdress);

      celldiv.addEventListener("click",function(e)
      {
          if(lastcell)
          {
              lastcell.classList.remove("cell-selected");
          }

          e.currentTarget.classList.add("cell-selected");
          lastcell =e.currentTarget;

         let data= e.currentTarget.getAttribute("data-address");
          a3.innerText=data;
      });
      

      rowDiv.append(celldiv);

    }
    cellsection.append(rowDiv);
}