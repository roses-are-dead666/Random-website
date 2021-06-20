var text = ["STABILITY", "RELIABILITY", "SATISFACTION"];
    var counter = 0;
    var elem = $("#intro__text");
    setInterval(change, 4000);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 1; }
        elem.fadeIn();
    });
}