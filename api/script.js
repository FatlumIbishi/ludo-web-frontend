const board = document.getElementById('board');

document.getElementById('joinGame').onclick = function () {

    str = document.getElementById("gamecode").value
    const p = document.createElement('p');

    if (str.length == 0) {
        p.textContent = "Nothing typed!";
        board.appendChild(p);
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {

            data = JSON.parse(this.responseText);

            if (this.readyState == 4 && this.status == 200) {
                p.textContent = this.responseText;
                board.appendChild(p);
            } else {
                p.textContent = this.status;
                board.appendChild(p);
            }
        };
        xmlhttp.open("GET", "https://localhost:5001/api/ludo/" + str + "/getgamedetails/", true);
        xmlhttp.send();
    }

}

document.getElementById('newGame').onclick = function () {

    var request = new XMLHttpRequest();
    var requestURL = 'https://localhost:5001/api/ludo/createnewgame'
    request.open('POST', requestURL, true);

    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    request.send();
}