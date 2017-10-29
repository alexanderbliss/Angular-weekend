var instaApp = angular.module('instaApp', []);

instaApp.controller('instaController', function () {

    var insta = this;
    insta.veiw = 0
    insta.messge = ""
    var pics = [{ name: 'My dog Maeby stealing an eggroll', photo: "https://i.imgur.com/Pnc6IDt.jpg?1" },
    { name: 'My cat alley being allergic to the sun', photo: "https://i.imgur.com/Vic123h.jpg?1" },
    { name: 'Christmas 2010', photo: 'https://i.imgur.com/RVFXqCe.jpg?1' },
    { name: 'Me and my brothers resting during a long hike', photo: 'https://i.imgur.com/adjat3s.jpg?1' },
    { name: 'Cats in a bag', photo: 'https://i.imgur.com/KgeOEGO.jpg?1' },
    { name: 'Me and my girlfriend at my brothers wedding', photo: 'https://i.imgur.com/LfC2TPv.jpg?1' },
    ];
    insta.showDes = function (data) {
        insta.message = data.name
        insta.veiw +=1;
        console.log(insta.veiw);
        
        console.log('click');

    }
    insta.pics = pics;

    console.log(pics);

});