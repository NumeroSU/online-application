//Update the github content on login
$("#login").click(onLogin);
$("#github_repositories").change(function(){
  $("#github_files").html("");
  repo = $(this).prop("value");
  $("#github_files").html("");
  getFiles(repo);
});
$("#github_files").change(function(){
  file = $(this).prop("value");
  $("#github_version").html("");
  getFileVersions($(this).prop("value"));
});
$("#github_version").change(function(){
  sha = $("option:selected", this).attr("sha");
  $("#file_content").html("");
  getFileContent(file, sha);
  console.log(_file_sha);
});

//Load and save configurations
$("#button_save_modal").click(function(){
  $("#make_commit_field").show();
  $("#load_commit_field").hide();
  $("#button_load").hide();
  $("#button_save").show();
  $("#modal_title").html("Save reconstruction");
  $(".modal").addClass("is-active");
});
$("#button_load_modal").click(function(){
  $("#make_commit_field").hide();
  $("#load_commit_field").show();
  $("#button_save").hide();
  $("#button_load").show();
  $("#modal_title").html("Load reconstruction");
  $(".modal").addClass("is-active");
});
$("#button_save").click(function(){
  $("#button_save").addClass("is-loading");
  $("#savemodal").addClass("is-active");
  sets = {
    "user": _user,
    "pwd": _pwd,
    "repo" : repo,
    "file": file,
    "sha": _file_sha
  }
  var message = $("#commit_message").prop("value");
  b4w.require("numero_main").save_state(message, sets);
  getFileVersions(file);
});
$("#button_load").click(function(){
  $("#button_save").prop('disabled', false);
  $("#button_delete").prop('disabled', false);
  $(this).addClass("is-loading");
  sets = {
    "user": _user,
    "pwd": _pwd,
    "repo" : repo,
    "file": file,
    "sha": _file_sha
  }
  b4w.require("numero_main").load_state(sets);
});
$("#button_load_default").click(function(){
  $(this).addClass("is-loading");
  b4w.require("numero_main").load_default();
});

//Close the modal
$(".modal-close").click(function(){
  $(".modal").removeClass("is-active");
});
$(".delete").click(function(){
  $(".modal").removeClass("is-active");
});
$("#button_cancel").click(function(){
  $(".modal").removeClass("is-active");
});

//Update the IP adress
$("#serverIP").change(function(){
  api_ip = $(this).prop("value");
  query_available_models(api_ip);
});
