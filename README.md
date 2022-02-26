# Pizza Parlor

#### By Kyle Miller

#### This is a website where you can choose your toppings and size to see how much your pizza will cost. 

## _[GitHub Pages]_

## Technologies Used

- HTML
- CSS
- JavaScript
- JQuery

## Description:

_A website where a user can choose one or more individual toppings (pepperoni, sausage, onions, etc) and a size to order a pizza and see the final cost._

## Setup/Installation Requirements

- _Download Git Bash_
- _On GitHub.com, navigate to the main page of the repository._
- _Access your computer's terminal shell(Git Bash for Windows or Mac for terminal)_
- _In terminal:_
- `Go to the current directory where you want the cloned directory to be added.`
- `Clone the repository by using the command $ git clone https://github.com/kylemiller13/Pizza-parlor`
- `Lastly, open index.html`

## Known Bugs

- _N/A_

## License

- N/A Copyright (c) 2/27/2022, Kyle Miller
- _[MIT](https://opensource.org/licenses/MIT)_

## Tests:

### Describe: Pizza()
 - Test: "Created a constructor Pizza that takes in two arguments(toppings & size)."
 - Code: 
 Pizza(toppings,size);
 - Expected Output: NA
 ---
 ### Describe: Pizza.prototype.price()
 - Test: "Created a prototype named price which is a function that iterates through the toppings list and returns the calcuated price plus a dollar to what toppings is selected on the users page."
 - Code: 
 Pizza("Fresh basil");
 - Expected Output: "Your pizza will cost is $15.00." 
 ---
 - Test: "It will recognize a size that a user has selected and return the calcuated price plus $3.00 to each selected size."
 - Code: 
 Pizza("medium");
 - Expected Output: "Your pizza will be $17.00." 
---