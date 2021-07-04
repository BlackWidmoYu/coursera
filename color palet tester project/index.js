const inp = document.querySelectorAll("input") ;
const tester  = document.getElementsByClassName("testPlace");

function colorChange(){
    
    let value1 = parseInt(inp[0].value,10);
    let value2 = parseInt(inp[1].value,10);
    let value3 = parseInt(inp[2].value,10);
    tester[0].style.backgroundColor = "#"+ value1.toString(16) + value2.toString(16) + value3.toString(16) ; 
}
function colorChangeRange(){
   // console.log(inp[3].value,inp[4].value,inp[5].value);
    let value1 = parseInt(inp[3].value,10);
    let value2 = parseInt(inp[4].value,10);
    let value3 = parseInt(inp[5].value,10);
    tester[0].style.backgroundColor = "#"+ value1.toString(16) + value2.toString(16) + value3.toString(16) ; 
}
document.querySelector("button").addEventListener('click',colorChange);
document.querySelectorAll(".range").forEach(()=>{
    this.addEventListener('change',colorChangeRange);
    this.addEventListener('input',colorChangeRange);
   
}) ;