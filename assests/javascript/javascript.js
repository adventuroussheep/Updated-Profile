
$(document).ready(function(){    
    
window.onbeforeunload = function (){
    window.scrollTo(0,0);
}

$("#linkedinUrl").on("click",function(){
    window.open("https://www.linkedin.com/in/jacob-haas-909b05172/");
})

$("#githubUrl").on("click",function(){
    window.open("https://github.com/adventuroussheep");
})


});
