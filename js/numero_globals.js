console.log(document.cookie);

var _user = null;
var _pwd  = null;
var auth  = null;
var repo = null;
var file = null;
var sha = null;
var content = null;
var _file_sha = null;
var api_ip = $("#serverIP").prop("value");

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if (getCookie("username")!="" && getCookie("password")!=""){
  _user = getCookie("username");
  _pwd  = getCookie("password");

  $("#github_user").prop("value", _user);
  $("#github_pwd").prop("value", _pwd);
  auth  = btoa(_user + ":" + _pwd);

  $.get({
      url: "https://api.github.com/users/" + _user + "/repos",
      headers: { Authorization: "Basic " + auth },
      success: getRepos
  });

}
