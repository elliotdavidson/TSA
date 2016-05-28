function onPositionUpdate(position) {
    $("coords").empty();
    $("geolocation").empty();

    //var ps = document.getElementById('latlon');
    //ps.innerHTML = 'Lat ' + Math.round(position.coords.latitude * 10000) / 10000 + '<br>Lon ' + Math.round(position.coords.longitude * 10000) / 10000 + '<br>';
    var element = document.getElementById('geolocation');
    element.innerHTML = Math.round(position.coords.speed * 2.23693629 * 100) / 100 + ' MPH';

}

function onPositionError(error) {
    console.log("Error: " + error.message);
}

$(document).on("deviceready", function () {
    navigator.geolocation.watchPosition(onPositionUpdate, onPositionError, { timeout: 30000, enableHighAccuracy: true });
});