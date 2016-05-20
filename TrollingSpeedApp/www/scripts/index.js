// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        getMap();
        //var element = document.getElementById("deviceready");
        //element.innerHTML = 'Device Ready';
        //element.className += ' ready';
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function getMap() {
        if (typeof Microsoft == 'undefined' ||
            typeof Microsoft.Maps == 'undefined' ||
            typeof Microsoft.Maps.Map == 'undefined') {
            setTimeout(getMap, 1000);
            //var element = document.getElementById('maps');
            //element.innerHTML = 'TEST';
            return;
        }

        try {
            var element = document.getElementById('maps');
            element.innerHTML = 'TEST';
            var map = new Microsoft.Maps.Map(document.getElementById("maps"), {
                credentials: 'Aokm3Po4LKNXAZPykaQHX - A7hsKIkmfhr4eClHS_M_qHeG_w0V9hsNzyxPCFkt - x',
                showDashboard: false,
                enableHighDpi: true,
                backgroundColor: new Microsoft.Maps.Color(255, 0, 0, 0)
            });
        } catch (e) {
            //alert('failed');
        }
    }

} )();