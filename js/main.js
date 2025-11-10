// Epic messy code Baby !!
// Epic messy code Baby !!
// Epic messy code Baby !!
// Epic messy code Baby !!
// Epic messy code Baby !!
// Epic messy code Baby !!

var Salmons = 0;
var maxSalmons = 0;
var SalmonKids = 0;
var SalmonBoys = 0;
var SalmonBoyBonuses = 0;
var SalmonMen = 0;
var SalmonPonds = 0;
var SalmonFactories = 0;
var SalmonBanks = 0;
var SalmonEmpires = 0;
var SalmonWorldControls = 0;
var SalmonGalacticReigns = 0;
var deezSalmonGuys = 0;
var SalmonTimeTravels = 0;
var SalmonUniversalDominations = 0;
var SalmonGods = 0;
var SalmonAfterlives = 0;
var clickDamage = 1;
var clickUpgrades = 0;
var clickUpgrades2 = 0;
var clickUpgrades3 = 0;
var allUpgrades = 0;
var h = 0;
var m = 0;
var s = 0;
s = checkTime(s);
m = checkTime(m);
var pressed = false;
var deleted = false;
var landscape = true;

var level = 0;
var xp = 0;
var barAmount = 0;
var levelAmount = 0;
var levelMultiplier = 1;

var bgNum = 1;
var ranInvert = false;

var prestigeGain = 0;

var url = window.location.pathname;
var page = url.substring(url.lastIndexOf('/') + 1);

var SalmonKidCostNext = 0;
var SalmonBoyCostNext = 0;
var SalmonManCostNext = 0;
var SalmonPondCostNext = 0;
var SalmonFactoryCostNext = 0;
var SalmonBankCostNext = 0;
var SalmonEmpireCostNext = 0;
var SalmonWorldControlCostNext = 0;
var SalmonGalacticReignCostNext = 0;
var deezSalmonGuyCostNext = 0;
var SalmonTimeTravelCostNext = 0;
var SalmonUniversalDominationCostNext = 0;
var SalmonGodCostNext = 0;
var SalmonAfterlifeCostNext = 0;

var SalmonBoyBonusCostNext = 0;
var clickUpgradeCostNext = 0;
var clickUpgrade2CostNext = 0;
var allUpgradeCostNext = 0;
var clickUpgrade3CostNext = 0;

var SalmonKidDamage = 0.1;
var SalmonBoyDamage = 1;
var SalmonManDamage = 8;
var SalmonPondDamage = 47;
var SalmonFactoryDamage = 260;
var SalmonBankDamage = 1400;
var SalmonEmpireDamage = 7800;
var SalmonWorldControlDamage = 44000;
var SalmonGalacticReignDamage = 260000;
var deezSalmonGuyDamage = 1600000;
var SalmonTimeTravelDamage = 10000000;
var SalmonUniversalDominationDamage = 65000000;
var SalmonGodDamage = 430000000;
var SalmonAfterlifeDamage = 2900000000;
var totalDamage = 0;

var buyAudio = new Audio('audio/buy.wav');
var cantBuyAudio = new Audio('audio/cantbuy.wav');
var clickAudio = new Audio('audio/click.wav');
var menuAudio = new Audio('audio/openmenu.wav');
var music = new Audio('audio/sneakysnitch.mp3');
var audioMuted = false;
var musicMuted = false;
var musicProgress = 0;

var SalmonBoyUpgradeShown = false;
var clickUpgradeShown = false;
var click2UpgradeShown = false;
var click3UpgradeShown = false;
var allUpgradeShown = false;

music.play();
music.loop=true;

//
CheckBackground();
//

function CheckBackground(){
	if(maxSalmons >= 0 && maxSalmons <= 9){
		bgNum = 1;
	} else if (maxSalmons >= 9 && maxSalmons <= 99){
		bgNum = 2;
	} else if (maxSalmons >= 99 && maxSalmons <= 999){
		bgNum = 3;
	} else if (maxSalmons >= 999 && maxSalmons <= 9999){
		bgNum = 4;
	} else if (maxSalmons >= 9999 && maxSalmons <= 99999){
		bgNum = 5;
	} else if (maxSalmons >= 99999 && maxSalmons <= 999999){
		bgNum = 6;
	} else if (maxSalmons >= 999999 && maxSalmons <= 9999999){
		bgNum = 7;
	} else if (maxSalmons >= 9999999 && maxSalmons <= 99999999){
		bgNum = 8;
	} else if (maxSalmons >= 99999999 && maxSalmons <= 999999999){
		bgNum = 9;
	} else if (maxSalmons >= 999999999 && maxSalmons <= 9999999999){
		bgNum = 10;
	} else if (maxSalmons >= 9999999999 && maxSalmons <= 99999999999){
		bgNum = 11;
	} else if (maxSalmons >= 99999999999 && maxSalmons <= 999999999999){
		bgNum = 12;
	} else if (maxSalmons >= 999999999999 && maxSalmons <= 9999999999999){
		bgNum = 13;
	} else if (maxSalmons >= 9999999999999 && maxSalmons <= 99999999999999){
		bgNum = 14;
	} else if (maxSalmons >= 99999999999999 && maxSalmons <= 999999999999999){
		bgNum = 15;
	} else if (maxSalmons >= 999999999999999 && maxSalmons <= 9999999999999999){
		bgNum = 16;
	} else if (maxSalmons >= 9999999999999999 && maxSalmons <= 99999999999999999){
		bgNum = 17;
	} else if (maxSalmons >= 99999999999999999 && maxSalmons <= 999999999999999999){
		bgNum = 18;
	} else if (maxSalmons >= 999999999999999999 && maxSalmons <= 9999999999999999999){
		bgNum = 19;
	} else if (maxSalmons >= 9999999999999999999 && maxSalmons <= 99999999999999999999){
		bgNum = 20;
	} else if (maxSalmons >= 99999999999999999999 && maxSalmons <= 999999999999999999999){
		bgNum = 21;
	} else if (maxSalmons >= 999999999999999999999){
		if(ranInvert == false){
			ranInvert = true;
			setTimeout(function (){
					document.body.style.transition="0.3s"
				document.body.style.filter="invert(1) brightness(3)";
				document.body.style.backgroundImage="url()";
				setTimeout(function (){
					document.body.style.transition="1s"
					document.body.style.filter="invert(0) brightness(1)"
				}, 1000);
			}, 200);
		}
		bgNum = 22;
	}
	document.body.style.backgroundImage = "url('images/Salmons/"+bgNum+".jpg')";
}

function stopAudio(audio){
		audio.pause();
		audio.currentTime = 0;
}

function toggleAudio(){
	if(!audioMuted){
		clickAudio.muted = true;
		buyAudio.muted = true;
		cantBuyAudio.muted = true;
		menuAudio.muted = true;
		audioMuted = true;
	} else {
		clickAudio.muted = false;
		buyAudio.muted = false;
		menuAudio.muted = false;
		cantBuyAudio.muted = false;
		audioMuted = false;
	}
}

function toggleMusic(){
	if(!musicMuted){
		music.muted = true;
		musicMuted = true;
	} else {
		music.muted = false;
		musicMuted = false;
	}
}

function kFormatter(num) {
    if(num > 999 && num < 999999){
		num = num/1000;
		return round(num) + "k";
	} else if (num < 1000){
		return num;
	} else if (num >= 1000000 && num < 1000000000){
		num = num/1000000;
		return round(num) + "m";
	} else if (num >= 1000000000 && num < 1000000000000){
		num = num/1000000000;
		return round(num) + "b";
	} else if (num >= 1000000000000 && num < 1000000000000000){
		num = num/1000000000000;
		return round(num) + "t";
	} else if (num >= 1000000000000000 && num < 1000000000000000000){
		num = num/1000000000000000;
		return round(num) + " quadrillion";
	} else if (num >= 1000000000000000000 && num < 1000000000000000000000){
		num = num/1000000000000000000;
		return round(num) + " quintillion";
	}else if (num >= 1000000000000000000000){
		num = num/1000000000000000000000;
		return round(num) + " sextillion";
	}
}

function round(input){
    var output = Math.round(input * 100)/100;
	return output;
}

function clickOnButton(){
	if(!pressed){
		stopAudio(clickAudio);
		clickAudio.play();
		GreyOutButtons();
		Salmons = round(Salmons + clickDamage);
		xp++;
		UpdateLevel();
		document.getElementById("Salmons").innerHTML = kFormatter(round(Salmons));
		document.getElementById('SalmonsGamble').innerHTML = round(Salmons);
		document.title = ""+Salmons+" Salmons";
		CheckAmounts();
		pressed = true;
		if(maxSalmons <= Salmons){
			maxSalmons = Salmons;
		}
		CheckBackground();
	}
}

function clickAnimation() {
    document.getElementById("amountAdded").innerHTML = "+" + kFormatter(clickDamage);
	var middleSalmon = document.getElementById("middleSalmon");
	var amountAdded = document.getElementById("amountAdded");
	var middleSalmonCounter = document.getElementById("middleSalmonCounter");

	setTimeout(function (){
		middleSalmon.style.webkitAnimationName = "growStart";
		middleSalmon.style.webkitAnimationDuration = "0.08s";
		middleSalmon.style.webkitAnimationFillMode = "forwards";

		amountAdded.style.webkitAnimationName = "grow2Start";
		amountAdded.style.webkitAnimationDuration = "0.08s";
		amountAdded.style.webkitAnimationFillMode = "forwards";

		middleSalmonCounter.style.webkitAnimationName = "grow3Start";
		middleSalmonCounter.style.webkitAnimationDuration = "0.08s";
		middleSalmonCounter.style.webkitAnimationFillMode = "forwards";
	}, 0);
}

