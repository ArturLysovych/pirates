let lt = 0;
let loading = setInterval(
    ()=>{
        lt++;
        if(lt>=0){
            wheel.style.transform = 'rotate(720deg)'
        }
if(lt === 1){
    console.log('lt = 1')
ship.style.left = '25%'
ship.style.transform = 'rotate(-30deg)'
pers.style.width = '15%'
}else if(lt === 2){
        console.log('lt = 2')
    ship.style.left = '45%'
    ship.style.bottom = '60%'
    ship.style.transform = 'rotate(0deg)'
    pers.style.width = '35%'
}else if(lt === 3){
    console.log('lt = 3')
ship.style.left = '60%'
ship.style.bottom = '30%'
ship.style.transform = 'rotate(45deg)'
pers.style.width = '85%'
}
else if(lt === 4){
    console.log('lt = 4')
ship.style.left = '85%'
ship.style.bottom = '30%'
ship.style.transform = 'rotate(0deg)'
}else if(lt === 5){
    console.log('lt = 5')
ship.style.display = 'none'
pers.style.width = '100%'
ship.style.left = '100%'
ship.style.bottom = '30%'
ship.style.transform = 'rotate(1deg)'
start.style.display = 'flex'
load.style.display = 'none'
clearInterval(loading)
}
    }
    
    ,1000)
       
    console.log(lt)

let row = 0
if(row === 0){
    wheel.style.transform = 'rotate(540deg)'
}

let startd = 0
let startmenu = setInterval(
    (()=>{
startd++
if(startd===1){
    tap.innerHTML = 'Start'
}else if(startd===2){
    tap.innerHTML = 'sTart'
}else if(startd===3){
    tap.innerHTML = 'stArt'
}else if(startd===4){
    tap.innerHTML = 'staRt'
}else if(startd===5){
    tap.innerHTML = 'starT'
    startd=0
}
    }
    ),500)

start.onclick = ()=>{
    start.style.display = 'none'
    choose.style.display = 'flex'
}


s1_1.onclick = ()=>{
    player1.style.backgroundImage = 'url(pirate5.png)'
pl1.style.backgroundImage = 'url(pirate5.png)'
s1_1.style.border = '2px solid white'
s1_2.style.border = 'none'
s1_3.style.border = 'none'
s1_4.style.border = 'none'
s1_5.style.border = 'none'
s1_6.style.border = 'none'
}
s1_2.onclick = ()=>{
    player1.style.backgroundImage = 'url(pirate6.png)'
    pl1.style.backgroundImage = 'url(pirate6.png)'
    s1_2.style.border = '2px solid white'
s1_1.style.border = 'none'
s1_3.style.border = 'none'
s1_4.style.border = 'none'
s1_5.style.border = 'none'
s1_6.style.border = 'none'
}
s1_3.onclick = ()=>{
    player1.style.backgroundImage = 'url(pirate1.png)'
    pl1.style.backgroundImage = 'url(pirate1.png)'
    s1_3.style.border = '2px solid white'
s1_2.style.border = 'none'
s1_1.style.border = 'none'
s1_4.style.border = 'none'
s1_5.style.border = 'none'
s1_6.style.border = 'none'
}
s1_4.onclick = ()=>{
    player1.style.backgroundImage = 'url(pirate2.png)'
    pl1.style.backgroundImage = 'url(pirate2.png)'
    s1_4.style.border = '2px solid white'
s1_2.style.border = 'none'
s1_3.style.border = 'none'
s1_1.style.border = 'none'
s1_5.style.border = 'none'
s1_6.style.border = 'none'
}
s1_5.onclick = ()=>{
    player1.style.backgroundImage = 'url(pirate3.png)'
    pl1.style.backgroundImage = 'url(pirate3.png)'
    s1_5.style.border = '2px solid white'
s1_2.style.border = 'none'
s1_3.style.border = 'none'
s1_4.style.border = 'none'
s1_1.style.border = 'none'
s1_6.style.border = 'none'
}
s1_6.onclick = ()=>{
    player1.style.backgroundImage = 'url(pirate4.png)'
    pl1.style.backgroundImage = 'url(pirate4.png)'
    s1_6.style.border = '2px solid white'
s1_2.style.border = 'none'
s1_3.style.border = 'none'
s1_4.style.border = 'none'
s1_5.style.border = 'none'
s1_1.style.border = 'none'
}

