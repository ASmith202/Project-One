
    function selectProtein(protein) {
        alert("You selected: " + protein)
    }


    function selectCondiment(condiment) {
        alert("You selected: " + condiment)
    }

function selectTopping(topping) {
    alert("You selected topping: " + topping);
}

function selectCheese(cheese) {
    alert("You selected cheese: " + cheese);
}

function selectBread(bread) {
    alert("You selected bread: " + bread);
}

function selectSize(size) {
    alert("You selected size: " + size);
}

function selectSize(button) {
    let buttons = button.parentElement.getElementsByClassName('ingredient-button');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }
    
    button.classList.add('selected');
}

function selectProtein(button) {
    let buttons = button.parentElement.getElementsByClassName('ingredient-button');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }
    
    button.classList.add('selected');
}

function selectCheese(button) {
    let buttons = button.parentElement.getElementsByClassName('ingredient-button');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }
    
    button.classList.add('selected');
}

function selectTopping(button) {
    let buttons = button.parentElement.getElementsByClassName('ingredient-button');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }
    
    button.classList.add('selected');
}

function selectCondiment(button) {
    let buttons = button.parentElement.getElementsByClassName('ingredient-button');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }
    
    button.classList.add('selected');
}

function selectBread(button) {
    let buttons = button.parentElement.getElementsByClassName('ingredient-button');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }
    
    button.classList.add('selected');
}




let sizeSelected = false
function selectSize(button) {
    let buttons = button.parentElement.getElementsByClassName('Size-button');

    if (!sizeSelected) {
        let breadButtons = document.querySelectorAll('.Bread-button.selected');
        breadButtons.forEach(function (breadButton) {
            breadButton.classList.remove('selected');
        });
        sizeSelected = true;
    }


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }

   
    button.classList.add('selected');
    const selectedItem = button.textContent;

    if (!isItemAlreadySelected(selectedItem)) {
        const li = document.createElement('li');
        li.textContent = selectedItem;
        document.getElementById('custom-sub-list').appendChild(li);
    }
}

function isItemAlreadySelected(item) {
    const listItems = document.getElementById('custom-sub-list').getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].textContent === item) {
            return true; 
        }
    }
    return false;
}

const sizeButtons = document.querySelectorAll('.Size-button');
sizeButtons.forEach(button => {
    button.addEventListener('click', function() {
        selectSize(button);
    });
});

const BreadButtons = document.querySelectorAll('.Bread-button');
BreadButtons.forEach(button => {
    button.addEventListener('click', function() {
        selectBread(button);
    });
});

const ProteinButtons = document.querySelectorAll('.Protein-button');
ProteinButtons.forEach(button => {
    button.addEventListener('click', function() {
        selectProtein(button);
    });
});

const CheeseButtons = document.querySelectorAll('.Cheese-button');
CheeseButtons.forEach(button => {
    button.addEventListener('click', function() {
        selectCheese(button);
    });
});

const ToppingsButtons = document.querySelectorAll('.Toppings-button');
ToppingsButtons.forEach(button => {
    button.addEventListener('click', function() {
        selectToppings(button);
    });
});

const CondimentButtons = document.querySelectorAll('.Condiment-button');
CondimentButtons.forEach(button => {
    button.addEventListener('click', function() {
        selectCondiment(button);
    });
});






function selectBread(button) {
    button.classList.toggle('selected');

    const selectedItem = button.textContent;

    if (button.classList.contains('selected') && !isItemAlreadySelected(selectedItem)) {
        const li = document.createElement('li');
        li.textContent = selectedItem;
        document.getElementById('custom-sub-list').appendChild(li);
    } 
    else if (!button.classList.contains('selected')) {
        const listItems = document.getElementById('custom-sub-list').getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent === selectedItem) {
                listItems[i].remove();
                break;
            }
        }
    }
}



    
function selectTopping(button) {
    button.classList.toggle('selected');

    const selectedItem = button.textContent;

    if (button.classList.contains('selected') && !isItemAlreadySelected(selectedItem)) {
        const li = document.createElement('li');
        li.textContent = selectedItem;
        document.getElementById('custom-sub-list').appendChild(li);
    } 
    else if (!button.classList.contains('selected')) {
        const listItems = document.getElementById('custom-sub-list').getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent === selectedItem) {
                listItems[i].remove();
                break;
            }
        }
    }
}


function selectSize(button) {
    button.classList.toggle('selected');

    const selectedItem = button.textContent;

    if (button.classList.contains('selected') && !isItemAlreadySelected(selectedItem)) {
        const li = document.createElement('li');
        li.textContent = selectedItem;
        document.getElementById('custom-sub-list').appendChild(li);
    } 
    else if (!button.classList.contains('selected')) {
        const listItems = document.getElementById('custom-sub-list').getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent === selectedItem) {
                listItems[i].remove();
                break;
            }
        }
    }
}


function selectProtein(button) {
    button.classList.toggle('selected');

    const selectedItem = button.textContent;

    if (button.classList.contains('selected') && !isItemAlreadySelected(selectedItem)) {
        const li = document.createElement('li');
        li.textContent = selectedItem;
        document.getElementById('custom-sub-list').appendChild(li);
    } 
    else if (!button.classList.contains('selected')) {
        const listItems = document.getElementById('custom-sub-list').getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent === selectedItem) {
                listItems[i].remove();
                break;
            }
        }
    }
}


function selectCheese(button) {
    button.classList.toggle('selected');

    const selectedItem = button.textContent;

    if (button.classList.contains('selected') && !isItemAlreadySelected(selectedItem)) {
        const li = document.createElement('li');
        li.textContent = selectedItem;
        document.getElementById('custom-sub-list').appendChild(li);
    } 
    else if (!button.classList.contains('selected')) {
        const listItems = document.getElementById('custom-sub-list').getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent === selectedItem) {
                listItems[i].remove();
                break;
            }
        }
    }
}


function selectCondiment(button) {
    button.classList.toggle('selected');

    const selectedItem = button.textContent;

    if (button.classList.contains('selected') && !isItemAlreadySelected(selectedItem)) {
        const li = document.createElement('li');
        li.textContent = selectedItem;
        document.getElementById('custom-sub-list').appendChild(li);
    } 
    else if (!button.classList.contains('selected')) {
        const listItems = document.getElementById('custom-sub-list').getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent === selectedItem) {
                listItems[i].remove();
                break;
            }
        }
    }
}