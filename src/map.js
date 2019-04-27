mapboxgl.accessToken =
    'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'

export default function init() {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v9',
        // style: 'mapbox://styles/mapbox/satellite-streets-v9',
        center: [-118.2, 51],
        zoom: 9,
    })
    
    map.scrollZoom.disable()

    return map
}
