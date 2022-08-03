function shuffle(e){let t,n=e.length;for(;0!=n;)t=Math.floor(Math.random()*n),n--,[e[n],e[t]]=[e[t],e[n]];return e}var result=nam.length>=nu.length?nam.reduce((function(e,t,n){return e.concat(t,nu[n])}),[]):nu.reduce((function(e,t,n){return e.concat(t,nam[n])}),[]),allname=shuffle(result.filter((function(e){return null!=e})));nam=shuffle(nam),nu=shuffle(nu);var Btn_To_Top=document.getElementById("GoToTop"),Btn_To_Bottom=document.getElementById("GoToBottom");function scrollFunction(){20<window.pageYOffset||20<document.documentElement.scrollTop||20<document.body.scrollTop?Btn_To_Top.style.display="block":Btn_To_Top.style.display="none"}function topFunction(){window.scrollTo({top:0,behavior:"smooth"})}function scrollToBottom(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}function openTab(e,t){for(var n,o=document.getElementsByClassName("tabcontent"),l=0;l<o.length;l++)o[l].style.display="none";for(n=document.getElementsByClassName("btntab"),l=0;l<n.length;l++)n[l].className=n[l].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}function getRandomInt(e,t){return Math.floor(Math.random()*(t-e))+e}function loadNames(){var n=document.getElementById("quantity").value;let l='<center><h2 style="font-family: math;">Tên ngẫu nhiên</h2></center>',c="";var a,d,r,u,s=[];l+='<ul class="list">';var m=document.getElementById("name_cloc").checked,i=document.querySelector('input[name="name_gtinh"]:checked').value;if(m)for(let t=0;t<n;t++){let t="all"===i?allname[getRandomInt(0,e.length)]:"Nam"===i?nam[getRandomInt(0,e.length)]:nu[getRandomInt(0,e.length)];l+="<li>"+t+"<li>",c+=t+"\n";let n=t.split(" "),o="";for(let e=1;e<n.length;e++)o+=e===n.length-1?n[e]:n[e]+" ";s.push([t,n[0],o,n[n.length-1]])}else for(let m=0;m<n;m++)l+="<li>"+(a=(d=e[getRandomInt(0,e.length)])+" "+(r=t[getRandomInt(0,t.length)])+" "+(u=o[getRandomInt(0,o.length)]))+"</li>",c+=a+"\n",s.push([a,d,r,u]);l+="</ul>",document.querySelector("#result").innerHTML=l;const y=document.querySelector("#txt");y.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(c)),y.setAttribute("download","NgauNhien.txt"),y.style.display="block";var g="Tên Đầy Đủ,Họ,Đệm,Tên\n";s.forEach((function(e){g+=e.join(","),g+="\n"}));const h=document.querySelector("#csv");h.href="data:text/csv;charset=utf-8,"+encodeURIComponent("\ufeff"+g),h.download="NgauNhien.csv",h.style.display="block",document.querySelector("#btncopyname").style.display="block",document.querySelector("#textcopy").innerText=c}function CopyName(){var e=document.getElementById("textcopy"),t=e.innerHTML.length,n=document.createElement("textarea");document.body.appendChild(n),n.value=e.innerHTML.replace(/<br\s*\/?>/gm,"\n"),n.select(),n.setSelectionRange(0,t),document.execCommand("copy"),document.body.removeChild(n),(n=document.getElementById("nameTooltip")).style.display="block",n.innerHTML="Đã copy",document.getElementById("userTooltip").style.display="none"}function nonAccentVietnamese(e){return(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e")).replace(/ì|í|ị|ỉ|ĩ/g,"i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y")).replace(/đ/g,"d")).replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g,"")).replace(/\u02C6|\u0306|\u031B/g,"")}function suggestions(){var t=document.getElementById("user_cloc").checked,n=document.querySelector('input[name="user_gtinh"]:checked').value,l=document.getElementById("tt_input");if(t){let t=("all"===n?allname[getRandomInt(0,e.length)]:"Nam"===n?nam[getRandomInt(0,e.length)]:nu[getRandomInt(0,e.length)]).split(" "),o=t[0]+t[t.length-1];l.value=nonAccentVietnamese(o).replace(/[^a-zA-Z]/g,"").replace(/\s/g,"")}else l.value=(nonAccentVietnamese(e[getRandomInt(0,e.length)])+nonAccentVietnamese(o[getRandomInt(0,o.length)])).replace(/[^a-zA-Z]/g,"").replace(/\s/g,"")}function padTo2Digits(e){return e.toString().padStart(2,"0")}function formatDate(e,t){if("dd/mm/yyyy"===t)return[padTo2Digits(e.getDate()),padTo2Digits(e.getMonth()+1),e.getFullYear()].join("/");if("dd/mm/yy"===t){var n=e.getFullYear().toString();return[padTo2Digits(e.getDate()),padTo2Digits(e.getMonth()+1),n[n.length-2]+n[n.length-1]].join("/")}return"dd/mm"===t?[padTo2Digits(e.getDate()),padTo2Digits(e.getMonth()+1)].join("/"):void 0}function randomDate(e,t){return new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))}function makeid(e){var t=document.querySelector('input[name="choice"]:checked').value,n=document.getElementById("tt").checked,o=document.getElementById("tt_random").checked,l="";if("birthday"!==t)for(var c="low"===t?"abcdefghijklmnopqrstuvwxyz0123456789":"up"===t?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789":"0123456789",a=c.length,d=0;d<e;d++)l+=c.charAt(Math.floor(Math.random()*a));else{let e=document.getElementById("format_choice").value;l+=formatDate(randomDate(new Date(1970,0,1),new Date),e).replaceAll("/","")}return o&&suggestions(),n?document.getElementById("tt_input").value+l:l}function loadUsers(){var e=document.getElementById("quantity_user").value,t=document.getElementById("len").value,n=document.getElementById("ext");let o='<center><h2 style="font-family: math;">User ngẫu nhiên</h2></center>',l="";var c=[];let a,d="",r="";if(o+='<ul class="list">',n.checked){r="Đầy đủ,Id,Đuôi,\n";var u=document.querySelector("#dotext").value;for(let n=0;n<e;n++)o+="<li>"+(a=(d=makeid(t))+u)+"</li>",l+=a+"\n",c.push([a,d,u])}else{r="Id,\n";for(let n=0;n<e;n++)o+="<li>"+(d=makeid(t))+"</li>",l+=d+"\n",c.push([d])}o+="</ul>",document.querySelector("#result_user").innerHTML=o;const s=document.querySelector("#txt_user");s.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(l)),s.setAttribute("download","NgauNhien.txt"),s.style.display="block",c.forEach((function(e){r+=e.join(","),r+="\n"}));const m=document.querySelector("#csv_user");m.href="data:text/csv;charset=utf-8,"+encodeURIComponent("\ufeff"+r),m.download="NgauNhien.csv",m.style.display="block",document.querySelector("#btncopyuser").style.display="block",document.querySelector("#textusercopy").innerText=l}function CopyUser(){var e=document.getElementById("textusercopy"),t=e.innerHTML.length,n=document.createElement("textarea");document.body.appendChild(n),n.value=e.innerHTML.replace(/<br\s*\/?>/gm,"\n"),n.select(),n.setSelectionRange(0,t),document.execCommand("copy"),document.body.removeChild(n),(n=document.getElementById("userTooltip")).style.display="block",n.innerHTML="Đã copy",document.getElementById("nameTooltip").style.display="none"}window.onscroll=function(){scrollFunction()};const checkbox=document.getElementById("ext");checkbox.addEventListener("change",(e=>{const t=document.getElementById("dotextlabel");var n=0!=document.getElementById("result_user").getElementsByClassName("list").length?document.getElementsByClassName("list")[0].getElementsByTagName("li"):[],o=document.getElementById("textusercopy"),l=document.getElementById("dotext").value,c=document.getElementById("quantity_user").value,a="",d=[];if(e.currentTarget.checked){t.style.display="block";for(let e=0;e<n.length;e++)n[e].innerText+=l;0!==o.innerHTML.length&&(o.innerHTML=o.innerHTML.replaceAll("<br>",l+"<br>")),a="Đầy đủ,Id,Đuôi,\n";for(let e=0;e<c;e++){var r=n[e].innerText;d.push([r,r.replaceAll(l,""),l])}}else{t.style.display="none";for(let e=0;e<n.length;e++)n[e].innerText=n[e].innerText.replaceAll(l,"");0!==o.innerHTML.length&&(o.innerHTML=o.innerHTML.replaceAll(l+"<br>","<br>")),a="Id,\n";for(let e=0;e<c;e++)d.push([n[e].innerText])}const u=document.querySelector("#txt_user");u.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(o.innerHTML.replaceAll("<br>","\n"))),u.setAttribute("download","NgauNhien.txt"),d.forEach((function(e){a+=e.join(","),a+="\n"}));const s=document.querySelector("#csv_user");s.href="data:text/csv;charset=utf-8,"+encodeURIComponent("\ufeff"+a),s.download="NgauNhien.csv"}));const checkboxtt=document.getElementById("tt");function onchangettrnd(){let e=document.getElementById("tt_input"),t=document.getElementById("btn_suggestion");document.getElementById("tt_random").checked?(e.disabled=!0,e.style.display="none",t.disabled=!0,t.style.display="none"):(e.disabled=!1,e.style.display="block",t.disabled=!1,t.style.display="block")}function onchangenamecloc(){let e=document.getElementById("name_choice");document.getElementById("name_cloc").checked?e.style.display="block":e.style.display="none"}function onchangeusercloc(){let e=document.getElementById("user_choice");document.getElementById("user_cloc").checked?e.style.display="block":e.style.display="none"}checkboxtt.addEventListener("change",(e=>{const t=document.getElementById("ttlabel"),n=document.getElementById("moredata"),o=document.getElementById("btn_suggestion"),l=document.getElementById("tt_random").checked;e.currentTarget.checked?t.style.display="block":t.style.display="none",e.currentTarget.checked&&!l?o.style.display="block":o.style.display="none",e.currentTarget.checked?n.style.display="block":n.style.display="none"})),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("tt").checked&&suggestions()})),document.getElementById("RC_choice").addEventListener("click",(function(e){if(e.target&&e.target.matches("input[type='radio']")){var t=document.getElementById("lblen"),n=document.getElementById("lbformat_choice");"birthday"===e.target.value?(t.style.display="none",n.style.display="block"):(t.style.display="block",n.style.display="none")}}));
