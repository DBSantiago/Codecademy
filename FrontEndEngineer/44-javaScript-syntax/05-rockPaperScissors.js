const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'  ){
      return userInput;
    }else{
      console.log("Error uwu");
    }
  }
  
  const getComputerChoice = () => {
    let choices = ['rock','paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return "The game is a tie!";
    }
  
    if(userChoice === 'rock'){
      if(computerChoice === 'scissors'){
        return "The user won!"
      } else {
        return "The computer won!"
      }
    }
  
    if(userChoice === 'paper'){
      if(computerChoice === 'rock'){
        return "The user won!"
      } else {
        return "The computer won!"
      }
    }
  
    if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        return "The user won!"
      } else {
        return "The computer won!"
      }
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    console.log(userChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
  
    console.log(determineWinner(userChoice,computerChoice));
  
  }
  
  playGame();