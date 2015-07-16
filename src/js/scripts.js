$(document).ready(function() {

  var $window = $(window);
  var $tabItem = $('.tabular .item');
  var $tabBreadcrumbs = $('[data-js="active-tab"]');
  var $shape = $('[data-js="shape"]');
  var $messageClose = $('[data-js="message-close"]');
  var $filters = $('[data-js="filters"]');
  var $filtersContainer = $('#find-more');

  $tabItem
    .tab({
      history: true,
      historyType: 'hash'
    })
  ;

  function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
  };

  function updatedTabBreadcrumb(elem) {
    var activeTab = capitalize($('.tab.active').attr('data-tab'));
    elem
      .text(activeTab + ' Award')
    ;
  };

  $tabItem
    .click(function() {
      updatedTabBreadcrumb($tabBreadcrumbs);
    })
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

  $(window).load(function() {
    updatedTabBreadcrumb($tabBreadcrumbs);
  });

});
