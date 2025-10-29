mapboxgl.accessToken = 'pk.eyJ1Ijoiam96ZWxsZXMiLCJhIjoiY21oYmd6ZjY1MHhzMDJpcHlxaXR6bGZ2bCJ9.S506XX8-HLL60UX_P3rasA';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
style: 'mapbox://styles/jozelles/cmhbh45fg001m01r67ni57kig', // Your Style URL goes here
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });