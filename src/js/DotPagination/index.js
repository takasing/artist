var $ = require('jquery');
var _ = require('underscore');

export default class DotPagination {
  constructor() {
    var dots = $('.c-pagination-dot__item')
    _.each(dots, function(e, i, all) {
      $(e).click(function() {
        $('.c-pagination-dot__item--active')
          .removeClass('c-pagination-dot__item--active')
        $(this).addClass('c-pagination-dot__item--active')

        var sections = $('.p-showcase__section')
        _.some(all, function(e, i) {
          if ($(e).hasClass('c-pagination-dot__item--active')) {
            $(sections[i]).removeClass('p-showcase__section--old-hat')
            return true
          }
          $(sections[i]).addClass('p-showcase__section--old-hat')
        })
      })
    })
  }
}
