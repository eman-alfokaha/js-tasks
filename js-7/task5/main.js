var num=window.prompt('enter number','o');
function isOdd(num){
    if(num%2==0){
        return false;
    }
    else{
        return true;
    }

}
document.write(isOdd());