
$( document ).ready(function() {
  $(".btn-play-sec").click(function(){
    $(".options-modal").removeClass("opacity-0 pointer-events-none");
  });
});
$( document ).ready(function() {
  $(".options-modal .modal-overlay,.options-modal .modal-close").click(function(){
    $(".options-modal ").addClass("opacity-0 pointer-events-none");
  });
});
// testimonials-slider 
$( document ).ready(function() {
    if($('.testimonials-slider').length) {
    $('.testimonials-slider').owlCarousel({
      autoplay: false,
      margin:20,
      loop:true,
      dots: true,
      nav: true,
      navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
      items: 2,
      responsive: {
        0: {
          items: 1,
        },
        992: {
          items: 2,
        }
      }
    });
  }
  });

  var sidebar = document.querySelector('.sidebar-set');
  var openIcon = document.querySelector('.menu-icon');
  var closeIcon = document.querySelector('.close-icon');

  openIcon.addEventListener("click", function (event) {
    sidebar.classList.add('translate-x-0');
    sidebar.classList.remove('-translate-x-full');
  });
  
  closeIcon.addEventListener("click", function (event) {
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('-translate-x-full');
  });


  // Helper window JS
  const target = document.querySelector('#helper-window')
  document.addEventListener('click', (event) => {
    const withinBoundaries = event.composedPath().includes(target)

    if (withinBoundaries) {
        var element = document.getElementById("removeclass");
    } else {
        var element = document.getElementById("removeclass");
        target.classList.remove("maximized");
    } 
  })

  $( "#helper-window" ).draggable({
    helper: function(){
      return $('<div></div>').css('opacity',0);
    },
    create: function(){
        var $this = $(this);
        $this.data('starttop',$this.position().top);
        $this.data('startleft',$this.position().left);
    },
    drag: function(event, ui){
        $(this).stop().animate({
            top: ui.helper.position().top,
            left: ui.helper.position().left
        },300,'easeOutCirc');
    }
  });

  $(document).on('click','#helper-window', function () {
      $(this).addClass('maximized');
  });
  
  $( "#helper-window" ).draggableTouch({useTransform:true});
  // End Helper window JS 