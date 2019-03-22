$.ajax({
    type:"get",
    url:"php/listinfo.php",
    dataType:"json",
    success:function(list){
        var html = "";
        list.forEach(function(item){
            var {
                img,
                name,
                price,
                noprice
            } = item;
            html +=
                    `<ul class="clearfix">
                    <li>
                        <div class="sur_hear">
                            <img src="${img}" alt="" width="200" height="200">
                            <h3><a href="">${name}</a></h3>
                        </div>

                        <div class="sur_price">

                            <div class="sur_price1">
                                <span>${price}</span>
                                <p>${noprice}</p>
                            </div>

                            <div class="fr">立即抢购</div>

                        </div>
                    </li>
                </ul>`;
        });
    $(".clearfixbox").html(html);
    }
})
$(document).on('click','.clearfix li',function(){
    window.location.href = "html/list.html";
})
$(document).on('click','.submit',function(){
    window.location.href = "html/list.html";
})
$(document).on('click','.ejcd li',function(){
    window.location.href = "html/list.html";
})
$(document).on('click','.sub_bav li',function(){
    window.location.href = "html/list.html";
})