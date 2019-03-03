// Handle more info trigger click
(() => {
    const moreInfoTrigger = document.getElementById("moreInfoTrigger");
    const moreInfoContent = document.getElementById("moreInfoContent");

    moreInfoTrigger.addEventListener("click", () => {
        const arrow = moreInfoTrigger.getElementsByTagName("i")[0];

        if(moreInfoContent.style.display === "none") {
            moreInfoContent.style.display = "block";
            arrow.classList.remove("fa-chevron-down");
            arrow.classList.add("fa-chevron-up");
        } else {
            moreInfoContent.style.display = "none";
            arrow.classList.remove("fa-chevron-up");
            arrow.classList.add("fa-chevron-down");
        }
    }, false);
})();

// Replace the word "Magic" with "Something"
(() => {
    const aboutText = document.getElementById("aboutText");
    aboutText.innerText = aboutText.innerText.replace(/\bMagic\b/g, "Something");
})();