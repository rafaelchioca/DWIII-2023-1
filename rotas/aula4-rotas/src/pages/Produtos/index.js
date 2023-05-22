import { useParams } from "react-router-dom";

function Produto(){
    const { id } = useParams();
    if(id === 'playstation'){
        return(
            <div>
                <h1>Console Playstation 5</h1><br/>
                <h2>R$ 4.445,00</h2><br/>
                <h3>Á vista no PIX e Boleto (1% off)</h3><br/>
                <img src="https://m.media-amazon.com/images/I/51VZErxKwkL._AC_SX385_.jpg" alt="Console Playstation 5"></img>
            </div>
        )

    }

    if(id === 'xbox'){
        return(
            <div>
                <h1>Console Microsoft Xbox Series X, 1TB, Preto</h1><br/>
                <h2>R$ 4.799,99</h2><br/>
                <h3>Á vista no PIX ou Em até 10x R$ 479,99 sem juros no cartão</h3><br/>
                <img src="https://m.media-amazon.com/images/I/61iQg-TqFiL._AC_SX425_.jpg" alt="Console Xbox X"></img>
            </div>
        )
    }

    if(id === 'atari'){
        return(
            <div>
                <h1>Atari</h1><br/>
                <h2>R$ 499,99</h2><br/>
                <h3>Á vista no PIX ou Em até 10x R$ 49,99 sem juros no cartão</h3><br/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Atari-2600-Wood-4Sw-Set.png/640px-Atari-2600-Wood-4Sw-Set.png" alt="Atari"></img>
            </div>
        )
    }

    if(id === 'supernintendo'){
        return(
            <div>
                <h1>Super Nintendo</h1><br/>
                <h2>R$ 599,90</h2><br/>
                <h3>Á vista no PIX e Boleto (1% off)</h3><br/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsbrA-SDbg04a4juKfJQgWzdaTnkLXs16vh_OJaBVfcNb2YlssllshzcMlgng95TbzdA&usqp=CAU" alt="Super Nintendo"></img>
            </div>
        )
    }
}
export default Produto;