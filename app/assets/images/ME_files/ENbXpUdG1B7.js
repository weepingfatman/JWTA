if (self.CavalryLogger) { CavalryLogger.start_js(["QqfDH"]); }

/**
 * Javascript Diff Algorithm
 *  By John Resig (http://ejohn.org/)
 *  Modified by Chu Alan "sprite"
 *
 * Released under the MIT license.
 *
 * More Info:
 *  http://ejohn.org/projects/javascript-diff-algorithm/
 *
 * @providesModule jsdiff
 * @preserve-header
 */__d("jsdiff",[],(function a(b,c,d,e,f,g){function h(k){var l=k;l=l.replace(/&/g,"&amp;");l=l.replace(/</g,"&lt;");l=l.replace(/>/g,"&gt;");l=l.replace(/"/g,"&quot;");return l;}function i(k,l){k=k.replace(/\s+$/,'');l=l.replace(/\s+$/,'');var m=j(k==""?[]:k.split(/\s+/),l==""?[]:l.split(/\s+/)),n="",o=k.match(/\s+/g);if(o==null){o=["\n"];}else o.push("\n");var p=l.match(/\s+/g);if(p==null){p=["\n"];}else p.push("\n");if(m.n.length==0){for(var q=0;q<m.o.length;q++)n+='<del>'+h(m.o[q])+o[q]+"</del>";}else{if(m.n[0].text==null)for(l=0;l<m.o.length&&m.o[l].text==null;l++)n+='<del>'+h(m.o[l])+o[l]+"</del>";for(var q=0;q<m.n.length;q++)if(m.n[q].text==null){n+='<ins>'+h(m.n[q])+p[q]+"</ins>";}else{var r="";for(l=m.n[q].row+1;l<m.o.length&&m.o[l].text==null;l++)r+='<del>'+h(m.o[l])+o[l]+"</del>";n+=" "+m.n[q].text+p[q]+r;}}return n;}function j(k,l){var m={},n={};for(var o=0;o<l.length;o++){if(m[l[o]]==null)m[l[o]]={rows:[],o:null};m[l[o]].rows.push(o);}for(var o=0;o<k.length;o++){if(n[k[o]]==null)n[k[o]]={rows:[],n:null};n[k[o]].rows.push(o);}for(var o in m)if(m[o].rows.length==1&&typeof n[o]!="undefined"&&n[o].rows.length==1){l[m[o].rows[0]]={text:l[m[o].rows[0]],row:n[o].rows[0]};k[n[o].rows[0]]={text:k[n[o].rows[0]],row:m[o].rows[0]};}for(var o=0;o<l.length-1;o++)if(l[o].text!=null&&l[o+1].text==null&&l[o].row+1<k.length&&k[l[o].row+1].text==null&&l[o+1]==k[l[o].row+1]){l[o+1]={text:l[o+1],row:l[o].row+1};k[l[o].row+1]={text:k[l[o].row+1],row:o+1};}for(var o=l.length-1;o>0;o--)if(l[o].text!=null&&l[o-1].text==null&&l[o].row>0&&k[l[o].row-1].text==null&&l[o-1]==k[l[o].row-1]){l[o-1]={text:l[o-1],row:l[o].row-1};k[l[o].row-1]={text:k[l[o].row-1],row:o-1};}return {o:k,n:l};}f.exports=i;}),null);