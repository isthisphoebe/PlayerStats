var players = {};

window.onload = function(){

const url = '/assets/json/player-stats.json';

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      response.json().then(function(data) {  
        let option;

        players = data[0].players;

        let dropdown = document.getElementById('player-names');
        dropdown.length = 0;

        // let defaultOption = document.createElement('option');
        // defaultOption.text = 'Choose a player';

        // dropdown.add(defaultOption);
        // dropdown.selectedIndex = 0;
    
    	for (let i = 0; i < players.length; i++) {
          option = document.createElement('option');

      	  option.text = players[i].player.name.first + " " + players[i].player.name.last;
      	  option.value = players[i].player.name.first;
      	  dropdown.add(option);
          changePlayer();
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  })
};

function changePlayer() {

 let value = document.getElementById("player-names").value;

  if (value === "Toby"){
  changePlayerData(players[0])
  }

  if (value === "Yaya"){  
   changePlayerData(players[1])
  }

  if (value === "Wayne"){    
  changePlayerData(players[2])
  }

  if (value === "Per"){    
  changePlayerData(players[3])
  }

  if (value === "Riyad"){     
  changePlayerData(players[4])
  }

};

function changePlayerData(player){

  document.getElementById("name").innerHTML = player.player.name.first + " " + player.player.name.last;
  document.getElementById("position").innerHTML = player.player.info.positionInfo;


  if(player.player.name.first === "Toby"){
  document.getElementById("playerBackground").setAttribute("class", "TobyBackground"), 
  document.getElementById("playerBadge").setAttribute("class", "TobyBadge");


  var goals = player.stats[0].value;
  var losses = player.stats[1].value;
  var wins = player.stats[2].value;
  var draws = player.stats[3].value;
  var forwardPass = player.stats[4].value
  var goalAssists = player.stats[5].value;
  var appearances = player.stats[6].value;
  var minsPlayed = player.stats[7].value; 
  var backwardPass = player.stats[8].value;

   let allPasses = forwardPass + backwardPass;
   let perMin = allPasses / minsPlayed;

   let passesPerMinute = perMin.toFixed(2);

   let perMatch = goals / (losses + wins + draws);
   let goalsPerMatch = perMatch.toFixed(2);

   document.getElementById("appearances").innerHTML = appearances;
   document.getElementById("goals").innerHTML = goals;
   document.getElementById("assists").innerHTML = goalAssists;
   document.getElementById("goalsPerMatch").innerHTML = goalsPerMatch;
   document.getElementById("passesPerMinute").innerHTML = passesPerMinute;

  }

  if(player.player.name.first === "Yaya"){
    document.getElementById("playerBackground").setAttribute("class", "YayaBackground"), 
    document.getElementById("playerBadge").setAttribute("class", "YayaBadge");


  var goals = player.stats[0].value;
  var losses = player.stats[1].value;
  var wins = player.stats[2].value;
  var draws = player.stats[3].value;
  var forwardPass = player.stats[4].value
  var goalAssists = player.stats[5].value;
  var appearances = player.stats[6].value;
  var minsPlayed = player.stats[7].value; 
  var backwardPass = player.stats[8].value;

   let allPasses = forwardPass + backwardPass;
   let perMin = allPasses / minsPlayed;

   let passesPerMinute = perMin.toFixed(2);

   let perMatch = goals / (losses + wins + draws);
   let goalsPerMatch = perMatch.toFixed(2);

   document.getElementById("appearances").innerHTML = appearances;
   document.getElementById("goals").innerHTML = goals;
   document.getElementById("assists").innerHTML = goalAssists;
   document.getElementById("goalsPerMatch").innerHTML = goalsPerMatch;
   document.getElementById("passesPerMinute").innerHTML = passesPerMinute;
  }

  if(player.player.name.first === "Wayne"){
    document.getElementById("playerBackground").setAttribute("class", "WayneBackground"), 
    document.getElementById("playerBadge").setAttribute("class", "WayneBadge");


  var goals = player.stats[0].value;
  var losses = player.stats[1].value;
  var wins = player.stats[2].value;
  var draws = player.stats[3].value;
  var forwardPass = player.stats[4].value
  var goalAssists = player.stats[5].value;
  var appearances = player.stats[6].value;
  var minsPlayed = player.stats[7].value; 
  var backwardPass = player.stats[8].value;

   let allPasses = forwardPass + backwardPass;
   let perMin = allPasses / minsPlayed;

   let passesPerMinute = perMin.toFixed(2);

   let perMatch = goals / (losses + wins + draws);
   let goalsPerMatch = perMatch.toFixed(2);

   document.getElementById("appearances").innerHTML = appearances;
   document.getElementById("goals").innerHTML = goals;
   document.getElementById("assists").innerHTML = goalAssists;
   document.getElementById("goalsPerMatch").innerHTML = goalsPerMatch;
   document.getElementById("passesPerMinute").innerHTML = passesPerMinute;
  }

  if(player.player.name.first === "Per"){
    document.getElementById("playerBackground").setAttribute("class", "PerBackground"), 
    document.getElementById("playerBadge").setAttribute("class", "PerBadge");


  var goals = player.stats[0].value;
  var losses = player.stats[1].value;
  var wins = player.stats[2].value;
  var draws = player.stats[3].value;
  var forwardPass = player.stats[4].value
  var appearances = player.stats[5].value;
  var minsPlayed = player.stats[6].value; 
  var backwardPass = player.stats[7].value;

   let allPasses = forwardPass + backwardPass;
   let perMin = allPasses / minsPlayed;

   let passesPerMinute = perMin.toFixed(2);

   let perMatch = goals / (losses + wins + draws);
   let goalsPerMatch = perMatch.toFixed(2);

   document.getElementById("appearances").innerHTML = appearances;
   document.getElementById("goals").innerHTML = goals;
   document.getElementById("assists").innerHTML = 0;
   document.getElementById("goalsPerMatch").innerHTML = goalsPerMatch;
   document.getElementById("passesPerMinute").innerHTML = passesPerMinute;
  }

  if(player.player.name.first === "Riyad"){
    document.getElementById("playerBackground").setAttribute("class", "RiyadBackground"), 
  document.getElementById("playerBadge").setAttribute("class", "RiyadBadge");


  var goals = player.stats[0].value;
  var losses = player.stats[1].value;
  var wins = player.stats[2].value;
  var draws = player.stats[3].value;
  var forwardPass = player.stats[4].value
  var goalAssists = player.stats[5].value;
  var appearances = player.stats[6].value;
  var minsPlayed = player.stats[7].value; 
  var backwardPass = player.stats[8].value;

   let allPasses = forwardPass + backwardPass;
   let perMin = allPasses / minsPlayed;

   let passesPerMinute = perMin.toFixed(2);

   let perMatch = goals / (losses + wins + draws);
   let goalsPerMatch = perMatch.toFixed(2);

   document.getElementById("appearances").innerHTML = appearances;
   document.getElementById("goals").innerHTML = goals;
   document.getElementById("assists").innerHTML = goalAssists;
   document.getElementById("goalsPerMatch").innerHTML = goalsPerMatch;
   document.getElementById("passesPerMinute").innerHTML = passesPerMinute;
  }

}
