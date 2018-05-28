var food = ["burger", "steak", "roastDuckOnRice", "pasta", "twiceCookedPork", "beefNoodle", "hotpot"];
var foodText = ["Burger", "Steak", "烧鹅饭", "Pasta", "回锅肉","牛肉面", "火锅"]
var initRandom = function() {
    $("#roll").click(function(){
        roll();
    })
}

var roll = function() {
    var index = Math.floor(Math.random()*food.length);
    var source = "/images/"+food[index]+".jpg";
    var text = "<h3> " + foodText[index];
    $("#thumbnail").attr("src", source);
    $("#textDiv").html(text);

}