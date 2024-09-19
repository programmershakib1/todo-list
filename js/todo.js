document.getElementById('task-btn')
    .addEventListener('click', function(){
        const inputValue = document.getElementById('input-value').value;

        const contentContainer = document.getElementById('content-container');
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.innerText = 'list';
        const td = document.createElement('td');
        td.innerText = inputValue;
        const button = document.createElement('button');
        button.setAttribute('id', 'clear');
        button.innerText = 'delete';
        button.classList.add('btn-primary');
        button.classList.add('rounded-lg');
        button.classList.add('p-1');
        button.classList.add('mt-2');
        button.classList.add('list-delete');

        tr.appendChild(th);
        tr.appendChild(td);
        tr.appendChild(button);
        contentContainer.appendChild(tr);
        const clear = document.getElementById('clear')
            .addEventListener('click', function(){
                clear.classList.add('hidden');
        });
});

// const listDelete = document.getElementsByClassName('list-delete').addEventListener('click', function(){
//     listDelete.classList.add('hidden');
// });

// document.getElementById('clear').addEventListener('click', function(){
//     console.log('click')
//     // const allClear = document.getElementsByClassName('all-clear');
//     // allClear.classList.add('hidden');
//     // allClear.classList.remove('hidden');
// });
// document.getElementById('clear-btn').addEventListener('click', function(){
//     console.log('click')
//     const allClear = document.getElementById('content-container');
//     // allClear.classList.add('hidden');
//     allClear.classList.remove('hidden');
// });