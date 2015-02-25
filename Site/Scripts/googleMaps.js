function initialize() {
            var myLatlng = new google.maps.LatLng(42.66692615, 23.35232401);
            var mapOptions = {
                zoom: 17,
                center: myLatlng
            }
            var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Our place!'
            });
        }

        google.maps.event.addDomListener(window, 'load', initialize);