var inquirer = require("inquirer");
//question and answers in an array to pull
var questions = [{"front": "What year did Christopher Columbus discover America?","back": "1492"}, 
{"front": "Is this second question working?","back": "No"}];
//counter and array identifier
var i = 0;
var correct = 0;
var incorrect = 0;
//where to move the answer from the inquirer
function BasicCard(name) {
    this.name = name;
    this.printAnswer = function() {console.log("Answer: " + this.name + "\n-------------------");}
}
//where they are asking the questions
function Inquire() {
//if statement to stop at the end of the questions  
if ( i < questions.length){
    inquirer.prompt([
    {
        name: "name",
        message: questions[i].front
    }])
    .then(function(answer) {
//answer.name is based on the string given on name, not the actual property.        
    var user = new BasicCard(answer.name);
//adds to the counter and moves the array question over one
    if ((answer.name).toLowerCase() === (questions[i].back).toLowerCase() ) {
        console.log("You are correct!");
        correct++; }
    else {console.log("Sorry, wrong answer!");
        incorrect++; }
    i++;
    user.printAnswer();
//makes the inquirer run again if the if statement is still true.       
    Inquire();
    })
}
    else {  console.log("\n-------------------" + "\nThe questionnaire has ended! " + "\nYou got: " + correct + " questions correct " 
                + "and " + incorrect + " questions incorrect." + "\n-------------------");
    }
}
//start of the questionnaire
Inquire();