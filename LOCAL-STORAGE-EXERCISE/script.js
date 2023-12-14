localStorage.setItem('users', JSON.stringify([]))
let userInfo = document.getElementById('userInfo')
document.querySelector('form').addEventListener('submit',
    function (e) {
        e.preventDefault();
        let name = document.getElementById('name').value
        let age = document.getElementById('age').value
        if (!name || !name) {
            return alert("all fields are required")
        }
        let users = JSON.parse(localStorage.getItem('users'));
        let newUser = {
            name, age
        }
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert("user added successfully")
        document.getElementById('name').value = ""
        document.getElementById('age').value = ""
    }

)


function showData() {
    let users = JSON.parse(localStorage.getItem('users'));
    users.map((item, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.age}</td>
        `
        document.getElementById('tablebody').appendChild(tr)
    });

}


function openUserInfoContainer() {
    userInfo.classList.add("activeUserInfo")
    showData();
}


function closeUserInfoContainer() {
    userInfo.classList.remove("activeUserInfo")
}