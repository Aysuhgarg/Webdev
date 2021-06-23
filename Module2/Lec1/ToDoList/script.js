let btn=document.querySelector('#btn');
let int=document.querySelector('#input');
let ul=document.querySelector('#ul');
btn.addEventListener("click",function(){
     //input box se value nikal rhe h
    let data=int.value;
    if(data=="") return ;
    //ek new li element create kr rhe hai
    let li=document.createElement("li");

    //input box se jo value nikali thi wo is li element me dal rhe hai
    li.innerText=data;

    //listener on each li object
    li.addEventListener("dblclick",function(){
    li.remove();
    });
    //   us li element ko jo abhi create kra just ul ke ander dal rhe hai
    ul.append(li);
    // wapas se input box ko blank kr rhe hai
    int.value="";
});

int.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      //input box se value nikal rhe h
    let data=int.value;
    if(data=="") return ;
    //ek new li element create kr rhe hai
    let li=document.createElement("li");

    //input box se jo value nikali thi wo is li element me dal rhe hai
    li.innerText=data;

    //listener on each li object
    li.addEventListener("dblclick",function(){
    li.remove();
    });
    //   us li element ko jo abhi create kra just ul ke ander dal rhe hai
    ul.append(li);
    // wapas se input box ko blank kr rhe hai
    int.value="";
    }
  });