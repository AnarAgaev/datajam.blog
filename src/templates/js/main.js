document.addEventListener(
"DOMContentLoaded",
function() {

    // Get element coordinates into document
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + window.pageYOffset,
            right: box.right + window.pageXOffset,
            bottom: box.bottom + window.pageYOffset,
            left: box.left + window.pageXOffset
        };
    }

    function showAnimationLoadingElements() {

        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const windowScrollTop = scrollTop + windowHeight;

        const animationElms = document
            .getElementsByClassName('animatedLoading');

        const elms = [];

        for (let i = 0; i < animationElms.length; ++i) {
            elms.push(animationElms[i]);
        }

        elms.forEach(function(el) {
            const elScrollTop = getCoords(el).top;

            if (windowScrollTop > elScrollTop) {
                el.classList
                    .remove('animatedLoading')
            }
        });
    };

    // Initial after loaded page
    showAnimationLoadingElements();

    window.addEventListener(
        'scroll',
        showAnimationLoadingElements
    );
});