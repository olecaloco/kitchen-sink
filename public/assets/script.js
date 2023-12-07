shiki
    .getHighlighter({
        theme: "one-dark-pro",
        langs: ["html"],
    })
    .then((highlighter) => {
        const codeGroups = document.querySelectorAll(".code-group");

        codeGroups.forEach((group) => {
            const codeBlock = group.querySelector(".code-block");
            const codeOutput = group.querySelector(".code-output");
            const content = codeBlock.innerHTML;

            const splittedLines = content.split("\n");
            const dirtyLines = splittedLines.filter(line => {
                if (!line.replace(/\s/g, '').length) return false;
                return true;
            });

            let initialCount = 0;
            const lines = dirtyLines.map((line, index) => {
                let count = 0;
                let html = "";
            
                for (let char of line) {
                    if (char === " ") count++;
                    else break;
                }

                if (index === 0) {
                    initialCount = count;
                }
                

                for (let i = 0; i < count - initialCount; i++) {
                    html += " ";
                }

                html += line.trim();

                return html;
            });

            const cleanedHTML = lines.join("\n");
            const code = highlighter.codeToHtml(cleanedHTML, { lang: "html" });
            codeOutput.innerHTML = code;
        });
    });
