(function(){function g(a,b,d){for(var c=a.length;c--;)if(("function"===typeof d?d(a[c]):a[c])===b)return!0;return!1}function p(a,b){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=(new RegExp("[\\?&]"+b+"=([^&#]*)","i")).exec(a);return null==a?null:a[1]}function q(){b._dv_win.dvbsScriptsInternal||(b._dv_win.dvbsScriptsInternal=[]);b._dv_win.dvbsProcessed||(b._dv_win.dvbsProcessed=[]);b._dv_win._dvScripts||(b._dv_win._dvScripts=[]);var a=document.getElementsByTagName("script"),c;for(c in a)if(a[c].src){var d=
a[c].src,f=b._dv_win.dv_config.bs_regex||/\.doubleverify\.com:?[0-9]*\/dvbs_src\.js/,e=function(a){return a.script};if(d&&d.match(f)&&!g(b._dv_win.dvbsScriptsInternal,a[c],e)&&!g(b._dv_win.dvbsProcessed,a[c],e)&&!g(b._dv_win._dvScripts,a[c]))return a={src_location:d.substr(0,d.indexOf("/dvbs_src.js")),script:a[c],loadtime:Date.now?Date.now():(new Date).getTime(),injScripts:r},b._dv_win.dvbsScriptsInternal.push(a),a}return null}window.dvPerf={results:[],addTime:function(a){this.results.push({key:a,
value:Date.now?Date.now():(new Date).getTime()})}};var r=function(a){window.$frmId=Math.random().toString(36)+Math.random().toString(36);for(var b=[{src:"dv-match",main:6}],d=0;d<b.length;d++){var f=b[d],e=f.eval&&f.rate&&100*Math.random()<f.rate?f.eval:f.main,g=document.createElement("script");g.src="//"+a+"/"+f.src+e+".js";g.async=!0;document.body.appendChild(g)}}.toString(),b=window;try{b._dv_win=b._dv_win||b;b._dv_win.dv_config=b._dv_win.dv_config||{};var t=b._dv_win.dv_config.dvbsInternalURL||
"dvbs_src_internal85.js",h=q();if(h){var l=h.src_location+"/"+t,m=p(h.script.src,"tagformat");if(m&&"2"===m){var e=document.createElement("script");e.type="text/javascript";e.src=l;if(document.body)document.body.appendChild(e);else{var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}}else document.write('<script type="text/javascript" src="'+l+'">\x3c/script>')}else try{var k=b.location.protocol+"//rtb0.doubleverify.com/verify.js?ctx=818052&cmp=1619415&num=6&dvp_isLostImp=1&dvp_intErr=2";
(new Image).src=k}catch(a){}}catch(a){try{k=b.location.protocol+"//rtb0.doubleverify.com/verify.js?ctx=818052&cmp=1619415&num=6&dvp_isLostImp=1&dvp_intErr=1&dvp_jsErrMsg="+encodeURIComponent(a),(new Image).src=k}catch(c){}}})();
