//var maps;

//document.addEventListener('deviceready', onDeviceReady.bind(this), false);

//function onDeviceReady() {
//    getMap();
//};

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