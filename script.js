var i;
var lang = 1;
function fun_c(){
    document.getElementById("c").style.borderBottom = "2px solid grey";
    document.getElementById("cpp").style.border =  "none";
    document.getElementById("java").style.border =  "none";
    document.getElementById("ds").style.border =  "none";

    lang = 1;

}

function fun_cpp(){
    document.getElementById("cpp").style.borderBottom = "2px solid grey";
    document.getElementById("c").style.border =  "none";
    document.getElementById("java").style.border =  "none";
    document.getElementById("ds").style.border =  "none";
    
    lang = 2;

}

function fun_java(){
    document.getElementById("java").style.borderBottom = "2px solid grey";
    document.getElementById("cpp").style.border =  "none";
    document.getElementById("c").style.border =  "none";
    document.getElementById("ds").style.border =  "none";
    
    lang = 3;

}

function fun_data_structure(){
    document.getElementById("ds").style.borderBottom = "2px solid grey";
    document.getElementById("cpp").style.border =  "none";
    document.getElementById("java").style.border =  "none";
    document.getElementById("c").style.border =  "none";
    
    lang = 4;

}

