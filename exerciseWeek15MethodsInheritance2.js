function DeveloperApp(name, licence, stars) {
    if (stars < 0 || stars > 5) {
        throw new Error ('Invalid number of stars');
    }
    
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}


DeveloperApp.prototype.isCCLicence = function () {
    return this.licence === 'CC' || this.licence === 'Creative Commons';
}

DeveloperApp.prototype.like = function () {
    if (this.stars === 5) {
        return 'Maximum number of stars reached';
    } else {
        return this.stars = this.stars + 1;
    }
}

DeveloperApp.prototype.showStars = function () {
    console.log(this.stars);
}



function WebApp(name, url, technologies, licence, stars) {
    DeveloperApp.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}

WebApp.prototype = Object.create(DeveloperApp.prototype);
WebApp.prototype.constructor = WebApp;


WebApp.prototype.getData = function () {
    console.log(this.name + '/ ' + this.url + '/ ' + this.technologies + '/ ' + this.licence + '/ ' + this.stars);
}

WebApp.prototype.reactBased = function () {
    return this.technologies.includes('React');
}


function MobileApp(name, platforms, licence, stars) {
    DeveloperApp.call(this, name, licence, stars);
    this.platforms = platforms;
}

MobileApp.prototype = Object.create(DeveloperApp.prototype);
MobileApp.prototype.constructor = MobileApp;


MobileApp.prototype.getData = function () {
    console.log(this.name + '/ ' + this.platforms + '/ ' +  this.licence + '/ ' +  this.stars);
}

MobileApp.prototype.isAndroid = function () {
    return this.platforms.includes('Android');
}


//testing


var glavna = new DeveloperApp('facebook', 'CC', 5);
var web = new WebApp('Gmail', 'www.gmail.com', ['React', 'JS', 'JQuery'], 'CC', 3);
var mob = new MobileApp('Viber', 'Android', 'Creative Commons', 4);


console.log(mob.isCCLicence());
console.log(glavna.like());
console.log(web.like());
glavna.showStars();
web.showStars();
web.getData();
console.log(web.reactBased());
mob.getData();
console.log(mob.isAndroid());