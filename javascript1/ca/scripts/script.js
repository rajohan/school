(() => {
    const cardsContainer = document.getElementById("cards");

    // Loop through the array of game cards
    const handleCards = cards => {
        cards.length === 0 ? renderMessage("Sorry no cards found") : cardsContainer.innerText = "";

        for (let i = 0; i < cards.length; i++) {
            renderCard(cards[i]);
        }
    };

    // Render a message to the cardsContainer
    const renderMessage = (message) => {
        const colSm12 = document.createElement("div");
        colSm12.className = "mt-30-center";
        colSm12.innerText = message;
        cardsContainer.innerText = "";
        cardsContainer.appendChild(colSm12);
    };

    // Render each game card
    const renderCard = ({id, name, imageUrl}) => {
        const [colSm4, cardContainer, header, image, link] = document.createElements("div", "div", "h4", "img", "a");

        // Give class names
        colSm4.className = "col-sm-4";
        cardContainer.className = "card-container";
        link.className = "btn btn-success";

        // Give content and attributes
        header.innerText = name;

        image.style.width = "100%";
        image.src = imageUrl ? imageUrl : "https://via.placeholder.com/223x310";
        image.alt = name;


        link.href = "card-specific.html?id=" + id;
        link.innerText = "View More";

        // Add elements to parent container
        colSm4.appendChild(cardContainer);
        cardContainer.appendChilds(header, image, link);

        // Output card
        cardsContainer.appendChild(colSm4);
    };

    // Handle the search
    const handleSearch = query => {
        getCards("https://api.magicthegathering.io/v1/cards?name=" + query);
    };

    // Setup event listeners for searchButton click and enter keydown in search field
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("search");

    searchButton.addEventListener("click", () => handleSearch(searchInput.value), false);
    searchInput.addEventListener("keydown", event => {
        if(event.key === "Enter") {
            event.preventDefault();
            handleSearch(searchInput.value);
        }
    }, false);

    // Get all the cards
    const getCards = (url = "https://api.magicthegathering.io/v1/cards") => {
        renderMessage("Loading...");

        fetch(url)
            .then(result => result.json())
            .then(({cards}) => handleCards(cards))
            .catch(error => console.log("An error occurred while trying to get the game cards from the API", error));
    };

    getCards();
})();