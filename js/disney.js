$(document).ready(function(){
           
           //global variables
           var maxScores = [];
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

    
           //fireworks header
           $("#fireHide").hide();
           $("#fireShow").hover(function() {
               $('div').show();
           })
           
           //functions - must wrap as functions
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
           
})//ready
        