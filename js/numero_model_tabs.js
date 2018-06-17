//Manage the first tabs
var buttons = ["#button_settings_login", "#button_settings_save", "#button_settings_models", "#button_settings_about"];
var divs    = ["#settings_login",        "#settings_save",        "#settings_models",        "#settings_about"];
$.each(buttons, function(i,button){
  $(button).click(function(){
    if( ! $(this).hasClass("is-active") ){
      //Display the tab as active and the others as inactive
      $(this).addClass("is-active");
      for (j = 0 ; j < buttons.length ; j++){
        if (i!=j){
          $(buttons[j]).removeClass("is-active");
        }
        else{
          $(buttons[j]).addClass("is-active");
        }
      }
      //Make the corresponding div appear and hide the others
      $(divs[i]).show();
      for (j = 0 ; j < divs.length ; j++){
        if (i!=j){
          $(divs[j]).hide();
        }
      }
    }
  });
});

//Manage the second tabs
var modelsTabs  = ["#button_models_available", "#button_models_loaded"];
var modelsMenus = ["#modelslist",              "#modelsloaded"];
$.each(modelsTabs, function(i,tab){
  $(tab).click(function(){
    if( ! $(this).hasClass("is-active") ){
      //Display the tab as active and the others as inactive
      $(this).addClass("is-active");
      for (j = 0 ; j < buttons.length ; j++){
        if (i!=j){
          $(modelsTabs[j]).removeClass("is-active");
        }
        else{
          $(modelsTabs[j]).addClass("is-active");
        }
      }
      //Make the corresponding div appear and hide the others
      $(modelsMenus[i]).show();
      for (j = 0 ; j < divs.length ; j++){
        if (i!=j){
          $(modelsMenus[j]).hide();
        }
      }
    }
  });
});

//Load the available models
function query_available_models(ip){
  $.get({
      url: ip + "list.csv",
      success: function(data){
        var models = CSVToArray(data);
        for (var i = 0 ; i < models.length - 1; i++){
          var id = models[i][0].split(".")[0].trim();
          var prefix = '<a id="' + id + '" class="model_button panel-block"><span class="panel-icon"><i class="fas fa-cube" aria-hidden="true"></i></span>';
          $("#modelslist").append(prefix + id + '</a>');
        }
      }
  });
}
query_available_models(api_ip);
