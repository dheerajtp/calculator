function clrInputScreen(){
    document.getElementById("input-display").value="";
    console.log("Screen Cleared.")
}
function btnRe(val){
    if(val=="="){
        var tobecal = document.getElementById('input-display').value;
        console.log(tobecal);
        document.getElementById('input-display').value = eval(tobecal);
        console.log('Result Printed.');
    }else{
    document.getElementById("input-display").value +=val;
    }
}