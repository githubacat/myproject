$.ajax({
    type:"get",
    url:"../php/list.php",
    dataType:"json",
    success:function(list){
        var html = "";
        list.forEach(function(item){
            var {
                listimg,
                listname,
                listprice,
                listnoprice
            } = item;
            html +=
                    `<ul class="temai_list">
                        <li>
                            <a href="">
                                <p><img src="${listimg}" alt=""></p>
                                <h3>${listname}</h3>
                                <p class="price">
                                    <span class="bd">
                                        <strong>￥${listprice}元</strong>
                                    </span>
                                    <span class="sale">
                                        <b>￥${listnoprice}元</b>
                                    </span>
                                    <span class="num">
                                        销量：<strong>0</strong>
                                    </span>
                                </p>
                            </a>
                        </li>
            </ul>`;
        });
    $(".temai_main").html(html)
    }
})

$(".submit").click(function () {     
    var s_input = s_inputInp.value;
        key = s_input;
        getData(key);
});