function shuffle(array) {
  let randomIndex,
    currentIndex = array.length;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
var allNames = [...nam, ...nu].filter(onlyUnique);
(nam = shuffle(shuffle(nam))),
  (nu = shuffle(shuffle(nu))),
  (allNames = shuffle(shuffle(allNames)));
var btnScrollToTop = document.getElementById("GoToTop"),
  btnScrollToBottom = document.getElementById("GoToBottom");
function scrollFunction() {
  var scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  var isAtBottom =
    window.innerHeight + scrollTop >= document.body.scrollHeight - 20;
  var isNearTop = scrollTop < 100;
  var isScrollable = document.body.scrollHeight > window.innerHeight;

  if (isScrollable) {
    if (isNearTop) {
      btnScrollToTop.style.display = "none";
      btnScrollToBottom.style.display = "block";
    } else if (isAtBottom) {
      btnScrollToTop.style.display = "block";
      btnScrollToBottom.style.display = "none";
    } else {
      // In the middle, show GoToTop by default (standard UX)
      btnScrollToTop.style.display = "block";
      btnScrollToBottom.style.display = "none";
    }
  } else {
    btnScrollToTop.style.display = "none";
    btnScrollToBottom.style.display = "none";
  }
}
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
function openTab(event, tabId) {
  var i,
    tabContent = document.getElementsByClassName("tabcontent"),
    j = 0;
  for (j = 0; j < tabContent.length; j++) tabContent[j].style.display = "none";
  var tabButtons = document.getElementsByClassName("btntab");
  for (j = 0; j < tabButtons.length; j++)
    tabButtons[j].className = tabButtons[j].className.replace(" active", "");
  document.getElementById(tabId).style.display = "block";
  event.currentTarget.className += " active";
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function loadNames() {
  var quantity = document.getElementById("inputNameQuantity").value;
  let htmlResult =
    '<center><h2 style="font-family: math;">T\xean ngẫu nhi\xean</h2></center>',
    textResult = "";
  var fullName,
    surname,
    middleName,
    givenName,
    resultsArray = [];
  htmlResult += '<ul class="list">';
  var isFiltered = document.getElementById("chkNameFilter").checked,
    genderGroup = document.querySelector('input[name="radNameGender"]:checked')
      .value;
  if (isFiltered)
    for (let f = 0; f < quantity; f++) {
      let randomName =
        "all" === genderGroup
          ? allNames[getRandomInt(0, allNames.length)]
          : "Nam" === genderGroup
            ? nam[getRandomInt(0, nam.length)]
            : nu[getRandomInt(0, nu.length)];
      (htmlResult += "<li>" + randomName + "<li>"),
        (textResult += randomName + "\n");
      let nameParts = randomName.split(" "),
        middleAndGiven = "";
      for (let j = 1; j < nameParts.length; j++)
        middleAndGiven +=
          j === nameParts.length - 1 ? nameParts[j] : nameParts[j] + " ";
      resultsArray.push([
        randomName,
        nameParts[0],
        middleAndGiven,
        nameParts[nameParts.length - 1],
      ]);
    }
  else
    for (let f = 0; f < quantity; f++)
      (htmlResult +=
        "<li>" +
        (fullName =
          (surname = surnames[getRandomInt(0, surnames.length)]) +
          " " +
          (middleName = middleNames[getRandomInt(0, middleNames.length)]) +
          " " +
          (givenName = givenNames[getRandomInt(0, givenNames.length)])) +
        "</li>"),
        (textResult += fullName + "\n"),
        resultsArray.push([fullName, surname, middleName, givenName]);
  (htmlResult += "</ul>"),
    (document.querySelector("#result").innerHTML = htmlResult);
  let linkTxt = document.querySelector("#txt");
  linkTxt.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(textResult)
  ),
    linkTxt.setAttribute("download", "NgauNhien.txt"),
    (linkTxt.style.display = "block");
  var csvContent = "T\xean Đầy Đủ,Họ,Đệm,T\xean\n";
  resultsArray.forEach(function (row) {
    (csvContent += row.join(",")), (csvContent += "\n");
  });
  let linkCsv = document.querySelector("#csv");
  (linkCsv.href =
    "data:text/csv;charset=utf-8," + encodeURIComponent("\uFEFF" + csvContent)),
    (linkCsv.download = "NgauNhien.csv"),
    (linkCsv.style.display = "block"),
    (document.querySelector("#btncopyname").style.display = "block"),
    (document.querySelector("#textcopy").innerText = textResult);
}
function displayTooltip(elementId, message, duration) {
  let tooltip = document.getElementById(elementId);
  (tooltip.style.display = "block"),
    (tooltip.innerHTML = message),
    setTimeout(() => {
      tooltip.style.display = "none";
    }, duration);
}
function copyTextToClipboard(text, tooltipId) {
  let textArea = document.createElement("textarea");
  (textArea.value = text),
    document.body.appendChild(textArea),
    textArea.select(),
    document.execCommand("copy"),
    document.body.removeChild(textArea),
    displayTooltip(tooltipId, "Đ\xe3 copy", 2e3);
}
function CopyName() {
  copyTextToClipboard(
    document.getElementById("textcopy").innerHTML.replace(/<br\s*\/?>/gm, "\n"),
    "nameTooltip"
  );
}
function removeVietnameseAccents(str) {
  return (str = (str = (str = (str = (str = (str = (str = (str = (str = str.toLowerCase()).replace(
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
function suggestions(withOutSplit = false, withOutReplace = false) {
  var isFiltered = document.getElementById("chkUserPrefixFilter").checked,
    genderGroup = document.querySelector('input[name="radUserGender"]:checked')
      .value,
    txtInput = document.getElementById("txtPrefixInput");
  if (isFiltered) {
    let suggestedValue = "";
    if (withOutSplit === false) {
      randomName =
        "all" === genderGroup
          ? allNames[getRandomInt(0, allNames.length)]
          : "Nam" === genderGroup
            ? nam[getRandomInt(0, nam.length)]
            : nu[getRandomInt(0, nu.length)];
      let parts = randomName.split(" ");
      suggestedValue = parts[0] + parts[parts.length - 1];
    } else {
      randomName =
        "all" === genderGroup
          ? allNames[getRandomInt(0, allNames.length)]
          : "Nam" === genderGroup
            ? nam[getRandomInt(0, nam.length)]
            : nu[getRandomInt(0, nu.length)];
      suggestedValue = randomName;
    }
    txtInput.value = removeVietnameseAccents(suggestedValue);

    if (withOutReplace === false) {
      txtInput.value = txtInput.value.replace(/[^a-zA-Z]/g, "").replace(/\s/g, "");
    }
  } else {
    txtInput.value =
      removeVietnameseAccents(surnames[getRandomInt(0, surnames.length)]) +
      removeVietnameseAccents(givenNames[getRandomInt(0, givenNames.length)]);

    if (withOutReplace === false) {
      txtInput.value = txtInput.value.replace(/[^a-zA-Z]/g, "").replace(/\s/g, "");
    }
  }
  return txtInput.value;
}
function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}
function formatDate(date, format) {
  if ("dd/mm/yyyy" === format)
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  if ("dd/mm/yy" === format) {
    var yearStr = date.getFullYear().toString();
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      yearStr[yearStr.length - 2] + yearStr[yearStr.length - 1],
    ].join("/");
  }
  return "dd/mm" === format
    ? [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1)].join("/")
    : void 0;
}
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
function convertName(name, count = 0) {
  const parts = removeVietnameseAccents(name).split(" ");
  const lastName = parts.pop();
  const initials = parts.map((part) => part.charAt(0).toLowerCase()).join("");
  let convertedName = `${lastName.toLowerCase()}${initials}`;

  if (count > 0) {
    convertedName += count;
  }

  return convertedName;
}
function generateRandomId(length) {
  var choice = document.querySelector('input[name="radUserChoice"]:checked')
    .value,
    addPrefix = document.getElementById("chkAddPrefix").checked,
    prefixRandom = document.getElementById("chkPrefixRandom").checked,
    resultId = "",
    suggestedPrefix = suggestions(
      "fullname" === choice ? true : false,
      "fullname" === choice ? true : false
    ),
    prefixInput = document.getElementById("txtPrefixInput").value;
  if ("birthday" !== choice && "fullname" !== choice)
    for (
      var characters =
        "low" === choice
          ? "abcdefghijklmnopqrstuvwxyz0123456789"
          : "up" === choice
            ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            : "0123456789",
      charLen = characters.length,
      j = 0;
      j < length;
      j++
    )
      resultId += characters.charAt(Math.floor(Math.random() * charLen));
  else {
    if ("birthday" === choice) {
      let format = document.getElementById("selectFormatChoice").value;
      resultId += formatDate(
        randomDate(new Date(1970, 0, 1), new Date()),
        format
      ).replaceAll("/", "");
    } else if ("fullname" === choice) {
      suggestedPrefix = convertName(suggestedPrefix);
      prefixInput = convertName(prefixInput);
    }
  }
  return prefixRandom && suggestedPrefix, addPrefix ? prefixInput + resultId : resultId;
}
function loadUsers() {
  var quantity = document.getElementById("inputUserQuantity").value,
    length = document.getElementById("inputUserLength").value,
    addSuffix = document.getElementById("chkAddSuffix");
  let htmlResult =
    '<center><h2 style="font-family: math;">User ngẫu nhi\xean</h2></center>',
    textResult = "";
  var counts = {};
  var resultsArray = [];
  let userFull,
    userId = "",
    suffixStr = "";
  if (((htmlResult += '<ul class="list">'), addSuffix.checked)) {
    suffixStr = "Đầy đủ,Id,Đu\xf4i,\n";
    var customSuffix = document.querySelector("#txtUserSuffix").value;
    for (let f = 0; f < quantity; f++) {
      var randomName = generateRandomId(length);
      counts[randomName] = (counts[randomName] || 0) + 1;
      var count = counts[randomName] > 1 ? counts[randomName] - 1 : 0;
      if (count === 0) {
        (htmlResult += "<li>" + (userFull = (userId = randomName) + customSuffix) + "</li>"),
          (textResult += userFull + "\n"),
          resultsArray.push([userFull, userId, customSuffix]);
      } else {
        (htmlResult += "<li>" + (userFull = (userId = randomName + count) + customSuffix) + "</li>"),
          (textResult += userFull + "\n"),
          resultsArray.push([userFull, userId, customSuffix]);
      }
    }
  } else {
    suffixStr = "Id,\n";
    for (let f = 0; f < quantity; f++) {
      var randomName = generateRandomId(length);
      counts[randomName] = (counts[randomName] || 0) + 1;
      var count = counts[randomName] > 1 ? counts[randomName] - 1 : 0;
      if (count === 0) {
        (htmlResult += "<li>" + (userId = randomName) + "</li>"),
          (textResult += userId + "\n"),
          resultsArray.push([userId]);
      } else {
        (htmlResult += "<li>" + (userId = randomName + count) + "</li>"),
          (textResult += userId + "\n"),
          resultsArray.push([userId]);
      }
    }
  }
  (htmlResult += "</ul>"),
    (document.querySelector("#result_user").innerHTML = htmlResult);
  let linkTxt = document.querySelector("#txt_user");
  linkTxt.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(textResult)
  ),
    linkTxt.setAttribute("download", "NgauNhien.txt"),
    (linkTxt.style.display = "block"),
    resultsArray.forEach(function (row) {
      (suffixStr += row.join(",")), (suffixStr += "\n");
    });
  let linkCsv = document.querySelector("#csv_user");
  (linkCsv.href =
    "data:text/csv;charset=utf-8," + encodeURIComponent("\uFEFF" + suffixStr)),
    (linkCsv.download = "NgauNhien.csv"),
    (linkCsv.style.display = "block"),
    (document.querySelector("#btncopyuser").style.display = "block"),
    (document.querySelector("#textusercopy").innerText = textResult);
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
const checkboxAddSuffix = document.getElementById("chkAddSuffix");
checkboxAddSuffix.addEventListener("change", (event) => {
  let lblSuffix = document.getElementById("lblUserSuffix");
  var listItems =
    0 !=
      document.getElementById("result_user").getElementsByClassName("list")
        .length
      ? document.getElementsByClassName("list")[0].getElementsByTagName("li")
      : [],
    copyTextContainer = document.getElementById("textusercopy"),
    suffixValue = document.getElementById("txtUserSuffix").value,
    quantity = document.getElementById("inputUserQuantity").value,
    csvOutput = "",
    resultsArray = [];
  if (event.currentTarget.checked) {
    lblSuffix.style.display = "block";
    for (let j = 0; j < listItems.length; j++) listItems[j].innerText += suffixValue;
    0 !== copyTextContainer.innerHTML.length &&
      (copyTextContainer.innerHTML = copyTextContainer.innerHTML.replaceAll("<br>", suffixValue + "<br>")),
      (csvOutput = "Đầy đủ,Id,Đu\xf4i,\n");
    for (let j = 0; j < quantity; j++) {
      var textContent = listItems[j].innerText;
      resultsArray.push([textContent, textContent.replaceAll(suffixValue, ""), suffixValue]);
    }
  } else {
    lblSuffix.style.display = "none";
    for (let j = 0; j < listItems.length; j++)
      listItems[j].innerText = listItems[j].innerText.replaceAll(suffixValue, "");
    0 !== copyTextContainer.innerHTML.length &&
      (copyTextContainer.innerHTML = copyTextContainer.innerHTML.replaceAll(suffixValue + "<br>", "<br>")),
      (csvOutput = "Id,\n");
    for (let j = 0; j < quantity; j++) resultsArray.push([listItems[j].innerText]);
  }
  let linkTxt = document.querySelector("#txt_user");
  linkTxt.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
    encodeURIComponent(copyTextContainer.innerHTML.replaceAll("<br>", "\n"))
  ),
    linkTxt.setAttribute("download", "NgauNhien.txt"),
    resultsArray.forEach(function (row) {
      (csvOutput += row.join(",")), (csvOutput += "\n");
    });
  let linkCsv = document.querySelector("#csv_user");
  (linkCsv.href = "data:text/csv;charset=utf-8," + encodeURIComponent("\uFEFF" + csvOutput)),
    (linkCsv.download = "NgauNhien.csv");
});
const checkboxAddPrefix = document.getElementById("chkAddPrefix");
function onchangePrefixRandom() {
  let txtInput = document.getElementById("txtPrefixInput"),
    btnSug = document.getElementById("btnSuggestion");
  document.getElementById("chkPrefixRandom").checked
    ? ((txtInput.disabled = !0),
      (txtInput.style.display = "none"),
      (btnSug.disabled = !0),
      (btnSug.style.display = "none"))
    : ((txtInput.disabled = !1),
      (txtInput.style.display = "block"),
      (btnSug.disabled = !1),
      (btnSug.style.display = "block"));
}
function onchangeNameFilter() {
  let lblNameChoice = document.getElementById("lblNameChoice");
  document.getElementById("chkNameFilter").checked
    ? (lblNameChoice.style.display = "block")
    : (lblNameChoice.style.display = "none");
}
function onchangeUserPrefixFilter() {
  let lblUserChoice = document.getElementById("lblUserChoice");
  document.getElementById("chkUserPrefixFilter").checked
    ? (lblUserChoice.style.display = "block")
    : (lblUserChoice.style.display = "none");
}
function loadIcon() {
  let shuffledIcons = shuffle(icons),
    quantity = document.getElementById("inputIconQuantity").value,
    iconOutput = "";
  for (let j = 0; j < quantity; j++) {
    let randomIcon = shuffledIcons[getRandomInt(0, shuffledIcons.length)];
    iconOutput += randomIcon.split("").reduce((acc, char) => acc + char);
  }
  (document.querySelector("#btncopyicon").style.display = "block"),
    (document.querySelector("#texticoncopy").innerText = iconOutput),
    (document.querySelector("#result_icon").innerHTML =
      '<center><h2 style="font-family: math;">Icon ngẫu nhi\xean</h2></center><ul class="list"><li>' +
      iconOutput +
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
  let letters = "abcdefghijklmnopqrstuvwxyz".split(""),
    digits = "0123456789".split(""),
    nonZeroDigits = "123456789".split(""),
    shuffledLetters = shuffle(letters),
    shuffledDigits = shuffle(digits),
    letterCount = document.getElementById("inputRvCharQuantity").value,
    digitCount = document.getElementById("inputRvNumQuantity").value,
    rvOutput = "";
  for (let j = 0; j < letterCount; j++)
    rvOutput += shuffledLetters[getRandomInt(0, shuffledLetters.length)];
  (rvOutput = "(" + capitalizeFirstLetter(rvOutput)),
    (rvOutput += "; rv:"),
    (rvOutput += nonZeroDigits[getRandomInt(0, nonZeroDigits.length)]);
  for (let j = 1; j < digitCount; j++)
    rvOutput += shuffledDigits[getRandomInt(0, shuffledDigits.digits)];
  (rvOutput += ")"),
    (document.querySelector("#btncopyrv").style.display = "block"),
    (document.querySelector("#textrvcopy").innerText = rvOutput),
    (document.querySelector("#result_rv").innerHTML =
      '<center><h2 style="font-family: math;">Rv ngẫu nhi\xean</h2></center><ul class="list"><li>' +
      rvOutput +
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
  var btnTabIcons = document.getElementById("btntabicons"),
    btnTabRv = document.getElementById("btntabrv");
  showMoreBtn.checked
    ? ((btnTabIcons.style.display = "block"), (btnTabRv.style.display = "block"))
    : ((btnTabIcons.style.display = "none"),
      (btnTabRv.style.display = "none"),
      (showMoreBtn.textContent = "Hiện nội dung"));
}
checkboxAddPrefix.addEventListener("change", (event) => {
  let lblPrefix = document.getElementById("ttlabel"),
    divMoreData = document.getElementById("moredata"),
    btnSug = document.getElementById("btnSuggestion"),
    prefixRandom = document.getElementById("chkPrefixRandom").checked;
  event.currentTarget.checked
    ? (lblPrefix.style.display = "block")
    : (lblPrefix.style.display = "none"),
    event.currentTarget.checked && !prefixRandom
      ? (btnSug.style.display = "block")
      : (btnSug.style.display = "none"),
    event.currentTarget.checked
      ? (divMoreData.style.display = "block")
      : (divMoreData.style.display = "none");
}),
  document.addEventListener("DOMContentLoaded", function () {
    changerSWTAB(),
      document.getElementById("chkAddPrefix").checked && suggestions(),
      scrollFunction(),
      setInterval(scrollFunction, 1e3);
  }),
  document.getElementById("divUserOptions").addEventListener("click", function (event) {
    if (event.target && event.target.matches("input[type='radio']")) {
      var lblUserLength = document.getElementById("lblUserLength"),
        lblFormatChoice = document.getElementById("lblFormatChoice");
      "birthday" === event.target.value
        ? ((lblUserLength.style.display = "none"), (lblFormatChoice.style.display = "block"))
        : ((lblUserLength.style.display = "block"), (lblFormatChoice.style.display = "none"));
    }
  }),
  showMoreBtn.addEventListener("change", () => {
    changerSWTAB();
  });
