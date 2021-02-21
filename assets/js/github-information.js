function fetchGitHubInformation(event){
    var username = $("#gh-username").val();
    if(!username){
        $("#gh-user-data").html(`<h2>Please Enter GitHub username</h2>`);
        return;
    }

    $("gh-user-data").html(`<div id= "loader">
    <img src = "assets/IMAGES/loader.gif" alt="Loading..."/>
    </div>
    `);}