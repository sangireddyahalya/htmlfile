function hat(){
    let x=document.getElementById("inp").value
    let y=document.getElementById("inp1").value
    if(x==" "&&y==" "){
    document.write("enter name and email")
    }
    else if(x==" "){
    document.write("enter name")
    }
    else if(y==" "){
    document.write("enter email")
    }
    else(document.write("SUBMIT"))
}