s2_1.onclick = ()=>{
    player2.style.backgroundImage = 'url(pirate5.png)'
    pl2.style.backgroundImage = 'url(pirate5.png)'
    s2_1.style.border = '2px solid white'
s2_2.style.border = 'none'
s2_3.style.border = 'none'
s2_4.style.border = 'none'
s2_5.style.border = 'none'
s2_6.style.border = 'none'
}
s2_2.onclick = ()=>{
    player2.style.backgroundImage = 'url(pirate6.png)'
    pl2.style.backgroundImage = 'url(pirate6.png)'
    s2_2.style.border = '2px solid white'
    s2_1.style.border = 'none'
    s2_3.style.border = 'none'
    s2_4.style.border = 'none'
    s2_5.style.border = 'none'
    s2_6.style.border = 'none'
}
s2_3.onclick = ()=>{
    player2.style.backgroundImage = 'url(pirate1.png)'
    pl2.style.backgroundImage = 'url(pirate1.png)'
    s2_3.style.border = '2px solid white'
    s2_2.style.border = 'none'
    s2_1.style.border = 'none'
    s2_4.style.border = 'none'
    s2_5.style.border = 'none'
    s2_6.style.border = 'none'
}
s2_4.onclick = ()=>{
    player2.style.backgroundImage = 'url(pirate2.png)'
    pl2.style.backgroundImage = 'url(pirate2.png)'
    player1.style.backgroundImage = 'url(pirate2.png)'
    pl1.style.backgroundImage = 'url(pirate2.png)'
    s2_4.style.border = '2px solid white'
s2_2.style.border = 'none'
s2_3.style.border = 'none'
s2_1.style.border = 'none'
s2_5.style.border = 'none'
s2_6.style.border = 'none'
}
s2_5.onclick = ()=>{
    player2.style.backgroundImage = 'url(pirate3.png)'
    pl2.style.backgroundImage = 'url(pirate3.png)'
    s2_5.style.border = '2px solid white'
    s2_2.style.border = 'none'
    s2_3.style.border = 'none'
    s2_4.style.border = 'none'
    s2_1.style.border = 'none'
    s2_6.style.border = 'none'
}
s2_6.onclick = ()=>{
    player2.style.backgroundImage = 'url(pirate4.png)'
    pl2.style.backgroundImage = 'url(pirate4.png)'
    s2_6.style.border = '2px solid white'
    s2_2.style.border = 'none'
    s2_3.style.border = 'none'
    s2_4.style.border = 'none'
    s2_5.style.border = 'none'
    s2_1.style.border = 'none'
}





let b = document.getElementById("player11");
    b.onkeyup = function() {
        document.getElementById('npl1').innerHTML = b.value;
        console.log(b);
    };

    let a = document.getElementById("player22");
    a.onkeyup = function() {
        document.getElementById('npl2').innerHTML = a.value;
        console.log(a);
    };





startbutton1.onclick = ()=>{
    choose.style.display = 'none'
}
startbutton2.onclick = ()=>{
    choose.style.display = 'none'
}




let player1Y = 50;
let player1X = 50;

let player2Y = 50;
let player2X = 50;

btn_top1.onclick = function () {
    player1Y--;
    player1.style.top = player1Y + '%';
    console.log(player1Y + ':1Y')
}

btn_bottom1.onclick = function () {
    player1Y++;
    player1.style.top = player1Y + '%';
    console.log(player1Y + ':1Y')
}


btn_left1.onclick = function () {
    player1X--;
    player1.style.left = player1X + '%';
    console.log(player1X + ':1X')
}

btn_right1.onclick = function () {
    player1X++;
    player1.style.left = player1X + '%';
    console.log(player1X + ':1X')
}



btn_top2.onclick = function () {
    player2Y--;
    player2.style.top = player2Y + '%';
    console.log(player2Y + ':2Y')
}

