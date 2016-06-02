//(function (global) {
//    "use strict";
//    var Latitude = 0;
//    var Longitude = 0;

//    function loadMapsApi() {
//        $.getScript('http://www.bing.com/api/maps/mapcontrol?callback=onMapsApiLoaded');
//    }

//    global.onMapsApiLoaded = function () {
//        navigator.geolocation.watchPosition(geolocationSuccess, geolocationError, {
//            timeout: 30000,
//            enableHighAccuracy: true
//        });

//        function geolocationSuccess(postion) {
//            Latitude = postion.coords.latitude;
//            Longitude = postion.coords.longitude;

//        }

//        function geolocationError(error) {
//            console.log("Error: " + error.message);
//        }

//        var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
//            credentials: 'Aokm3Po4LKNXAZPykaQHX-A7hsKIkmfhr4eClHS_M_qHeG_w0V9hsNzyxPCFkt-x',
//            center: new Microsoft.Maps.Location(Latitude, Longitude),
//            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
//            zoom: 15
//        });

//        var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
//        map.entities.push(pushpin);
//        //var test = document.getElementById('myMap');
//        //test.innerHTML = 'test';
//    };

//    document.addEventListener("deviceready", loadMapsApi, false);

//})(window);