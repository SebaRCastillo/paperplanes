import CartWidget from './CartWidget'

function NavBar() {
    let categorias = ['Películas', 'Series y TV', 'Anime', 'Música', 'Videojuegos', 'Animales', 'Frases']
    return (
    <>
    <h1>PaperPlanes</h1>
    <ul>
        {
        categorias.map(cat =><li><a href="/#">{cat}</a></li>)
        }
    </ul>
    <CartWidget/>
    </>
    )
}

export default NavBar
