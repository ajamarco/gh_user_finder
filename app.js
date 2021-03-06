//init github
const github = new GitHub;

//init UI
const ui = new UI;

//get the textbox
const searchUser = document.getElementById('searchUser');

//add a event listener to the textbox
searchUser.addEventListener("keyup", getUserInput);

function getUserInput(e){
    const userText = e.target.value;

    if (userText !== ""){
        github.getUser(userText).then(data => {
            if (data.profile.message === "Not Found"){
                ui.showAlert(`User ${userText} not found`, 'alert alert-danger');
                //show alert
            }else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    }else{
        ui.clearProfile();
    }
}