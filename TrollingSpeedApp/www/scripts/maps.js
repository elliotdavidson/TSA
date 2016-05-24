//(function (global) {

//    function loadMapsApi() {
//        $.getScript('http://www.bing.com/api/maps/mapcontrol?callback=onMapsApiLoaded');
//    }

//    global.onMapsApiLoaded = function () {
//        var Latitude, Longitude
//        navigator.geolocation.watchPosition(geolocationSuccess, geolocationError, { timeout: 30000, enableHighAccuracy: true });

//        function geolocationSuccess(postion){
//            Latitude = postion.coords.latitude;
//            Longitude = postion.coords.longitude;

//            //getMap(Latitude, Longitude)
//        }

//        function geolocationError(error) {
//            console.log("Error: " + error.message);
//        }

//        var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
//            credentials: 'Aokm3Po4LKNXAZPykaQHX-A7hsKIkmfhr4eClHS_M_qHeG_w0V9hsNzyxPCFkt-x',
//            center: new Microsoft.Maps.Location(0, 0),
//            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
//            zoom: 10
//        });
//    };

//    document.addEventListener("deviceready", onDeviceReady, false);
//})

//function loadMapsApi() {
//    $.getScript('http://www.bing.com/api/maps/mapcontrol?callback=onMapsApiLoaded');
//    loadMapScenario();
//}

//function loadMapScenario() {

//    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
//        credentials: 'Aokm3Po4LKNXAZPykaQHX-A7hsKIkmfhr4eClHS_M_qHeG_w0V9hsNzyxPCFkt-x'
//    });
//}