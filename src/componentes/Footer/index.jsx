import "./Footer.css"

const Footer =()=>{
    return <footer className='footer' style={{backgroundImage:"url(/img/footer.png"}}>
        <div className="footer__redes">
            <a href='https://www.alura.com'>
                <img src="/img/facebook.png" alt='Facebook'/>
            </a>
            <a href='https://www.alura.com'>
                <img src="/img/twitter.png" alt='Twitter'/>
            </a>
            <a href='https://www.alura.com' >
                <img src="/img/instagram.png" alt='Instragram'/>
            </a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollo por Alura</strong>
    </footer>
}

export default Footer