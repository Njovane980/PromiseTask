function addNumbers() {
    return new Promise((resolve, reject) => {
      // Prompt user for input
      let number1 = prompt('Enter number 1:');
      let number2 = prompt('Enter number 2:');
  
      // Check if the entered values are numbers
      if (isNaN(number1) || isNaN(number2)) {
        // Reject with an appropriate error message
        reject(`${isNaN(number1) ? number1 : number2} ${isNaN(number1) && isNaN(number2) ? 'and' : 'or'} ${isNaN(number2) ? number2 : number1} ${isNaN(number1) && isNaN(number2) ? 'are' : 'is'} not number(s).`);
      } else {
        // If both are numbers, then calculate the sum
        let sum = parseFloat(number1) + parseFloat(number2);
        // Resolve with the result
        resolve(`${number1} + ${number2} = ${sum}`);
      }
    });
  }
  
  // Example usage
  addNumbers()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
  