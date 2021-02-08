import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const FooterOne = () => {
    return (
        <>
            <footer className='fixed-bottom px-4 py-2 bg-white row'>
                <div id='left' className='col-12 col-md-6 d-flex'>
                    <div className='my-auto'>
                        <Image src="/cadastur.jpg" alt="Picture of the author" width={142} height={74} />
                    </div>

                    <div className='mx-2 lead my-auto' id='texto'>
                        <div><strong>Nº Cadastur:</strong> 19.574051.10- 6</div>
                        <div><strong>CNPJ:</strong> 33.938.699/0001-94</div>
                        <div><strong>Nome Fantasia:</strong> Tia Pah Tour</div>
                    </div>
                </div>

                <div id='right' className='col-12 col-md-6'>
                    <div className='text-center'>
                        <div className='lead my-2'>Redes Sociais</div>
                        <span className='mx-3'>
                            <a href='https://www.facebook.com/tiapahtoureexcursoes' target='_blank'>
                                <FontAwesomeIcon icon={faFacebookF} size='2x' />
                            </a>
                        </span>

                        <span className='mx-3'>
                            <a href='https://www.instagram.com/tiapahtour/' target='_blank'>
                                <FontAwesomeIcon icon={faInstagram} size='2x' />
                            </a>
                        </span>

                        <span className='mx-3'>
                            <a href=" https://wa.me/5521982258549?text=Oi, gostaria de me informar melhor sobre os passeios" target='_blank'>
                                <FontAwesomeIcon icon={faWhatsapp} size='2x' />
                            </a>
                        </span>

                    </div>
                </div>

            </footer>
            <style jsx>{`                
                #texto{
                    font-size: 18px;
                }

                @media (max-width: 992px) {
                    #texto {
                        font-size: 12px;
                    }
                }
            `}</style>
        </>
    );
}

export default FooterOne;