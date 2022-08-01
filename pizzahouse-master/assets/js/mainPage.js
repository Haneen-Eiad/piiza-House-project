var navColor = document.getElementById("nav-color");
function changebg(){
    var scrollValue =window.scrollY ;
    if(scrollValue < 150){
        navColor.classList.remove("navColor");

    }
    else if(scrollValue == 0 ){
        navColor.classList.remove("navColor");
    }
    else{
        navColor.classList.add("navColor");
    }
}
window.addEventListener('scroll',changebg);