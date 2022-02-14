showed = 0;

//Fill the table
$(document).ready(function(){

    var options = "";
    table = document.getElementById("countriTable");
    tr = table.getElementsByTagName("tr");
    th = tr[0].getElementsByTagName("th");
    for (var i = 0; i < th.length-1; i++) {
      options += "<option value="+i+">"+th[i].innerHTML+"</option>"

    }

    $("#filterSelect").append(options)
    $.ajax({
        url: "https://restcountries.com/v3.1/all",
        dataType: "json",
        contentType: "application/json",
        context: document.body,
        success: function(data){
          var capital = '';
          var language = '';
          var table_data = '';

          //ORDER
          function compare( a, b ) {
            if ( a.name.official < b.name.official ){
              return -1;
            }
            if ( a.last_nom > b.last_nom ){
              return 1;
            }
            return 0;
          }
          data.sort( compare );

          for (var i = 0; i < data.length; i++) {



            //Check Capital
            if (data[i].capital=="") {
              capital = "No capital to display";
            }else {
              capital = data[i].capital;
            }
            //Check for Languages
            $.each(data[i].languages, function(index,data){
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

//bootbox
$(document).ready(function(){

    // code to read selected table row cell data (values).
    $("#countriTable").on('click','tr',function(){
         // get the current row
         var currentRow=$(this).closest("tr");
         var name=currentRow.find("td:eq(0)").text();
         $.ajax({
           url: "https://en.wikipedia.org/api/rest_v1/page/summary/"+name,
             success: function(data){
               bootbox.alert({
                  size: "large",
                  closeButton: false,
                  title: name,
                  message: data.extract_html,
                  callback: function(){ /* your callback code */ }
              })
             }
         });

    });
});

//Filter
$("#filterInput").on("keyup",function filter() {

  if(column = document.getElementById("filterSelect").value == -1){
    var value = $(this).val().toLowerCase();
    var filter = $("#countriTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
    if ($("tr:visible").length == 0 && showed == 0) {
      bootbox.alert("No data to display");
      showed = 1;
    }else {
      if ($("tr:visible").length == 0) {
      }else {
        showed = 0;
      }
    }
  }else {

  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("filterInput");
  column = document.getElementById("filterSelect").value;
  var cont = 0;
  if(input.value.length >= 3){
  filter = input.value.toUpperCase();
  table = document.getElementById("countriTable");
  tr = table.getElementsByTagName("tr");
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[column];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
        cont++;
      }
    }
  }
  if (cont == tr.length-1 && showed == 0) {
    bootbox.alert("No data to display");
    showed = 1;
  }else{
    if (cont == tr.length-1) {
    }else {
      showed = 0;
    }
  }


}else {
  filter = "";
  table = document.getElementById("countriTable");
  tr = table.getElementsByTagName("tr");
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[column];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
}
});
