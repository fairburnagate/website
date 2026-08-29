$(".tooltip").on("click", function (event) {
	var tooltipContent = $(this).parent().children(".tooltip-content");
	if (tooltipContent.css("display") === "none") {
		// this gets the position of the link being clicked
		var pos = $(this).position();
		var left = pos.left;
		var top = pos.top;
		// this reveals the tooltip content and positions it
		tooltipContent.css({
			display: "inline-block",
			top: top,
			left: left,
		});
		event.preventDefault();
	} else {
		// this hides the tooltip when the link is clicked
		tooltipContent.css("display", "none");
		event.preventDefault();
	}
});
// this hides the tooltip when the tooltip content is clicked
$("span.tooltip-content").on("click", function (event) {
	$(this).css("display", "none");
});
