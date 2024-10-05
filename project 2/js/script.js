function showComment(){
    var x = document.getElementById("firstfooter");
    var y = document.getElementById("secondfooter");
    var z = document.getElementById("thirdfooter");
    if (x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        x.style.display ="none";
    }
    if (y.style.display == "none"){
        y.style.display = "block";
    }
    else{
        y.style.display ="none";
    }
    if (z.style.display == "none"){
        z.style.display = "block";
    }
    else{
        z.style.display ="none";
    }



}

var popup = document.getElementById("subscribew");

function openSub(){

    popup.style.visibility="visible";


}
function closeSup(){

    popup.style.visibility="hidden";
}
function myFunction(event){
    var x =event.key;
    console.log(x);

    if(x==27)
    {
       closeSup(); 

    }

}