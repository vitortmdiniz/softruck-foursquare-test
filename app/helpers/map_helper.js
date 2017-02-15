function addressPointsToMarkers(points) {
    return points.map(function(ap) {
        return {
            layer: 'realworld',
            message: 'Place: ' + ap.name + '<br/>' + 'Address: ' + ap.location.address,
            lat: ap.location.lat,
            lng: ap.location.lng
        };
    });
};