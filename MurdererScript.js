function playerName(){
  var name = prompt("What's your name?");
  alert("Hey " + name + ", I'm Officer Bobby, come with me to the murder scene...");
}
playerName()

function enterAnswer(){
  var answer = prompt("Your answer is ");
  if (answer === "B"){
    alert("You are right, thanks! you help us a lot.")
  }
  else{
    alert("Oh sorry, " + answer + " is incorrect, please try again.")
  }
}

function getAnswer(){
  alert("Corrcet answer is：B.");
}

function getHint(){
  var hint = ["Think about the killer's illness.","The blood of patients with lung disease is usually dark red."];
  for(i=0;i<2;i++){
    alert(hint[i])
  }
}
