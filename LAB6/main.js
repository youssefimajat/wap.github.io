// question 2
function printNumber(from,to){
    for(let i = from ; i <= to ; i++)
    {
        setTimeout(()=>console.log(i),1000*i)
    }
}
printNumber(1,10);
//question 3 // before the loop , it will show 100000001 ++
let k =0;
setTimeout(()=>alert(k),100);
for(let j = 0 ; j <= 10000000 ; j++)
{
    k++;
}