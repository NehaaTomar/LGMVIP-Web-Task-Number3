function fun() {
  var a = [];
  var b = $("#Firstname").val();
  var c = $("#enteremail").val();
  var d = $("#phone").val();
  var e =$("#photos").val();
  var f = $('input[name="genders"]:checked').val();;
  var selected = new Array();
  $("input[type=checkbox]:checked").each(function () {
      selected.push(this.value);
  });
  var x = '<div class=s1>'+'<table><tr><td><p class="p"><strong>Name </strong>:'+`${b}`+'</p><p class="p"><strong>Email </strong>: '+`${c}`+'</p><p class="p"><strong>Phone </strong>:'+`${d}`+'</p><p class="p"><strong>Gender</strong> : '+`${f}`+'</p><p class="p"><strong>Skills</strong> : '+`${selected}`+'<td><img src="'+`${e}`+'"></td></tr></table></div>';
  $('#ss').append(x);
  $("#fo").trigger("reset");
}
