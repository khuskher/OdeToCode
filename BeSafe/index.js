// import geojson from "./data";
mapboxgl.accessToken = 'pk.eyJ1IjoieWF0cmFhIiwiYSI6ImNsZTl0anowbDA1Zm4zcG5tbXp3ZTNiNTUifQ.Oo4A5F3Od7MT1IcMWMrdpQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [72.8311,21.1702],
    zoom: 12
  });

  map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })
    );

  const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.032, 38.913]
      },
      properties: {
        title: 'Murder',
        description: 'Washington, D.C.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.414, 37.776]
      },
      properties: {
        title: 'Robbery',
        description: 'San Francisco, California'
      }
    },
    {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [72.805851,21.172109]
        },
        properties: {
          title: 'Arson',
          description: 'Surat, India'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [72.806165,21.179070]
        },
        properties: {
          title: 'Robbery',
          description: 'Surat, India'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.032, 38.913]
        },
        properties: {
          title: 'Arson',
          description: 'Washington, D.C.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [72.8209463, 21.1780864]
        },
        properties: {
          title: 'hackathon',
          description: 'Surat, India'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [72.8286292, 21.1714465]
        },
        properties: {
          title: 'hackathon',
          description: 'Surat, India'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [72.565299, 23.026182]
        },
        properties: {
          title: 'Arson',
          description: 'Ahmedabad, India'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [72.583553, 23.001747]
        },
        properties: {
          title: 'Murder',
          description: 'Ahmedabad, India'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [ -77.022359, 38.902956]
        },
        properties: {
          title: 'DUI',
          description: 'Washington, D.C.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-76.735407, 39.268446]
        },
        properties: {
          title: 'Robbery',
          description: 'Washington, D.C.'
        }
      }
  ]
};



console.log(geojson.features.length);
const a = [0,0,0,0,0];
// add markers to map
for (const feature of geojson.features) {
    console.log(feature.properties.title);
    if(feature.properties.title === 'Murder')
    {
        a[0]++;
        console.log(`a[0] is ${a[0]}`);
    }
    else if(feature.properties.title === 'Arson')
    {
        a[1]++;
        console.log(`a[1] is ${a[1]}`);
    }
    else if(feature.properties.title === 'DUI')
    {
        a[2]++;
        console.log(`a[2] is ${a[2]}`);
    }
    else if(feature.properties.title === 'Robbery')
    {
        a[3]++;
        console.log(`a[3] is ${a[3]}`);
    }
    else if(feature.properties.title === 'hackathon')
    {
        a[4]++;
        console.log(`a[4] is ${a[4]}`);
    }
    // var blueMarker = new mapboxgl.Marker({
    //     color: "blue"
    // });
    // var marker;
    // if(feature.properties.title === 'murder')
    // {
    //     marker= blueMarker;
    // }
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(
        `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
      )
  ).addTo(map);
}
let murders = document.getElementById('murders');
let robberies = document.getElementById('robbery');
let arson = document.getElementById('arson');
let dui = document.getElementById('dui');
let hack = document.getElementById('hack');
document.getElementById('murders').innerHTML = `The number of murders is ${a[0]}`;
document.getElementById('robbery').innerHTML = `The number of robberies is ${a[3]}`;
document.getElementById('arson').innerHTML = `The number of arson counts is ${a[1]}`;
document.getElementById('dui').innerHTML = `The number of DUI is ${a[2]}`;
document.getElementById('hack').innerHTML = `The number of hackathons is ${a[4]}`;

var geocoder = new MapboxGeocoder({ // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false, // Do not use the default marker style
    placeholder: 'Search for places in Sri Lanka', // Placeholder text for the search bar
    bbox: [79.0000, 5.0000, 82.0000, 10.0000], // Sri lanka 
    proximity: {
      longitude: -122.25948,
      latitude: 37.87221
    } 
  });
function selection()
{
    let b = [0,0,0,0,0];
    murders.innerHTML = `The number of murders is ${b[0]}`;
    arson.innerHTML = `The number of arsons is ${b[1]}`;
    dui.innerHTML = `The number of DUIs is ${b[2]}`;
    robberies.innerHTML = `The number of Robberies is ${b[3]}`;
    hack.innerHTML = `The number of hackathons is ${b[4]}`;
    console.log(document.getElementById('city').value);
    for (const feature of geojson.features){
        if(feature.properties.description === document.getElementById('city').value)
        {
            console.log('something matched');
                    if(feature.properties.title === 'Murder')
                    {
                        b[0]++;
                        console.log(`b[0] is ${b[0]}`);
                        murders.innerHTML = `The number of murders is ${b[0]}`;
                    }
                    else if(feature.properties.title === 'Arson')
                    {
                        b[1]++;
                        console.log(`b[1] is ${b[1]}`);
                        arson.innerHTML = `The number of arsons is ${b[1]}`;
                    }
                    else if(feature.properties.title === 'DUI')
                    {
                        b[2]++;
                        console.log(`b[2] is ${b[2]}`);
                        dui.innerHTML = `The number of DUIs is ${b[2]}`;
                    }
                    else if(feature.properties.title === 'Robbery')
                    {
                        b[3]++;
                        console.log(`b[3] is ${b[3]}`);
                        robberies.innerHTML = `The number of Robberies is ${b[3]}`;
                    }
                    else if(feature.properties.title === 'hackathon')
                    {
                        b[4]++;
                        console.log(`b[4] is ${b[4]}`);
                        hack.innerHTML = `The number of hackathons is ${b[4]}`;
                    }
        }
    }
}
