function buildMap(sitemapWrapper){
    var siteMap = document.getElementById(sitemapWrapper);
    var list = document.createElement("ul");
    var subList = document.createElement("ul");
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
    list.appendChild(subList);
    siteMap.appendChild(list);
}
function item(name, link) {
    var sitemapWrapper = document.createElement("a");
    var li = document.createElement("li");
    sitemapWrapper.href = link;
    sitemapWrapper.textContent = name;
    li.appendChild(sitemapWrapper);
    return li;
}

