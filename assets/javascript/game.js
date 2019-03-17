$(document).ready(function() {

//Global variables:
    var price;
    var cash = Math.floor(Math.random() * (12 - 1)+1);
    var portfolio = Math.floor(Math.random() * (12 - 1)+1);
    var rplan = Math.floor(Math.random() * (12 - 1)+1);
    var savings = Math.floor(Math.random() * (12 - 1)+1);
    var totalAmount = 0;
    var wins;
    var losses;


    

//Click on PRICE button to generate random number - DONE
    $(".price").on('click', function(){
    var price = Math.floor(Math.random() * (120 - 19)+1);
    console.log(price);
//random number will be displayed besides PRICE button - DONE 
    $('.display-price').text(price + " M");
    })

    //house image on jumbotron will changing every time PRICE button is clicked - TO DO




//Click on every payment button to generate a randon number from 1 to 12 for -
    //Cash payment - DONE
    $(".btn-cash").on('click', function(){
    console.log(cash);
    alert("You have " + cash + " M on your checking account")
    totalAmount += cash;
    console.log("it was added " + cash + " on the totalAmount. Now it's " + totalAmount);
    })


    //Stocks payment - DONE
    $(".btn-port").on('click', function(){
    console.log(portfolio);
    alert("Your portfolio is worth " + portfolio + " M.")
    totalAmount += portfolio;
    console.log("it was added " + portfolio + " on the totalAmount. Now it's " + totalAmount);


    })

    
    //401K payment - DONE
    $(".btn-rplan").on('click', function(){
    console.log(rplan);
    confirm("Are you sure do you want to use your 401K?");
        if (confirm == true){
            //Add it to the sum
            console.log("401k added!")
            totalAmount += rplan;
            console.log("it was added " + rplan + " on the totalAmount. Now it's " + totalAmount);
                
        } else{

            console.log("401k cancelled")
        }
    })
    
    //Savings payment - DONE
    $(".btn-savings").on('click', function(){
    console.log(savings);
    alert("You are allowed to use 15% of your savings account: " + savings + " M.")
    totalAmount += savings;
    console.log("it was added " + savings + " on the totalAmount. Now it's " + totalAmount);

    })
    

    //Create a var (totalAmount) to sum the payment methods 
    console.log("the amount so far:" + totalAmount);
    $('.display-paid').text(totalAmount);

    //Compare totalAmount to price
        //IF totalAmount === price
            // Wins "Congratulations on your purchase!"
            // Properties: (increases by 1)
        //else 
            // Lost "Another buyer bought the property"
            // Auctions Lost: (increases by 1 )


    //payment variables are changing every time I click




});