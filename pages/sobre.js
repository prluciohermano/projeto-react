import Link from 'next/link';

function Sobre() {
    return(
            <div>
                <h1>Garage Control</h1>
                <p>
                    Desenvolvido por 
                    <a href="https://www.instagram.com/prluciohermano"> @prluciohermano

                    </a>
                </p>
                <div>
                    <h2>Index</h2>

                    <Link href="/index">
                        <a>Acessar página index </a>
                    </Link>
                </div>
            </div>
        
    )
}

export default Sobre;