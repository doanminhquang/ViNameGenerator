function shuffle(n) {
  let l,
    i = n.length;
  for (; 0 != i; )
    (l = Math.floor(Math.random() * i)), i--, ([n[i], n[l]] = [n[l], n[i]]);
  return n;
}
function onlyUnique(n, l, i) {
  return i.indexOf(n) === l;
}
var allname = [...nam, ...nu].filter(onlyUnique);
(nam = shuffle(shuffle(nam))),
  (nu = shuffle(shuffle(nu))),
  (allname = shuffle(shuffle(allname)));
var Btn_To_Top = document.getElementById("GoToTop"),
  Btn_To_Bottom = document.getElementById("GoToBottom");
function scrollFunction() {
  var n =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  Btn_To_Top.style.display = n > 20 ? "block" : "none";
}
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
function openTab(n, l) {
  for (
    var i, s = document.getElementsByClassName("tabcontent"), y = 0;
    y < s.length;
    y++
  )
    s[y].style.display = "none";
  for (i = document.getElementsByClassName("btntab"), y = 0; y < i.length; y++)
    i[y].className = i[y].className.replace(" active", "");
  (document.getElementById(l).style.display = "block"),
    (n.currentTarget.className += " active");
}
function getRandomInt(n, l) {
  return Math.floor(Math.random() * (l - n)) + n;
}
function loadNames() {
  var n = document.getElementById("quantity").value;
  let l =
      '<center><h2 style="font-family: math;">T\xean ngẫu nhi\xean</h2></center>',
    i = "";
  var s,
    y,
    u,
    g,
    m = [];
  l += '<ul class="list">';
  var p = document.getElementById("name_cloc").checked,
    h = document.querySelector('input[name="name_gtinh"]:checked').value;
  if (p)
    for (let f = 0; f < n; f++) {
      let b =
        "all" === h
          ? allname[getRandomInt(0, e.length)]
          : "Nam" === h
          ? nam[getRandomInt(0, e.length)]
          : nu[getRandomInt(0, e.length)];
      (l += "<li>" + b + "<li>"), (i += b + "\n");
      let T = b.split(" "),
        v = "";
      for (let B = 1; B < T.length; B++)
        v += B === T.length - 1 ? T[B] : T[B] + " ";
      m.push([b, T[0], v, T[T.length - 1]]);
    }
  else
    for (let I = 0; I < n; I++)
      (l +=
        "<li>" +
        (s =
          (y = e[getRandomInt(0, e.length)]) +
          " " +
          (u = t[getRandomInt(0, t.length)]) +
          " " +
          (g = o[getRandomInt(0, o.length)])) +
        "</li>"),
        (i += s + "\n"),
        m.push([s, y, u, g]);
  (l += "</ul>"), (document.querySelector("#result").innerHTML = l);
  let E = document.querySelector("#txt");
  E.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(i)
  ),
    E.setAttribute("download", "NgauNhien.txt"),
    (E.style.display = "block");
  var x = "T\xean Đầy Đủ,Họ,Đệm,T\xean\n";
  m.forEach(function (n) {
    (x += n.join(",")), (x += "\n");
  });
  let $ = document.querySelector("#csv");
  ($.href = "data:text/csv;charset=utf-8," + encodeURIComponent("\uFEFF" + x)),
    ($.download = "NgauNhien.csv"),
    ($.style.display = "block"),
    (document.querySelector("#btncopyname").style.display = "block"),
    (document.querySelector("#textcopy").innerText = i);
}
function displayTooltip(n, l, i) {
  let s = document.getElementById(n);
  (s.style.display = "block"),
    (s.innerHTML = l),
    setTimeout(() => {
      s.style.display = "none";
    }, i);
}
function copyTextToClipboard(n, l) {
  let i = document.createElement("textarea");
  (i.value = n),
    document.body.appendChild(i),
    i.select(),
    document.execCommand("copy"),
    document.body.removeChild(i),
    displayTooltip(l, "Đ\xe3 copy", 2e3);
}
function CopyName() {
  copyTextToClipboard(
    document.getElementById("textcopy").innerHTML.replace(/<br\s*\/?>/gm, "\n"),
    "nameTooltip"
  );
}
function nonAccentVietnamese(n) {
  return (n = (n = (n = (n = (n = (n = (n = (n = (n = n.toLowerCase()).replace(
    /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,
    "a"
  )).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(
    /ì|í|ị|ỉ|ĩ/g,
    "i"
  )).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(
    /ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,
    "u"
  )).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/đ/g, "d")).replace(
    /\u0300|\u0301|\u0303|\u0309|\u0323/g,
    ""
  )).replace(/\u02C6|\u0306|\u031B/g, "");
}
function suggestions() {
  var n = document.getElementById("user_cloc").checked,
    l = document.querySelector('input[name="user_gtinh"]:checked').value,
    i = document.getElementById("tt_input");
  if (n) {
    let s = (
        "all" === l
          ? allname[getRandomInt(0, e.length)]
          : "Nam" === l
          ? nam[getRandomInt(0, e.length)]
          : nu[getRandomInt(0, e.length)]
      ).split(" "),
      y = s[0] + s[s.length - 1];
    i.value = nonAccentVietnamese(y)
      .replace(/[^a-zA-Z]/g, "")
      .replace(/\s/g, "");
  } else
    i.value = (
      nonAccentVietnamese(e[getRandomInt(0, e.length)]) +
      nonAccentVietnamese(o[getRandomInt(0, o.length)])
    )
      .replace(/[^a-zA-Z]/g, "")
      .replace(/\s/g, "");
}
function padTo2Digits(n) {
  return n.toString().padStart(2, "0");
}
function formatDate(n, l) {
  if ("dd/mm/yyyy" === l)
    return [
      padTo2Digits(n.getDate()),
      padTo2Digits(n.getMonth() + 1),
      n.getFullYear(),
    ].join("/");
  if ("dd/mm/yy" === l) {
    var i = n.getFullYear().toString();
    return [
      padTo2Digits(n.getDate()),
      padTo2Digits(n.getMonth() + 1),
      i[i.length - 2] + i[i.length - 1],
    ].join("/");
  }
  return "dd/mm" === l
    ? [padTo2Digits(n.getDate()), padTo2Digits(n.getMonth() + 1)].join("/")
    : void 0;
}
function randomDate(n, l) {
  return new Date(n.getTime() + Math.random() * (l.getTime() - n.getTime()));
}
function makeid(n) {
  var l = document.querySelector('input[name="choice"]:checked').value,
    i = document.getElementById("tt").checked,
    s = document.getElementById("tt_random").checked,
    y = "";
  if ("birthday" !== l)
    for (
      var u =
          "low" === l
            ? "abcdefghijklmnopqrstuvwxyz0123456789"
            : "up" === l
            ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            : "0123456789",
        g = u.length,
        m = 0;
      m < n;
      m++
    )
      y += u.charAt(Math.floor(Math.random() * g));
  else {
    let p = document.getElementById("format_choice").value;
    y += formatDate(randomDate(new Date(1970, 0, 1), new Date()), p).replaceAll(
      "/",
      ""
    );
  }
  return (
    s && suggestions(), i ? document.getElementById("tt_input").value + y : y
  );
}
function loadUsers() {
  var n = document.getElementById("quantity_user").value,
    l = document.getElementById("len").value,
    i = document.getElementById("ext");
  let s =
      '<center><h2 style="font-family: math;">User ngẫu nhi\xean</h2></center>',
    y = "";
  var u = [];
  let g,
    m = "",
    p = "";
  if (((s += '<ul class="list">'), i.checked)) {
    p = "Đầy đủ,Id,Đu\xf4i,\n";
    var h = document.querySelector("#dotext").value;
    for (let f = 0; f < n; f++)
      (s += "<li>" + (g = (m = makeid(l)) + h) + "</li>"),
        (y += g + "\n"),
        u.push([g, m, h]);
  } else {
    p = "Id,\n";
    for (let b = 0; b < n; b++)
      (s += "<li>" + (m = makeid(l)) + "</li>"), (y += m + "\n"), u.push([m]);
  }
  (s += "</ul>"), (document.querySelector("#result_user").innerHTML = s);
  let T = document.querySelector("#txt_user");
  T.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(y)
  ),
    T.setAttribute("download", "NgauNhien.txt"),
    (T.style.display = "block"),
    u.forEach(function (n) {
      (p += n.join(",")), (p += "\n");
    });
  let v = document.querySelector("#csv_user");
  (v.href = "data:text/csv;charset=utf-8," + encodeURIComponent("\uFEFF" + p)),
    (v.download = "NgauNhien.csv"),
    (v.style.display = "block"),
    (document.querySelector("#btncopyuser").style.display = "block"),
    (document.querySelector("#textusercopy").innerText = y);
}
function CopyUser() {
  copyTextToClipboard(
    document
      .getElementById("textusercopy")
      .innerHTML.replace(/<br\s*\/?>/gm, "\n"),
    "userTooltip"
  );
}
window.addEventListener("scroll", scrollFunction);
const checkbox = document.getElementById("ext");
checkbox.addEventListener("change", (n) => {
  let l = document.getElementById("dotextlabel");
  var i =
      0 !=
      document.getElementById("result_user").getElementsByClassName("list")
        .length
        ? document.getElementsByClassName("list")[0].getElementsByTagName("li")
        : [],
    s = document.getElementById("textusercopy"),
    y = document.getElementById("dotext").value,
    u = document.getElementById("quantity_user").value,
    g = "",
    m = [];
  if (n.currentTarget.checked) {
    l.style.display = "block";
    for (let p = 0; p < i.length; p++) i[p].innerText += y;
    0 !== s.innerHTML.length &&
      (s.innerHTML = s.innerHTML.replaceAll("<br>", y + "<br>")),
      (g = "Đầy đủ,Id,Đu\xf4i,\n");
    for (let h = 0; h < u; h++) {
      var f = i[h].innerText;
      m.push([f, f.replaceAll(y, ""), y]);
    }
  } else {
    l.style.display = "none";
    for (let b = 0; b < i.length; b++)
      i[b].innerText = i[b].innerText.replaceAll(y, "");
    0 !== s.innerHTML.length &&
      (s.innerHTML = s.innerHTML.replaceAll(y + "<br>", "<br>")),
      (g = "Id,\n");
    for (let T = 0; T < u; T++) m.push([i[T].innerText]);
  }
  let v = document.querySelector("#txt_user");
  v.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(s.innerHTML.replaceAll("<br>", "\n"))
  ),
    v.setAttribute("download", "NgauNhien.txt"),
    m.forEach(function (n) {
      (g += n.join(",")), (g += "\n");
    });
  let B = document.querySelector("#csv_user");
  (B.href = "data:text/csv;charset=utf-8," + encodeURIComponent("\uFEFF" + g)),
    (B.download = "NgauNhien.csv");
});
const checkboxtt = document.getElementById("tt");
function onchangettrnd() {
  let n = document.getElementById("tt_input"),
    l = document.getElementById("btn_suggestion");
  document.getElementById("tt_random").checked
    ? ((n.disabled = !0),
      (n.style.display = "none"),
      (l.disabled = !0),
      (l.style.display = "none"))
    : ((n.disabled = !1),
      (n.style.display = "block"),
      (l.disabled = !1),
      (l.style.display = "block"));
}
function onchangenamecloc() {
  let n = document.getElementById("name_choice");
  document.getElementById("name_cloc").checked
    ? (n.style.display = "block")
    : (n.style.display = "none");
}
function onchangeusercloc() {
  let n = document.getElementById("user_choice");
  document.getElementById("user_cloc").checked
    ? (n.style.display = "block")
    : (n.style.display = "none");
}
function loadIcon() {
  let n = shuffle(icons),
    l = document.getElementById("quantity_icon").value,
    i = "";
  for (let s = 0; s < l; s++)
    i += icon_tmp = (icon_tmp = n[getRandomInt(0, n.length)])
      .split("")
      .reduce((n, l) => n + l);
  (document.querySelector("#btncopyicon").style.display = "block"),
    (document.querySelector("#texticoncopy").innerText = i),
    (document.querySelector("#result_icon").innerHTML =
      '<center><h2 style="font-family: math;">Icon ngẫu nhi\xean</h2></center><ul class="list"><li>' +
      i +
      "</li></ul>");
}
function CopyIcon() {
  copyTextToClipboard(
    document.getElementById("texticoncopy").innerText,
    "iconTooltip"
  );
}
function capitalizeFirstLetter(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function loadRv() {
  let n = "abcdefghijklmnopqrstuvwxyz".split(""),
    l = "0123456789".split(""),
    i = "123456789".split(""),
    s = shuffle(n),
    y = shuffle(l),
    u = document.getElementById("quantity_rv_c").value,
    g = document.getElementById("quantity_rv_n").value,
    m = "";
  for (let p = 0; p < u; p++) m += s[getRandomInt(0, s.length)];
  (m = "(" + capitalizeFirstLetter(m)),
    (m += "; rv:"),
    (m += i[getRandomInt(0, i.length)]);
  for (let h = 1; h < g; h++) m += y[getRandomInt(0, y.length)];
  (m += ")"),
    (document.querySelector("#btncopyrv").style.display = "block"),
    (document.querySelector("#textrvcopy").innerText = m),
    (document.querySelector("#result_rv").innerHTML =
      '<center><h2 style="font-family: math;">Rv ngẫu nhi\xean</h2></center><ul class="list"><li>' +
      m +
      "</li></ul>");
}
function CopyRv() {
  copyTextToClipboard(
    document.getElementById("textrvcopy").innerText,
    "rvTooltip"
  );
}
var showMoreBtn = document.getElementById("show_more");
function changerSWTAB() {
  var n = document.getElementById("btntabicons"),
    l = document.getElementById("btntabrv");
  showMoreBtn.checked
    ? ((n.style.display = "block"), (l.style.display = "block"))
    : ((n.style.display = "none"),
      (l.style.display = "none"),
      (showMoreBtn.textContent = "Hiện nội dung"));
}
checkboxtt.addEventListener("change", (n) => {
  let l = d;
  ocument.getElementById("ttlabel"),
    (a = document.getElementById("moredata")),
    (r = document.getElementById("btn_suggestion")),
    (c = document.getElementById("tt_random").checked),
    n.currentTarget.checked
      ? (l.style.display = "block")
      : (l.style.display = "none"),
    n.currentTarget.checked && !c
      ? (r.style.display = "block")
      : (r.style.display = "none"),
    n.currentTarget.checked
      ? (a.style.display = "block")
      : (a.style.display = "none");
}),
  document.addEventListener("DOMContentLoaded", function () {
    function n() {
      document.body.scrollHeight > window.innerHeight
        ? (Btn_To_Bottom.style.display = "block")
        : (Btn_To_Bottom.style.display = "none");
    }
    changerSWTAB(),
      document.getElementById("tt").checked && suggestions(),
      n(),
      setInterval(n, 1e3);
  }),
  document.getElementById("RC_choice").addEventListener("click", function (n) {
    if (n.target && n.target.matches("input[type='radio']")) {
      var l = document.getElementById("lblen"),
        i = document.getElementById("lbformat_choice");
      "birthday" === n.target.value
        ? ((l.style.display = "none"), (i.style.display = "block"))
        : ((l.style.display = "block"), (i.style.display = "none"));
    }
  }),
  showMoreBtn.addEventListener("change", () => {
    changerSWTAB();
  });
