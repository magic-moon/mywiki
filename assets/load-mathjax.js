window.MathJax = {
    tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']]
          },
};

(function () {
    var script = document.createElement('script');
    script.src = 'MathJax-master/es5/tex-chtml.js';
    script.async = true;
    document.head.appendChild(script);
})();