localStorage.clear();
sessionStorage.clear();
function personal_info(eee){
    localStorage.setItem(eee.id,eee.value);    
}

function GENDER(ee){
    var z=document.getElementById("female");
    var z2=document.getElementById("male");

    if(ee.id == "female" && z.checked){
        localStorage.setItem(ee.id,ee.value);
        localStorage["male"]="off";
    }
    else if(ee.id == "male" && z2.checked){
        localStorage.setItem(ee.id,ee.value);
        localStorage["female"]="off";
    }
}

function LANG(e){
    var z=document.getElementById("JS");
    var z2=document.getElementById("CSS");
    var z3=document.getElementById("HTML");

    if(e.id == "JS" && z.checked){
        localStorage.setItem(e.id,"JS");
       
    }

    if(e.id == "CSS" && z2.checked){
        localStorage.setItem(e.id,"CSS");
       
    }

    if(e.id =="HTML" && z3.checked){
        localStorage.setItem(e.id,"HTML");
       
    }
}



function Submit(){
    document.getElementById("div").style.display="block";
    document.getElementById("div").style.backgroundColor="darkgray";
    document.getElementById("div").style.width="300px";
    document.getElementById("div").style.marginLeft="100px";
    document.getElementById("div").style.border="2px black solid";

    var y=localStorage.getItem("full");
    document.getElementById("full_name").innerHTML=y;

    var yy=localStorage.getItem("age");
    document.getElementById("agee").innerHTML=yy;

    var yyy=localStorage.getItem("major");
    document.getElementById("maj").innerHTML=yyy;

    var yyyy=localStorage.getItem("desc");
    document.getElementById("des").innerHTML=yyyy;

    if(localStorage.getItem("female")=="on"){document.getElementById("gen").innerHTML="Female";}
    else if(localStorage.getItem("male")=="on"){document.getElementById("gen").innerHTML="Male";}
   
    
    if(document.getElementById("JS").checked){
        var yyyyy=localStorage.getItem("JS");
        document.getElementById("la").innerHTML=yyyyy+" , ";
    }
    else document.getElementById("la").innerHTML="";

    if(document.getElementById("CSS").checked){
        var yyyyyy=localStorage.getItem("CSS");
        document.getElementById("la2").innerHTML= yyyyyy+" , ";
    }
    else document.getElementById("la2").innerHTML="";

    if(document.getElementById("HTML").checked){
        var yyyyyyy=localStorage.getItem("HTML");
        document.getElementById("la3").innerHTML= yyyyyyy;
    }
    else document.getElementById("la3").innerHTML="";


}