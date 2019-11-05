var princess = [
                      {name: "Anna", score:0},
                      {name: "Cinderella", score:0},
                      {name: "Cruella", score:0},
                      {name: "Elsa", score:0},
                      {name: "Merida", score:0},
                      {name: "Mulan", score:0},
                      {name: "Tiana", score:0}
           ];
           
           
           function increaseScore(princess, passedname1, passedname2)
           {
               for(var i=0; i<princess.length; i++)
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
           

increaseScore(princess, "Mulan", "Cruella");

console.log(princess);

