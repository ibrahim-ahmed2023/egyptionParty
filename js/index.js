'use strict'

/*sideNav*/
$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},70)
   $("#home-content").animate({marginLeft :'250px'},70)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},70)
   $("#home-content").animate({marginLeft :'0px'},70)
})

/*scrolling when click on any a tag*/
$("#leftMenu a").click(function(){
    let idOfSection= $(this).attr("href");
    let positionOfSection = $(idOfSection).offset().top;
    // console.log(positionOfSection);
    $("html , body").animate({scrollTop:positionOfSection},1000);
})

/*slider*/
$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(600);
    $(this).next().slideToggle(600);
});

/*counter*/
window.onload = function() {
    countDownToTime("1 september 2024 3:03:00");
  }
;
  function countDownToTime(countTo) {
    let newDate = new Date(countTo); 
    newDate = (newDate.getTime() / 1000); // getTime Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
    let currentDate = new Date();
    currentDate = (currentDate.getTime()/ 1000);
    let timeDifference = (newDate - currentDate);
    let days = Math.floor( timeDifference / (24*60*60));
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
    $(".days").html(`${days} day`);
    $(".hours").html(`${hours} hours`);
    $(".minutes").html(`${ mins } minutes`);
    $('.seconds').html(`${ secs} seconds`)
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }



/*textarea*/
let maxLength = 100;
$('textarea').keyup(function() {
  let length = $(this).val().length;
  let AmountLeft = maxLength-length;
  if(AmountLeft <=0 )
            {
                 $("#chars").text("you write the max allowable chars");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});

// button event
$('button').click(function(){
    let usersArray = [];
   let yourNameInput = document.getElementById('name');
   let emailInput = document.getElementById('email');
   let commentInput = document.getElementById('comment');
//    console.log(yourName);
    let user = {
        code: yourNameInput.value,
        email: emailInput.value,
        desc: commentInput.value
    }
    localStorage.setItem('user' , JSON.stringify(user));
    usersArray.push(user);
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email == emailInput.value)
            $('button').before('<h6 class = "mt-5 text-danger"> you send us before </h6>')
    }
})

