/* 
    Hash arroja de la URL: #/1/ , pero necesitamos solo el id asi que
    con slide quitamos el "#" y prevenimos que el usuario use upercase,
    luego quitamos todos los "/" y deja un arreglo: ['', 1, ''] y por 
    último accedemos a la posiscion del id.

*/
const getHash = () => 
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'

export default getHash