const input = require('readline-sync');

let candidateName = " ";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride"
let candidateAnswer = " ";

let questions = [
  "Who was the first American woman in space? ",  
  "True or false: 5 kilometer == 5000 meters? ",  
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",  
  "What is the minimum crew size for the ISS? "];

let correctAnswers =[
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"]; 

let candidateAnswers = [];

let passOrFail = " ";

function askForName() {
  candidateName = input.question("Candidate Name: ");
  return candidateName;
}

function askQuestion() {
    for (let i = 0; i < questions.length; i++) {
      candidateAnswers[i] = String(input.question(questions[i]));
}
}

function gradeQuiz(candidateAnswers) {
    let grade = 0;
      for (let i = 0; i < questions.length; i++){
        if(correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()){
          grade++;
  }
}

 grade = (grade / questions.length) * 100;

  if(grade < 80) {
    passOrFail = "FAILED";
  } else {
    passOrFail = "PASSED";
  }

    return grade

}

function runOutput(grade) {
  console.clear()
  let output = " ";
 
  output += `Candidate Name ${candidateName}\n`;

  for (let j = 0; j < questions.length; j++) {
    output += `${j+1}) ${questions[j]} \nYour Answer: ${candidateAnswers[j]} \nCorrect Answer: ${correctAnswers[j]} \n \n`;
  }

  output += `>>> Overall Grade: ${grade}% (${(grade * questions.length) / 100} of ${questions.length} responses correct) <<< \n>>> Status: ${passOrFail} <<<`;

  return output;
}

function runProgram() {
  askForName();
  console.log(`Welcome, ${candidateName}! We have a short quiz for you!`);
  askQuestion();
  console.log(runOutput(gradeQuiz(this.candidateAnswers)));
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};