define('bar',[],function(){

    function Bar($el, min, max) {
        "use strict";
        var min = min;
        var max = max;
        var el = $el;
        this.animationId;
        var dir = 1;

        var that = this;
        var setNewHeight = function () {
            "use strict";
            var currentHeight = el.height();
            if (currentHeight > max) dir = -1;
            if (currentHeight < min) dir = 1;
            el.height(currentHeight + (1 * dir));
        };

        this.repeatOften = function () {
            "use strict";
            setNewHeight();
            this.animationId = requestAnimationFrame(this.repeatOften.bind(that), null);
        }
    };

    Bar.prototype = {
        Start: function () {
            "use strict";
            this.animationId = requestAnimationFrame(this.repeatOften.bind(this), null);
        },

        Stop: function () {
            "use strict";
            cancelRequestAnimationFrame(this.animationId)
        }
    };

    return (Bar);
});