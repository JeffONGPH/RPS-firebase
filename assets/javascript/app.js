//Initiate firebase 
  var config = {
    apiKey: "AIzaSyC4g60shXxLEAd-t2_L3vYbzjyllAEBGOY",
    authDomain: "rps-multiplayer-136ce.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-136ce.firebaseio.com",
    projectId: "rps-multiplayer-136ce",
    storageBucket: "rps-multiplayer-136ce.appspot.com",
    messagingSenderId: "1029195744493"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

//FIREBASE NODES - PLAYERS AND CHAT 
function newGame (){
  database.ref("players").set({
    player1: {
        name: "none",
        choice: "none",
        wins: 0,
        losses: 0
    },
    player2: {
        name: "none",
        choice: "none",
        wins: 0,
        losses: 0
    }
}); 

database.ref("chat").set({
    player1: {
       message: "none"
    },
    player2: {
        message: "none"
    }
}); 
};// END OF  newGame function 

//***********************************************************************************************************************************/
//FUNCTION TO RETRIEVE VALUE FROM FIREBASE  //**NOT WORKING THE WAY I WANT IT TO  // ????? Can't return snapshot value to a variable 
//function retrieve(path){
    //database.ref(path).on("value", function (snapshot) {
    //var dat = snapshot.val();
    //return dat
    //console.log(dat)
//});
//}
//var objectValue = retrieve ("players/player1/name")
// END
//***********************************************************************************************************************************/

//GLOBAL VARIABLES 
var player1Name = "none"
var player2Name = "none"

var player1Wins = 0;
var player1Losses = 0;

var player2Wins = 0;
var player2Losses = 0;


//ADD PLAYER FUNCTION
$("#startButton").on("click",function newPlayer (event){
    event.preventDefault();
    //Retrieve data object from firebase
    database.ref().on("value", function(snapshot) {
        var object = snapshot.val();
        console.log(object)
    //grab data for variables

    var player1NameObject = object.players.player1.name
    var player2NameObject = object.players.player2.name
    

    if (player1NameObject == "none" && $("#name").val().trim()!== ""){
        player1Name = $("#name").val().trim();
       database.ref("players/player1").update(
           {name:player1Name}
        ); 
        
        playerBoards()
    }else if (player2NameObject == "none" && $("#name").val().trim()!== "" && player1NameObject!== player1Name){
        player2Name = $("#name").val().trim();
        database.ref("players/player2").update(
            {name: player2Name })
        };
        playerBoards()
});//databse.ref
});//end 



//FUNCTION TO DISPLAY PLAYER BOARDS
function playerBoards(){

$(".nameform").hide()
database.ref().on("value", function(snapshot) {
    var object = snapshot.val();
    console.log(object)

    //player1
    var player1NameObject = object.players.player1.name
    var player1Wins = object.players.player1.wins
    var player1Losses = object.players.player1.losses

    //player2
    var player2NameObject = object.players.player2.name
    var player2Wins = object.players.player2.wins
    var player2Losses = object.players.player2.losses



var playerDisplay1 = "<h3>" + player1NameObject + "</h3>" 
+"<div class='buttons'> <button id='rock' class='btn btn-primary but'>" + "Rock" + "</button> </div>"
+"<div class='buttons'> <button id='paper' class='btn btn-primary but'>" + "Paper" + "</button> </div>"
+"<div class='buttons'> <button id='scissor' class='btn btn-primary but'>" + "Scissors" + "</button> </div>"
+"<div class='score'> <h5> wins: " + player1Wins + " losses: " + player1Losses + "</h5></div>"

var playerDisplay2 = "<h3>" + player2NameObject + "</h3>" 
+"<div class='buttons'> <button id='rock' class='btn btn-primary but'>" + "Rock" + "</button> </div>"
+"<div class='buttons'> <button id='paper' class='btn btn-primary but'>" + "Paper" + "</button> </div>"
+"<div class='buttons'> <button id='scissor' class='btn btn-primary but'>" + "Scissors" + "</button> </div>"
+"<div class='score'> <h5> wins: " + player2Wins + " losses: " + player2Losses + "</h5></div>"

if (player1NameObject == player1Name){
    $("#player1").empty()
    $("#player1").html(playerDisplay1)
    $(".top").html("<h2> Hi  " + player1Name + "! You are player 1 </h2>")
    if (player2NameObject !== "none"){
    $("#player2").empty()
    $("#player2").html(playerDisplay2)
    }

}else if (player2NameObject == player2Name) {
    $("#player2").empty()
    $("#player2").html(playerDisplay2)
    $(".top").html("<h2> Hi  " + player2Name + "! You are player 2 </h2>")
    if (player1NameObject !== "none"){
    $("#player1").empty()
    $("#player1").html(playerDisplay1)
    }

}
});//databse.ref
}//end 



function chatBox () {
database.ref().on("value", function(snapshot) {
    var object = snapshot.val();
    console.log(object)

    var 

});//databse.ref
}







$(document).ready(function(){
    newGame ()
    


});

