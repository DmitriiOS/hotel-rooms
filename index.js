var buttonPressed = false;

function buttonClicked(self) {
    var buttons = document.querySelectorAll(".item__button");
    buttonIndex = Array.from(buttons).indexOf(self);
    document.getElementsByClassName("item__reserved-block")[buttonIndex].style.zIndex = "7";
    buttonPressed = true;
}

function itemClicked(self) {
    var items = document.querySelectorAll(".rooms__item");
    itemIndex = Array.from(items).indexOf(self);
    if (!buttonPressed) {
        document.getElementsByClassName("item__reserved-block")[itemIndex].style.zIndex = "-7";
        document.getElementsByClassName("item__gradient")[itemIndex].style.background = "none";
    }
    buttonPressed = false;
}

function itemQuited(self) {
    var quitedItems = document.querySelectorAll(".rooms__item");
    quitedItemIndex = Array.from(quitedItems).indexOf(self);
    if (document.getElementsByClassName("item__reserved-block")[quitedItemIndex].style.zIndex == "7") {
        document.getElementsByClassName("item__gradient")[quitedItemIndex].style.background = "rgba(255, 255, 255, 0.4)";
    }
}