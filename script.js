mapboxgl.accessToken = 'pk.eyJ1Ijoiam96ZWxsZXMiLCJhIjoiY21oYmd6ZjY1MHhzMDJpcHlxaXR6bGZ2bCJ9.S506XX8-HLL60UX_P3rasA';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
style: 'mapbox://styles/jozelles/cmhbh45fg001m01r67ni57kig', // Your Style URL goes here
  center: [-122.25, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 15 // starting zoom, again you can choose the level you'd like.
    });

map.on('load', function() {
    map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/jozelles/BAHA-MAP/refs/heads/main/data/183data.geojson'
    });

    map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#d8bfd8',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });

     map.on('click', 'points-layer', (e) => {
           const coordinates = e.features[0].geometry.coordinates.slice();
              const properties = e.features[0].properties;

            const popupContent = `
            <div>
                <h3>${properties.Landmark}</h3>
                <p><strong>Address:</strong> ${properties.Address}</p>
                <p><strong>Architect & Date:</strong> ${properties.Architect_Date}</p>
                <p><strong>Designated:</strong> ${properties.Designated}</p>
                ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
                ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
            </div>
        `;

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);
    });

     // Change cursor to pointer when hovering over points
    map.on('mouseenter', 'points-layer', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change cursor back when leaving points
    map.on('mouseleave', 'points-layer', () => {
        map.getCanvas().style.cursor = '';
    });
});
