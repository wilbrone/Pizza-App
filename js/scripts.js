function Order(name,phone,size,crust,toppings ){
    this.Name = name;
    this.Phone = phone;
    this.Size = size;
    this.Crust = crust;
    this.Toppings = toppings;
}


$("#orders").click(function(){
    $(".addr").show();
});

$("form#new-order").submit(function(event) {
    event.preventDefault();

    // the data from the form
    var name = $("input#name").val();
    var phoneNo = $("input#phone").val();

    var crust = $("select#inputGroupSelect02").val();
    var size = $("select#inputGroupSelect01").val();
    var top = [];
    $.each($("input[name='topping']:checked"), function(){
        top.push($(this).val());
    });

    var street = $("input#streetName").val();
    var estate = $("input#estate").val();
    var apartment = $("input#apartment").val();
    var floor = $("input#floor").val();


    // Structure of th constructor ***Order(name,phone,size,crust,toppings )***
    // creating the object for the order made by the user
    var newOrder = new Order(name,phoneNo,size,crust,top);
    console.log(newOrder);

    billCalculation(newOrder);




    // this is for emptying the fields after clicking submit
    resetFields();

});


// CALCULATION FUNCTION
function billCalculation(newOrder){
    var sizePrice = parseInt(newOrder.Size.split(", ")[1]);
    console.log(sizePrice);

    var crustPrice = parseInt(newOrder.Crust.split(", ")[1]);
    console.log(crustPrice);

    
    var topp = newOrder.Toppings;
    console.log(topp);

    var toppingPrice = 0;

    // for getting toppings
    for(var i = 0; i < topp.length; i++ ){
        var unitPrice = parseInt(topp[i].split(", ")[1]);
  
        toppingPrice += unitPrice;
    }
    console.log(toppingPrice);

    var price = sizePrice + crustPrice + toppingPrice;
    console.log(price);
}

// for emptying the fields
function resetFields(){
    $("input#name").val("");
    $("input#phone").val("");
    $("input[name='topping']").prop('checked',false);
    $("select#inputGroupSelect02").val("");
    $("select#inputGroupSelect01").val("");
};