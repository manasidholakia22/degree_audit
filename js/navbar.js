// Loading Navbar
$(document).ready(function(){
  $.ajax({
    url:'navbar.html',
    success:function(data){
      $("#navarea").html(data);
    }
  });
});

$("#courses").click(function(e){
  e.preventDefault();
  alert("wtf");
  //window.location.href='courses.html';
});


function getPage(a){
  if(a=='prgstr'){
    $.ajax({
      url:'programme_str.html',
      success:function(data){
        $("#dataarea").html(data);
      }
    });
  }else if (a=='programme') {
    $.ajax({
      url:'programme.html',
      success:function(data){
        $("#dataarea").html(data);
      }
    });
  }
}
