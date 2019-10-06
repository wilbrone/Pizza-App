var 


$("#orders").click(function(){
    $(".addr").show();
});

$("form#new-order").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    console.log(name);
    var phoneNo = $("input#phone").val();
    console.log(phoneNo);

    var topping = $("select#inputGroupSelect03").val();
    console.log(topping);
    var crust = $("select#inputGroupSelect02").val();
    console.log(crust);
    var size = $("select#inputGroupSelect01").val();
    console.log(size);

    var street = $("input#streetName").val();
    console.log(street);
    var estate = $("input#estate").val();
    console.log(estate);
    var apartment = $("input#apartment").val();
    console.log(apartment);
    var floor = $("input#floor").val();
    console.log(floor);
    // var newContact = new Contact(inputtedFirstName, inputtedLastName);

    // this is for emptying the fields after clicking submit
    resetFields();

});

function resetFields(){
    $("input#name").val("");
    $("input#phone").val("");
    $("select#inputGroupSelect03").val("");
    $("select#inputGroupSelect02").val("");
    $("select#inputGroupSelect01").val("");
};