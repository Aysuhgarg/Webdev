let a=[1,2,3,4,5,6,7,8];

function fun(x)
{
    return x*2;
}
function mymap(a,fun)
{
    let b=[];
     for(let i=0;i<a.length;i++)
     {
         let val=a[i];
         b[i]=fun(val);
     }
     return b;
}
let ans=mymap(a,fun)
console.log(a);
console.log(ans);