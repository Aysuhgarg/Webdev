let row=document.querySelector(".row-number-section");
let body=document.querySelector("container");

let a3= document.querySelector(".selected-cell-div");
let column=document.querySelector(".column-tag-section");
let cellsection=document.querySelector(".cell-section");

let dataobj={};                                               //global data object that store value,formula,upstrem,downstream
let lastcell;



cellsection.addEventListener("scroll", function (e) {                        //Scrolling 
    row.style.transform = `translateY(-${e.currentTarget.scrollTop}px)`;
  
    column.style.transform = `translateX(-${e.currentTarget.scrollLeft}px)`;
  });



for(let i=1;i<=100;i++)                                  //Creating row for serieal_No(1,2,3,...100)
{
    let ndiv=document.createElement("div");
    ndiv.innerText=i;
    ndiv.classList.add("row-number");
    row.append(ndiv);
}


//column section

for(let i=0;i<26;i++)                                   //Creating Column for A,B,C,.....Z
{
    asciicode=i+65;

    let alphabet=String.fromCharCode(asciicode);

    let div=document.createElement("div");
    div.innerText=alphabet;
    div.classList.add("column-tag");
    column.append(div);
}



for(let i=1;i<=100;i++)                              //Nested Loop for Creating all cells ie 1[A1,B1,C1,...Z1]
{
    let rowDiv=document.createElement("div");
    rowDiv.classList.add("row");

    for(let j=0;j<26;j++)
    {
        let ascii=j+65;
        let alphabet=String.fromCharCode(ascii);
        let celladdress=alphabet+i;
      
        dataobj[celladdress]={
            value:undefined,
            formula:undefined,
            downstream:[],
            upstream:[]
        }

      let celldiv =document.createElement("div");                      //cell created



      celldiv.addEventListener("input",function(e){                      //Function on each cell (input)
        let currCellAddress=e.currentTarget.getAttribute("data-address");  //fetching the address of clicked cell

        dataobj[currCellAddress].value=e.currentTarget.innerText;        // Updating the value in dataobj
        dataobj[currCellAddress].formula=undefined;

      //1- Loop on upstream
      //2- for each cell go to its downstream and remove ourself
      //3- apni upstream ko empty array krdo

        let currupstream=dataobj[currCellAddress].upstream;

        for(let k=0;k<currupstream.length;k++)
        {
            removeFromDownstream(currupstream[k],currCellAddress);
        }

        dataobj[currCellAddress].upstream=[];



        let currdownstream=dataobj[currCellAddress].downstream;

        for(let i=0;i<currdownstream.length;i++)
        {
            updateCell(currdownstream[i]);
        }


        //console.log(dataobj[currCellAddress]);
        console.log(e.currentTarget.innerText);
      })


      celldiv.classList.add("cell");
      celldiv.contentEditable=true;

      celldiv.setAttribute("data-address",celladdress);

      celldiv.addEventListener("click",function(e)                       // Function on each cell onclick
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


// C1 = Formula(2*A1)
// A1 = parent
// C1 = child

//is function kisi ki upstream se mtlb nhi hai
//iska bs itna kaam h ki parent do and child do , aur mai parent ki downstream se child ko hta dunga
//taki unke bichka connection khtm hojai
//taki agr parent update ho to connection khtm hone ke baad child update na ho
function removeFromDownstream(parentCell, childCell) {
    //1- fetch parentCell's downstream
  
    let parentDownstream = dataObj[parentCell].downstream;
  
    //2- filter kro childCell ko parent ki downstream se
  
    let filteredDownstream = []; //a1
  
    for (let i = 0; i < parentDownstream.length; i++) { 
      if (parentDownstream[i] != childCell) {
        filteredDownstream.push(parentDownstream[i]);
      }
    }
  
    //3- filtered upstream ko wapis save krwado dataObj me req cell me
    dataObj[parentCell].downstream = filteredDownstream
  }




  function updateCell(cell){
    let cellObj = dataObj[cell]
    let upstream = cellObj.upstream // [(A1-20), B1-10]
    let formula = cellObj.formula // A1 + B1
  
    // upstream me jobhi cell hai unke objects me jaunga whase unki value lekr aunga 
    // wo sari values mai ek object me key value pair form me store krunga where key being the cell address 
  
  
    // {
    //   A1:20,
    //   B1:10
    // }
  
    let valObj = {}
  
    for(let i = 0;i<upstream.length;i++){
  
        let cellValue =  dataObj[upstream[i]].value
  
        valObj[upstream[i]] = cellValue
    }
  
  //a1 + b1
  
  for(let key in valObj){
    formula = formula.replace(key,valObj[key])
  }
  
  //20 + 10
  
  let newValue = eval(formula)
  
  } 