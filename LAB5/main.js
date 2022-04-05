
function sum(qw){
    return qw.filter(s=>s>20).reduce((x,y)=>x+y,0)
}

function getNewArray(qs){
    return qs.filter(input=>(input.includes('a') && input.length==5));
    }

console.log(sum(['1','2','30','40']));
console.log(getNewArray(["Mohamed","aivee"]))