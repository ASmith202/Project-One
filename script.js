
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



function selectProtein(button) {
    let buttons = button.parentElement.getElementsByClassName('Protein-button');
    
    
    
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


function selectCheese(button) {
    let buttons = button.parentElement.getElementsByClassName('Cheese-button');
    
    
    
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



function selectCondiment(button) {
    let buttons = button.parentElement.getElementsByClassName('Condiment-button');
    

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



function selectTopping(button) {
    if (!breadSelected) {
        alert("Please select a bread option first!");
        return; 
    }

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

function isItemAlreadySelected(item) {
    const listItems = document.getElementById('custom-sub-list').getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].textContent === item) {
            return true; 
        }
    }
    return false;
}




let breadSelected = false; 
let sizeSelected = false;

function selectBread(button) {
    let buttons = button.parentElement.getElementsByClassName('Bread-button');

   
    if (!breadSelected) {
        let sizeButtons = document.querySelectorAll('.Size-button.selected');
        sizeButtons.forEach(function (sizeButton) {
            sizeButton.classList.remove('selected');
        });
        breadSelected = true;
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