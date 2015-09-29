$(document).ready(function(){
 
  $(function() {
    $("#accordian").accordion();
  });

  function reload(){
    $('#selection').on('change', function(){
      $.ajax('/new',{
        method: "GET",
        data: {section: this.value},
        success: function(response){
          $('.container').empty().append(response)
          reload()
          $("#accordian").accordion();
        }
      })
    })
  }
  reload()
});