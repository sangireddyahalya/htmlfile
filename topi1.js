document.write("hellooo")
function print(){
    let x=document.getElementById("inp").value
    document.getElementById("res").value=x
    let y=document.getElementById("text1").value
    z=document.getElementById("text2").value
    let a=parseInt(y)+parseInt(z)
    document.getElementById("res1").value=a
    document.getElementById("res2").value=y-z
    document.getElementById("res3").value=y*z
    document.getElementById("res4").value=y/z
}