// const btn=document.querySelector("class")
const btn=document.querySelector(".btn-toggler");

const theme=document.querySelector("#theme");

btn.addEventListener("click",function(){
    
    if(theme.getAttribute("href")=="css/style.css"){
        theme.href="css/dark_style.css";
    }
    else{
        theme.href="css/style.css"
    }
});