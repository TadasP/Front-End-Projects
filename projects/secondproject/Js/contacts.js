function initMap() {
    var uluru = {
        lat: 54.649873,
        lng: 25.238175
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
