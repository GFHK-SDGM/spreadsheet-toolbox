"use strict";

document.getElementById("match-btn").addEventListener("click", () => {
  document.getElementById("replaced-str").value = document.getElementById("src-str").value.replace(new RegExp(document.getElementById("regex-pattern").value, "g"), document.getElementById("replace-value").value);
});

document.getElementById("paste-btn").addEventListener("click", async () => {
  document.getElementById("src-str").value = await navigator.clipboard.readText();
});

document.getElementById("copy-btn").addEventListener("click", () => {
  navigator.clipboard.writeText(document.getElementById("replaced-str").value);
});

document.getElementById("pattern-preset").addEventListener("input", (ev) => {
  switch (ev.target.value) {
    case "Append “老師”":
      document.getElementById("regex-pattern").value = "(.+)";
      document.getElementById("replace-value").value = "$1老師";
      break;
    case "Extract form name from class":
      document.getElementById("regex-pattern").value = "[^\\d\\n]";
      document.getElementById("replace-value").value = "";
      break;
    case "Whitespace trimming":
      document.getElementById("regex-pattern").value = "";
      document.getElementById("replace-value").value = "";
      break;
    case "Remove unnecessary whitespaces between Chinese characters":
      document.getElementById("regex-pattern").value = "[^\\S\\n]";
      document.getElementById("replace-value").value = "";
      break;
    case "Extract username from email address (Extract STRN from email address)":
      document.getElementById("regex-pattern").value = "@.+";
      document.getElementById("replace-value").value = "";
      break;
    default:
      document.getElementById("regex-pattern").value = "";
      document.getElementById("replace-value").value = "";
      break;
  };
});
