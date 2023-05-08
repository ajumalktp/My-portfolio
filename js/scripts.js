/* Description: Custom JS file */


(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);


function sendMail(){
    var params={
        name:document.getElementById("cname").value,
        email:document.getElementById("cemail").value,
        message:document.getElementById("cmessage").value
    }



const serviceID="service_xogd9zw";
const templateID="template_4zx80rp";

emailjs.send(serviceID,templateID,params)
.then((res)=>{
    document.getElementById("cname").value="";
    document.getElementById("cemail").value="";
    document.getElementById("cmessage").value="";
    console.log(res);
    let alert=document.getElementById("alertBox");
    alert.style.display="flex"
    
})

.catch((err)=>console.log(err));
}


// function find(){
//     let name=document.getElementById("cname").value
//     let email=document.getElementById("cemail").value
//     let message=document.getElementById("cmessage").value
//     let nameError=document.getElementById("namefeildA")
//     let emailError=document.getElementById("namefeildB")
//     let messageError=document.getElementById("namefeildC")
    
//     if(name==""){
//         nameError.style.display="block";
//     }else if(email==""){
//         emailError.style.display="block";
//     }else if(message==""){
//         messageError.style.display="block";
//     }else{
//         let myForm=document.getElementById("contactForm");
//          myForm.addEventListener("submit",(event)=>{
//         sendMail()
//         event.preventDefault()
// })
//     }
    
// }

function find(){
    let form=document.getElementById("contactForm")
    let name=document.getElementById("cname")
    let email=document.getElementById("cemail")
    let message=document.getElementById("cmessage")
    let nameError=document.getElementById("namefeildA")
    let emailError=document.getElementById("namefeildB")
    let messageError=document.getElementById("namefeildC")


    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        let nameValue=name.value;
        if(nameValue===""){
            nameError.style.display="block"
        }else{
            nameError.style.display="none"
        }

        let emailValue=email.value;
        if(emailValue===""){
            emailError.style.display="block"
        }else{
            emailError.style.display="none"
        }

        let messageValue=message.value;
        if(messageValue===""){
            messageError.style.display="block"
        }else{
            messageError.style.display="none"
        }
        
        if(nameError.style.display=="none"&&emailError.style.display=="none"&&messageError.style.display=="none"){
           sendMail()
        }else{
            
        }
    })
}