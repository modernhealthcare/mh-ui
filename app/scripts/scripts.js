/* jshint ignore:start */

$(document).ready(function() {

  var $cardImage = $('[data-js="card-image"]');
  var $cardGallery = $('[data-js="card-gallery"]');
  var $cardGalleryFilters = $('[data-js="card-gallery-filters"]');
  var $cardGalleryShare = $('[data-js="card-gallery-share"]');

  $cardImage
    .dimmer({
      on: 'hover'
    })
  ;

  function stickyRail(elem, cntr, t, b) {
    elem
      .sticky({
        context: cntr,
        offset: t,
        bottomOffset: b
      })
    ;
  };

  if ($(window).width() >= 768) {

    stickyRail($cardGalleryFilters, $cardGallery, 0, 0);
    stickyRail($cardGalleryShare, $cardGallery, 8, 8);

  }

  $(window).on('resize', function() {

    if ($(window).width() >= 768) {

      stickyRail($cardGalleryFilters, $cardGallery, 0, 0);
      stickyRail($cardGalleryShare, $cardGallery, 8, 8);

    }

  }).trigger('resize');

});

/* jshint ignore:end */
