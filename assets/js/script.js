const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 10000;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});


$(document).ready(function(){
  $('.tab-link').click( function() {
    
    var tabID = $(this).attr('data-tab');
    
    $(this).addClass('active').siblings().removeClass('active');
    
    $('#tab-'+tabID).addClass('active').siblings().removeClass('active');
  });
  });