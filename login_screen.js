function adduser()
{
    user_name = document.getElementById("user_name");
    localStorage.setItem(user_name);
    window.location = "room_screen.html";

}

