const codeEl = document.querySelectorAll("code");
codeEl.forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
})
hljs.highlightAll();