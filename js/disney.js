//page ready
$(document).ready(function(){
           
//global variables
var maxScores = [];
           var music = document.getElementById("music");
           var largestValue = 0;
           var yourPrincess = "";
           var princess = [
                      {name: "Anna", score:0},
                      {name: "Cinderella", score:0},
                      {name: "Cruella", score:0},
                      {name: "Elsa", score:0},
                      {name: "Merida", score:0},
                      {name: "Mulan", score:0},
                      {name: "Tiana", score:0}
           ];

//event listeners
           $(".fireHide").hide();
           $("#results").hide();
           
           $("#fireShow").hover(function() {
               $('.fireHide').show();
               music.play();
           });
           
           $(".q5").click(function() {
                      $(".q5").css("border-color", "");
                      $(this).css("border-color", "rgb(49, 82 ,245)");
           });
           
           $(".q6").click(function() {
                      $(".q6").css("border-color", "");
                      $(this).css("border-color", "rgb(49, 82 ,245)");
           });
           
           $("button").hover(function() {
                      music.play();
           });
           
           $("button").click(function() {
                      submitQuiz();
                      
                      //checks for validation first
                      if(isFormValid())
                      {          
                                 $('#results').show();
                                 
                      }
                      else  
                                 return;
                      
           });
           
//functions
           function isFormValid()
           {
                      
                      let isValid = true;
                      if($("#q1").val() == "")
                      {
                                 isValid = false;
                                 $("#validation").html("Please answer all questions!");
                      }
                      if($("#q2").val() == "")
                      {
                                 isValid = false;
                                 $("#validation").html("Please answer all questions!");
                      }
                      if($("input[name=q3]:checked").length == 0)
                      {
                                 isValid = false;
                                 $("#validation").html("Please answer all questions!");
                      }
                      if($("input[name=q4]:checked").length == 0)
                      {
                                 isValid = false;
                                 $("#validation").html("Please answer all questions!");
                      }
                      if (($("#dog").css("border-color") == "rgb(255, 215, 0)") &&
                      ($("#bear").css("border-color") == "rgb(255, 215, 0)") &&
                      ($("#frog").css("border-color") == "rgb(255, 215, 0)") &&
                      ($("#mouse").css("border-color") == "rgb(255, 215, 0)") &&
                      ($("#reindeer").css("border-color") == "rgb(255, 215, 0)"))
                      {
                                 isValid = false;
                                 $("#validation").html("Please answer all questions!");
                      }
                      if (($("#dawn").css("border-color") == "rgb(255, 215, 0)") &&
                      ($("#daylight").css("border-color") == "rgb(255, 215, 0)") &&
                      ($("#setting").css("border-color") == "rgb(255, 215, 0)") &&
                      ($("#dusk").css("border-color") == "rgb(255, 215, 0)") &&
                      ($("#night").css("border-color") == "rgb(255, 215, 0)"))
                      {
                                 isValid = false;
                                 $("#validation").html("Please answer all questions!");
                      }
                      return isValid;
           } 


           function submitQuiz()
           {
                      //resets validation
                      $("#validation").html("");
                      
                      //local variables
                      let yourName = $("#q1").val();
                      
                      //call functions
                      setName();

                      function setName()
                      {
                                 document.getElementById("insertName").innerHTML = yourName;
                      }
                      
                      //manipulates scoring
                      for(var i= 0; i < princess.length; i++)
                      {
                                 if(princess[i].name === "Tiana")
                                 {
                                            princess[i].score += 3;
                                 }
    
                                 if(princess[i].name === "Mulan")
                                 {
                                            princess[i].score += 3;
                                 }
                      }

                      //parses through the princesses to search for highest score
                      for(i = 0; i < princess.length; i++)
                      {
                                 for( var k = 0; k <princess.length; i++)
                                 {
                                            maxScores[k] = princess[i].score;
                                            k++;
        
                                            largestValue = Math.max.apply(Math, maxScores);

                                            if(princess[i].score == largestValue)
                                            {
                                                       yourPrincess = princess[i].name;
                                            }
                                 }
                                 return console.log(yourPrincess);
                      }
           
           
           
           
           }
})
        