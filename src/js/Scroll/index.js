"use strict";

import $ from "jquery";
import _ from "underscore";

export default class Scroll {
    constructor() {
        let sections = $(".p-showcase__section");
        let arrowUp = $(".p-showcase__arrow--up")[0];
        let arrowDown = $(".p-showcase__arrow--down")[0];
        $(arrowUp).bind("touchstart", function() {
            console.log("up touched");
            // $(arrowDown).show();
        });
        $(arrowDown).bind("touchstart", function() {
            console.log("down touched");
            $(arrowUp).show();

            let nextActive;
            _.some(sections, function(e, i) {
                if ($(e).hasClass("p-showcase__section--old-hat")) {
                    return false;
                }
                if ($(e).hasClass("p-showcase__section--active")) {
                    $(e).removeClass("p-showcase__section--active");
                    $(e).addClass("p-showcase__section--old-hat");
                    nextActive = i + 1;
                }
                if (!nextActive) {
                    return false;
                }
                if (i === sections.length - 1) {
                    $(arrowDown).hide();
                    return true;
                }
                if (i === nextActive) {
                    $(e).addClass("p-showcase__section--active");
                    return true;
                }
            });
        });
    }
}
