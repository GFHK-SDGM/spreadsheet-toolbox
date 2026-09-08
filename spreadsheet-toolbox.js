"use strict";

document.getElementById("match-btn").addEventListener("click", () => {
  try {
    document.getElementById("replaced-str").value = document.getElementById("src-str").value.replace(new RegExp(document.getElementById("regex-pattern").value, "gm"), document.getElementById("replace-value").value);
  } catch (err) {
    document.getElementById("replaced-str").value = "Error! Press F12 for error details.";
    throw err;
  };
});

document.getElementById("paste-pattern-btn").addEventListener("click", async () => {
  document.getElementById("src-str").value = await navigator.clipboard.readText();
});

document.getElementById("copy-pattern-btn").addEventListener("click", () => {
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
      document.getElementById("regex-pattern").value = "^\\s+|\\s+$";
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
    case "Separate class and class number":
      document.getElementById("regex-pattern").value = "([PS]?\\d[A-za-z])\\s*(\\d{1,2})";
      document.getElementById("replace-value").value = "$1\\t$2";
      break;
    case "Separate Chinese and English":
      document.getElementById("regex-pattern").value = "([A-Za-z-\\.\\s]*)\\s*(.*)";
      document.getElementById("replace-value").value = "$1";
      break;
    case "Reverse two columns":
      document.getElementById("regex-pattern").value = "(.*)\\t(.*)";
      document.getElementById("replace-value").value = "$2\\t$1";
      break;
    default:
      document.getElementById("regex-pattern").value = "";
      document.getElementById("replace-value").value = "";
      break;
  };
});

document.getElementById("paste-level-btn").addEventListener("click", async () => {
  document.getElementById("formname").value = await navigator.clipboard.readText();
});

document.getElementById("copy-level-btn").addEventListener("click", () => {
  navigator.clipboard.writeText(document.getElementById("levels").value);
});

document.getElementById("calculate-levels").addEventListener("click", () => {
  document.getElementById("levels").value = "";
  document.getElementById("formname").value.split("\n").forEach((e) => {
    try {
      let level = parseInt(e) + parseInt(document.getElementById("level-offset").value);
      if (level == 0)
       level = "B3";
      document.getElementById("levels").value += level + "\n";
    } catch (err) {
      document.getElementById("levels").value = "Error! Press F12 for error details.";
      throw err;
    };
  });
});
