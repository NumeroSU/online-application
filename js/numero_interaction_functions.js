//Get the github information (repositories, files and versions)
function onLogin(){
  _user = $("#github_user").prop("value");
  _pwd  = $("#github_pwd").prop("value");
  auth  = btoa(_user + ":" + _pwd);

  //Store the cookie
  document.cookie = "username=" + _user;
  document.cookie = "password=" + _pwd;

  $.get({
      url: "https://api.github.com/users/" + _user + "/repos",
      headers: { Authorization: "Basic " + auth },
      success: getRepos
  });
}
function getRepos(data){
  $("#github_repositories").prop('disabled', false);
  $("#github_repositories").html('<option value="" disabled selected>Repository</option>');
  $("#button_save_modal").prop('disabled', false);
  $("#button_load_modal").prop('disabled', false);
  //Create the list of repositories
  for( i = 0 ; i < data.length ; i++){
    $("#github_repositories").append("<option>" + data[i].name + "</option>");
  }
  //Create the list of files for the first repository
  repo = data[0].name;
  getFiles(data[0].name);
}
function getFiles(repo_name){
  $.get({
      url: "https://api.github.com/repos/" + _user + "/" + repo_name + "/contents",
      headers: { Authorization: "Basic " + auth },
      success: function(data){
        $("#github_files").prop('disabled', false);
        $("#github_files").html('<option value="" disabled selected>File</option>');

        for( i = 0 ; i < data.length ; i++){
          $("#github_files").append("<option>" + data[i].name + "</option>");
        }
        file = data[0].name;
        getFileVersions(file);
      }
  });
}
function getFileVersions(file_name){
  $.get({
      url: "https://api.github.com/repos/" + _user + "/" + repo + "/commits?path="+file_name,
      headers: { Authorization: "Basic " + auth },
      success: function(data){
        $("#button_load").prop('disabled', false);
        $("#github_version").prop('disabled', false);
        $("#github_version").html('<option value="" disabled selected>Version</option>');
        for( i = 0 ; i < data.length ; i++){
          $("#github_version").append("<option sha='" + data[i].commit.tree.sha + "'>" + data[i].commit.author.name + " - " + data[i].commit.message + "</option>");
        }
        sha = data[0].commit.tree.sha;
        console.log(sha);
        getFileContent(file, sha);
      }
  });
}
function getFileContent(file_name,commit_sha){
  //Get the tree at a commit
  $.get({
      url: "https://api.github.com/repos/" + _user + "/" + repo + "/git/trees/"+commit_sha,
      headers: { Authorization: "Basic " + auth },
      success: function(data){
        for (i = 0 ; i < data.tree.length ; i++){
          if (data.tree[i].path == file_name){
            var file_sha = data.tree[i].sha;
            _file_sha = file_sha;

            //Get the file at this state
            $.get({
              url: "https://api.github.com/repos/" + _user + "/" + repo + "/git/blobs/"+file_sha,
              headers: { Authorization: "Basic " + auth },
              success: function(data){
                content = atob(data.content);
                $("#file_content").html(content);
              }
            });
          }
        }
      }
  });
}
