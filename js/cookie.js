function setCookie(key, value, days, path = "/") {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";expires=" + date + ";path=" + path;
}

function getCookie(key) {
    var cookie = document.cookie;
    if (cookie) {
        var cookieList = cookie.split("; "); //["key1=value1","key2=value2"]
        // var cookieInfo = cookieList.filter(function (str) {
        //     var item = str.split("="); //["key","value"]
        //     var itemKey = decodeURIComponent(item[0]);
        //     return itemKey == key;
        // })
        for (var i = 0; i < cookieList.length; i++) {
            var item = cookieList[i].split("="); //"key1=value1"
            var itemKey = decodeURIComponent(item[0]);
            if (itemKey == key) {
                return decodeURIComponent(item[1]);
            }
        }
        return "";
    } else {
        return "";
    }
}