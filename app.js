// getting input of work from user
class todo {
    constructor(work, date, user) {
        this.work = work;
        this.date = date;
        this.user = user;
    }
}
// displaying into the UI what ever the user add to list with getting the added date
class UI {
    static displayList() {
        const itemsAvailable = [{
                work: 'I am going to marry ankita',
                date: 'Mar 13,2021',
                user: 'Neeschal',
            },
            {
                work: 'I am going to play',
                date: 'Mar 13,2022',
                user: 'ANkita',
            },
        ];
        const items = itemsAvailable;
        items.forEach(item => {
            UI.addItemToList(item);
        });
    }

    static addItemToList(item) {
        let checkbox = 0;
        const box = document.querySelector('#itemsBox');
        const tr = document.createElement('tr');
        tr.innerHTML = `
                    <td>
                        ${item.work}
                    </td>
                    <td>
                        ${item.date}
                    </td>
                    <td>
                        ${item.user}
                    </td>
                    <td>
                        <a href="#" id="${checkbox}" class="btn btn-primary btn-sm delete">X </a>
                    </td>
        `;
        box.appendChild(tr);
    }
    static clearForm() {
        document.querySelector('#inputedText').value = '';
        document.querySelector('#user').value = '';
    }
    static showAlert(message, className) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${className} mt-3`;
        alert.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const div = document.querySelector('.tableBox');

        container.insertBefore(alert, div);
        setTimeout(() => {
            alert.remove();
        }, 1500);
    }
}
// form validation and adding to list
document.addEventListener('DOMContentLoaded', () => {
    UI.displayList();
    document.querySelector('#send').addEventListener('click', e => {
        e.preventDefault();
        const work = document.querySelector('#inputedText').value;
        const user = document.querySelector('#user').value;
        let now = new Date();
        now = now.toDateString();
        // const user = document.querySelector('#getUser').value;
        const date = now;
        const todoList = new todo(work, date, user);

        if (work === '' || date === '' || user === '') {
            UI.showAlert('Fields are empty please fill them !', 'danger');
        } else {
            UI.addItemToList(todoList);
            UI.clearForm();
            UI.showAlert('Todo added sucessfully', 'success');
        }
    });

    function deleteItem() {
        const deleteItem = document.querySelectorAll('.delete');

        deleteItem.forEach(item => {
            item.addEventListener('click', () => {
                item.parentElement.parentElement.remove();
                console.log(item.id);
            });
        });
    }
    deleteItem();
    // deleting the items
});

// saving into the local storage and adding in UI them back

// event handeling