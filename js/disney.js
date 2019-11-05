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
                      $(this).css("border-color", "rgb(49, 82, 245)");
           });
           
           $(".q6").click(function() {
                      $(".q6").css("border-color", "");
                      $(this).css("border-color", "rgb(49, 82, 245)");
           });
           
           $("button").hover(function() {
                      music.play();
           });
           
           $("button").click(function() {
                      //checks for validation first
                      if(isFormValid())
                      {          
                                 submitQuiz();
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
           
           function setName()
           {
                      let yourName = $("#q1").val();
                      document.getElementById("insertName").innerHTML = yourName;
           }
           
           function setPrincess()
           {
                      document.getElementById("insertPrincess").innerHTML = "Princess " + yourPrincess;
           }
           
           function setVillian()
           {
                      document.getElementById("insertPrincess").innerHTML = "the villian, " + yourPrincess;
           }
           
           function setCharIcon()
           {
                      document.getElementById("charIcon").innerHTML = "<img src='img/"+ yourPrincess.toLowerCase() + ".png' alt='CharacterIcon'>";
           }

           function increaseScore(princess, passedname1, passedname2)
           {
               for(var i=0; i < princess.length; i++)
               {
                   if(princess[i].name == passedname1)
                   {
                       princess[i].score += 1;
                   }
                   if(princess[i].name == passedname2)
                   {
                              princess[i].score += 1;
                   }
               }
           }
           
           function evaluate()
           {          
                      let q2Response = $("#q2").val();
                      let q3Response = $("input[name=q3]:checked").val();
                      let q4Response = $("input[name=q4]:checked").val();
                      
                      //question 2
                      if(q2Response == "1")
                      {
                          increaseScore(princess,"Anna", "Mulan");
                      }
                      if(q2Response == "2")
                      {
                          increaseScore(princess,"Tiana", null);
                      }
                      if(q2Response == "3")
                      {
                          increaseScore(princess,"Merida", null);
                      }
                      if(q2Response == "4")
                      {
                          increaseScore(princess,"Elsa", "Cinderella");
                      }
                      if(q2Response == "5")
                      {
                          increaseScore(princess,"Cruella", null);
                      }
                      
                      //question 3
                      if(q3Response == "red")
                      {
                          increaseScore(princess,"Anna", null);
                      }
                      if(q3Response == "orange")
                      {
                          increaseScore(princess,"Tiana", null);
                      }
                      if(q3Response == "yellow")
                      {
                          increaseScore(princess,"Cinderella", null);
                      }
                      if(q3Response == "green")
                      {
                          increaseScore(princess,"Merida", null);
                      }
                      if(q3Response == "blue")
                      {
                          increaseScore(princess,"Elsa", null);
                      }
                      if(q3Response == "purple")
                      {
                          increaseScore(princess,"Mulan", null);
                      }
                      if(q3Response == "black")
                      {
                          increaseScore(princess,"Cruella", null);
                      }
                      
                      //question 4
                      if(q4Response == "family")
                      {
                          increaseScore(princess,"Elsa", "Mulan");
                      }
                      if(q4Response == "freedom")
                      {
                          increaseScore(princess,"Merida", null);
                      }
                      if(q4Response == "independence")
                      {
                          increaseScore(princess,"Tiana", null);
                      }
                      if(q4Response == "power")
                      {
                          increaseScore(princess,"Cruella", null);
                      }
                      if(q4Response == "love")
                      {
                          increaseScore(princess,"Anna", "Cinderella");
                      }
                      
                      //question 5
                      if($("#dog").css("border-color") == "rgb(49, 82, 245)")
                      {
                              increaseScore(princess, "Cruella", "Mulan");   
                      }
                      if($("#bear").css("border-color") == "rgb(49, 82, 245)")
                      {
                                 increaseScore(princess, "Merida", null);
                      }
                      if($("#frog").css("border-color") == "rgb(49, 82, 245)")
                      {
                                 increaseScore(princess, "Tiana", null);
                      }
                      if($("#mouse").css("border-color") == "rgb(49, 82, 245)")
                      {
                                 increaseScore(princess, "Cinderella", null);
                      }
                      if($("#reindeer").css("border-color") == "rgb(49, 82, 245)")
                      {
                                 increaseScore(princess, "Anna", "Elsa");
                      }
                      
                      //question 6
                      if($("#dawn").css("border-color") == "rgb(49, 82, 245)")
                      {
                                 increaseScore(princess, "Anna", "Mulan");
                      }
                      if($("#daylight").css("border-color") == "rgb(49, 82, 245)")
                      {
                                 increaseScore(princess, "Tiana", "Elsa");
                      }
                      if($("#setting").css("border-color") == "rgb(49, 82, 245)")
                      {
                                 increaseScore(princess, "Merida", "Cruella");
                      }
                      if($("#dusk").css("border-color") == "rgb(49, 82, 245)")
                      {
                                 increaseScore(princess, "Cinderella", "Elsa");
                      }
                      if($("#night").css("border-color") == "rgb(49, 82, 245)")
                      {
                                 increaseScore(princess, "Cruella", "Tiana");
                      }
                      
           }
           
           function findMax()
           {
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
                      }
           }
          

           function submitQuiz()
           {
                      //resets validation
                      $("#validation").html("");
                      
                      //call functions
                      setName();
                      evaluate();
                      findMax();
                      
                      if(yourPrincess == "Cruella")
                      {
                                 setVillian();
                                 setCharIcon();
                      }
                      else
                      {
                                 setPrincess();
                                 setCharIcon();
                      }
           }
})
        