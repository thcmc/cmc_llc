'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', function ($scope, Authentication) {
    $scope.authentication = Authentication;

    // var code = document.getElementById('code');
        var demo = document.getElementById('demo');
        var svg = document.getElementsByTagName('svg')[0];

        // Convert the SVG node to HTML.
        var div = document.createElement('div');
        div.appendChild(svg.cloneNode(true));

        // Encode the SVG as base64
        var b64 = 'data:image/svg+xml;base64,'+window.btoa(div.innerHTML);
        var url = 'url("' + b64 + '")';
        // code.innerHTML = 'Base64 CSS (for cross-browser compatibility)\n\nbackground-image: ' + url + ';';
        demo.style.backgroundImage = url;


    $scope.projects = [
    	{company:'East End Eatz',url:'http://www.eastendeatz.com',logo:'#',desc:'#', t1:'Node.JS',t2:'Angular.JS',t3:'#',t4:'#',t5:'#',img:'modules/core/img/ss_eee.png'},
    	{company:'CYA',url:'http://www.catholicyouthassociation.com',logo:'#',desc:'#', t1:'Node.JS',t2:'#',t3:'#',t4:'#',t5:'#',img:'modules/core/img/ss_cya.png'},
    	{company:'ADS',url:'http://www..com',logo:'#',desc:'#', t1:'#',t2:'#',t3:'#',t4:'#',t5:'Node.JS',img:'modules/core/img/ss_cyaads.png'},
    	{company:'GASS',url:'http://www.gasshockey.com',logo:'#',desc:'#', t1:'Node.JS',t2:'#',t3:'#',t4:'#',t5:'#',img:'modules/core/img/ss_gass.png'},
    	{company:'Alberts Lounge',url:'http://www.albertsloungecom',logo:'modules/core/img/al_logo.png',desc:'#', t1:'Node.JS',t2:'#',t3:'#',t4:'#',t5:'#',img:'modules/core/img/ss_al.png'},
    	{company:'TH Hockey',url:'http://www.thhockey.me',logo:'#',desc:'#', t1:'Node.JS',t2:'#',t3:'#',t4:'#',t5:'#',img:'modules/core/img/ss_thhockey.png'},
    	{company:'Tim Heneroty',url:'http://www.timheneroty.com',logo:'#',desc:'#', t1:'Node.JS',t2:'#',t3:'#',t4:'#',t5:'#',img:'modules/core/img/ss_th.png'}
    ];
}]);