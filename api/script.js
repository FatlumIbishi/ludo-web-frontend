const board = document.getElementById('board');

document.getElementById('joinGame').onclick = function() {
    
    var request = new XMLHttpRequest();
    var requestURL = 'https://ghibliapi.herokuapp.com/films'
    request.open('GET', requestURL, true);
    
    request.onload = function () {

        var data = JSON.parse(this.response);
        
        data.forEach(movie => {
            const p = document.createElement('p');
            if (movie.rt_score == document.getElementById('gamecode').value) {
                p.textContent = movie.title
                board.appendChild(p);
            }
        });
    }
    request.send();
}


