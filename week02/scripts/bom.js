//reference to the input
const input = document.querySelector('#favchap');

//reference to the button
const button = document.querySelector('button');

//reference to the list
const list = document.querySelector('#list')



//create a click event listener for the Add Chapter button
button.addEventListener('click', function() {
    if (input.value.trim() !== '') { 

        //create a li element for each entry
        const li = document.createElement('li');
        
        // set the li text content to the input value
        li.textContent = input.value;

        //Create a delete button
        const deleteButton = document.createElement('button');

        //Populate the button textContent with a ❌
        deleteButton.textContent = '❌';
        
        //Append the li element variable with the delete button
        li.append(deleteButton);

        // Append the li element to the list
        list.append(li)
            
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
    });
            
        
        

    input.value = '';
    input.focus();

    }

}); 