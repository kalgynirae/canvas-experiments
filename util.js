// Relative mouse input from <http://stackoverflow.com/a/5932203>
function relMouseCoords(event, element){
        var totalOffsetX = 0;
        var totalOffsetY = 0;
        var canvasX = 0;
        var canvasY = 0;
        do {
            totalOffsetX += element.offsetLeft;
            totalOffsetY += element.offsetTop;
        } while(element = element.offsetParent);
        canvasX = event.pageX - totalOffsetX;
        canvasY = event.pageY - totalOffsetY;
        return {x: canvasX, y: canvasY};
}
