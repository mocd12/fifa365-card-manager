(function(){
  function load(src, next){
    var s = document.createElement('script');
    s.src = src;
    s.onload = next;
    s.onerror = function(){ console.error('Failed to load', src); };
    document.head.appendChild(s);
  }
  load('app-part1.js', function(){ load('app-part2.js'); });
})();
