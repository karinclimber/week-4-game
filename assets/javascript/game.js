var wins = 0;
var losses = 0;
var addedScore = 0;

var randomNumber = Math.floor((Math.random()*100) + 19);
var crystal1 = Math.floor((Math.random()* 12) + 1);
var crystal2 = Math.floor((Math.random()* 12) + 1);
var crystal3 = Math.floor((Math.random()* 12) + 1);
var crystal4 = Math.floor((Math.random()* 12) + 1);

var audio = new Audio("assets/images/A_great_rev8.wav");
audio.play();


var updateaddedScore = function () {
	$(".addedScore").empty();
	$(".addedScore").append(addedScore);
	$("#wins").empty();
	$("#wins").append(wins);
	$("#losses").empty();
	$("#losses").append(losses);
}

var restart = function(){
	addedScore = 0;
    randomNumber = Math.floor((Math.random()* 100) + 19);

	$(".randomNumber").empty();
	$(".randomNumber").append(randomNumber);

    crystal1 = Math.floor((Math.random()*12) + 1);
    crystal2 = Math.floor((Math.random()*12) + 1);
    crystal3 = Math.floor((Math.random()*12) + 1);
    crystal4 = Math.floor((Math.random()*12) + 1);

    updateaddedScore();
}

    var logic = function (){
	if(addedScore === randomNumber) {
		wins++;
		
		restart();
	} 
    
    else if(addedScore > randomNumber){
		losses++;
	
		restart();
	}
    
    else {
		updateaddedScore();
	}

    }

$(".randomNumber").append(randomNumber);

$(".addedScore").append(addedScore);

$(document).ready(function(){
	$("#crystal1").click(function(){
		addedScore = addedScore + crystal1;
		logic();
	})
	$("#crystal2").click(function(){
		addedScore = addedScore + crystal2;
		logic();
	})
	$("#crystal3").click(function(){
		addedScore = addedScore + crystal3;
		logic();
	})
	$("#crystal4").click(function(){
		addedScore = addedScore + crystal4;
		logic();
	})

});
