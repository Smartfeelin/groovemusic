function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    for (var i = 0; i < tables.length; i++) {
        var odd = true;
        var rows = tables[i].getElementsByTagName("tr");
        for (var j = 0; j < rows.length; j++) {
            if (odd == true) {
                rows[j].style.backgroundColor = "rgb(230, 230, 230)";
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}

window.onload = stripeTables;