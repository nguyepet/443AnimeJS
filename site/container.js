var teams = {};
teams[0] = ['Florida State', 'Texas A&M', 'Gonzaga'];
teams[1] = ['Michigan', 'Texas A&M', 'Gonzaga'];
teams[2] = ['Florida State', 'Michigan', 'Gonzaga'];
teams[3] = ['Florida State', 'Texas A&M', 'Michigan'];

function ChangeTeamList() {
    var teamOneList = document.getElementById("t1");
    var teamTwoList = document.getElementById("t2");
    var selTeam = teamOneList.options[teamOneList.selectedIndex].value;
    while (teamTwoList.options.length) {
        teamTwoList.remove(0);
    }

    var availableTeams = teams[selTeam];

    if(availableTeams) {
        var i;
        for(i = 0; i < availableTeams.length; i++){
            var team = new Option(availableTeams[i], i);
            teamTwoList.options.add(team);
        }
    }
}