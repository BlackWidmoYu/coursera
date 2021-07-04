const inp = document.querySelectorAll("input") ;
const tester  = document.getElementsByClassName("testPlace");

function colorChange(){
    
    let value1 = parseInt(inp[0].value,10);
    let value2 = parseInt(inp[1].value,10);
    let value3 = parseInt(inp[2].value,10);


    tester[0].style.backgroundColor = "#"+ value1.toString(16) + value2.toString(16) + value3.toString(16) ; 
   
}
document.querySelector("button").addEventListener('click',colorChange);