(() => {
    // Loop through the list of todos
    const handleTodos = todos => {
        for (let i = 0; i < todos.length; i++) {
            renderTodo(todos[i], i);
        }
    };

    // Render each todo
    const renderTodo = (todo, i) => {
        const todosWrapper = document.getElementById("cardsWrapper");
        const todoCard = document.createElement("div");
        const header = document.createElement("div");
        const number = document.createElement("span");
        const completed = document.createElement("span");
        const title = document.createElement("p");
        const buttons = document.createElement("div");
        const deleteButton = document.createElement("button");
        const toggleCompleteButton = document.createElement("button");

        // Give class names
        todoCard.className = "card";
        header.className = "cardHeader";
        number.className = "cardNumber";
        buttons.className = "cardButtons";
        deleteButton.className = "deleteButton";
        toggleCompleteButton.className = "toggleCompleteButton";
        completed.className = todo.completed ? "complete" : "uncomplete";

        // Add content
        title.innerText = todo.title;
        number.innerText = "#" + (i + 1);
        completed.innerText = todo.completed ? "Completed" : "Uncompleted";
        toggleCompleteButton.innerText = todo.completed ? "Mark Uncomplete" : "Mark Complete";
        deleteButton.innerText = "Delete"

        // Set event handlers
        deleteButton.addEventListener("click", () => console.log("Delete todo with id:", todo.id));
        toggleCompleteButton.addEventListener("click", () => console.log("Toggle complete on todo with id:", todo.id));

        // Add elements to parent container
        header.appendChild(number);
        header.appendChild(completed);
        buttons.appendChild(toggleCompleteButton);
        buttons.appendChild(deleteButton);
        todoCard.appendChild(header);
        todoCard.appendChild(title);
        todoCard.appendChild(buttons);

        todosWrapper.appendChild(todoCard);
    };

    // Get the todos
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => handleTodos(data))
        .catch(err => console.log("An error occured when fetching the todos.", err));
})();


