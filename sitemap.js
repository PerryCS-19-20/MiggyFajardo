function buildMap(sitemapWrapperid){
    var area = document.getElementById(sitemapWrapperid);
    var list = document.createElement("ul");
    var subList = document.createElement("ul");
    var drop = document.createElement("li");
    drop.textContent = "Links";
    list.appendChild(item("Home", "index.html"));
    list.appendChild(item("Gallery", "gallery.html"));
    list.appendChild(item("About", "about.html")); 
	

	
    subList.appendChild(item("Breakout", "breakout.html"));
    subList.appendChild(item("Paint Splatter", "paint.html"));
    subList.appendChild(item("Eureka", "popup.html"));
    subList.appendChild(item("Javascript Events", "events.html"));
    subList.appendChild(item("Chalkboard", "chalkboard.html"));
    subList.appendChild(item("To Do List", "todolist.html"));
    subList.appendChild(item("Tic-Tac-Toe", "tictactoe.html"));
    subList.appendChild(item("Table", "table.html"));
    subList.appendChild(item("Multiplication Slider", "slider.html"));
    drop.appendChild(subList);
    list.appendChild(drop);
    area.appendChild(list);
}
function item(name, link) {
    var sitemap = document.createElement("a");
    var li = document.createElement("li");
    sitemap.href = link;
    sitemap.textContent = name;
    li.appendChild(sitemap);
    return li;
}

