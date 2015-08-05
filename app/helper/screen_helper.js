define(["helper/viewportSize"],function() {

    /**
     * This helper is used to calculate view width and height
     */
    return function() {
        var VIEWPORT_WIDTH = viewportSize.getWidth();
        var VIEWPORT_HEIGHT = viewportSize.getHeight();

        /**
         *
         * @param element
         * @returns object with width and height property
         */
        this.getViewSize = function(element) {
            var result = {};
            var height = 0, width = 0;
            var $element = $("#" + element);
            var offset = $element.offset();
//            var containerWidth = VIEWPORT_WIDTH - offset.left;
//            var containerHeight = VIEWPORT_HEIGHT - offset.top;
//            var aspectRatio = containerWidth / containerHeight;

//            if (aspectRatio !== (4/3)) {
//                if ( (containerHeight/3*4) <= containerWidth ) {
//                    height  = containerHeight;
//                    width = height / 3 * 4
//                } else {
//                    width = containerWidth;
//                    height = width / 4 * 3
//                }
//            }
            height  = $element.height();
            width = height / 3 * 4
            result.width = width;
            result.height = height;
            return result;
        }

        this.getElementSize = function(element) {
            var result = {};
            result.width = $("#" + element).width();
            result.height =  $("#" + element).height();
            return result;
        }

        this.getViewPortHeight = function() {
            return VIEWPORT_HEIGHT;
        }
    }
})