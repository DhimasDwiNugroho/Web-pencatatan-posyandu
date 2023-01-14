$(document).ready(function (){
  $('#form').submit(function (event) {
      event.preventDefault();
      var data = $('#form').serialize();
      $.post("alldata.php?action=create", data, function (respone) {
          alert("Data Berhasil Disimpan");
      });
  });
});