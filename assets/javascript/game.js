$(document).ready(function() {

//Global variables:
    var price = Math.floor(Math.random() * (120 - 19)+1);
    var cash = Math.floor(Math.random() * (12 - 1)+1);
    var portfolio = Math.floor(Math.random() * (12 - 1)+1);
    var rplan = Math.floor(Math.random() * (12 - 1)+1);
    var savings = Math.floor(Math.random() * (12 - 1)+1);
    var totalAmount = 0;
    var wins = 0;
    var losses = 0;

    
    
    //Click on PRICE button to generate random number - DONE
    $(".price").on('click', function(){
        $('.display-price').text(price + " M");
        price = parseInt(price);
        // console.log(typeof price);
        // console.log(price);
        // console.log(typeof totalAmount);

    //random number will be displayed besides PRICE button - DONE 
    })

    //house image on jumbotron will changing every time PRICE button is clicked - TO DO




    //Click on every payment button to generate a randon number from 1 to 12 for -
    //Cash payment - DONE
    $(".btn-cash").on('click', function(){
        console.log(cash);
        alert("You have withdrawn " + cash + " M from your checking account")
        totalAmount += cash;
        console.log("it was added " + cash + " on the totalAmount. Now it's " + totalAmount);
        $('.display-paid').text(totalAmount + " M");
            if (totalAmount > price){
                lose();
            } else if (totalAmount == price) {
                win();} 

    })


    //Stocks payment - DONE
    $(".btn-port").on('click', function(){
        console.log(portfolio);
        alert("You have withdrawn " + portfolio + " M from your stocks portfolio.")
        totalAmount += portfolio;
        console.log("it was added " + portfolio + " on the totalAmount. Now it's " + totalAmount);
        $('.display-paid').text(totalAmount + " M");
            if (totalAmount > price){
                lose();
            } else if (totalAmount == price) {
                win();} 

    })

    
    //401K payment - DONE
    $(".btn-rplan").on('click', function(){
        console.log(rplan);
        alert("You have withdrawn " + rplan + " M from your 401k.")
        totalAmount += rplan;
        console.log("it was added " + rplan + " on the totalAmount. Now it's " + totalAmount);
            


        // confirm("Are you sure do you want to use your 401K?");
        //     if (confirm == true){
        //         //Add it to the sum
        //         console.log("401k added!")
                    
        //     } else{

        //         console.log("401k cancelled")
        //     }


        $('.display-paid').text(totalAmount + " M");
            if (totalAmount > price){
                lose();
            } else if (totalAmount == price) {
                win();} 


    })
    
    //Savings payment - DONE
    $(".btn-savings").on('click', function(){
        console.log(savings);
        alert("You have withdrawn the allowed amount of 15% of your savings account: " + savings + " M.")
        totalAmount += savings;
        console.log("it was added " + savings + " on the totalAmount. Now it's " + totalAmount);
        $('.display-paid').text(totalAmount + " M");
            if (totalAmount > price){
                lose();
            } else if (totalAmount == price) {
                win();} 

    })
    

    //Create a var (totalAmount) to sum the payment methods - DONE
    //Display totalAmount on the page - DONE

    //STUCK
    //Compare totalAmount to price
        //IF totalAmount === price
            // Wins "Congratulations on your purchase!"
            // Properties: (increases by 1)
        //else 
            // Lost "Another buyer bought the property"
            // Auctions Lost: (increases by 1 )



    function reset(){
        var price = Math.floor(Math.random() * (120 - 19)+1);
        price = parseInt(price);
        console.log("Reseting price " + price);
        // console.log(typeof price);
        $('.display-price').text(price + " M");
        var cash = Math.floor(Math.random() * (12 - 1)+1);
        var portfolio = Math.floor(Math.random() * (12 - 1)+1);
        var rplan = Math.floor(Math.random() * (12 - 1)+1);
        var savings = Math.floor(Math.random() * (12 - 1)+1);
        totalAmount= 0;
        $(".display-paid").text(totalAmount + " M");
        } 

    function win(){
        alert("Congratulations on your purchase!");
        wins++; 
        $(".win").text(wins);
        reset();
        }

    function lose(){
        alert ("Another buyer bought the property.");
        losses++;
        $(".lost").text(losses);
        reset()
        }



});