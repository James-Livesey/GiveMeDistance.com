var badgeProperties = {};

function getURLParameter(name) {
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}

$(function() {
    badgeProperties.quantity = Number(getURLParameter("quantity") || 0);
    badgeProperties.width = Number(getURLParameter("width") || 0);
    badgeProperties.height = Number(getURLParameter("height") || 0);
    badgeProperties.pageMarginX = Number(getURLParameter("pageMarginX") || 0);
    badgeProperties.pageMarginY = Number(getURLParameter("pageMarginY") || 0);
    badgeProperties.splitX = Number(getURLParameter("splitX") || 0);
    badgeProperties.splitY = Number(getURLParameter("splitY") || 0);
    badgeProperties.perPage = Number(getURLParameter("perPage") || 0);
    badgeProperties.monochrome = getURLParameter("monochrome") == "true";

    for (var badgeCount = 1; badgeCount <= badgeProperties.quantity; badgeCount++) {
        var badgeElement = $(`<img src="${badgeProperties.monochrome ? "media/badgeMonochrome.svg" : "media/badge.svg"}" alt="I'm part of a VULNERABLE GROUP! Please givemedistance.com">`);

        badgeElement.css({
            "width": badgeProperties.width + "mm",
            "height": badgeProperties.height + "mm"
        });

        $("body").append(badgeElement);
    }

    $("img").css({
        "margin-top": (badgeProperties.splitY / 2) + "mm",
        "margin-bottom": (badgeProperties.splitY / 2) + "mm",
        "margin-left": (badgeProperties.splitX / 2) + "mm",
        "margin-right": (badgeProperties.splitX / 2) + "mm"
    });

    $("body").append($("<style>").text(`
        body {
            padding-top: ${badgeProperties.pageMarginY - (badgeProperties.splitY / 2)}mm;
            padding-bottom: ${badgeProperties.pageMarginY - (badgeProperties.splitY / 2)}mm;
            padding-left: ${badgeProperties.pageMarginX - (badgeProperties.splitX / 2)}mm;
            padding-right: ${badgeProperties.pageMarginX - (badgeProperties.splitX / 2)}mm;
        }
    `));

    window.print();

    setTimeout(function() {
        window.location.replace("/");
    }, 3000);
});