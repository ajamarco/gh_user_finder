class UI{
    constructor(){
        this.profile = document.getElementById("profile");
    }
    //when a function is declared within a class, you cannot use 'function'
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
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

    clearProfile(){
        this.profile.innerHTML = '';
    }

    showAlert(){
        
    }

}