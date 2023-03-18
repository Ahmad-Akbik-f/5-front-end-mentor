$(".qust ul li").click(function(){
    $(this.children[0]).toggleClass("active");
    $(this.children[1]).slideToggle(200)
})