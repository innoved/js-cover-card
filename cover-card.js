"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function ($) {
  'use strict';

  var InnovedCoverCard = function InnovedCoverCard() {
    //public - remove overflow hidden when dropdown is activated
    this.positionDropdown = function (container) {
      $(container + " .dropdown").on("show.bs.dropdown", function () {
        if (!$(this).hasClass('bootstrap-select')) {
          $(container).css('overflow', 'visible');
          $('.cover-card-under-content').css('overflow', 'visible');
        }
      });
      $(container + " .dropdown").on("hide.bs.dropdown", function () {
        if (!$(this).hasClass('bootstrap-select')) {
          $(container).css('overflow', 'hidden');
          $('.cover-card-under-content').css('overflow', 'hidden');
        }
      });
    }; //public


    this.showCard = function (_onComplete) {
      $('.cover-card').css('display', 'block');
      TweenMax.to($('.cover-card'), 0.6, {
        x: '0%',
        ease: Power3.easeOut,
        onComplete: function onComplete() {
          $('.cover-card-holder').css('overflow', 'visible');
          $('.cover-card-under-content').css('overflow', 'hidden');
          $('html').addClass('cover-card-is-open');

          if (_onComplete != undefined) {
            if (typeof _onComplete == 'string' || _onComplete instanceof String) {
              eval(_onComplete);
            } else if (typeof _onComplete == 'function') {
              _onComplete();
            }
          }
        }
      });
      this.setUnderContentHeight();
    }; //public


    this.hideCard = function () {
      $('.cover-card').css('height', '100%');
      TweenMax.to($('.cover-card'), 0.6, {
        x: '100%',
        ease: Power1.easeOut,
        onComplete: function onComplete() {
          $('.cover-card').css('display', 'none');
        }
      });
      $('.cover-card-holder').css('overflow', 'hidden');
      $('.cover-card-under-content').css({
        'height': 'auto',
        'overflow': 'visible',
        'visibility': 'visible'
      });
      $('html').removeClass('cover-card-is-open');

      if ($('.cover-card-holder .dropdown').length) {
        this.positionDropdown('.cover-card-holder');
      }
    }; //public - sets the height of the content under the cover card to match for smooth transitions


    this.setUnderContentHeight = function () {
      TweenMax.to($('.cover-card-under-content'), 1, {
        height: $('.cover-card-content').height() + 65 + 'px',
        ease: Power1.easeOut
      });
    };
  }; //return the object for global use


  $.innovedCoverCard = function () {
    return new InnovedCoverCard();
  };
})(jQuery); //export for package


var _default = $.innovedCoverCard();

exports.default = _default;
