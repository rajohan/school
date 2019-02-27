// A helper method to create multiple html elements at once
Document.prototype.createElements = function() {
    return [...arguments].map(arg => document.createElement(arg));
};

// A helper method to append multiple html element child's at once
HTMLElement.prototype.appendChilds = function () {
    return [...arguments].map(arg => this.appendChild(arg));
};

// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}