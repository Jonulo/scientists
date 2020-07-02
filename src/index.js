import router from './routes'
import './styles/index.scss'

// checa cuando cargue la primera vez el navegador con el evento "load"
window.addEventListener('load', router)

// se encarga de escuchar las rutas (hash)
window.addEventListener('hashchange', router)