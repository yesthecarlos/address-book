$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    const firstName = $("#fname").val();
    const lastName = $("#lname").val();
    const address = $("#address").val();
    const phone = $("#phone").val();
    console.log(firstName);

    $("#output").prepend(`<div><h3>${firstName}</h3><p class="${firstName}">${lastName}</p><p class="${firstName}">${address}</p><p class="${firstName}">${phone}</p></div>`);

    $("h3").first().click(function () {
      // this will open all, if they have same class name
      $(`p.${firstName}`).fadeToggle();
    });
  });
});


