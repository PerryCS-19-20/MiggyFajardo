function buildMap(sitemapWrapper){
    var sitemap = document.getElementId(sitemapWrapper);
    var list = document.getElementId("ul");
    var sublist = document.getElementId("ul");
    list.appendChild(item("Home", "/"))
    list.appendChild(item("About", "about"))
    list.appendChild(item("Gallery", "gallery"))
    
    subList.appendChild(item("Breakout", "breakout"));
    list.appendChild(subList);
    siteMap.appendChild(list);
}
}
function item(name, link) {
    var sitemapWrapper = document.createElement("a");
    var li = document.createElement("li");
    sitemapWrapper.href = link;
    sitemapWrapper.textContent = name;
    li.appendChild(sitemapWrapper);
    return li;
}

