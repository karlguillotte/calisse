import './styles.css'
import initMap from './map'

initMap()

document.addEventListener('scroll', handleScroll)
handleScroll()

function handleScroll() {
    document.getElementById('top').style.display =
        (document.body.scrollTop || document.documentElement.scrollTop) >
        window.innerHeight / 2
            ? 'block'
            : 'none'
}
