// Async DOMready
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}

r(function(){
    flickity();
});

// Initiate Flickity
function flickity() {
    const elem = document.querySelector( '.main-carousel' )
    const flkty = new Flickity( elem, {
        // options
        cellAlign: 'center',
        contain: true,
        draggable: '>1'
    })
    if (flkty.cells.length < 1) {
        flkty.unbindDrag()
    }
}
