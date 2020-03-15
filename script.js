var labelSizes = {
    "default": {
        width: 63.5,
        height: 46.6,
        pageMarginX: 7.0,
        pageMarginY: 8.5,
        splitX: 2.5,
        splitY: 0,
        perPage: 18
    },
    "a-63.5x46.6": {
        width: 63.5,
        height: 46.6,
        pageMarginX: 7.0,
        pageMarginY: 8.5,
        splitX: 2.5,
        splitY: 0,
        perPage: 18
    }
};

function openPrintDialog() {
    $(".dialogBackground").fadeIn(1000);
    $("#printDialog").show();

    setTimeout(function() {
        $("#printDialog").addClass("open");
    }, 10);
}

function closePrintDialog() {
    $(".dialogBackground").fadeOut(1000);
    $("#printDialog").removeClass("open");

    setTimeout(function() {
        $("#printDialog").hide();
    }, 1000);
}

function startPrinting() {
    var selectedLabelSize = labelSizes[$("#size").val()];

    window.location.href = `/print.html?quantity=${encodeURIComponent(
        $("#quantity").val()
    )}&width=${encodeURIComponent(
        selectedLabelSize.width
    )}&height=${encodeURIComponent(
        selectedLabelSize.height
    )}&pageMarginX=${encodeURIComponent(
        selectedLabelSize.pageMarginX
    )}&pageMarginY=${encodeURIComponent(
        selectedLabelSize.pageMarginY
    )}&splitX=${encodeURIComponent(
        selectedLabelSize.splitX
    )}&splitY=${encodeURIComponent(
        selectedLabelSize.splitY
    )}&perPage=${encodeURIComponent(
        selectedLabelSize.perPage
    )}&monochrome=${$("#colour").val() == "monochrome" ? "true" : "false"}`;
}

$(function() {
    $("#quantity, #size").change(function() {
        var selectedLabelSize = labelSizes[$("#size").val()];

        $("#quantity").attr("max", selectedLabelSize.perPage);

        if ($("#quantity").val() > selectedLabelSize.perPage) {
            $("#quantity").val(selectedLabelSize.perPage);
        }
    });
});