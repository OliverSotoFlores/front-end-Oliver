$(document).ready(function(){
    $.ajax({ url: "https://restcountries.com/v3.1/all",
        context: document.body,
        success: function(data){
          let capital = '';
          let language = '';

          var table_data = '';
          for (var i = 0; i < data.length; i++) {
            //Check Capital
            if (data[i].capital=="") {
              capital = "No capital to display";
            }else {
              capital = data[i].capital;
            }

            //Check for Languages
            $.each(data[i].languages, function(data){
              language += data + ", ";
            })
            if (language=="") {
              language = "No Language to display";
            }else {
              language = language.substring(0 , language.length-2);
            }

            table_data += '<tr>';
            table_data += '<td>'+data[i].name.common+'</td>';
            table_data += '<td>'+capital+'</td>';
            table_data += '<td>'+data[i].region+'</td>';
            table_data += '<td>'+language+'</td>';
            table_data += '<td>'+data[i].population+'</td>';
            table_data += '<td><img src="'+data[i].flags.png+'" alt="Italian Trulli"></td>';
            table_data += '</tr>';
            language = "";
          }
          $("#countriTable").append(table_data);
        },
        error: function(d){
            alert("404. Please wait until the File is Loaded.");
        }
    });
});
