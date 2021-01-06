function reset() {
    document.getElementsByClassName("form-input").value = "";
}

function send(){
    if(document.getElementsByClassName("form-input").value.length == 0){
        alert("empty")
    }
}
