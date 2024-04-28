let parentElement = document.querySelector("#container");

// Create the grid
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#ccc';
        });
        parentElement.appendChild(div);
    }
}

let button = document.querySelector("#reset-grid");

function resetGrid() {
  let userInput = prompt("Enter the number of squares per side (1-100): ");
  while (userInput < 1 || userInput > 100 || isNaN(userInput)) {
      alert("Invalid input. Please enter a number between 1 and 100.");
      userInput = prompt("Enter the number of squares per side (1-100): ");
  }

  // Remove all existing divs in the grid
  while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
  }

  // Create the new grid
  for (let i = 0; i < userInput; i++) {
      for (let j = 0; j < userInput; j++) {
          let div = document.createElement('div');
          div.classList.add('grid-item');
          div.style.width = `${100 / userInput}%`;
          div.style.height = `${100 / userInput}%`;
          div.addEventListener('mouseenter', function() {
              this.style.backgroundColor = '#ccc';
          });
          parentElement.appendChild(div);
      }
  }
}

button.addEventListener('click', resetGrid);