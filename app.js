//init github
const github = new GitHub;


//get the textbox
const searchUser = document.getElementById('searchUser');

//add a event listener to the textbox
searchUser.addEventListener("keyup", getUserInput);

function getUserInput(e){
    const userText = e.target.value;

    if (userText !== ""){
        github.getUser(userText).then(data => {
            if (data.profile.message === "Not Found"){
                //show alert
            }else{
                console.log(data.profile);
            }
        });
    }else{
        //clear profile
    }
}