var playerList = new Array();//Empty aArray to hold objects created as the JSON file is parsed
window.onload = init;

function init(){
    getPlayersData();
}

function getPlayersData(){
    var request = new XMLHttpRequest();
    request.open("GET", "List.json");
    request.onreadystatechange = function(){
       // var listDiv = document.getElementById("Players");
        if(this.readyState == this.DONE && this.status == 200){
            if(this.responseText) {
              //  listDiv.innerHTML = this.responseText;
                parsePlayerList(this.responseText);
                addPlayerstoPage();
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

    //Display array in console
    console.log("Player List: ");
    console.log(playerList);
}

function addPlayerstoPage(){
    var ul =document.getElementById("Players");
    for(var i=0; i<playerList.length; i++){
        var playerItem = playerList[i];
        var li = document.createElement("li");
        li.innerHTML=playerItem.Player + " " + playerItem.Skill;
        ul.appendChild(li);
    }
}
