var instaApp = angular.module('instaApp', []);

instaApp.controller('instaController', function (){
    
    var insta = this;






var pics = [{ name: 'murray', photo: "http://www.fillmurray.com/300/300"},
    { name: 'murray2', photo: "http://www.fillmurray.com/400/400}"}
];

    insta.pics = pics;

    console.log(pics);
    
});