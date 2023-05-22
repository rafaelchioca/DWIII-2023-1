import './contato.css'

function Home() {
    return (
        <div className='contato'>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.796888114765!2d-47.40317568547669!3d-20.514550962048602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a650b93c4b5f%3A0xbe0e42f3aa42525c!2sFatec+Franca+-+Faculdade+de+Tecnologia+Dr.+Thomaz+Novelino!5e0!3m2!1spt-BR!2sus!4v1488319213192" width="100%" height="450" frameborder="0" allowfullscreen></iframe>
            </div>

            <div className='contato-info'>
            <h2>Faculdade de Tecnologia de Franca • Fatec Franca</h2>
                <p></p>
                <address>
                    Rua Irênio Grecco nº 4580<br />
					Vila Imperador<br />
					Franca/SP<br />
					14405-191<br />
                <p>Telefone: (16) 3702-3204<br />
                Fax: (16) 3702-2854</p>
                <div className='main-mail-adddress'>
                    <p>E-mail: <a href="mailto:secretaria@fatecfranca.edu.br">secretaria@fatecfranca.edu.br</a><br/><span><br/><b>Sempre verifique a pasta de Spam/Lixo eletrônico ao buscar respostas de e-mails da Fatec Franca</b></span></p>
                    <span><br/> </span>
                </div>
                </address>
                <h3>Linhas de ônibus urbano</h3>
				<ul>
						<li><a href="https://www.google.com/maps/d/embed?mid=1y3BAGEeg-6s614VNHtMBvgl_v8c&ll=-20.52449736463766%2C-47.39961415529251&z=14" target="_blank">J08 (Vl. Imperador)</a> &ndash; ponto na R. Irênio Grecco</li>
						<li><a href="https://www.google.com/maps/d/embed?mid=10nQcqVUeQMmhW6a2ipH8BQO0scg&ll=-20.523652091552172%2C-47.39405795931816&z=14" target="_blank">C01 (Circular 01)</a>, <a href="https://www.google.com/maps/d/embed?mid=1YUdAFhs5C6kaX22R9sDZikIFo5c&ll=-20.53184840667347%2C-47.39531859722774&z=13" target="_blank">C02 (Circular 02)</a> e <a href="https://www.google.com/maps/d/embed?mid=1aeQB7ErUO_9FBZwD3wOYpCgC1s4&ll=-20.510113002464585%2C-47.40521861347656&z=15" target="_blank">LDN (Linha Direta Norte)</a> &ndash; ponto na Av. Orlando Dompieri</li>
						<li><a href="https://www.google.com/maps/d/u/1/embed?mid=1BCX3U4LHgDo37wvhApSk3OKk64Q&ll=-20.525095207270365%2C-47.397758066654205&z=14" target="_blank">J09 (Vl. Imperador via Jd. Planalto)</a> &ndash; ponto na R. Realindo Jacinto Mendonça</li>
				</ul>
				<p class="pull-right small"><i>Fonte: <a href="//empresasaojose.com.br" target="_blank">Empresa São José</a></i></p>
            </div>
        </div>     
    )
}

export default Home;