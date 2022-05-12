var one = document.getElementById("one"),
    two = document.getElementById("two"),
    three = document.getElementById("three"),
    four = document.getElementById("four"),
    five = document.getElementById("five"),
    six = document.getElementById("six"),
    seven = document.getElementById("seven"),
    eight = document.getElementById("eight"),
    nine = document.getElementById("nine");

var player = "X";

function place(tile) {
    if (player == "X") {
        placeX(tile);
        return;
    } else {
        placeO(tile)
    }
    return;
};


function placeX(tile) {
    tile.setAttribute("class", "placeX");
    tile.removeAttribute("onclick");
    player = "O";
    return;
};

function placeO(tile) {
    tile.setAttribute("class", "placeO");
    tile.removeAttribute("onclick");
    player = "X";
    return;
}