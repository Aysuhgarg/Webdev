let a=[1,2,3,4,5,6,7];
function fil(a)
{
    return a%2==0;
}

function myfilter(a,fil)
{
  let b=[];
  for(let i=0;i<a.length;i++)
  {
      if(fil(a[i])==true)
      {
         b[b.length]=(a[i]);
      }
  }
  return b;
}
let ans=myfilter(a,fil);
console.log(a);
console.log(ans);