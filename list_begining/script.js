var i = 0;
   $("li").each(function(){
   $(this).prepend("<b>"+i+": </b>");
   i++;
});