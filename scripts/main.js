const btn1 = document.getElementById('bouton1');
const btn2 = document.getElementById('bouton2');
const btn3 = document.getElementById('bouton3');
const balance = document.getElementById('balance')
const zoneG = document.getElementById('zone_gauche');
const zoneD = document.getElementById('zone_droite');
/*var poidGauche = 0;
var poidDroite = 0;*/
btn1.addEventListener('click', pencheGauche)
btn2.addEventListener('click', pencheDroite)
btn3.addEventListener('click', stabilise)

/*document.getElementById('image1g').addEventListener('click', function(){
    alert("Vous avez cliqué");
})*/

function pencheGauche(){
    balance.style.background = 'url(./images/balanceLourdeG.png) no-repeat center';
    zoneG.style.top = '85px';
    zoneD.style.top = '-20px'
}
function pencheDroite(){
    balance.style.background = "url('./images/balanceLourdeD.png') no-repeat center";
    zoneD.style.top = '85px';
    zoneG.style.top = '-20px';
}
function stabilise(){
    balance.style.background = "url('./images/balanceStable.png') no-repeat center";
    zoneD.style.top = '25px';
    zoneG.style.top = '25px';
}

