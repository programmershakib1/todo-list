let count = 0;
document.getElementById('task-btn')
    .addEventListener('click', function(){
        const inputValue = document.getElementById('input-value').value;
        count += 1;
        const todoList = document.getElementById('content-container');
        todoList.innerHTML += `
            <div class="flex justify-between space-y-3">
                <p>${count}</p>
                <p>${inputValue}</p>
                <button class="btn btn-xs delete-btn btn-warning">delete</button>
            </div>
        `
        document.getElementById("input-value").value = "";

        const deleteButton = document.getElementsByClassName('delete-btn');

        for (const button of deleteButton) {
            button.addEventListener("click", function (e) {
              e.target.parentNode.style.display = "none";
            });
        }
});

document.getElementById("clear-btn").addEventListener("click", function () {
    document.getElementById("content-container").style.display = "none";
});