btn_bottom2.onclick = function () {
    player2Y++;
    player2.style.top = player2Y + '%';
    console.log(player2Y + ':2Y')
    
}


btn_left2.onclick = function () {
    player2X--;
    player2.style.left = player2X + '%';
    console.log(player2X + ':2X')
}

btn_right2.onclick = function () {
    player2X++;
    player2.style.left = player2X + '%';
    console.log(player2X + ':2X')
}




document.body.onkeyup = function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 38) {
        player1Y--;
        player1.style.top = player1Y + '%';
        checkWinner();
    } else if (e.keyCode == 40) {
        player1Y++;
        player1.style.top = player1Y + '%';
        checkWinner();
    } else if (e.keyCode == 37) {
        player1X--;
        player1.style.left = player1X + '%';
        checkWinner();
    } else if (e.keyCode == 39) {
        player1X++;
        player1.style.left = player1X + '%';
        checkWinner();
    } else if (e.keyCode == 87) {
        player2Y--;
        player2.style.top = player2Y + '%';
        checkWinner();
    } else if (e.keyCode == 83) {
        player2Y++;
        player2.style.top = player2Y + '%';
        checkWinner();
    } else if (e.keyCode == 65) {
        player2X--;
        player2.style.left = player2X + '%';
        checkWinner();
    } else if (e.keyCode == 68) {
        player2X++;
        player2.style.left = player2X + '%';
        checkWinner();
    }
}
let carta = -1
rechoose.onclick = ()=>{
    carta++
    if(carta===0){
       choose.style.backgroundImage = 'url(carta1.jpg)'
       wrap.style.backgroundImage = 'url(carta1.jpg)'
    }else if(carta===1){
        choose.style.backgroundImage = 'url(carta2.jpg)'
        wrap.style.backgroundImage = 'url(carta2.jpg)'
     }else if(carta===2){
        choose.style.backgroundImage = 'url(carta3.jpg)'
        wrap.style.backgroundImage = 'url(carta3.jpg)'
     }else if(carta===3){
        carta=0
     }

}




let targetY;
let targetX;
let score =1 
function setRandom() {
    targetY = Math.floor(Math.random() * 100);
    targetX = Math.floor(Math.random() * 100);
    target.style.top = targetY + '%';
    target.style.left = targetX + '%';
}
 setRandom();

let player1Score = 0;
let player2Score = 0;
let scores = 1
let scoreinter = setInterval(()=>{
    let randomreward = Math.floor(Math.random()*10)
    console.log(randomreward)
if(randomreward<=6){
    scores=1
    target.style.backgroundImage = 'url(coin.png)'
}else if(randomreward>=6 && randomreward<=8){
    scores=3
    target.style.backgroundImage = 'url(money-bag.png)'
}else{
    scores=10
    target.style.backgroundImage = 'url(chest.png)'
}
},10000)

function checkWinner() {






    if (player1X == targetX && player1Y == targetY) {
        setRandom();
        player1Score=player1Score+scores
        scoreInner1.innerText = player1Score;
    } else if (player2X == targetX && player2Y == targetY) {
        setRandom();
        player2Score=player2Score+scores
        scoreInner2.innerText = player2Score
    }
}

let gamePadState = false;
gamepadSwitcher.onclick = function () {
    if (gamePadState == false) {
        gamepad1.style.bottom = '20px';
        gamepad2.style.bottom = '20px';
        gamePadState = true;
        gamepadSwitcher.style.backgroundColor = '#62e038';
    } else {
        gamepad1.style.bottom = '-200px';
        gamepad2.style.bottom = '-200px';
        gamePadState = false;
          gamepadSwitcher.style.backgroundColor = 'rgba(0,0,0,.5)';
    }
}



setTimeout(function(){
   target.style.opacity = '1';
},1000)





startbutton1.onclick = ()=>{
    wrap.style.display = 'flex'
    choose.style.display = 'none'
}
startbutton2.onclick = ()=>{
    wrap.style.display = 'flex'
    choose.style.display = 'none'
}
