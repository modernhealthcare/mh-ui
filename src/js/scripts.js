$(document).ready(function() {

  var $window = $(window);
  var $tabItem = $('.tabular .item');
  var $shape = $('[data-js="shape"]');
  var $messageClose = $('[data-js="message-close"]');
  var $filters = $('[data-js="filters"]');
  var $filtersContainer = $('#find-more');

  $tabItem
    .tab()
  ;

  $shape.shape();

  $messageClose
    .on('click', function() {
      $(this)
        .closest('.message')
        .transition('fade')
      ;
    })
  ;

  function stickyFilters(elem, cntr, t, b) {
    elem
      .sticky({
        context: cntr,
        offset: t,
        bottomOffset: b
      })
    ;
  };

  if ($window.width() >= 768) {

    stickyFilters($filters, $filtersContainer, 16, 16);

  }

});
