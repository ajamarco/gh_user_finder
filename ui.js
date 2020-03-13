class UI{
    constructor(){
        this.profile = document.getElementById("profile");
    }
    //when a function is declared within a class, you cannot use 'function'
    //show profile in UI
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <h2>Showing stats for user ${user.login}</h2><br>
        <div class="row">
            <div class="col-md-3">
                <img src=${user.avatar_url} alt="" class="img-fluid mb-4">
                <a href=${user.html_url} class="btn btn-secondary btn-block mb-4" target="_blank">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-secondary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-secondary">Followers: ${user.followers}</span>
                <span class="badge badge-secondary">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member since: ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
        `;
    }

    showRepos(repos_arr){
        let output = '';
        repos_arr.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href=${repo.html_url} target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-secondary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-secondary">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        });

        //output repos
        document.getElementById('repos').innerHTML = output;
    }

    //clear profile div if there's nothing in the textfield
    clearProfile(){
        this.profile.innerHTML = '';
    }

    clearAlertMessages(){
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) currentAlert.remove();
    }


    showAlert(message, className ){
        //responsible for leave just one message
        this.clearAlertMessages();
        const div = document.createElement('div');
        div.className = className;

        //add text
        div.appendChild(document.createTextNode(message));
        //get parent
        const container = document.querySelector(".searchContainer");
        //get search box
        const search = document.querySelector(".search");
        // insert alert
        container.insertBefore(div, search);//insert a new child node div before the search node
        setTimeout(() => {
            this.clearAlertMessages();
        },2000);

    }

}