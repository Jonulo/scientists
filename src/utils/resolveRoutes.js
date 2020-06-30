// Una vez que tiene la ruta lo siguiente enlaza la ruta a su componente
const resolveRoutes = (route) => {
    console.log(route)
    if (route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id'
        console.log(validRoute)
        return validRoute
    }
    return `/${route}` // /about
}

export default resolveRoutes