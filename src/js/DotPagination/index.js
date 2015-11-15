"use strict";

import $ from "jquery";
import _ from "underscore";

export default class DotPagination {
    constructor() {
        var dots = $(".c-pagination-dot__item");
        _.each(dots, function(ele, index, all) {
            $(ele).click(function() {
                $(".c-pagination-dot__item--active")
                    .removeClass("c-pagination-dot__item--active");
                $(ele).addClass("c-pagination-dot__item--active");

                var sections = $(".p-showcase__section");
                _.some(all, function(e, i) {
                    if ($(e).hasClass("c-pagination-dot__item--active")) {
                        $(sections[i]).removeClass("p-showcase__section--old-hat");
                        return true;
                    }
                    $(sections[i]).addClass("p-showcase__section--old-hat");
                });
            });
        });
    }
}
