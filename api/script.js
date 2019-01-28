var localURL = "https://localhost:5001/api/ludo/";
var board = document.getElementById('boardDiv');
var newDiv = document.getElementById('newDiv');
var message = document.getElementById('errorMessage');
var gameStarted = document.getElementById("showCode");

function joinGame() {
    str = document.getElementById("gamecode").value
    const p = document.createElement('p');

    if (str.length == 0) {
        p.textContent = "Nothing typed!";
        board.appendChild(p);
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {

            data = JSON.stringify(this.responseText);

            if (this.readyState == 4 && this.status == 200) {
                if (board.style.display === "none") {
                    board.style.display = "block";
                    newDiv.style.display = "none";
                }
                p.textContent = this.responseText;
                board.appendChild(p);

            } else {
                if (board.style.display === "none") {
                    board.style.display = "block";
                    newDiv.style.display = "none";
                }
                p.textContent = this.status;
                board.appendChild(p);
            }
        };
        xmlhttp.open("GET", localURL + str + "/getgamedetails", true);
        xmlhttp.send();
    }

}

function createGame(gameURL) {
    var result = null;
    $.ajax({
        type: "POST",
        async: false,
        url: localURL + gameURL,
        dataType: "json",
        success: function(data){
            result = data;
        }
    });
    return result;
}
  
function newGame() {

    var gameURL = "createnewgame";
    var gameID = createGame(gameURL);
  
    var p1 = document.getElementById('player1').value;
    var p2 = document.getElementById('player2').value;
    var p3 = document.getElementById('player3').value;
    var p4 = document.getElementById('player4').value;

    if (p1 != "") {
        $.ajax({
            type: "POST",
            async: true,
            url: localURL + gameID + "/players/addplayer?name=" + p1 + "&colorID=1",
            success: function(data){
                console.log(data);
            }
        });
    }
    if (p2 != "") {
        $.ajax({
            type: "POST",
            async: true,
            url: localURL + gameID + "/players/addplayer?name=" + p2 + "&colorID=2",
            success: function(data){
                console.log(data);
            }
        });
    }
    if (p3 != "") {
        $.ajax({
            type: "POST",
            async: true,
            url: localURL + gameID + "/players/addplayer?name=" + p3 + "&colorID=3",
            success: function(data){
                console.log(data);
            }
        });
    }
    if (p4 != "") {
        $.ajax({
            type: "POST",
            async: true,
            url: localURL + gameID + "/players/addplayer?name=" + p4 + "&colorID=4",
            success: function(data){
                console.log(data);
            }
        });
    }

    if (board.style.display === "none") {
        board.style.display = "block";
        newDiv.style.display = "none";
    }

    var positionMe = getPosition(gameID);

    

}

function getPosition(gameURL) {
    var result = null;
    $.ajax({
        type: "GET",
        async: false,
        url: localURL + gameURL + "/players/getplayers",
        dataType: "json",
        success: function(data){
            result = data;
        }
    });
    return result;
}