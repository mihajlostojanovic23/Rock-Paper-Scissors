var items = document.querySelectorAll('.overlay');
var myHand = document.getElementById('my')
var computer = document.getElementById('comp')
var info = document.querySelector('.infor')
var scoreMy = document.querySelector('.scoreMe')
var scoreComp = document.querySelector('.scoreComp')
var playAgain = document.querySelector('.playagain')
var compNumber = 0;
var myNumber = 0;

items.forEach(item => {
    item.onclick = function() {
        var proba =  item.dataset.ime
       
        var content = document.querySelector('.app-container')
        content.style.display="none"
       
        var itemBrother = item.previousElementSibling;
        console.log(itemBrother)
        var src = itemBrother.getAttribute('src')
        console.log(src)
    ispitaj(proba,src)
    }
})

 function ispitaj(proba,src) {
    var result = document.querySelector('.result')
    result.style.display="flex"
    var myHand = document.getElementById('my')
   myHand.setAttribute('src', src)
   
    var number = Math.floor(Math.random()*items.length)
    console.log(number)
    var prom;
    switch (number) {
        case 0:
            prom = 'papir'
            computer.setAttribute('src', 'img/paper.png')
            break;
        case 1:
            prom = 'kamen'
            computer.setAttribute('src', 'img/rock.png')
            break;
        case 2:
        prom = 'makaze'
        computer.setAttribute('src', 'img/scissors.png')
        break;
        }
        console.log(proba)
       console.log(prom) 

       if (proba == prom) {
        info.innerHTML = "NERESENO"
       }
       

       if(proba == 'makaze' && prom == 'papir') {
        info.innerHTML = "POBEDIO SI"
        checkMe()
       }

       if(proba == 'kamen' && prom == 'makaze') {
        info.innerHTML = "POBEDIO SI"
        checkMe()
       }

       if(proba == 'papir' && prom == 'kamen') {
        info.innerHTML = "POBEDIO SI"
        checkMe()
       }
       if(proba == 'kamen' && prom == 'papir') {
        info.innerHTML = "IZGUBIO SI"
       checkComp()
       }
       if(proba == 'makaze' && prom == 'kamen') {
        info.innerHTML = "IZGUBIO SI"
        checkComp()
       }
       if(proba == 'papir' && prom == 'makaze') {
        info.innerHTML = "IZGUBIO SI"
        checkComp()
       }

    }

function checkMe() {
    if (myNumber < 4) {
    myNumber++;
    scoreMy.innerHTML = myNumber
}
    else {
        alert("POBEDA!")
        compNumber = 0;
        myNumber = 0;
        scoreComp.innerHTML = "0"
        scoreMy.innerHTML = "0"
    }
}


function checkComp() {
    if (compNumber < 4) {
        compNumber++;
        scoreComp.innerHTML = compNumber
    }
        else {
            alert("IZGUBIO SI!")
            compNumber = 0;
            myNumber = 0;
            scoreComp.innerHTML = "0"
            scoreMy.innerHTML = "0"
        }
}


playAgain.onclick=() => {
    var result = document.querySelector('.result')
    result.style.display="none"
    var content = document.querySelector('.app-container')
    content.style.display="flex"

}