function releaseAnimation() {
	var middleSalmon = document.getElementById("middleSalmon");
	var amountAdded = document.getElementById("amountAdded");
	var middleSalmonCounter = document.getElementById("middleSalmonCounter");

	setTimeout(function (){
		middleSalmon.style.webkitAnimationName = "grow";
		middleSalmon.style.webkitAnimationDuration = "0.3s";
		middleSalmon.style.webkitAnimationFillMode = "";

		amountAdded.style.webkitAnimationName = "grow2";
		amountAdded.style.webkitAnimationDuration = "0.3s";
		amountAdded.style.webkitAnimationFillMode = "";

		middleSalmonCounter.style.webkitAnimationName = "grow3";
		middleSalmonCounter.style.webkitAnimationDuration = "0.3s";
		middleSalmonCounter.style.webkitAnimationFillMode = "";
	}, 30);
}

function SalmonClick(number){
    Salmons = round(Salmons + number);
	document.getElementById("Salmons").innerHTML = kFormatter(round(Salmons));
	document.getElementById('SalmonsGamble').innerHTML = round(Salmons);
	document.title = kFormatter(Salmons) + " Salmons";
	CheckAmounts();
	GreyOutButtons();
	if(maxSalmons <= Salmons){
		maxSalmons = Salmons;
	}
	CheckBackground();
}

//click every second and run animation
window.setInterval(function(){
	SalmonClick(totalDamage);

	if(totalDamage >= 0.1){
		xp += 0.5;
		UpdateLevel();
	}

	document.title = kFormatter(Salmons) + " Salmons";

	var addedSalmons = document.getElementById("addedSalmons");
	if(totalDamage >= 1){
		window.setTimeout(function ()
		{
			addedSalmons.style.webkitAnimationName = "fadeOut";
			addedSalmons.style.webkitAnimationDuration = "0.5s";
			addedSalmons.addEventListener("animationend", function(){addedSalmons.style.webkitAnimationName = "";}, false);
		}, 0);
	}

}, 1000);


