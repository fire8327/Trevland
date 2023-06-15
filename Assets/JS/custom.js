/*jshint esnext: true */
/* navigation */
$("#toggler, #overlay").click(()=>{
  $("#menu").toggleClass("max-lg:-translate-y-full")
  $("#menu").toggleClass("top-0")
  $("#menu").toggleClass("top-full")
  $("body").toggleClass("overflow-hidden")
  $("#overlay").toggleClass("hidden")
})
