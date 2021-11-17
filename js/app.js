var Btn_To_Top=document.getElementById("GoToTop"),Btn_To_Bottom=document.getElementById("GoToBottom");function scrollFunction(){20<window.pageYOffset||20<document.documentElement.scrollTop||20<document.body.scrollTop?Btn_To_Top.style.display="block":Btn_To_Top.style.display="none"}function topFunction(){window.scrollTo({top:0,behavior:"smooth"})}function scrollToBottom(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}function openTab(e,t){for(var n,o=document.getElementsByClassName("tabcontent"),l=0;l<o.length;l++)o[l].style.display="none";for(n=document.getElementsByClassName("btntab"),l=0;l<n.length;l++)n[l].className=n[l].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}function getRandomInt(e,t){return Math.floor(Math.random()*(t-e))+e}function loadNames(){var n=document.getElementById("quantity").value;let l='<center><h2 style="font-family: math;">Tên ngẫu nhiên</h2></center>',c="";var d,a,u,s,m=[];l+='<ul class="list">';var r=document.getElementById("name_cloc").checked,i=document.querySelector('input[name="name_gtinh"]:checked').value;if(r)for(let t=0;t<n;t++){let t="all"===i?allname[getRandomInt(0,e.length)]:"Nam"===i?nam[getRandomInt(0,e.length)]:nu[getRandomInt(0,e.length)];l+="<li>"+t+"<li>",c+=t+"\n";let n=t.split(" "),o="";for(let e=1;e<n.length;e++)o+=e===n.length-1?n[e]:n[e]+" ";m.push([t,n[0],o,n[n.length-1]])}else for(let r=0;r<n;r++)l+="<li>"+(d=(a=e[getRandomInt(0,e.length)])+" "+(u=t[getRandomInt(0,t.length)])+" "+(s=o[getRandomInt(0,o.length)]))+"</li>",c+=d+"\n",m.push([d,a,u,s]);l+="</ul>",document.querySelector("#result").innerHTML=l;const y=document.querySelector("#txt");y.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(c)),y.setAttribute("download","NgauNhien.txt"),y.style.display="block";var g="Tên Đầy Đủ,Họ,Đệm,Tên\n";m.forEach(function(e){g+=e.join(","),g+="\n"});const p=document.querySelector("#csv");p.href="data:text/csv;charset=utf-8,"+encodeURIComponent("\ufeff"+g),p.download="NgauNhien.csv",p.style.display="block",document.querySelector("#btncopyname").style.display="block",document.querySelector("#textcopy").innerText=c}function CopyName(){var e=document.getElementById("textcopy"),t=e.innerHTML.length,n=document.createElement("textarea");document.body.appendChild(n),n.value=e.innerHTML.replace(/<br\s*\/?>/gm,"\n"),n.select(),n.setSelectionRange(0,t),document.execCommand("copy"),document.body.removeChild(n),(n=document.getElementById("nameTooltip")).style.display="block",n.innerHTML="Đã copy",document.getElementById("userTooltip").style.display="none"}function nonAccentVietnamese(e){return(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e")).replace(/ì|í|ị|ỉ|ĩ/g,"i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y")).replace(/đ/g,"d")).replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g,"")).replace(/\u02C6|\u0306|\u031B/g,"")}function suggestions(){var t=document.getElementById("user_cloc").checked,n=document.querySelector('input[name="user_gtinh"]:checked').value,l=document.getElementById("tt_input");if(t){let t=("all"===n?allname[getRandomInt(0,e.length)]:"Nam"===n?nam[getRandomInt(0,e.length)]:nu[getRandomInt(0,e.length)]).split(" "),o=t[0]+t[t.length-1];l.value=nonAccentVietnamese(o).replace(/[^a-zA-Z ]/g,"").replace(/\s/g,"")}else l.value=(nonAccentVietnamese(e[getRandomInt(0,e.length)])+nonAccentVietnamese(o[getRandomInt(0,o.length)])).replace(/[^a-zA-Z ]/g,"").replace(/\s/g,"")}function makeid(e){for(var t=document.getElementById("tt_random").checked,n=document.querySelector('input[name="choice"]:checked').value,o=document.getElementById("tt").checked,l="",c="low"===n?"abcdefghijklmnopqrstuvwxyz0123456789":"up"===n?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789":"0123456789",d=c.length,a=0;a<e;a++)l+=c.charAt(Math.floor(Math.random()*d));return t&&suggestions(),o?document.getElementById("tt_input").value+l:l}function loadUsers(){var e=document.getElementById("quantity_user").value,t=document.getElementById("len").value,n=document.getElementById("ext");let o='<center><h2 style="font-family: math;">User ngẫu nhiên</h2></center>',l="";var c=[];let d,a="",u="";if(o+='<ul class="list">',n.checked){u="Đầy đủ,Id,Đuôi,\n";var s=document.querySelector("#dotext").value;for(let n=0;n<e;n++)o+="<li>"+(d=(a=makeid(t))+s)+"</li>",l+=d+"\n",c.push([d,a,s])}else{u="Id,\n";for(let n=0;n<e;n++)o+="<li>"+(a=makeid(t))+"</li>",l+=a+"\n",c.push([a])}o+="</ul>",document.querySelector("#result_user").innerHTML=o;const m=document.querySelector("#txt_user");m.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(l)),m.setAttribute("download","NgauNhien.txt"),m.style.display="block",c.forEach(function(e){u+=e.join(","),u+="\n"});const r=document.querySelector("#csv_user");r.href="data:text/csv;charset=utf-8,"+encodeURIComponent("\ufeff"+u),r.download="NgauNhien.csv",r.style.display="block",document.querySelector("#btncopyuser").style.display="block",document.querySelector("#textusercopy").innerText=l}function CopyUser(){var e=document.getElementById("textusercopy"),t=e.innerHTML.length,n=document.createElement("textarea");document.body.appendChild(n),n.value=e.innerHTML.replace(/<br\s*\/?>/gm,"\n"),n.select(),n.setSelectionRange(0,t),document.execCommand("copy"),document.body.removeChild(n),(n=document.getElementById("userTooltip")).style.display="block",n.innerHTML="Đã copy",document.getElementById("nameTooltip").style.display="none"}window.onscroll=function(){scrollFunction()};const checkbox=document.getElementById("ext");checkbox.addEventListener("change",e=>{const t=document.getElementById("dotextlabel");e.currentTarget.checked?t.style.display="block":t.style.display="none"});const checkboxtt=document.getElementById("tt");function onchangettrnd(){let e=document.getElementById("tt_input"),t=document.getElementById("btn_suggestion");document.getElementById("tt_random").checked?(e.disabled=!0,e.style.display="none",t.disabled=!0,t.style.display="none"):(e.disabled=!1,e.style.display="block",t.disabled=!1,t.style.display="block")}function onchangenamecloc(){let e=document.getElementById("name_choice");document.getElementById("name_cloc").checked?e.style.display="block":e.style.display="none"}function onchangeusercloc(){let e=document.getElementById("user_choice");document.getElementById("user_cloc").checked?e.style.display="block":e.style.display="none"}checkboxtt.addEventListener("change",e=>{const t=document.getElementById("ttlabel"),n=document.getElementById("moredata"),o=document.getElementById("btn_suggestion");e.currentTarget.checked?t.style.display="block":t.style.display="none",e.currentTarget.checked?o.style.display="block":o.style.display="none",e.currentTarget.checked?n.style.display="block":n.style.display="none"}),document.addEventListener("DOMContentLoaded",function(){document.getElementById("tt").checked&&suggestions()});