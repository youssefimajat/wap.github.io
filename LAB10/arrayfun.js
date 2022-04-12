//console.log("");
Array.prototype.odd=function(){
return this.filter(c=>c%2>0) ;
}
Array.prototype.even=function(){
    return this.filter(c=>c%2==0) ;
    }
console.log([1,2,3,4].odd());
console.log([1,2,3,4].even());