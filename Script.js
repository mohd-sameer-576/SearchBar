
let userlist = document.getElementById("userList");
let searchInput = document.getElementById("searchInput");

const users = [
    {
        profileurl: "user-128-32.png",
        name: "John Doe",
        email: "john@gmail.com"
    },
    {
        profileurl: "user-128-32.png",
        name: "sameer",
        email: "sameer@gmail.com"
    },
    {
        profileurl: "user-128-32.png",
        name: "ibrahim",
        email: "ibrahim@gmail.com"
    },
    {
        profileurl: "user-128-32.png",
        name: "zubair",
        email: "zubbu@gmail.com"
    }
];

function renderUsers(arr) {
    userlist.innerHTML = ""; // Clear previous user list

    if (arr.length === 0) {
        let notFoundMessage = document.createElement('p');
        notFoundMessage.textContent = "User not found";
        notFoundMessage.className = "not-found-message";
        userlist.appendChild(notFoundMessage);
        return;
    }

    arr.forEach(function (obj) {
        let { profileurl, name, email } = obj;
        let ele = document.createElement('div');
        ele.className = "userinfoContainer";
        ele.innerHTML = `
            <div class="img">
                <img src="${profileurl}" alt="Profile Image">
            </div>
            <div class="user-info">
                <h2>${name}</h2>
                <p>${email}</p>
            </div>`;
        userlist.append(ele);
    });
}

renderUsers(users);

function filterUsers(e) {
    let searchValue = e.target.value;
    let filteredUsers = users.filter(obj => {
        return obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
               obj.email.toLowerCase().includes(searchValue.toLowerCase());
    });
    renderUsers(filteredUsers);
}

searchInput.addEventListener('input', filterUsers);