//increase time
window.setInterval(function(){
	s++;
    s = checkTime(s);
	if(s >= 60){
		m++;
		s = 0;
		s = checkTime(s);
		m = checkTime(m);
	}
	if(m >= 60){
		h++;
		m = 0;
		m = checkTime(m);
		h = checkTime(h);
	}
    document.getElementById('time').innerHTML = "played for " + h + ":" + m + ":" + s;
}, 1000);

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function buy(building){
	switch (building){
		case "SalmonKid":
			var SalmonKidCost = Math.floor(15 * Math.pow(1.1,SalmonKids));
			if(Salmons >= SalmonKidCost){
				SalmonKids = SalmonKids + 1;
				Salmons = Salmons - SalmonKidCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "SalmonBoy":
			var SalmonBoyCost = Math.floor(50 * Math.pow(1.1,SalmonBoys));
			if(Salmons >= SalmonBoyCost){
				SalmonBoys = SalmonBoys + 1;
				Salmons = Salmons - SalmonBoyCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "buySalmonBoyBonus":
			var SalmonBoyBonusCost = Math.floor(100 * Math.pow(5,SalmonBoyBonuses));
			if(SalmonBoyBonuses < 5){
				if(Salmons >= SalmonBoyBonusCost){
					SalmonBoyBonuses = SalmonBoyBonuses + 1;
					Salmons = Salmons - SalmonBoyBonusCost;
					UpdateValues();
					SalmonBoyDamage = SalmonBoyDamage * 2 + prestigeGain;
					UpdateDamage();
					UpdateCosts();
					stopAudio(buyAudio);
					buyAudio.play();
					xp += 0.5;
					UpdateLevel();
				} else {
					stopAudio(cantBuyAudio);
					cantBuyAudio.play();
				}
			}
		break;

		case "x2Click":
			var clickCost = Math.floor(300 * Math.pow(2,clickUpgrades));
			if(Salmons >= clickCost){
				clickUpgrades = clickUpgrades + 1
				Salmons = Salmons - clickCost;
				UpdateValues();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "clickUpgrade2":
			var clickCost2 = Math.floor(5000 * Math.pow(2,clickUpgrades2));
			if(Salmons >= clickCost2){
				clickUpgrades2 = clickUpgrades2 + 1;
				Salmons = Salmons - clickCost2;
				UpdateValues();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "clickUpgrade3":
			var clickCost3 = Math.floor(500000 * Math.pow(2,clickUpgrades3));
			if(Salmons >= clickCost3){
				clickUpgrades3 = clickUpgrades3 + 1;
				Salmons = Salmons - clickCost3;
				UpdateValues();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "SalmonMan":
			var SalmonManCost = Math.floor(1000 * Math.pow(1.1,SalmonMen));
			if(Salmons >= SalmonManCost){
				SalmonMen = SalmonMen + 1;
				Salmons = Salmons - SalmonManCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "SalmonPond":
			var SalmonPondCost = Math.floor(13000 * Math.pow(1.1,SalmonPonds));
			if(Salmons >= SalmonPondCost){
				SalmonPonds = SalmonPonds + 1;
				Salmons = Salmons - SalmonPondCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "allUpgrade":
			var allUpgradeCost = Math.floor(100000 * Math.pow(5,allUpgrades));
			if(allUpgrades < 5){
				if(Salmons >= allUpgradeCost){
					allUpgrades = allUpgrades + 1;
					Salmons = Salmons - allUpgradeCost;
					SalmonKidDamage = SalmonKidDamage * 2 + prestigeGain;
					SalmonBoyDamage = SalmonBoyDamage * 2 + prestigeGain;
					SalmonManDamage = SalmonManDamage * 2 + prestigeGain;
					SalmonPondDamage = SalmonPondDamage * 2 + prestigeGain;
					SalmonFactoryDamage = SalmonFactoryDamage * 2 + prestigeGain;
					SalmonBankDamage = SalmonBankDamage * 2 + prestigeGain;
					SalmonEmpireDamage = SalmonEmpireDamage * 2 + prestigeGain;
					SalmonWorldControlDamage = SalmonWorldControlDamage * 2 + prestigeGain;
					SalmonGalacticReignDamage = SalmonGalacticReignDamage * 2 + prestigeGain;
					deezSalmonGuyDamage = deezSalmonGuyDamage * 2 + prestigeGain;
					SalmonTimeTravelDamage = SalmonTimeTravelDamage * 2 + prestigeGain;
					SalmonUniversalDominationDamage = SalmonUniversalDominationDamage * 2 + prestigeGain;
					SalmonGodDamage = SalmonGodDamage * 2 + prestigeGain;
					SalmonAfterlifeDamage = SalmonAfterlifeDamage * 2 + prestigeGain;
					UpdateValues();
					UpdateDamage();
					UpdateCosts();
					stopAudio(buyAudio);
					buyAudio.play();
					xp += 0.5;
					UpdateLevel();
				} else {
					stopAudio(cantBuyAudio);
					cantBuyAudio.play();
				}
			}
		break;

		case "SalmonFactory":
			var SalmonFactoryCost = Math.floor(150000 * Math.pow(1.1,SalmonFactories));
			if(Salmons >= SalmonFactoryCost){
				SalmonFactories = SalmonFactories + 1;
				Salmons = Salmons - SalmonFactoryCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "SalmonBank":
			var SalmonBankCost = Math.floor(1400000 * Math.pow(1.1,SalmonBanks));
			if(Salmons >= SalmonBankCost){
				SalmonBanks = SalmonBanks + 1;
				Salmons = Salmons - SalmonBankCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "SalmonEmpire":
			var SalmonEmpireCost = Math.floor(20000000 * Math.pow(1.1,SalmonEmpires));
			if(Salmons >= SalmonEmpireCost){
				SalmonEmpires = SalmonEmpires + 1;
				Salmons = Salmons - SalmonEmpireCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "SalmonWorldControl":
			var SalmonWorldControlCost = Math.floor(330000000 * Math.pow(1.1,SalmonWorldControls));
			if(Salmons >= SalmonWorldControlCost){
				SalmonWorldControls = SalmonWorldControls + 1;
				Salmons = Salmons - SalmonWorldControlCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "SalmonGalacticReign":
			var SalmonGalacticReignCost = Math.floor(1500000000 * Math.pow(1.1,SalmonGalacticReigns));
			if(Salmons >= SalmonGalacticReignCost){
				SalmonGalacticReigns = SalmonGalacticReigns + 1;
				Salmons = Salmons - SalmonGalacticReignCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "deezSalmonGuy":
			var deezSalmonGuyCost = Math.floor(75000000000 * Math.pow(1.1,deezSalmonGuys));
			if(Salmons >= deezSalmonGuyCost){
				deezSalmonGuys = deezSalmonGuys + 1;
				Salmons = Salmons - deezSalmonGuyCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "SalmonTimeTravel":
			var SalmonTimeTravelCost = Math.floor(1000000000000 * Math.pow(1.1,SalmonTimeTravels));
			if(Salmons >= SalmonTimeTravelCost){
				SalmonTimeTravels = SalmonTimeTravels + 1;
				Salmons = Salmons - SalmonTimeTravelCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "SalmonUniversalDomination":
			var SalmonUniversalDominationCost = Math.floor(40000000000000 * Math.pow(1.1,SalmonUniversalDominations));
			if(Salmons >= SalmonUniversalDominationCost){
				SalmonUniversalDominations = SalmonUniversalDominations + 1;
				Salmons = Salmons - SalmonUniversalDominationCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "SalmonGod":
			var SalmonGodCost = Math.floor(170000000000000 * Math.pow(1.1,SalmonGods));
			if(Salmons >= SalmonGodCost){
				SalmonGods = SalmonGods + 1;
				Salmons = Salmons - SalmonGodCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;

		case "SalmonAfterlife":
			var SalmonAfterlifeCost = Math.floor(2000000000000000 * Math.pow(1.1,SalmonAfterlives));
			if(Salmons >= SalmonAfterlifeCost){
				SalmonAfterlives = SalmonAfterlives + 1;
				Salmons = Salmons - SalmonAfterlifeCost;
				UpdateValues();
				UpdateDamage();
				UpdateCosts();
				stopAudio(buyAudio);
				buyAudio.play();
				xp += 0.5;
				UpdateLevel();
			} else {
				stopAudio(cantBuyAudio);
				cantBuyAudio.play();
			}
		break;
	}
	UpdateValues();
	GreyOutButtons();
	Save();
	if(page != "mobile.html"){
		document.getElementById('upgrades').style.display = "";
		document.getElementById('damage').style.display = "";
		document.getElementById('clickBonusText').style.display = "";
		document.getElementById('line2').style.display = "";

		var leftpanel = document.getElementsByClassName("item2")[0];
		leftpanel.style.padding = "1vw 1.5vw";
	}
}

window.setInterval(function(){

	Save();

}, 5000);

function showMenu() {
	var menu = document.getElementById('menu');
	if(page != "mobile.html"){
		if(menu.style.opacity < "1"){
			menu.style.pointerEvents = "auto";
			menu.style.opacity = "1";
			menu.style.left = "8vw";
			document.getElementById('menuButton').style.cursor = "pointer";
			document.getElementById('menuButton2').style.cursor = "pointer";
			document.getElementById('menuButton3').style.cursor = "pointer";
			document.getElementById('menuButton').disabled = false;
			document.getElementById('menuButton2').disabled = false;
			document.getElementById('menuButton3').disabled = false;
		} else {
			menu.style.left = "6.5vw";
			menu.style.opacity = "0";
			menu.style.pointerEvents = "none";
			document.getElementById('menuButton').style.cursor = "default";
			document.getElementById('menuButton2').style.cursor = "default";
			document.getElementById('menuButton3').style.cursor = "default";
			document.getElementById('menuButton').disabled = true;
			document.getElementById('menuButton2').disabled = true;
			document.getElementById('menuButton3').disabled = true;
		}
	} else {
		if(menu.style.opacity < "1"){
			menu.style.opacity = "1";
			menu.style.height = "30px";
			menu.style.left = "25vw";
			document.getElementById('menuButton').style.cursor = "pointer";
			document.getElementById('menuButton2').style.cursor = "pointer";
			document.getElementById('menuButton3').style.cursor = "pointer";
			document.getElementById('menuButton').disabled = false;
			document.getElementById('menuButton2').disabled = false;
			document.getElementById('menuButton3').disabled = false;
		} else {
			menu.style.opacity = "0";
			menu.style.height = "0px";
			menu.style.left = "17vw";
			document.getElementById('menuButton').style.cursor = "default";
			document.getElementById('menuButton2').style.cursor = "default";
			document.getElementById('menuButton3').style.cursor = "default";
			document.getElementById('menuButton').disabled = true;
			document.getElementById('menuButton2').disabled = true;
			document.getElementById('menuButton3').disabled = true;
		}
	}
}

function showMenuOld() {
	var menu = document.getElementById('menu')
    if(menu.style.display === 'none') {
        menu.style.display = 'inline';
    } else {
        menu.style.display = 'none';
    }
}

function showAllBuildings(){
	var prestige = document.getElementById("prestige");
	var leveldivmobile = document.getElementById("leveldivmobile");
	var buildingMenu = document.getElementsByClassName("item1")[0];
	var upgradeMenu = document.getElementsByClassName("item2")[0];
	var gambling = document.getElementById("gambling");
	if(buildingMenu.style.width < "100px"){
		buildingMenu.style.height = "73%";
    	buildingMenu.style.width = "80%";
		buildingMenu.style.padding = "15px 15px";

		//close other menu if open
    	upgradeMenu.style.height = "0px";
    	upgradeMenu.style.width = "0px";
		upgradeMenu.style.padding = "0px 0px 0px 0px";

		gambling.style.height = "0px";
		gambling.style.width = "0px";
		gambling.style.padding = "0px 0px 0px 0px";

		prestige.style.height = "0px";
		prestige.style.width = "0px";
		prestige.style.padding = "0px 0px 0px 0px";

		leveldivmobile.style.height = "0px";
		leveldivmobile.style.width = "0px";
		leveldivmobile.style.padding = "0px 0px 0px 0px";

		//show scroll after animation done
		setTimeout(function (){
			buildingMenu.style.overflow = "auto";
		}, 500);
    } else {
    	buildingMenu.style.height = "0px";
    	buildingMenu.style.width = "0px";
		buildingMenu.style.padding = "0px 0px 0px 0px";

		buildingMenu.style.overflow = "hidden";
    }
}

function showAllUpgrades(){
	var prestige = document.getElementById("prestige");
	var leveldivmobile = document.getElementById("leveldivmobile");
	var buildingMenu = document.getElementsByClassName("item1")[0];
	var upgradeMenu = document.getElementsByClassName("item2")[0];
	var gambling = document.getElementById("gambling");
	if(upgradeMenu.style.width < "100px"){
		upgradeMenu.style.height = "73%";
    	upgradeMenu.style.width = "80%";
		upgradeMenu.style.padding = "15px 15px";

		//close other menu if open
    	buildingMenu.style.height = "0px";
    	buildingMenu.style.width = "0px";
		buildingMenu.style.padding = "0px 0px 0px 0px";

		gambling.style.height = "0px";
		gambling.style.width = "0px";
		gambling.style.padding = "0px 0px 0px 0px";

		prestige.style.height = "0px";
		prestige.style.width = "0px";
		prestige.style.padding = "0px 0px 0px 0px";

		leveldivmobile.style.height = "0px";
		leveldivmobile.style.width = "0px";
		leveldivmobile.style.padding = "0px 0px 0px 0px";

		//show scroll after animation done
		setTimeout(function (){
			buildingMenu.style.overflow = "auto";
		}, 500);

    } else {
    	upgradeMenu.style.height = "0px";
    	upgradeMenu.style.width = "0px";
		upgradeMenu.style.padding = "0px 0px 0px 0px";

		buildingMenu.style.overflow = "hidden";
    }
}

function NewUpgrade(){
	var newUpgrade = document.getElementById("newUpgrade");
	if(newUpgrade.style.width < "100px"){
		newUpgrade.style.width = "42%";
    } else {
		newUpgrade.style.width = "0px";
    }
}

function uploadHover(){
	var uploadLabel = document.getElementById("uploadLabel");
	var uploadIcon = document.getElementById("uploadIcon");
	uploadLabel.style.height = "50px";
    uploadLabel.style.width = "370px";
	uploadIcon.style.top = "10%";
}

function uploadLeave(){
	var uploadLabel = document.getElementById("uploadLabel");
    uploadLabel.style.height = "40px";
    uploadLabel.style.width = "25px";
	uploadIcon.style.top = "5%";
}

function ShowGambling(){
	var gambling = document.getElementById("gambling");
	var prestige = document.getElementById("prestige");
	var leveldivmobile = document.getElementById("leveldivmobile");
	var buildingMenu = document.getElementsByClassName("item1")[0];
	var upgradeMenu = document.getElementsByClassName("item2")[0];
	if(page != "mobile.html"){

			stopAudio(menuAudio);
			menuAudio.play();
		if(gambling.style.width < "100px"){
			gambling.style.height = "80%";
			gambling.style.width = "20%";
			gambling.style.padding = "15px 15px 15px 15px";

			//show scroll after animation done
			setTimeout(function (){
				gambling.style.overflow = "auto";
			}, 300);

		} else {
			gambling.style.height = "0px";
			gambling.style.width = "0px";
			gambling.style.padding = "0px 0px 0px 0px";

			gambling.style.overflow = "hidden";
		}
	} else {
		if(gambling.style.width < "100px"){
			gambling.style.height = "73%";
			gambling.style.width = "80%";
			gambling.style.padding = "15px 15px";

			upgradeMenu.style.height = "0px";
			upgradeMenu.style.width = "0px";
			upgradeMenu.style.padding = "0px 0px 0px 0px";

			buildingMenu.style.height = "0px";
			buildingMenu.style.width = "0px";
			buildingMenu.style.padding = "0px 0px 0px 0px";

			prestige.style.height = "0px";
			prestige.style.width = "0px";
			prestige.style.padding = "0px 0px 0px 0px";

			leveldivmobile.style.height = "0px";
			leveldivmobile.style.width = "0px";
			leveldivmobile.style.padding = "0px 0px 0px 0px";

			//show scroll after animation done
			setTimeout(function (){
				gambling.style.overflow = "auto";
			}, 500);
		} else {
			gambling.style.height = "0px";
			gambling.style.width = "0px";
			gambling.style.padding = "0px 0px 0px 0px";

			gambling.style.overflow = "hidden";
		}
	}
}

function ShowLevel(){
	var prestige = document.getElementById("prestige");
	var levelDiv = document.getElementById("leveldivmobile");
	var buildingMenu = document.getElementsByClassName("item1")[0];
	var upgradeMenu = document.getElementsByClassName("item2")[0];
	document.getElementById("prestigeLevel").innerHTML = level;
	document.getElementById("prestigeDamage").innerHTML = totalDamage;
	document.getElementById("prestigeGain").innerHTML = round((level * 10000 + SalmonKids * SalmonKidDamage + SalmonMen * SalmonManDamage + SalmonPonds * SalmonPondDamage + SalmonFactories * SalmonFactoryDamage + SalmonBanks * SalmonBankDamage + SalmonEmpires * SalmonEmpireDamage + SalmonWorldControls * SalmonWorldControlDamage+ SalmonGalacticReigns * SalmonGalacticReignDamage + deezSalmonGuys * deezSalmonGuyDamage + SalmonTimeTravels * SalmonTimeTravelDamage + SalmonUniversalDominations * SalmonUniversalDominationDamage + SalmonGods * SalmonGodDamage + SalmonAfterlives * SalmonAfterlifeDamage)/10000000);

	if(page == "mobile.html"){
		if(levelDiv.style.width < "100px"){
			levelDiv.style.height = "73%";
			levelDiv.style.width = "80%";
			levelDiv.style.padding = "15px 15px";

			upgradeMenu.style.height = "0px";
			upgradeMenu.style.width = "0px";
			upgradeMenu.style.padding = "0px 0px 0px 0px";

			buildingMenu.style.height = "0px";
			buildingMenu.style.width = "0px";
			buildingMenu.style.padding = "0px 0px 0px 0px";

			prestige.style.height = "0px";
			prestige.style.width = "0px";
			prestige.style.padding = "0px 0px 0px 0px";

			gambling.style.height = "0px";
			gambling.style.width = "0px";
			gambling.style.padding = "0px 0px 0px 0px";

			//show scroll after animation done
			setTimeout(function (){
				levelDiv.style.overflow = "auto";
			}, 500);
		} else {
			levelDiv.style.height = "0px";
			levelDiv.style.width = "0px";
			levelDiv.style.padding = "0px 0px 0px 0px";

			levelDiv.style.overflow = "hidden";
		}
	}
}


/*
function ShowChangelog(){
	var changelog = document.getElementById("changelog");
	var buildingMenu = document.getElementsByClassName("item1")[0];
	var upgradeMenu = document.getElementsByClassName("item2")[0];
	if(page != "mobile.html"){
			stopAudio(menuAudio);
			menuAudio.play();
		if(changelog.style.width < "100px"){
			changelog.style.height = "80%";
			changelog.style.width = "20%";
			changelog.style.padding = "15px 15px 15px 15px";

			//show scroll after animation done
			setTimeout(function (){
				changelog.style.overflow = "auto";
			}, 300);

		} else {
			changelog.style.height = "0px";
			changelog.style.width = "0px";
			changelog.style.padding = "0px 0px 0px 0px";

			changelog.style.overflow = "hidden";
		}
	} else {
		if(changelog.style.width < "100px"){
			changelog.style.height = "73%";
			changelog.style.width = "80%";
			changelog.style.padding = "15px 15px";

			upgradeMenu.style.height = "0px";
			upgradeMenu.style.width = "0px";
			upgradeMenu.style.padding = "0px 0px 0px 0px";

			buildingMenu.style.height = "0px";
			buildingMenu.style.width = "0px";
			buildingMenu.style.padding = "0px 0px 0px 0px";

			//show scroll after animation done
			setTimeout(function (){
				changelog.style.overflow = "auto";
			}, 500);
		} else {
			changelog.style.height = "0px";
			changelog.style.width = "0px";
			changelog.style.padding = "0px 0px 0px 0px";

			changelog.style.overflow = "hidden";
		}
	}
}

*/

function ShowPrestige(){
	var prestige = document.getElementById("prestige");
	var leveldivmobile = document.getElementById("leveldivmobile");
	var gambling = document.getElementById("gambling");
	var buildingMenu = document.getElementsByClassName("item1")[0];
	var upgradeMenu = document.getElementsByClassName("item2")[0];
	document.getElementById("prestigeLevel").innerHTML = level;
	document.getElementById("prestigeDamage").innerHTML = totalDamage;
	document.getElementById("prestigeGain").innerHTML = round((level * 10000 + SalmonKids * SalmonKidDamage + SalmonMen * SalmonManDamage + SalmonPonds * SalmonPondDamage + SalmonFactories * SalmonFactoryDamage + SalmonBanks * SalmonBankDamage + SalmonEmpires * SalmonEmpireDamage + SalmonWorldControls * SalmonWorldControlDamage+ SalmonGalacticReigns * SalmonGalacticReignDamage + deezSalmonGuys * deezSalmonGuyDamage + SalmonTimeTravels * SalmonTimeTravelDamage + SalmonUniversalDominations * SalmonUniversalDominationDamage + SalmonGods * SalmonGodDamage + SalmonAfterlives * SalmonAfterlifeDamage)/10000000);
	
	if(page != "mobile.html"){
			stopAudio(menuAudio);
			menuAudio.play();
		if(prestige.style.width < "100px"){
			prestige.style.height = "80%";
			prestige.style.width = "20%";
			prestige.style.padding = "15px 15px 15px 15px";

			//show scroll after animation done
		setTimeout(function (){
			prestige.style.whiteSpace = "normal";
		}, 350);

		} else {
			prestige.style.height = "0px";
			prestige.style.width = "0px";
			prestige.style.padding = "0px 0px 0px 0px";

			prestige.style.whiteSpace = "nowrap";
		}
	} else {
		if(prestige.style.width < "100px"){
			prestige.style.height = "73%";
			prestige.style.width = "80%";
			prestige.style.padding = "15px 15px";

			upgradeMenu.style.height = "0px";
			upgradeMenu.style.width = "0px";
			upgradeMenu.style.padding = "0px 0px 0px 0px";

			buildingMenu.style.height = "0px";
			buildingMenu.style.width = "0px";
			buildingMenu.style.padding = "0px 0px 0px 0px";

			gambling.style.height = "0px";
			gambling.style.width = "0px";
			gambling.style.padding = "0px 0px 0px 0px";

			leveldivmobile.style.height = "0px";
			leveldivmobile.style.width = "0px";
			leveldivmobile.style.padding = "0px 0px 0px 0px";

			//show scroll after animation done
			setTimeout(function (){
				prestige.style.overflow = "auto";
			}, 500);
		} else {
			prestige.style.height = "0px";
			prestige.style.width = "0px";
			prestige.style.padding = "0px 0px 0px 0px";

			prestige.style.overflow = "hidden";
		}
	}
}

function Prestige(){
	var tempGain = round((level * 10000 + SalmonKids * SalmonKidDamage + SalmonMen * SalmonManDamage + SalmonPonds * SalmonPondDamage + SalmonFactories * SalmonFactoryDamage + SalmonBanks * SalmonBankDamage + SalmonEmpires * SalmonEmpireDamage + SalmonWorldControls * SalmonWorldControlDamage+ SalmonGalacticReigns * SalmonGalacticReignDamage + deezSalmonGuys * deezSalmonGuyDamage + SalmonTimeTravels * SalmonTimeTravelDamage + SalmonUniversalDominations * SalmonUniversalDominationDamage + SalmonGods * SalmonGodDamage + SalmonAfterlives * SalmonAfterlifeDamage)/10000000);
	if(tempGain >= 0.01){
		if (confirm("are you sure you want to delete all progress and prestige with a " +  round(tempGain) + " Salmon bonus?")) {
			deleted = true;
			prestigeGain = prestigeGain + round((level * 10000 + SalmonKids * SalmonKidDamage + SalmonMen * SalmonManDamage + SalmonPonds * SalmonPondDamage + SalmonFactories * SalmonFactoryDamage + SalmonBanks * SalmonBankDamage + SalmonEmpires * SalmonEmpireDamage + SalmonWorldControls * SalmonWorldControlDamage+ SalmonGalacticReigns * SalmonGalacticReignDamage + deezSalmonGuys * deezSalmonGuyDamage + SalmonTimeTravels * SalmonTimeTravelDamage + SalmonUniversalDominations * SalmonUniversalDominationDamage + SalmonGods * SalmonGodDamage + SalmonAfterlives * SalmonAfterlifeDamage)/10000000);
			Save();
			
			deleted = true;
			localStorage.removeItem("save");
			UpdateValues();
			setTimeout(function (){
				location.reload();
			}, 50);
		}
	}
}

//saving
function Save(){
	musicProgress = music.currentTime;
  document.getElementById('saved').innerHTML = "saved";
	setTimeout("document.getElementById('saved').innerHTML = ''", 800)
	var save = {
		'Salmons': Salmons,
		'SalmonKids': SalmonKids,
		'SalmonBoys': SalmonBoys,
		'SalmonBoyBonuses': SalmonBoyBonuses,
		'clickUpgrades': clickUpgrades,
		'clickUpgrades2': clickUpgrades2,
		'clickUpgrades3': clickUpgrades3,
		'SalmonMen':  SalmonMen,
		'SalmonPonds': SalmonPonds,
		'allUpgrades': allUpgrades,
		'SalmonFactories': SalmonFactories,
		'SalmonBanks': SalmonBanks,
		'SalmonEmpires': SalmonEmpires,
		'SalmonWorldControls': SalmonWorldControls,
		'SalmonGalacticReigns': SalmonGalacticReigns,
		'deezSalmonGuys': deezSalmonGuys,
		'SalmonTimeTravels': SalmonTimeTravels,
		'SalmonUniversalDominations': SalmonUniversalDominations,
		'SalmonGods': SalmonGods,
		'SalmonAfterlives': SalmonAfterlives,
		'totalDamage': totalDamage,
		'audioMuted': audioMuted,
		'musicMuted': musicMuted,
		'musicProgress': musicProgress,
		'SalmonBoyUpgradeShown': SalmonBoyUpgradeShown,
		'clickUpgradeShown': clickUpgradeShown,
		'click2UpgradeShown': click2UpgradeShown,
		'click3UpgradeShown': click3UpgradeShown,
		'allUpgradeShown': allUpgradeShown,
		'level': level,
		'xp': xp,
		'SalmonKidDamage': SalmonKidDamage,
		'SalmonBoyDamage': SalmonBoyDamage,
		'SalmonManDamage': SalmonManDamage,
		'SalmonPondDamage': SalmonPondDamage,
		'SalmonFactoryDamage': SalmonFactoryDamage,
		'SalmonBankDamage': SalmonBankDamage,
		'SalmonEmpireDamage': SalmonEmpireDamage,
		'SalmonWorldControlDamage': SalmonWorldControlDamage,
		'SalmonGalacticReignDamage': SalmonGalacticReignDamage,
		'deezSalmonGuyDamage': deezSalmonGuyDamage,
		'SalmonTimeTravelDamage': SalmonTimeTravelDamage,
		'SalmonUniversalDominationDamage': SalmonUniversalDominationDamage,
		'SalmonGodDamage': SalmonGodDamage,
		'SalmonAfterlifeDamage': SalmonAfterlifeDamage,
		'maxSalmons': maxSalmons,
		'ranInvert': ranInvert
	}
	localStorage.setItem("save",JSON.stringify(save));
	var prestigeSave = {
		'prestigeGain': prestigeGain,
		's': s,
		'm': m,
		'h': h
	}
	localStorage.setItem("prestigeSave",JSON.stringify(prestigeSave));
}

function DeleteSave(){
	if (confirm('are you sure you want to delete all progress')) {
		deleted = true;
		localStorage.removeItem("save");
		localStorage.removeItem("prestigeSave");
		localStorage.removeItem("timerSave");
		UpdateValues();
		setTimeout(function (){
			location.reload();
		}, 50);
	}
}

function Load(){
	//alert(localStorage.getItem("save"));
	//alert(localStorage.getItem("prestigeSave"));
	if(localStorage.getItem("save") !== null){
		var savegame = JSON.parse(localStorage.getItem("save"));
		if (typeof savegame.Salmons !== "undefined") Salmons = savegame.Salmons;
		if (typeof savegame.SalmonKids !== "undefined") SalmonKids = savegame.SalmonKids;
		if (typeof savegame.SalmonBoys !== "undefined") SalmonBoys = savegame.SalmonBoys;
		if (typeof savegame.SalmonBoyBonuses !== "undefined") SalmonBoyBonuses = savegame.SalmonBoyBonuses;
		if (typeof savegame.clickUpgrades !== "undefined") clickUpgrades = savegame.clickUpgrades;
		if (typeof savegame.clickUpgrades2 !== "undefined") clickUpgrades2 = savegame.clickUpgrades2;
		if (typeof savegame.clickUpgrades3 !== "undefined") clickUpgrades3 = savegame.clickUpgrades3;
		if (typeof savegame.SalmonMen !== "undefined") SalmonMen = savegame.SalmonMen;
		if (typeof savegame.SalmonPonds !== "undefined") SalmonPonds = savegame.SalmonPonds;
		if (typeof savegame.allUpgrades !== "undefined") allUpgrades = savegame.allUpgrades;
		if (typeof savegame.SalmonFactories !== "undefined") SalmonFactories = savegame.SalmonFactories;
		if (typeof savegame.SalmonBanks !== "undefined") SalmonBanks = savegame.SalmonBanks;
		if (typeof savegame.SalmonEmpires !== "undefined") SalmonEmpires = savegame.SalmonEmpires;
		if (typeof savegame.SalmonWorldControls !== "undefined") SalmonWorldControls = savegame.SalmonWorldControls;
		if (typeof savegame.SalmonGalacticReigns !== "undefined") SalmonGalacticReigns = savegame.SalmonGalacticReigns;
		if (typeof savegame.deezSalmonGuys !== "undefined") deezSalmonGuys = savegame.deezSalmonGuys;
		if (typeof savegame.SalmonTimeTravels !== "undefined") SalmonTimeTravels = savegame.SalmonTimeTravels;
		if (typeof savegame.SalmonUniversalDominations !== "undefined") SalmonUniversalDominations = savegame.SalmonUniversalDominations;
		if (typeof savegame.SalmonGods !== "undefined") SalmonGods = savegame.SalmonGods;
		if (typeof savegame.SalmonAfterlives !== "undefined") SalmonAfterlives = savegame.SalmonAfterlives;
		if (typeof savegame.timeSinceStart !== "undefined") timeSinceStart = savegame.timeSinceStart;
		if (typeof savegame.totalDamage !== "undefined") totalDamage = savegame.totalDamage;
		if (typeof savegame.audioMuted !== "undefined") audioMuted = savegame.audioMuted;
		if (typeof savegame.musicMuted !== "undefined") musicMuted = savegame.musicMuted;
		if (typeof savegame.musicProgress !== "undefined") musicProgress = savegame.musicProgress;
		if (typeof savegame.SalmonBoyUpgradeShown !== "undefined") SalmonBoyUpgradeShown = savegame.SalmonBoyUpgradeShown;
		if (typeof savegame.clickUpgradeShown !== "undefined") clickUpgradeShown = savegame.clickUpgradeShown;
		if (typeof savegame.click2UpgradeShown !== "undefined") click2UpgradeShown = savegame.click2UpgradeShown;
		if (typeof savegame.click3UpgradeShown !== "undefined") click2UpgradeShown = savegame.click3UpgradeShown;
		if (typeof savegame.allUpgradeShown !== "undefined") allUpgradeShown = savegame.allUpgradeShown;
		if (typeof savegame.level !== "undefined") level = savegame.level;
		if (typeof savegame.xp !== "undefined") xp = savegame.xp;
		if (typeof savegame.SalmonKidDamage !== "undefined") SalmonKidDamage = savegame.SalmonKidDamage;
		if (typeof savegame.SalmonBoyDamage !== "undefined") SalmonBoyDamage = savegame.SalmonBoyDamage;
		if (typeof savegame.SalmonManDamage !== "undefined") SalmonManDamage = savegame.SalmonManDamage;
		if (typeof savegame.SalmonPondDamage !== "undefined") SalmonPondDamage = savegame.SalmonPondDamage;
		if (typeof savegame.SalmonFactoryDamage !== "undefined") SalmonFactoryDamage = savegame.SalmonFactoryDamage;
		if (typeof savegame.SalmonBankDamage !== "undefined") SalmonBankDamage = savegame.SalmonBankDamage;
		if (typeof savegame.SalmonEmpireDamage !== "undefined") SalmonEmpireDamage = savegame.SalmonEmpireDamage;
		if (typeof savegame.SalmonWorldControlDamage !== "undefined") SalmonWorldControlDamage = savegame.SalmonWorldControlDamage;
		if (typeof savegame.SalmonGalacticReignDamage !== "undefined") SalmonGalacticReignDamage = savegame.SalmonGalacticReignDamage;
		if (typeof savegame.deezSalmonGuyDamage !== "undefined") deezSalmonGuyDamage = savegame.deezSalmonGuyDamage;
		if (typeof savegame.SalmonTimeTravelDamage !== "undefined") SalmonTimeTravelDamage = savegame.SalmonTimeTravelDamage;
		if (typeof savegame.SalmonUniversalDominationDamage !== "undefined") SalmonUniversalDominationDamage = savegame.SalmonUniversalDominationDamage;
		if (typeof savegame.SalmonGodDamage !== "undefined") SalmonGodDamage = savegame.SalmonGodDamage;
		if (typeof savegame.SalmonAfterlifeDamage !== "undefined") SalmonAfterlifeDamage = savegame.SalmonAfterlifeDamage;
		if (typeof savegame.maxSalmons !== "undefined") maxSalmons = savegame.maxSalmons;
		if (typeof savegame.ranInvert !== "undefined") ranInvert = savegame.ranInvert;
	}

	if (localStorage.getItem("prestigeSave") !== null) {
		var prestigeSavegame = JSON.parse(localStorage.getItem("prestigeSave"));
		prestigeGain = prestigeSavegame.prestigeGain;
		s = prestigeSavegame.s;
		m = prestigeSavegame.m;
		h = prestigeSavegame.h;
			document.getElementById('prestigeGainText').innerHTML = kFormatter(round(prestigeGain));
	}

	Save();

  document.getElementById('time').innerHTML = "played for " + h + ":" + m + ":" + s;
	UpdateValues();
	UpdateCosts();
	UpdateLevel();
}

function GreyOutButtons(){
	if(Salmons < SalmonKidCostNext){
		document.getElementsByClassName('buySalmonKid')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= SalmonKidCostNext){
		document.getElementsByClassName('buySalmonKid')[1].style.webkitFilter = "";
	}

	if(Salmons < SalmonBoyCostNext){
		document.getElementsByClassName('buySalmonBoy')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= SalmonBoyCostNext){
		document.getElementsByClassName('buySalmonBoy')[1].style.webkitFilter = "";
	}

	if(Salmons < SalmonManCostNext){
		document.getElementsByClassName('buySalmonMan')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= SalmonManCostNext){
		document.getElementsByClassName('buySalmonMan')[1].style.webkitFilter = "";
	}

	if(Salmons < SalmonPondCostNext){
		document.getElementsByClassName('buySalmonPond')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= SalmonPondCostNext){
		document.getElementsByClassName('buySalmonPond')[1].style.webkitFilter = "";
	}

	if(Salmons < SalmonFactoryCostNext){
		document.getElementsByClassName('buySalmonFactory')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= SalmonFactoryCostNext){
		document.getElementsByClassName('buySalmonFactory')[1].style.webkitFilter = "";
	}

	if(Salmons < SalmonBankCostNext){
		document.getElementsByClassName('buySalmonBank')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= SalmonBankCostNext){
		document.getElementsByClassName('buySalmonBank')[1].style.webkitFilter = "";
	}

	if(Salmons < SalmonEmpireCostNext){
		document.getElementsByClassName('buySalmonEmpire')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= SalmonEmpireCostNext){
		document.getElementsByClassName('buySalmonEmpire')[1].style.webkitFilter = "";
	}

	if(Salmons < SalmonWorldControlCostNext){
		document.getElementsByClassName('buySalmonWorldControl')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= SalmonWorldControlCostNext){
		document.getElementsByClassName('buySalmonWorldControl')[1].style.webkitFilter = "";
	}

	if(Salmons < SalmonGalacticReignCostNext){
		document.getElementsByClassName('buySalmonGalacticReign')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= SalmonGalacticReignCostNext){
		document.getElementsByClassName('buySalmonGalacticReign')[1].style.webkitFilter = "";
	}

	if(Salmons < deezSalmonGuyCostNext){
		document.getElementsByClassName('buyDeezSalmonGuy')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= deezSalmonGuyCostNext){
		document.getElementsByClassName('buyDeezSalmonGuy')[1].style.webkitFilter = "";
	}

	if(Salmons < SalmonTimeTravelCostNext){
		document.getElementsByClassName('buySalmonTimeTravel')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= SalmonTimeTravelCostNext){
		document.getElementsByClassName('buySalmonTimeTravel')[1].style.webkitFilter = "";
	}

	if(Salmons < SalmonUniversalDominationCostNext){
		document.getElementsByClassName('buySalmonUniversalDomination')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= SalmonUniversalDominationCostNext){
		document.getElementsByClassName('buySalmonUniversalDomination')[1].style.webkitFilter = "";
	}

	if(Salmons < SalmonGodCostNext){
		document.getElementsByClassName('buySalmonGod')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= SalmonGodCostNext){
		document.getElementsByClassName('buySalmonGod')[1].style.webkitFilter = "";
	}

	if(Salmons < SalmonAfterlifeCostNext){
		document.getElementsByClassName('buySalmonAfterlife')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= SalmonAfterlifeCostNext){
		document.getElementsByClassName('buySalmonAfterlife')[1].style.webkitFilter = "";
	}

	if(Salmons < SalmonBoyBonusCostNext){
		document.getElementsByClassName('buySalmonBoyBonus')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= SalmonBoyBonusCostNext){
		document.getElementsByClassName('buySalmonBoyBonus')[1].style.webkitFilter = "";
	}

	if(Salmons < clickUpgradeCostNext){
		document.getElementsByClassName('buyClick')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= clickUpgradeCostNext){
		document.getElementsByClassName('buyClick')[1].style.webkitFilter = "";
	}

	if(Salmons < clickUpgrade2CostNext){
		document.getElementsByClassName('buyClick2')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= clickUpgrade2CostNext){
		document.getElementsByClassName('buyClick2')[1].style.webkitFilter = "";
	}

	if(Salmons < clickUpgrade3CostNext){
		document.getElementsByClassName('buyClick3')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= clickUpgrade3CostNext){
		document.getElementsByClassName('buyClick3')[1].style.webkitFilter = "";
	}

	if(Salmons < allUpgradeCostNext){
		document.getElementsByClassName('buyAllUpgrade')[1].style.webkitFilter = "brightness(70%)";
	} else if (Salmons >= allUpgradeCostNext){
		document.getElementsByClassName('buyAllUpgrade')[1].style.webkitFilter = "";
	}
	
	if(SalmonBoyBonuses >= 5){
		document.getElementsByClassName('buySalmonBoyBonus')[1].style.webkitFilter = "brightness(60%)";
		document.getElementById('SalmonBoyBonusCost').innerHTML = "<b>sold out</b>";
	}
	
	if(allUpgrades >= 5){
		document.getElementsByClassName('buyAllUpgrade')[1].style.webkitFilter = "brightness(60%)";
		document.getElementById('allUpgradeCost').innerHTML = "sold out";
	}
}

function CheckAmounts(){
	GreyOutButtons();
	if(Salmons >= 15 || SalmonKids >= 1) {
		var classes = document.getElementsByClassName('buySalmonKid');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}

		if(page != "mobile.html"){
			document.getElementById('things').style.display = "";
		}

		if(page != "mobile.html"){
			var leftpanel = document.getElementsByClassName("item1")[0];
			leftpanel.style.padding = "1vw 1.5vw";
		}		  
	}

	if(Salmons >= 40 || SalmonBoys >= 1) {
		var classes = document.getElementsByClassName('buySalmonBoy');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if (Salmons >= 80 || SalmonBoyBonuses >= 1) {
		var classes = document.getElementsByClassName('buySalmonBoyBonus');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
		if(page != "mobile.html"){
			document.getElementById('upgrades').style.display = "";
			document.getElementById('damage').style.display = "";
			document.getElementById('clickBonusText').style.display = "";
			document.getElementById('line2').style.display = "";
			var leftpanel = document.getElementsByClassName("item2")[0];
			leftpanel.style.padding = "1vw 1.5vw";
		}

		if(page == "mobile.html" && SalmonBoyUpgradeShown == false){
			NewUpgrade();
			SalmonBoyUpgradeShown = true;
			setTimeout(function (){
				NewUpgrade();
			}, 2000);
		}
    }
	
	if (Salmons >= 30 || prestigeGain > 0){
		document.getElementById('gamblingButton').style.display = "";
	}
	
	if (Salmons >= 100 || prestigeGain > 0){
		document.getElementById('prestigeButton').style.display = "";
		document.getElementById('prestigeGainDiv').style.display = "";
	}
	
	if(Salmons >= 200 || clickUpgrades >= 1) {
		var classes = document.getElementsByClassName('buyClick');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}

		if(page == "mobile.html" && clickUpgradeShown == false){
			NewUpgrade();
			clickUpgradeShown = true;
			setTimeout(function (){
				NewUpgrade();
			}, 2000);
		}
    }
	if(Salmons >= 3000 || clickUpgrades2 >= 1) {
		var classes = document.getElementsByClassName('buyClick2');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}

		if(page == "mobile.html" && click2UpgradeShown == false){
			NewUpgrade();
			click2UpgradeShown = true;
			setTimeout(function (){
				NewUpgrade();
			}, 2000);
		}
    }
	if(Salmons >= 300000 || clickUpgrades3 >= 1) {
		var classes = document.getElementsByClassName('buyClick3');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}

		if(page == "mobile.html" && click3UpgradeShown == false){
			NewUpgrade();
			click3UpgradeShown = true;
			setTimeout(function (){
				NewUpgrade();
			}, 2000);
		}
    }
	if(Salmons >= 800 || SalmonMen >= 1) {
		var classes = document.getElementsByClassName('buySalmonMan');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
	}
	if(Salmons >= 11000 || SalmonPonds >= 1) {
		var classes = document.getElementsByClassName('buySalmonPond');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(Salmons >= 80000 || allUpgrades >= 1) {
		var classes = document.getElementsByClassName('buyAllUpgrade');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}

		if(page == "mobile.html" && allUpgradeShown == false){
			NewUpgrade();
			allUpgradeShown = true;
			setTimeout(function (){
				NewUpgrade();
			}, 2000);
		}
    }
	if(Salmons >= 150000 || SalmonFactories >= 1) {
		var classes = document.getElementsByClassName('buySalmonFactory');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(Salmons >= 1100000 || SalmonBanks >= 1) {
		var classes = document.getElementsByClassName('buySalmonBank');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(Salmons >= 17000000 || SalmonEmpires >= 1) {
		var classes = document.getElementsByClassName('buySalmonEmpire');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(Salmons >= 300000000 || SalmonWorldControls >= 1) {
		var classes = document.getElementsByClassName('buySalmonWorldControl');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(Salmons >= 1000000000 || SalmonGalacticReigns >= 1) {
		var classes = document.getElementsByClassName('buySalmonGalacticReign');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(Salmons >= 50000000000 || deezSalmonGuys >= 1) {
		var classes = document.getElementsByClassName('buyDeezSalmonGuy');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(Salmons >= 700000000000 || SalmonTimeTravels >= 1) {
		var classes = document.getElementsByClassName('buySalmonTimeTravel');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(Salmons >= 30000000000000 || SalmonUniversalDominations >= 1) {
		var classes = document.getElementsByClassName('buySalmonUniversalDomination');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(Salmons >= 140000000000000 || SalmonGods >= 1) {
		var classes = document.getElementsByClassName('buySalmonGod');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
	if(Salmons >= 1800000000000000 || SalmonAfterlives >= 1) {
		var classes = document.getElementsByClassName('buySalmonAfterlife');
		for (var i=0;i<classes.length;i++) {
			classes[i].style.display = '';
		}
    }
}

function UpdateValues(){
	CheckBackground();
	levelMultiplier = 1 + level * 0.05;
	var clickUpgradesTemp = 15 * clickUpgrades;
	var clickUpgrades2Temp = 50 * clickUpgrades2;
	if(clickUpgrades3 > 0){
		clickDamage = clickUpgrades3 * (3 * (1 + clickUpgradesTemp + clickUpgrades2Temp));
	} else {
		clickDamage = 1 + clickUpgradesTemp + clickUpgrades2Temp;
	}
	document.getElementById('Salmons').innerHTML = kFormatter(round(Salmons));
	document.getElementById('SalmonsGamble').innerHTML = round(Salmons);
	document.getElementById('SalmonKids').innerHTML = SalmonKids;
	document.getElementById('SalmonBoys').innerHTML = SalmonBoys;
	document.getElementById('SalmonBoyBonuses').innerHTML = SalmonBoyBonuses;
	document.getElementById('SalmonBoyBonusTotal').innerHTML = kFormatter(SalmonBoyDamage);
	document.getElementById('clickDamage').innerHTML = clickDamage;
	document.getElementById('clickUpgrades').innerHTML = clickUpgrades;
	document.getElementById('clickUpgrades2').innerHTML = clickUpgrades2;
	document.getElementById('clickUpgrades3').innerHTML = clickUpgrades3;
	document.getElementById('SalmonMen').innerHTML = SalmonMen;
	document.getElementById('SalmonPonds').innerHTML = SalmonPonds;
	document.getElementById('allUpgrades').innerHTML = allUpgrades;
	document.getElementById('SalmonFactories').innerHTML = SalmonFactories;
	document.getElementById('SalmonBanks').innerHTML = SalmonBanks;
	document.getElementById('SalmonEmpires').innerHTML = SalmonEmpires;
	document.getElementById('SalmonWorldControls').innerHTML = SalmonWorldControls;
	document.getElementById('SalmonGalacticReigns').innerHTML = SalmonGalacticReigns;
	document.getElementById('deezSalmonGuys').innerHTML = deezSalmonGuys;
	document.getElementById('SalmonTimeTravels').innerHTML = SalmonTimeTravels;
	document.getElementById('SalmonUniversalDominations').innerHTML = SalmonUniversalDominations;
	document.getElementById('SalmonGods').innerHTML = SalmonGods;
	document.getElementById('SalmonAfterlives').innerHTML = SalmonAfterlives;
	document.getElementById('addedSalmons').innerHTML = "+ " + kFormatter(totalDamage);
	document.getElementById('totalDamage').innerHTML = kFormatter(totalDamage);
	document.getElementById("damageAdded").innerHTML = "+ " + kFormatter(totalDamage) + "/sec";

	document.getElementById('SalmonKidDamage').innerHTML = kFormatter(round(SalmonKidDamage));
	document.getElementById('SalmonBoyBonusTotal').innerHTML = kFormatter(round(SalmonBoyDamage));
	document.getElementById('SalmonManDamage').innerHTML = kFormatter(round(SalmonManDamage));
	document.getElementById('SalmonPondDamage').innerHTML = kFormatter(round(SalmonPondDamage));
	document.getElementById('SalmonFactoryDamage').innerHTML = kFormatter(round(SalmonFactoryDamage));
	document.getElementById('SalmonBankDamage').innerHTML = kFormatter(round(SalmonBankDamage));
	document.getElementById('SalmonEmpireDamage').innerHTML = kFormatter(round(SalmonEmpireDamage));
	document.getElementById('SalmonWorldControlDamage').innerHTML = kFormatter(round(SalmonWorldControlDamage));
	document.getElementById('SalmonGalacticReignDamage').innerHTML = kFormatter(round(SalmonGalacticReignDamage));
	document.getElementById('deezSalmonGuyDamage').innerHTML = kFormatter(round(deezSalmonGuyDamage));
	document.getElementById('SalmonTimeTravelDamage').innerHTML = kFormatter(round(SalmonTimeTravelDamage));
	document.getElementById('SalmonUniversalDominationDamage').innerHTML = kFormatter(round(SalmonUniversalDominationDamage));
	document.getElementById('SalmonGodDamage').innerHTML = kFormatter(round(SalmonGodDamage));
	document.getElementById('SalmonAfterlifeDamage').innerHTML = kFormatter(round(SalmonAfterlifeDamage));
	
	document.getElementById('clickUpgradeDamage').innerHTML = kFormatter(round(clickUpgradesTemp));
	document.getElementById('clickUpgrade2Damage').innerHTML = kFormatter(round(clickUpgrades2Temp));
	document.getElementById('clickUpgrade3Damage').innerHTML = kFormatter(round(clickUpgrades3 * (3 * (1 + clickUpgradesTemp + clickUpgrades2Temp))));
	
	document.getElementById('SalmonKidTotalDmg').innerHTML = kFormatter(round(SalmonKids * (prestigeGain + levelMultiplier * SalmonKidDamage)));
	document.getElementById('SalmonBoyTotalDmg').innerHTML = kFormatter(round(SalmonBoys * (prestigeGain + levelMultiplier * SalmonBoyDamage)));
	document.getElementById('SalmonManTotalDmg').innerHTML = kFormatter(round(SalmonMen * (prestigeGain + levelMultiplier * SalmonManDamage)));
	document.getElementById('SalmonPondTotalDmg').innerHTML = kFormatter(round(SalmonPonds * (prestigeGain + levelMultiplier * SalmonPondDamage)));
	document.getElementById('SalmonFactoryTotalDmg').innerHTML = kFormatter(round(SalmonFactories * (prestigeGain + levelMultiplier * SalmonFactoryDamage)));
	document.getElementById('SalmonBankTotalDmg').innerHTML = kFormatter(round(SalmonBanks * (prestigeGain + levelMultiplier * SalmonBankDamage)));
	document.getElementById('SalmonEmpireTotalDmg').innerHTML = kFormatter(round(SalmonEmpires * (prestigeGain + levelMultiplier * SalmonEmpireDamage)));
	document.getElementById('SalmonWorldControlTotalDmg').innerHTML = kFormatter(round(SalmonWorldControls * (prestigeGain + levelMultiplier * SalmonWorldControlDamage)));
	document.getElementById('SalmonGalacticReignTotalDmg').innerHTML = kFormatter(round(SalmonGalacticReigns * (prestigeGain + levelMultiplier * SalmonGalacticReignDamage)));
	document.getElementById('deezSalmonGuyTotalDmg').innerHTML = kFormatter(round(deezSalmonGuys * (prestigeGain + levelMultiplier * deezSalmonGuyDamage)));
	document.getElementById('SalmonTimeTravelTotalDmg').innerHTML = kFormatter(round(SalmonTimeTravels * (prestigeGain + levelMultiplier * SalmonTimeTravelDamage)));
	document.getElementById('SalmonUniversalDominationTotalDmg').innerHTML = kFormatter(round(SalmonUniversalDominations * (prestigeGain + levelMultiplier * SalmonUniversalDominationDamage)));
	document.getElementById('SalmonGodTotalDmg').innerHTML = kFormatter(round(SalmonGods * (prestigeGain + levelMultiplier * SalmonGodDamage)));
	document.getElementById('SalmonAfterlifeTotalDmg').innerHTML = kFormatter(round(SalmonAfterlives * (prestigeGain + levelMultiplier * SalmonAfterlifeDamage)));
}

function UpdateCosts(){
	SalmonKidCostNext = Math.floor(15 * Math.pow(1.1,SalmonKids));
	SalmonBoyCostNext = Math.floor(50 * Math.pow(1.1,SalmonBoys));
	SalmonBoyBonusCostNext = Math.floor(100 * Math.pow(5,SalmonBoyBonuses));
	clickUpgradeCostNext = Math.floor(300 * Math.pow(2,clickUpgrades));
	clickUpgrade2CostNext = Math.floor(5000 * Math.pow(2,clickUpgrades2));
	clickUpgrade3CostNext = Math.floor(500000 * Math.pow(2,clickUpgrades3));
	SalmonManCostNext = Math.floor(1000 * Math.pow(1.1,SalmonMen));
	SalmonPondCostNext = Math.floor(13000 * Math.pow(1.1,SalmonPonds));
	allUpgradeCostNext = Math.floor(100000 * Math.pow(5,allUpgrades));
	SalmonFactoryCostNext = Math.floor(150000 * Math.pow(1.1,SalmonFactories));
	SalmonBankCostNext = Math.floor(1400000 * Math.pow(1.1,SalmonBanks));
	SalmonEmpireCostNext = Math.floor(20000000 * Math.pow(1.1,SalmonEmpires));
	SalmonWorldControlCostNext = Math.floor(330000000 * Math.pow(1.1,SalmonWorldControls));
	SalmonGalacticReignCostNext = Math.floor(1500000000 * Math.pow(1.1,SalmonGalacticReigns));
	deezSalmonGuyCostNext = Math.floor(75000000000 * Math.pow(1.1,deezSalmonGuys));
	SalmonTimeTravelCostNext = Math.floor(1000000000000 * Math.pow(1.1,SalmonTimeTravels));
	SalmonUniversalDominationCostNext = Math.floor(40000000000000 * Math.pow(1.1,SalmonUniversalDominations));
	SalmonGodCostNext = Math.floor(170000000000000 * Math.pow(1.1,SalmonGods));
	SalmonAfterlifeCostNext = Math.floor(2000000000000000 * Math.pow(1.1,SalmonAfterlives));
	document.getElementById('SalmonKidCost').innerHTML = kFormatter(SalmonKidCostNext);
	document.getElementById('SalmonBoyCost').innerHTML = kFormatter(SalmonBoyCostNext);
	document.getElementById('SalmonBoyBonusCost').innerHTML = kFormatter(SalmonBoyBonusCostNext);
	document.getElementById('clickCost').innerHTML = kFormatter(clickUpgradeCostNext);
	document.getElementById('clickCost2').innerHTML = kFormatter(clickUpgrade2CostNext);
	document.getElementById('clickCost3').innerHTML = kFormatter(clickUpgrade3CostNext);
	document.getElementById('SalmonManCost').innerHTML = kFormatter(SalmonManCostNext);
	document.getElementById('SalmonPondCost').innerHTML = kFormatter(SalmonPondCostNext);
	document.getElementById('allUpgradeCost').innerHTML = kFormatter(allUpgradeCostNext);
	document.getElementById('SalmonFactoryCost').innerHTML = kFormatter(SalmonFactoryCostNext);
	document.getElementById('SalmonBankCost').innerHTML = kFormatter(SalmonBankCostNext);
	document.getElementById('SalmonEmpireCost').innerHTML = kFormatter(SalmonEmpireCostNext);
	document.getElementById('SalmonWorldControlCost').innerHTML = kFormatter(SalmonWorldControlCostNext);
	document.getElementById('SalmonGalacticReignCost').innerHTML = kFormatter(SalmonGalacticReignCostNext);
	document.getElementById('deezSalmonGuyCost').innerHTML = kFormatter(deezSalmonGuyCostNext);
	document.getElementById('SalmonTimeTravelCost').innerHTML = kFormatter(SalmonTimeTravelCostNext);
	document.getElementById('SalmonUniversalDominationCost').innerHTML = kFormatter(SalmonUniversalDominationCostNext);
	document.getElementById('SalmonGodCost').innerHTML = kFormatter(SalmonGodCostNext);
	document.getElementById('SalmonAfterlifeCost').innerHTML = kFormatter(SalmonAfterlifeCostNext);
}

function UpdateLevel(){
	var bar = document.getElementById("bar");
	var totalWidth = 30;
	levelAmount = 20 + level * 2;

	//divide the width by amount to get a percent to add to the width
	var barMultiplier = totalWidth/levelAmount;

	//multiply percent by xp to get fill amount
	barAmount = barMultiplier * xp;

	bar.style.width = barAmount + "%";

	//if the width equals the total width level up and reset
	if(barAmount >= totalWidth){
		bar.style.width = "0px";
		barAmount = 0;
		level++;
		xp = 0;
		UpdateValues();
		UpdateDamage();
	}
	document.getElementById('xp').innerHTML = xp;
	document.getElementById('xptonextlevelnumber').innerHTML = levelAmount - xp;
	document.getElementById('levelnumber').innerHTML = level;
	document.getElementById('multipliernumber').innerHTML = round(levelMultiplier) + "x";
}

function UpdateDamage(){
	totalDamage = round((prestigeGain + levelMultiplier) * (SalmonKidDamage * SalmonKids + SalmonBoyDamage * SalmonBoys + SalmonManDamage * SalmonMen + SalmonPondDamage * SalmonPonds + SalmonFactoryDamage * SalmonFactories + SalmonBankDamage * SalmonBanks + SalmonEmpireDamage * SalmonEmpires + SalmonWorldControlDamage * SalmonWorldControls + SalmonGalacticReignDamage * SalmonGalacticReigns + deezSalmonGuyDamage * deezSalmonGuys + SalmonTimeTravelDamage * SalmonTimeTravels + SalmonUniversalDominationDamage * SalmonUniversalDominations + SalmonGodDamage * SalmonGods + SalmonAfterlifeDamage * SalmonAfterlives));
}

function CheckMobile(){
	var ratio = window.innerWidth / window.innerHeight;
	if(ratio < 0.745 && page == "index.html"){
		window.location.href = "mobile.html";
	} else if (ratio >= 0.745 && page == "mobile.html"){
		window.location.href = "index.html";
	} else if (ratio < 0.745 && page == ""){
		window.location.href = "mobile.html";
	}
}

function Gamble(level){
	switch(level){
		case 1:
			var randomNumber = Math.floor(Math.random() * 4) + 1;
			var multiplyAmount = 3;
			var percent = "25%";
		break;

		case 2:
			var randomNumber = Math.floor(Math.random() * 8) + 1;
			var multiplyAmount = 6;
		break;

		case 3:
			var randomNumber = Math.floor(Math.random() * 17) + 1;
			var multiplyAmount = 12;
		break;

		case 4:
			var randomNumber = Math.floor(Math.random() * 33) + 1;
			var multiplyAmount = 24;
		break;

		case 5:
			var randomNumber = Math.floor(Math.random() * 100) + 1;
			var multiplyAmount = 50;
		break;
	}
	var x = prompt("enter an amount of Salmons, total Salmons: " + Salmons,Salmons);
	if(x >= 1){
		if(x <= Salmons){
			if(confirm("you selected " + x + " Salmons, are you sure you want to gamble them for a 25% chance to get " + x * multiplyAmount + " back ?")){
				Salmons = Salmons - x;
				UpdateValues();
				if(randomNumber == 2){
					alert("you win " + x * multiplyAmount + " Salmons!");
					x = x * multiplyAmount;
					Salmons = Salmons + x;
					UpdateValues();
				} else {
					alert("bad luck, the random number was " + randomNumber + " and you were aiming for 2");
				}
			}
		} else {
			alert("enter an amount under your current Salmons");
		}
	}
}

function ScissorsPaperRock(pick){
	var x = prompt("enter an amount of Salmons, total Salmons: " + Salmons,Salmons);
	if(x >= 1){
		if(x <= Salmons){
			if(confirm("you selected " + x + " Salmons, are you sure you want to gamble them for a chance to get " + x * 2.5 + " back ?")){
				Salmons = Salmons - x;
				UpdateValues();

				var randomNumber = Math.floor(Math.random() * 3) + 1;
				if(randomNumber == 1){
					var botPick = "paper";
				} else if (randomNumber == 2){
					var botPick = "rock";
				} else if (randomNumber == 3){
					var botPick = "scissors";
				}

				if(botPick == "paper" && pick == "scissors"){
					x = x * 2.5;
					alert("you win, the enemy player chose paper and you chose scissors!\n" + x + " Salmons gained.");
					Salmons = Salmons + x;
					UpdateValues();
				} else if (botPick == "rock" && pick == "scissors"){
					alert("you lose, the enemy player chose rock and you chose scissors\n" + x + " Salmons lost.");
					UpdateValues();
				} else if (botPick == "scissors" && pick == "scissors"){
					alert("tie, the enemy player chose scissors and you chose scissors");
					x = x * 1;
					Salmons = Salmons + x;
					UpdateValues();
				}

				if(botPick == "rock" && pick == "paper"){
					x = x * 2.5;
					alert("you win, the enemy player chose rock and you chose paper!\n" + x + " Salmons gained.");
					Salmons = Salmons + x;
					UpdateValues();
				} else if (botPick == "scissors" && pick == "paper"){
					alert("you lose, the enemy player chose scissors and you chose paper\n" + x + " Salmons lost.");
					x = x * multiplyAmount;
					UpdateValues();
				} else if (botPick == "paper" && pick == "paper"){
					alert("tie, the enemy player chose paper and you chose paper");
					x = x * 1;
					Salmons = Salmons + x;
					UpdateValues();
				}

				if(botPick == "scissors" && pick == "rock"){
					x = x * 2.5;
					alert("you win, the enemy player chose scissors and you chose rock!\n" + x + " Salmons gained.");
					Salmons = Salmons + x;
					UpdateValues();
				} else if (botPick == "paper" && pick == "rock"){
					alert("you lose, the enemy player chose paper and you chose rock\n" + x + " Salmons lost.");
					UpdateValues();
				} else if (botPick == "rock" && pick == "rock"){
					alert("tie, the enemy player chose rock and you chose rock");
					x = x * 1;
					Salmons = Salmons + x;
					UpdateValues();
				}
			}
		} else {
			alert("enter an amount under your current Salmons");
		}
	}
}

document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        event.preventDefault();
		clickAnimation();
		if(!pressed){
			clickOnButton();
			pressed = true;
		}
    }
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
		releaseAnimation();
		pressed = false;
		heldFor = 0;
    }
}

window.onbeforeunload = function(){
	if(!deleted){
		Save();
	}
}

window.addEventListener('resize', function(){
	CheckMobile();
});

CheckMobile();

if(page != "mobile.html"){
	document.getElementById('customImage').onchange = function() {
		var imageFile = this.files[0];
		var url = window.URL.createObjectURL(imageFile);
		document.getElementById("middleSalmon").src = url;
	}
}

//disable pointer cursor on hidden menu buttons
	document.getElementById('menuButton').style.cursor = "default";
	document.getElementById('menuButton2').style.cursor = "default";
	document.getElementById('menuButton3').style.cursor = "default";

Load();

music.currentTime = musicProgress;

//check if enough Salmons to unlock things
CheckAmounts();

//fix stupid animation
releaseAnimation();

//mute twice to get value from save
toggleMusic();
toggleMusic();
toggleAudio();
toggleAudio();

//disable clicking on menu by accident before opening
document.getElementById('menuButton').disabled = true;
document.getElementById('menuButton2').disabled = true;
document.getElementById('menuButton3').disabled = true;