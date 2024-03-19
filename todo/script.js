let button = document.getElementById('addbutton')

button.addEventListener('click', function(){
    let input = document.getElementById('add').value
    let div = document.getElementById('divv')

    let newpara = document.createElement('p')
    let deletebutton = document.createElement('button')
    let editbutton = document.createElement('button')
    let doneButton = document.createElement('button');
    let editInput = document.createElement('input');



    newpara.textContent = input
    deletebutton.textContent = 'Delete'
    editbutton.textContent = 'Edit'

    deletebutton.setAttribute('id', 'deletebutton');
    editbutton.setAttribute('id', 'editbutton');
    doneButton.setAttribute('id', 'donebutton');

    div.append(newpara)
    div.append(deletebutton)
    div.append(editbutton)

    document.getElementById('add').value = ""

    deletebutton.addEventListener('click', function(){
        newpara.remove()
        deletebutton.remove()
        editbutton.remove()
        editInput.remove()
        doneButton.remove()
    })  

    editbutton.addEventListener('click', function() {

        editInput.type = 'text';
        editInput.value = newpara.textContent;


        div.insertBefore(editInput, deletebutton);

        doneButton.textContent = 'Done';
        div.insertBefore(doneButton, deletebutton);

        editbutton.style.display = 'none'; 

        doneButton.addEventListener('click', function() {
            newpara.textContent = editInput.value;

            div.removeChild(editInput);
            div.removeChild(doneButton);

            editbutton.style.display = 'inline-block';
        });
    })
    
})