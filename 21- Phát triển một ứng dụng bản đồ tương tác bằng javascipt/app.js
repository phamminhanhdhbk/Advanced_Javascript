let map;
let markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 2,
    });

    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value;
        if (query) {
            searchLocation(query);
        }
    });
}

function searchLocation(query) {
    const service = new google.maps.places.PlacesService(map);
    service.textSearch(
        {
            query: query,
        },
        (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                clearMarkers();
                createMarkers(results);
            } else {
                alert("No places found.");
            }
        }
    );
}

function createMarkers(places) {
    places.forEach((place) => {
        const marker = new google.maps.Marker({
            map,
            position: place.geometry.location,
        });
        markers.push(marker);

        marker.addListener("click", () => {
            const infowindow = new google.maps.InfoWindow({
                content: `<h3>${place.name}</h3><p>${place.formatted_address}</p><img src="${place.photos ? place.photos[0].getUrl() : ''}" width="200">`,
            });
            infowindow.open(map, marker);
        });
    });
}

function clearMarkers() {
    markers.forEach((marker) => {
        marker.setMap(null);
    });
    markers = [];
}
