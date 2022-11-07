
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];

function shorterInArray(x){
var min=x[0];
for(let i=0;i<6;i++)
{
    if(min.length>x[i].length)
    {
        min=x[i];


    }
    
}
return(min);
///////////////////////////////////////

}
document.write(shorterInArray(strings))
;