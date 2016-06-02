function onPositionUpdate(position) {

    $("geolocation").empty();

    var element = document.getElementById('geolocation');
    element.innerHTML = Math.round(position.coords.speed * 2.23693629 * 100) / 100 + ' MPH ';
    //position.coords.latitude, position.coords.longitude

}

function onPositionError(error) {
    console.log("Error: " + error.message);
}

$(document).on("deviceready", function () {
    navigator.geolocation.watchPosition(onPositionUpdate, onPositionError, { timeout: 30000, enableHighAccuracy: true });
});