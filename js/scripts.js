// constructor for the order
function Order(name,phone,size,crust,toppings){
    this.Name = name;
    this.Phone = phone;
    this.Size = size;
    this.Crust = crust;
    this.Toppings = toppings;
    this.Addresses = [];

};

// constructor for the address
function Address(street,estate,apartment,floor){
    this.Street = street;
    this.Estate = estate;
    this.Apartmant = apartment;
    this.Floor = floor;
};


// ON SIZE SELECTION
var siz;
$('#inputGroupSelect01').click(function(){
    siz = $("select#inputGroupSelect01").val().split(", ")[0];
    console.log(siz);

    if(siz == "Small"){
        $('.none').hide();

        $('.sml').show();
        $('.mdms').hide();
        $('.lrg').hide();

        
    }else if(siz == "Medium"){
        $('.none').hide();

        $('.sml').hide();
        $('.mdms').show();
        $('.lrg').hide();

    }else if(siz == "Large"){
        $('.none').hide();

        $('.sml').hide();
        $('.mdms').hide();
        $('.lrg').show();

    }else{
      alert("What Pizza size would you like...!?");  
    };


});




$("#orders").click(function(){
    alert("Our Delivery fee is KSh.200");
    $(".addr").show();
    $(".addrss").show();
});

// form submission event
$("form#new-order").submit(function(event) {
    event.preventDefault();



    // the data from the form
    var name = $("input#name").val();
    var phoneNo = $("input#phone").val();

    var crust = $("select#inputGroupSelect02").val();
    console.log(crust);
    var size = $("select#inputGroupSelect01").val();
    console.log(size);
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


    // structure for the constructor ***Address(street,estate,apartment,floor)***
    // creating the object for the address given for delivery
    var newAddress = new Address(street,estate,apartment,floor);
    console.log(newAddress);
    newOrder.Addresses.push(newAddress);


    billCalculation(newOrder);

    displayData(newOrder);

    // putting the orders into an array
    var totalOrders = [];
    totalOrders.push(newOrder);
    console.log(totalOrders);


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
    
    function deliveryFee(){
        var delivery = newOrder.Addresses;
        console.log(delivery);
        var deliveryPrice;

        if(delivery[0].Estate==null || delivery[0].Estate=="" && delivery[0].Street==null || delivery[0].Street=="" && delivery[0].Apartmant==null || delivery[0].Apartmant=="" && delivery[0].Floor==null || delivery[0].Floor==""){
            deliveryPrice = 0;
            return deliveryPrice;
        }else{
            deliveryPrice = 200;
            return deliveryPrice;
        };
    }

    var deliveryTag = deliveryFee();
    console.log(deliveryTag);

    var price = sizePrice + crustPrice + toppingPrice + deliveryTag;
    console.log(price);

    // total
    $("#total").text(price);

}



// Structure of th constructor ***Order(name,phone,size,crust,toppings )***
// function for displaying  data
function displayData(newOrder){
    var name = newOrder.Name;
    var phne = newOrder.Phone;

    var sze = newOrder.Size.split(", ")[0];
    var szePrc = newOrder.Size.split(", ")[1];

    var crst = newOrder.Crust.split(", ")[0];
    var crstPrc = newOrder.Crust.split(", ")[1];

    var toppngs;
    var toppngsPrc;

    var tops = newOrder.Toppings;
    
    tops.forEach(function(topps) {
        toppngs = topps.split(", ")[0];
        toppngsPrc = topps.split(", ")[1]; 
        // displaying the list of arrays
        $("ul#new-topping").append("<li><span class=''>" + toppngs + " " + " @KSh." + toppngsPrc + "</span></li>");
    });

    // print outs
    $("#new-name").text(name);
    $("#new-phone").text(phne);
    $("#new-size").text(sze + " @KSh." + szePrc);
    $("#new-crust").text(crst + " @KSh." + crstPrc);

    // printing the address
    var ad = newOrder.Addresses;
    $("#new-estate").text(ad[0].Estate);
    $("#new-street").text(ad[0].Street);
    $("#new-building").text(ad[0].Apartmant);
    $("#new-floor").text(ad[0].Floor);

}


// for emptying the fields
function resetFields(){
    $("input#name").val("");
    $("input#phone").val("");
    $("input[name='topping']").prop('checked',false);
    $("select#inputGroupSelect02").val("");
    $("select#inputGroupSelect01").val("");
};