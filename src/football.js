
function loadImgTeam(divTeamName,link)
	{
      $.ajax({
                    headers: { 'X-Auth-Token': '8f451493b6b047208433a3019b482254' },
                    url: link.href,
                    dataType: 'json',
                    type: 'GET',
                  }).done(function(response)
                  {

                  var img=document.createElement("img");
                  img.src=response.crestUrl;
                  img.style.height="50px";
                  img.style.width="50px";
                  divTeamName.appendChild(img);
                }); 
  }
  function loadTeamsFoot()
  {
      $.ajax({
                headers: { 'X-Auth-Token': '8f451493b6b047208433a3019b482254' },
                url: 'http://api.football-data.org/alpha/soccerseasons/354/leagueTable',
                dataType: 'json',
                type: 'GET',
              }).done(function(response)
                  {
                   var divFoot=document.getElementById("divFoot");
                   var teamsBody=document.getElementById("teamsBody");
                   divFoot.textContent=response.leagueCaption;
                    for(var x in response.standing)
                    {
                      var row=document.createElement("tr");

                      var position=document.createElement("td");
                          position.textContent=response.standing[x].position;
                      var teamName=document.createElement("td");
                          teamName.textContent=response.standing[x].teamName;
                      var points=document.createElement("td");
                          points.textContent=response.standing[x].points;
                      var goals=document.createElement("td");
                          goals.textContent=response.standing[x].goals;

                      row.appendChild(position);
                      row.appendChild(teamName);
                      row.appendChild(points);
                      row.appendChild(goals);

                      teamsBody.appendChild(row);

                      var linkTeam=response.standing[x]._links.team;
                      loadImgTeam(teamName,linkTeam);


                    }
                }); 
  }

  function chargement() {


	                   $.ajax({
	                    headers: { 'X-Auth-Token': '8f451493b6b047208433a3019b482254' },
	                    url: 'http://api.football-data.org/alpha/teams/61',
	                    dataType: 'json',
	                    type: 'GET',
	                  }).done(function(response)
	                  {

	                  var divFoot=document.getElementById("divFoot");
	                  var img = document.createElement("img");
	                  img.src=response.crestUrl;
	                  img.style.height="50px";
	                  img.style.width="50px";
	                  divFoot.appendChild(img);

	                }); 
  }
