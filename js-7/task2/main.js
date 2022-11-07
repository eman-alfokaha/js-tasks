var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
function largenum(a,b){
    if(a>b){
    document.write(a);
    }
    else 
    {
        document.write(b); 
    }

}
largenum(num1,num2);
