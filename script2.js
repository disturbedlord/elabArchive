var db = firebase.firestore();
var q;
var language = "c" ;
var files_Array;
var fileArr = [];

function fetch_data(){
        getLang();
        q = document.getElementById("q_no").value;
        if(q != ""){
            document.getElementById("opResult").innerHTML = "Trying To Fetch Files...";
            getData(q);
        }
        else{
            document.getElementById("opResult").innerHTML = '"Enter a Valid Question No."';
        }
}
 
function getLang(){
    switch(lang){
        case 1:
            language = "c";
            break;
        case 2:
            language = "cpp";
            break;
        case 3:
            language = "java";
            break;
        case 4:
            language = "ds";
            break;
        default :
//            "Do Nothing"
    }
}

//function storeData(){
//    
//    q = document.getElementById("q_no").value;
////    alert(q);
//    
//   db.collection("java").doc(q).set({
//    files : "newFile.txt"
//})
//.then(function() {
//    console.log("Document successfully written!");
//})
//.catch(function(error) {
//    console.error("Error writing document: ", error);
//});
//
//
//}



function getData(q){
    var docRef = db.collection(language).doc(q);
   
    document.getElementById("opFiles").innerHTML = "";

    docRef.get().then(function(doc) {
    if (doc.exists) {
        files_Array = "";
        fileArr = []; 
       document.getElementById("opResult").innerHTML = "";
//        document.getElementById("error").style.display = "none";
        document.getElementById("opContent").style.display = "block";
        document.getElementById("body").style.backgroundColor = "gray";
        var modal = document.getElementById("opContent");         
        
        console.log("Document data:", doc.data().files);
        files_Array = doc.data().files;
        // localHost
        document.getElementById("op_q_no").innerHTML = "Question No: " +  q;  
        console.log(files_Array);
        manipulateFiles(files_Array);
        for(var i = 0 ; i < fileArr.length ; i++){
            console.log(fileArr.length);
        document.getElementById("opFiles").innerHTML += '<li><a class = "filesText" href = "code/elabJava/' + q + '/' + fileArr[i] + '" target="_blank" >' + fileArr[i] + '</a></li>';
        }
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
            document.getElementById("body").style.backgroundColor = "white";
            
        }
        // github
//        document.getElementById("files_list").innerHTML += '<a href = "code/' + files_Array + '">link</a>';
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        document.getElementById("opResult").innerHTML  = "Files Couldn't Be Fetched";
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

}

function manipulateFiles(files){
    
    var len = files.length;
    var c = 0;
    var str = "";
    for(var i = 0 ; i < len; i++){
        if(files[i] == ' '){
                    fileArr.push(str);
            console.log(str);
                str = "";
        }
        else if(i == len - 1){
            str += files[i];
            fileArr.push(str);
            console.log(str);
            str = "";
            
        }
        else {
            str +=  files[i];
        }
    }

}