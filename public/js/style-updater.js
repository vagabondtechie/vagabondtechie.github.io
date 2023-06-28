document.querySelectorAll('nav a').forEach(function(node, index) {
    /*node.addEventListener('click', function(event) {
         event.target.className = 'nav-item-highlighted';
    });*/
    node.addEventListener('click', toggleNavItemHighlight);
});

function toggleNavItemHighlight(event) {
    document.querySelectorAll('nav a').forEach((node) => {
        let className = node.getAttribute('class') || '';
        className = className.replace('nav-item-highlighted', '');
        node.setAttribute('class', className);
    });
    event.target.setAttribute('class', 'nav-item-highlighted');
}

