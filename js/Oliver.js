$(document).ready(function(){
    $.ajax({
        url: "https://restcountries.com/v3.1/all",
        context: document.body,
        success: function(data){
          let capital = '';
          let language = '';
          var table_data = '';

          //ORDER
          function compare( a, b ) {
            if ( a.name.common < b.name.common ){
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

$(document).ready(function(){

    // code to read selected table row cell data (values).
    $("#countriTable").on('click','tr',function(){
         // get the current row
         var currentRow=$(this).closest("tr");
         var name=currentRow.find("td:eq(0)").text();
         $.ajax({
           url: "https://en.wikipedia.org/api/rest_v1/page/summary/"+name,
             success: function(data){
               bootbox.alert(name+"<br>"+data.extract_html);
             }
         });

    });
});

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("filterInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("countriTable");
  tr = table.getElementsByTagName("tr");
  column = document.getElementById("filterSelect").value;

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

function paginate(){
  $('table.paginated').each(function() {
    var currentPage = 0;
    var numPerPage = 10;
    var $table = $(this);
    $table.bind('repaginate', function() {
        $table.find('tbody tr').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
    });
    $table.trigger('repaginate');
    var numRows = $table.find('tbody tr').length;
    var numPages = Math.ceil(numRows / numPerPage);
    var $pager = $('<div class="pager"></div>');
    for (var page = 0; page < numPages; page++) {
        $('<span class="page-number"></span>').text(page + 1).bind('click', {
            newPage: page
        }, function(event) {
            currentPage = event.data['newPage'];
            $table.trigger('repaginate');
            $(this).addClass('active').siblings().removeClass('active');
        }).appendTo($pager).addClass('clickable');
    }
    $pager.insertBefore($table).find('span.page-number:first').addClass('active');
});
}
