import data from './segments.json'

mapboxgl.accessToken =
    'pk.eyJ1Ijoia2d1aWxsb3R0ZSIsImEiOiJjaW95czF5bHMwMXprdWNtODhndnhpM2wwIn0.ySK8KKQ5AVs3FYQ9fbQJVg'

export default function init() {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v9',
        center: [-118.23, 51],
        zoom: 11,
    })

    map.scrollZoom.disable()
    map.addControl(new mapboxgl.NavigationControl())

    map.on('moveend', () => {
        console.warn(map.getCenter())
    })

    map.on('load', () => {
        map.addLayer({
            id: 'route',
            type: 'line',
            source: {
                type: 'geojson',
                data,
            },
            layout: {
                'line-join': 'round',
                'line-cap': 'round',
            },
            paint: {
                'line-color': '#888',
                'line-width': 8,
            },
        })
    })

    return map
}
