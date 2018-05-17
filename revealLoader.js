import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealLoader {
    constructor(els, offset, overflow) {
        this.itemsToReveal = $(els);
        this.offsetPercentage = offset;
        this.overFlow = $(overflow);

        this.hideInitially();
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        var that = this;

        this.itemsToReveal.each(function() {
            var currentItem = this;

            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass("reveal-item-is-visible");
                },
                offset: that.offsetPercentage
            });
        });
    }

    loadProjects() {
        var that = this;

        this.itemsToReveal.each(function() {
            var currentItem = this;

            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass("reveal-item-is-visible");
                },
                offset: that.offsetPercentage,
                context: that.overFlow
            });
        });
    }
}

export default { 
    load(els, offset) {
        this.reveal = new RevealOnScroll(els, offset);
        this.reveal.createWaypoints();
    },
    loadProjects(els, offset, context) {
        this.project = new RevealOnScroll(els, offset, context);
        this.project.loadProjects();
    }
}