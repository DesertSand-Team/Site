/* Contains scripts for:
    1. Dropdown menus.
    2. Gifs visualisation and messages
    3. Added jquery to load images in gallery
    4. to do : ) (delete this row if nothing more is added)
 */

/* dropdown menu */

function RedirectSoftUni() {
    window.location.replace("https://softuni.bg/");
}

function ShowOrHideMenu() {
    var dropDown = document.getElementById('drop-down');
    //Broken hover after the use;
    var menu = document.getElementById('menu');

    if (dropDown.style.display == 'block') {
        dropDown.style.display = 'none';
        menu.style.backgroundColor = 'transparent';
        menu.style.color = '#fff';
    } else {
        dropDown.style.display = 'block';
        menu.style.backgroundColor = '#fff';
        menu.style.color = '#2A6496';
    }
}

function CloseMenu() {
    var dropDown = document.getElementById('drop-down');

    if (dropDown.style.display == 'block') {
        dropDown.style.display = 'none';
        menu.style.backgroundColor = 'transparent';
        menu.style.color = '#fff';
    }
}

/* Messages and controls for the .gifs */

var messages = [
    "При кака Алекс",
    "Когато някой каже, че е решил задачата с рекурсия",
    "Когато се сблъскахме със CSS",
    "Когато някой ми предложи да се занимавам с извънкласни проекти",
    "Как правим Teamwork",
    "Когато имам 400 точки в джъджа",
    "Когато кажа, че знам как да реша задачата с три звездички",
    "Как се сблъсках с ООП",
    "Как разбирам рекурсията",
    "Когато ми обясняват косвена рекурсия",
    "На изпита по Web Fundamentals",
    "Когато видя, че джъджа затваря след 20 минути",
    "Как си представям програмистите",
    "Когато позиционирам нещо в CSS",
    "Когато знам как да реша задачата",
    "Как пишем статиите в Уикипедия"
];

var globalIndex = 0;

function changeImage() {
    globalIndex = Math.floor(Math.random() * messages.length);
    var message = "<p>" + messages[globalIndex] + "</p><img src=\"Images/Gifs/" +
        globalIndex + ".gif\"/>";
    document.getElementById("image-gallery").innerHTML = message;
}

function getNext() {
    maxLength = messages.length - 1;
    globalIndex++;
    console.info(globalIndex);
    if (globalIndex > maxLength) {
        globalIndex = 0;
    }
    var message = "<p>" + messages[globalIndex] + "</p><img src=\"Images/Gifs/" +
        globalIndex + ".gif\"/>";
    document.getElementById("image-gallery").innerHTML = message;
}

function getPrevious() {
    globalIndex--;
    console.info(globalIndex);
    if (globalIndex < 0) {
        globalIndex = messages.length - 1;
    }
    var message = "<p>" + messages[globalIndex] + "<p><img src=\"Images/Gifs/" +
        globalIndex + ".gif\"/>";
    document.getElementById("image-gallery").innerHTML = message;
}

//Jquery for fancybox
$(function($){
    var addToAll = false;
    var gallery = true;
    var titlePosition = 'inside';
    $(addToAll ? 'img' : 'img.fancybox').each(function(){
        var $this = $(this);
        var title = $this.attr('title');
        var src = $this.attr('data-big') || $this.attr('src');
        var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
        $this.wrap(a);
    });
    if (gallery)
        $('a.fancybox').attr('rel', 'fancyboxgallery');
    $('a.fancybox').fancybox({
        titlePosition: titlePosition
    });
});
$.noConflict();