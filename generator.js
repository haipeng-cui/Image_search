$(document).ready(function(){
    //initial load
    $("form+div").removeClass("loaded");
    //search
    $(this).submit(function(event){
       event.preventDefault();
       let str = $(this).find("input").val();
       $(".image-container.loaded").find("img").attr("src","https://source.unsplash.com/400x250/?"+str);

    });
    //add to gallery
    $(".add").click(function(event) {
        event.preventDefault();
        let gallery = $("#image-gallery").find("img:first");
        let newsrc = $(".image-container.loaded").find("img").attr("src");
        gallery.before($("<img>").attr("src", newsrc));
      });
    //load event
    $(".image-container").find("img").on("load", function(){
        $("form+div").addClass("loaded");
     });


}); 
