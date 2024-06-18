const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('')
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value; 
deleteButton.textContext = 'X';
li.append(deleteButton);
list.append(li);

//create a click event listener for the Add Chapter button
button.addEventListener('click', function() {
    if (input.value.trim() !== '') 
        { 
            
        }
});