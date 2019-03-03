(() => {
    // Render a message to the cardContainer
    const renderMessage = (message) => {
        const cardContainer = document.getElementById("cardContainer");
        let colSm12;

        if(!document.getElementById("statusMessage")) {
            colSm12 = document.createElement("div");
            colSm12.id = "statusMessage";
            colSm12.className = "mt-30-center";
            cardContainer.appendChild(colSm12);
        } else {
            colSm12 = document.getElementById("statusMessage");
        }

        colSm12.innerText = message;
    };

    // Render game card
    const renderCard = ({imageUrl, name, text, rarity, colors}) => {
        const detailsContainer = document.getElementById("cardDetails");
        const imageContainer = document.getElementById("cardImage");
        const [image, header, aboutDiv, rarityDiv, colorDiv] = document.createElements("img", "h2", "div", "div", "div");

        renderMessage("");

        // Give content and attributes
        image.style.width = "100%";
        image.src = imageUrl ? imageUrl : "https://via.placeholder.com/223x310";
        image.alt = name;

        header.innerText = name;
        aboutDiv.innerHTML = "<b>About:</b> " + text;
        rarityDiv.innerHTML= "<b>Rarity:</b> " + rarity;
        colorDiv.innerHTML = "<b>Color:</b> " + colors;

        // Add elements to parent container
        imageContainer.appendChild(image);
        detailsContainer.appendChilds(header, aboutDiv, rarityDiv, colorDiv);
    };

    // Get the card
    const getCard = () => {
        const id = getQueryStringValue("id");

        renderMessage("Loading...");

        if(id) {
            fetch("https://api.magicthegathering.io/v1/cards/" + id)
                .then(result => result.json())
                .then(({card}) => card ? renderCard(card) : renderMessage("Sorry. No card with that ID was found"))
                .catch(error => console.log("An error occurred while trying to get the game cards from the API", error));
        } else {
            renderMessage("Sorry. The URL's id query parameter cannot be empty.");
        }
    };

    getCard();

})();