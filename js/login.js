$(".btn").click(function () {
    var username = $(".username").val();
    var userpwd = $(".userpwd").val();
    $.ajax({
        type: "get",
        url: "../php/login.php",
        data: {
            username: username,
            userpwd: userpwd
        },
        dataType: "json",
        success: function (obj) {
            if (obj["code"] == 1) {
                setCookie("loginName", username, 7);
                setCookie("loginId", obj["id"], 7); //需要后台返回
                if (getCookie("backUrl")) { //跳转设置
                    window.location.href = getCookie("backUrl");
                } else {
                    window.location.href = "../index.html";
                }
            } else {
                alert(obj.msg);
            }
        },
        error: function (a, b, c) {
            console.log(a);
            console.log(b);
            console.log(c);
        }
    })
});