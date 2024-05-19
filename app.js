function addTodo() {
    var todoInp = document.getElementById('todo');
    var list = document.getElementById('todo-list');

    if (!todoInp.value) {
        alert("Please Enter Todo");
        return;
    }
    var newTodo = document.createElement('div');
    var todoText = document.createElement('p');
    todoText.innerHTML = todoInp.value;
    newTodo.append(todoText);

    newTodo.className = "todo-item";

    var editButton = document.createElement('button');
    var deleteBtn = document.createElement('button');

    editButton.innerHTML = "Edit";
    editButton.setAttribute("onclick", "editTodo(this)");
    newTodo.append(editButton);

    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "deleteTodo(this)");
    newTodo.append(deleteBtn);

    list.append(newTodo);
    todoInp.value = "";
}

function deleteTodo(deleteBtn) {
    deleteBtn.parentElement.remove();
}

function editTodo(editBtn) {
    var parentDiv = editBtn.parentElement;
    var textEle = parentDiv.querySelector('p');
    var editInput = parentDiv.querySelector('input');

    if (editInput) {
        // If edit mode is already active
        return;
    }

    editInput = document.createElement('input');
    editInput.setAttribute("type", "text");
    editInput.value = textEle.innerText;

    textEle.classList.add("hide");
    parentDiv.insertBefore(editInput, textEle);

    var saveButton = document.createElement('button');
    saveButton.innerHTML = "Save";
    saveButton.setAttribute("onclick", "saveEdit(this)");

    parentDiv.replaceChild(saveButton, editBtn);
}

function saveEdit(saveBtn) {
    var parentDiv = saveBtn.parentElement;
    var editInput = parentDiv.querySelector('input');
    var textEle = parentDiv.querySelector('p');

    textEle.innerText = editInput.value;
    textEle.classList.remove("hide");
    parentDiv.removeChild(editInput);

    var editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    editButton.setAttribute("onclick", "editTodo(this)");

    parentDiv.replaceChild(editButton, saveBtn);
}