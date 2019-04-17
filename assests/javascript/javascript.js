$(document).ready(function() {

  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };


  $("#linkedinUrl").on("click", function() {
    window.open("https://www.linkedin.com/in/jacob-haas-909b05172/");
  });


  $("#githubUrl").on("click", function() {
    window.open("https://github.com/adventuroussheep");
  });


  $("#clickCopy").on("click", function() {
    var copyText = document.querySelector("#copytext").innerText;
    console.log(copyText);
    // document.execCommand("copy");

  });

  
  
  
  
  // Scroll feature for anchors/dropdown menu
  $(".anchor").click(function(e){
      e.preventDefault();
      var aid = $(this).attr("href");
      $("html,body").animate({scrollTop: $(aid).offset().top},"slow");
  });
    
    // email click
    $("#emailImg").on("click",function(){
        location.href = "mailto:jacob_haas@live.com";
    })
});

  // Navbar toggle
  function dropDownFunc(x) {
    x.classList.toggle("change");
    $("#dropDown").toggle(); 
  };

