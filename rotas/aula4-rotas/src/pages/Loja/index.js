import { Link } from 'react-router-dom';
import './style.css'

function Loja() {
    return (
        <div>
            <h1>Loja</h1>
            <div className='produtos'>
                <div className='card'>
                    <h3>Playstation</h3>
                    <Link to="/produtos/playstation"><img src="https://m.media-amazon.com/images/I/51VZErxKwkL._AC_SX385_.jpg" alt="Console Playstation 5"></img></Link>
                </div>

                <div className='card'>
                    <h3>Xbox</h3>
                    <Link to="/produtos/xbox"><img src="https://m.media-amazon.com/images/I/61iQg-TqFiL._AC_SX425_.jpg" alt="Console Xbox X"></img></Link>
                </div>
            </div>

            <div className='produtos'>
                <div className='card'>
                    <h3>Atari</h3>
                    <Link to="/produtos/atari"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Atari-2600-Wood-4Sw-Set.png/640px-Atari-2600-Wood-4Sw-Set.png" alt="Atari"></img></Link>
                </div>
            
                <div className='card'>
                    <h3>Super Nintendo</h3>
                    <Link to="/produtos/supernintendo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsbrA-SDbg04a4juKfJQgWzdaTnkLXs16vh_OJaBVfcNb2YlssllshzcMlgng95TbzdA&usqp=CAU" alt="Super Nintendo"></img></Link>
                </div>
            </div>

        </div>
    )
}

export default Loja;