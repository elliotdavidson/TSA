// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function (global) {
    "use strict";
    var Latitude = 0;
    var Longitude = 0;

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        loadMapsApi();
        window.plugins.insomnia.keepAwake()
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
        loadMapsApi();
        window.plugins.insomnia.allowSleepAgain()
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
        loadMapsApi();
        window.plugins.insomnia.keepAwake()
    };

    function loadMapsApi() {
        $.getScript('http://www.bing.com/api/maps/mapcontrol?callback=onMapsApiLoaded');
    }

    global.onMapsApiLoaded = function () {
        navigator.geolocation.watchPosition(geolocationSuccess, geolocationError, { timeout: 30000, enableHighAccuracy: true });

        function geolocationSuccess(position) {
            Latitude = position.coords.latitude;
            Longitude = position.coords.longitude;
        }

        function geolocationError(error) {
            console.log("Error: " + error.message);
        }

        var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
            credentials: 'Aokm3Po4LKNXAZPykaQHX-A7hsKIkmfhr4eClHS_M_qHeG_w0V9hsNzyxPCFkt-x',
            center: new Microsoft.Maps.Location(Latitude, Longitude),
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            zoom: 20
        });

        try {
            var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
            map.entities.push(pushpin);
        } catch (e) {
            //Stuff goes here
        }
    };

    document.addEventListener("deviceready", onDeviceReady, false);

})(window);