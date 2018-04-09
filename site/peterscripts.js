anime({
    targets: 'div.ball',
    translateY: [
        { value: 180, duration: 550},
        { value: 0, duration: 550}
    ],
    rotate:{
        value: '1turn',
        easing: 'easeInOutSine'
    },
    delay: function(el, i, l){ return i * 1100},
    loop: true
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBXXbcHKem_8HlGGNBMZHPuEU_dPGYocJQ",
    authDomain: "project-acfb6.firebaseapp.com",
    databaseURL: "https://project-acfb6.firebaseio.com",
    projectId: "project-acfb6",
    storageBucket: "project-acfb6.appspot.com",
    messagingSenderId: "353331136500"
  };
  firebase.initializeApp(config);

  var database = firebase = firebase.database();
  var ref = database.ref('bteams');

  ref.on('value', gotData, errData);
  
  var tName;
  var tPoints;
  var tRebounds;
  var tAssists;

  //the selected defaults at 0
  var selectedTeam = 0;

  function gotData(data){
     
      var teams = data.val();
      var keys = Object.keys(teams);
      
      tName = teams[keys[selectedTeam]].name;
      tPoints = teams[keys[selectedTeam]].points;
      tRebounds = teams[keys[selectedTeam]].rebounds;
      tAssists = teams[keys[selectedTeam]].assists;
  }

  function errData(){ 
      console.log("Error");
      console.log(err);
  }
  
  //
  var team = "team1";
  var team1 = document.getElementById("team1stats");
  var team2 = document.getElementById("team2stats");

  var selector1 = document.getElementById("t1");
  var selector2 = document.getElementById("t2");

  

  //this function takes in the teams and adds this to the team containers
  function addTeamData(t1, t2){
    selectedTeam = t1;
    ref.on('value', gotData, errData);
    
      team1.innerHTML = 
          "<h3>Team Name: " + tName + "</h3>" +
          "<h3>Team Points: " + tPoints + "</h3>" +
          "<h3>Team Rebounds: " + tRebounds + "</h3>" +
          "<h3>Team Assists: " + tAssists + "</h3>" 
      ;
      
    selectedTeam = t2;
    ref.on('value', gotData, errData);
      
        team2.innerHTML = 
            "<h3>Team Name: " + tName + "</h3>" +
            "<h3>Team Points: " + tPoints + "</h3>" +
            "<h3>Team Rebounds: " + tRebounds + "</h3>" +
            "<h3>Team Assists: " + tAssists + "</h3>" 
        ;
  }

  var btn = document.getElementById("btn");
  btn.addEventListener("click", function(){
    var t1 = parseInt(selector1.options[selector1.selectedIndex].value);
    var t2 = parseInt(selector2.options[selector2.selectedIndex].value) + 1;

    addTeamData(t1, t2);
  });

