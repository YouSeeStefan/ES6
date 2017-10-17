// Product - Superclass
function Product(merk, prijs) {
    this.merk = merk;
    this.prijs = prijs;
    this.use = 'hobby';
}

function Mobile(merk, prijs) {
    Product.call(this, merk, prijs);
    this.category = 'Mobiele device';
}
Mobile.prototype.verkoopdatum  = function () {
    return 'Beschikbaar';
}

function Tablet(merk, prijs) {
    Mobile.call(this, merk, prijs);
    this.deviceType = 'Tablet';
}
Tablet.prototype = Object.create((Mobile.prototype));
Tablet.prototype.constructor = Tablet;

function Telefoon(merk, prijs) {
    Mobile.call(this, merk, prijs);
    this.deviceType = 'Telefoon';
}
Telefoon.prototype = Object.create(new Mobile());

let iPhoneX = new Telefoon('Apple', 1159);
let iPadPro = new Tablet('Apple', 739);
console.log('iPad Pro: ' + iPadPro.verkoopdatum());
console.log('iPhoneX Pro: ' + iPhoneX.verkoopdatum());
console.log(iPhoneX.use);

console.log('Is ipad an instance of mobiel?', iPadPro instanceof Mobile);
console.log('Is ipad an instance of Tablet?', iPadPro instanceof Tablet);
console.log('Is iphone an instance of telefoon?', iPhoneX instanceof Telefoon);
console.log('Is iphone an instance of mobiel?', iPhoneX instanceof Mobile);

console.log(iPadPro);
console.log(iPhoneX);

console.table(iPadPro);
console.table(iPhoneX);
