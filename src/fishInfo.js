var ids = {
    name: 'name1',
    image: 'img1',
    price: 'price1',
    scary: 'scary1',
    water: 'water1'
};

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

function render(list){
    document.getElementById(ids.name).innerHTML = list.fish+' Fish';
    document.getElementById(ids.image).src = list.image;
    document.getElementById(ids.price).innerHTML ='$'+list.price;
    document.getElementById(ids.name).innerHTML = 'fishInfo.html?fish='+list.fish;
    document.getElementById(ids.image).innerHTML = 'fishInfo.html?fish='+list.fish;
    document.getElementById(ids.name).innerHTML = list.scary ? 'Is scary' : 'Not Scary';
    document.getElementById(ids.name).innerHTML = list.water ? 'Needs water': "Doesn't need water";
}

function getQueryString(){
    var x = location.search;
    x.split("=",2);
    return x[1];
    //will return in this format: ?fish=example
    // we need to isolate example

}

function getFish(string){
    for (var i = 0; i < fish.length ; i++)
    {
        if (fish[i] == string){
            return fish[i];
        }

    }
}
function load(){
    render(getFish(getQueryString()));
}
