document.getElementById('mainBtn').addEventListener('click', fetchUser)


var container = document.getElementById('container')

async function fetchUser() {
    let response = await fetch('https://reqres.in/api/users');
    response = await response.json();
    const users = response.data;
    updateUsers(users);
}


function updateUsers(arr) {
    arr.map((item) => {
        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="img_container"> 
            <img src="${item.avatar}" alt="">
        </div>
        <p>${item.first_name + " " + item.last_name}</p>
        <p>${item.email}</p>
        `
        container.appendChild(card);
    })
}