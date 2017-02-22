var disqus_url = 'http://capefaeria.com';
var disqus_config = function () {
  this.page.url = '{{ site.url }}{{ page.url }}';
  this.page.identifier = '{{ site.url }} - {{ page.title }}';
};

(function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = '//cape-faeria.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();