let userlist = document.getElementById("userList");
const arr = [
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
]
arr.map(function (obj) {
    let {profileurl, name, email} = obj;
    let ele = document.createElement('div');
    ele.className = "userinfoContainer"
    ele.innerHTML = `
        <div class="img">
            <img src="${profileurl}" alt="Profile Image">
        </div>
        <div class="user-info">
            <h2>${name}</h2>
            <p>${email }</p>
        </div>`
    userlist.append(ele);
})
