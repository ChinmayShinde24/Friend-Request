var isStatus = document.querySelector("h5");
var addFriend = document.querySelector("#add");
var friend = 0;

addFriend.addEventListener("click", function () {
    if (friend == 0) {
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "green";
        friend = 1
    } else {
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "red";
        friend = 0
    }

})