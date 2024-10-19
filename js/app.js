var app = angular.module('landing', []);
app.controller('showcase', function ($scope) {
    $scope.features = [
        {
            heading: 'Experienced',
            img: 'img/feature/button44.png',
            link: 'about.html',
            description: 'We have been in business for more than two decades, and we know all about spa therapy made easy.'
        },
        {
            heading: 'Plug & Play',
            img: 'img/feature/plug38.png',
            link: 'products.html',
            description: 'No more expensive renovation costs, all you need is our product. Go and see for yourself!'
        },
        {
            heading: 'Information',
            img: 'img/feature/lightbulb58.png',
            link: 'information.html',
            description: 'There are so many benefits to the Wonder Spa. Go and see all the information on all the benefits.'
        },
        {
            heading: 'Ozonater',
            img: 'img/feature/info55.png',
            link: 'ozone.html',
            description: 'Natures own purifier, Ozone or O3 is a remedy for a lot of todays alements and even a cure for illnesses.'
        },
		
    ];
});