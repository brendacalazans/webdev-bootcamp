if ( checkRefresh() == true) {
    //seta números aleatórios para a string
    var atribbuteClass = "";
    var dice = [];

   
    setRandomNumber(dice);
    
    changeImage(dice) agit@github.com:brendacalazans/web-development-bootcamp.git

    changeTitle(dice);

}

function checkRefresh() {
    if (window.performance.getEntriesByType) {
        if (window.performance.getEntriesByType("navigation")[0].type === "reload") {
            return true;
        }
    }
}

function setRandomNumber(dice){
    for (var i = 0; i < 2; i++) {
        dice[i] = Math.floor(Math.random() * 6) + 1;
    }
}


function changeImage(dice){
    const images = document.querySelectorAll("img");
    for(var i = 0; i < 2; i++){ 
        for(var j = 1; j <= 6; j++){
            var caminhoImagem = "./images/dice" + j + ".png";
            console.log(caminhoImagem);
            if (dice[i] == j){
                images[i].setAttribute("src", caminhoImagem);
            }
        }
    }
}

function changeTitle(dice){
    if(dice[0] > dice[1]){
        document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    }
    else if(dice[0] < dice[1]){
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    }
    else{
        document.querySelector("h1").textContent = "Draw!";
    }
}