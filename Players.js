var playerList = new Array();//Empty aArray to hold objects created as the JSON file is parsed
window.onload = init;

function init(){
    getPlayersData();
}

function getPlayersData(){
    var request = new XMLHttpRequest();
    request.open("GET", "List.json");
    request.onreadystatechange = function(){
        if(this.readyState == this.DONE && this.status == 200){
            if(this.responseText) {
                parsePlayerList(this.responseText);
                addPlayerstoPage();
                addPlayerstoTable();
            } else{
                console.log("Error: Player data is not available");
            }
        }
    };
    request.send();
}

//Implements parsePlayerListFunction
function parsePlayerList(ListJSON){
    if(ListJSON == null || ListJSON.trim()==""){
        return;
    }
    var listArray = JSON.parse(ListJSON);
    if (listArray.length==0){
        console.log("Error: the player list array is empty");
        return;
    }
    for (var i=0; i <listArray.length; i++){
        var listItem = listArray[i];
        playerList.push(listItem);
    }

}

function addPlayerstoPage() {
    var ul = document.getElementById("Players");
    for (var i = 0; i < playerList.length; i++) {
        var playerItem = playerList[i];
        var li = document.createElement("li");
        li.innerHTML = playerItem.Player + " is a player for " + playerItem.Team + " - ";
        ul.appendChild(li);
    }
}

function pr(){
    document.getElementById("result").innerHTML=
        "In this game Cristiano Ronaldo has " + document.getElementById("ronaldoGoal").value + " Goals " +
        document.getElementById("ronaldoCorner").value + " Corners " +
        document.getElementById("ronaldoAssist").value + " Assists " +

        "<br />"+"In this game Lionel Messi has " + document.getElementById("messiGoal").value + " Goals " +
        document.getElementById("messiCorner").value + " Corners " +
        document.getElementById("messiAssist").value + " Assists " +

        "<br />"+"In this game Eden Hazard  has " + document.getElementById("hazardGoal").value + " Goals " +
        document.getElementById("hazardCorner").value + " Corners " +
        document.getElementById("hazardAssist").value + " Assists " +

        "<br />"+ "In this game Sergio Aguero has " + document.getElementById("agueroGoal").value + " Goals " +
        document.getElementById("agueroCorner").value + " Corners " +
        document.getElementById("agueroAssist").value + " Assists " +

        "<br />"+ "In this game Gareth Bale has " + document.getElementById("baleGoal").value + " Goals " +
        document.getElementById("baleCorner").value + " Corners " +
        document.getElementById("baleAssist").value + " Assists " +

       "<br />" + "In this game Luis Suarez has " + document.getElementById("suarezGoal").value + " Goals " +
        document.getElementById("suarezCorner").value + " Corners " +
        document.getElementById("suarezAssist").value + " Assists ";

}


