var fish = [
    {fish: 'Angler', image: 'img/angler.png', price: 24.99, color: 'brown', scary: true, water: true, show: true},
    {fish: 'Cheeks', image: 'img/cheeks.png', price: 11.99, color: 'yellow', scary: false, water: true, show: true},
    {fish: 'Electric', image: 'img/electric.png', price: 29.99, color: 'clear', scary: true, water: true, show: true},
    {fish: 'Feet', image: 'img/feet.png', price: 3.99, color: 'purple', scary: false, water: true, show: true},
    {fish: 'Ghost', image: 'img/ghost.png', price: 19.99, color: 'clear', scary: true, water: true, show: true},
    {fish: 'Gold', image: 'img/gold.png', price: 9.99, color: 'yellow', scary: false, water: true, show: true},
    {fish: 'Guy', image: 'img/guy.png', price: 12.99, color: 'brown', scary: false, water: false, show: true},
    {fish: 'Lisp', image: 'img/lisp.png', price: 49.99, color: 'gray', scary: true, water: true, show: true},
    {fish: 'Mask', image: 'img/mask.png', price: 19.99, color: 'yellow', scary: true, water: false, show: true},
    {fish: 'Noodle', image: 'img/noodle.png', price: 34.99, color: 'brown', scary: true, water: true, show: true},
    {fish: 'Nose', image: 'img/nose.png', price: 19.99, color: 'gray', scary: true, water: true, show: true},
    {fish: 'Pog', image: 'img/pog.png', price: 99.99, color: 'gray', scary: false, water: true, show: true},
    {fish: 'Purple', image: 'img/purple.png', price: 9.99, color: 'purple', scary: false, water: true, show: true},
    {fish: 'Spongebob', image: 'img/spongebob.png', price: 39.99, color: 'yellow', scary: false, water: false, show: true},
    {fish: 'Yellow', image: 'img/yellow.png', price: 14.99, color: 'yellow', scary: false, water: true, show: true},
];
var ids =[
    {name: 'name1', image: 'img1', price: 'price1', show: 'display1'},
    {name: 'name2', image: 'img2', price: 'price2', show: 'display2'},
    {name: 'name3', image: 'img3', price: 'price3', show: 'display3'},
    {name: 'name4', image: 'img4', price: 'price4', show: 'display4'},
    {name: 'name5', image: 'img5', price: 'price5', show: 'display5'},
    {name: 'name6', image: 'img6', price: 'price6', show: 'display6'},
    {name: 'name7', image: 'img7', price: 'price7', show: 'display7'},
    {name: 'name8', image: 'img8', price: 'price8', show: 'display8'},
    {name: 'name9', image: 'img9', price: 'price9', show: 'display9'},
    {name: 'name10', image: 'img10', price: 'price10', show: 'display10'},
    {name: 'name11', image: 'img11', price: 'price11', show: 'display11'},
    {name: 'name12', image: 'img12', price: 'price12', show: 'display12'},
    {name: 'name13', image: 'img13', price: 'price13', show: 'display13'},
    {name: 'name14', image: 'img14', price: 'price14', show: 'display14'},
    {name: 'name15', image: 'img15', price: 'price15', show: 'display15'},
];
var colors = ['brown', 'clear', 'gray', 'purple','yellow'];

function color(string){
    for(var i=0;i<colors.length;i++) {
        if (string == colors[i]){
            return document.getElementById(colors[i]).checked;
        }
    }
}
function price(price){
    var min = document.getElementById("minPrice").value;
    var max = document.getElementById("maxPrice").value;
    if(min == ''){
        min = '0';
    }
    if(max == ''){
        max = '999';
    }
    return (price >= parseInt(min) && price <= parseInt(max))
}
function dropCheck(value, bool){
    switch(value){
        case 'Both':
            return true;
        case 'Yes':
            return bool;
        case 'No':
            return !bool;
    }
}
function drop(list){
    return (dropCheck(document.getElementById("water").value, list.water) && dropCheck(document.getElementById("scary").value, list.scary));
}
function orderBy(sortValue) {

    var sortedResults = (sortValue === 'fish') ?
        fish.sort(function (a, b) {
            var nameA = a.fish.toUpperCase();
            var nameB = b.fish.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        }) :
        fish.sort(function (a, b) {
            return a.price - b.price;
        });
    render(sortedResults);
}
function valuesChecker(list){
    for(var i=0;i<list.length;i++) {
        list[i].show = (price(list[i].price) && color(list[i].color) && drop(list[i]));
    }
    render(list);
}
function render(list){
    for(var i=0;i<list.length;i++){
        document.getElementById(ids[i].name).innerHTML = list[i].fish+' Fish';
        document.getElementById(ids[i].image).src = list[i].image;
        document.getElementById(ids[i].price).innerHTML ='$'+list[i].price;
        document.getElementById(ids[i].name).setAttribute('herf','fishInfo.html?fish='+list[i].fish);
        document.getElementById(ids[i].image).innerHTML = 'fishInfo.html?fish='+list[i].fish;
        toggleShow(list[i].show, ids[i].show);
    }
}
function toggleShow(show, tag){
    let getTag = document.getElementById(tag);
    if (show){
        getTag.style.display = 'block';
    }
    else{
        getTag.style.display = 'none';
    }
}
function getQueryString(){
    var x = location.search;
    return x;
    //will return in this format: ?fish=example
    // we need to isolate example

}
document.querySelector('#brown').addEventListener('change', function(event){
    //color('brown')
    valuesChecker(fish);
});
document.querySelector('#clear').addEventListener('change', function(event){
    //color('clear')
    valuesChecker(fish);
});
document.querySelector('#gray').addEventListener('change', function(event){
    //color('gray')
    valuesChecker(fish);
});
document.querySelector('#purple').addEventListener('change', function(event){
    //color('purple')
    valuesChecker(fish);
});
document.querySelector('#yellow').addEventListener('change', function(event){
    //color('yellow')
    valuesChecker(fish);
});
document.querySelector('#orderBy').addEventListener('change', function(event){
    orderBy(event.target.value);
});
document.querySelector('#minPrice').addEventListener('keyup', function(event){
    //price(document.getElementById("minPrice").value, document.getElementById("maxPrice").value);
    valuesChecker(fish);
});
document.querySelector('#maxPrice').addEventListener('keyup', function(event){
    //price(document.getElementById("minPrice").value, document.getElementById("maxPrice").value);
    valuesChecker(fish);
});
document.querySelector('#scary').addEventListener('change', function(event){
    //scary(event.target.value);
    valuesChecker(fish);
});
document.querySelector('#water').addEventListener('change', function(event){
    //water(event.target.value);
    valuesChecker(fish);
});


