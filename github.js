class GitHub{
    constructor(){
        this.client_id = "5a4f643ffeed3fbebf27";
        this.client_secret = '46f2e0cc0a8d85eb6662d39321e904ef5815097e';
        this.repos_count = 6;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
             profile, //we want an object with the 'profile' key. Since the key have the same name as the variable we just need to call this
             repos
        }

    }
}