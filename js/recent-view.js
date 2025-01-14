"use strict";

function ConstructRecentItems() {
	var doc = document.getElementById("recent");

	var items = GetRecentItems(6);
	for (var i = 0; i < items.length; ++i) {
		var item = items[i];

		// Create the division/section for the item.
		var div = document.createElement("div");
		div.className = "recent-container";
		doc.appendChild(div);

		// Create the thumbnail image hyperref.
		var a_img = document.createElement("a");
		a_img.href = item.url;
		div.appendChild(a_img);

		// Create the thumbnail image.
		var img = document.createElement("img");
		img.className = "recent-thumbnail";
		img.src = item.thumbnail;
		a_img.appendChild(img);
	}
}

ConstructRecentItems();
