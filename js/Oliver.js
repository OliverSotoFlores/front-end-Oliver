$(document).ready(function(){
    $.ajax({ url: "https://restcountries.com/v3.1/all",
        context: document.body,
        success: function(data){
          var capital = '';

          for (var i = 0; i < data.length; i++) {
            console.log(data[i].name.common);
            
          }
        }
    });
});
