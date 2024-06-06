document.getElementById('todoInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const newListItem = document.createElement('li');
        newListItem.innerHTML = document.getElementById('todoInput').value;
        document.getElementById('todoInput').value = '';
        document.getElementById('myTodos').appendChild(newListItem);
    }
});

document.getElementById('deleteAllBtn').addEventListener('click', function() {
    document.getElementById('myTodos').innerHTML = '';
});

function saveToDoList() {
    const todos = [];
    const todoItems = document.querySelectorAll('#myTodos li');
    todoItems.forEach((item) => {
        todos.push(item.textContent);
    });
    localStorage.setItem('todoList')
}