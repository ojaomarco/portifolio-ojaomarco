import { Link } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-sec'>
            <div className='heading-sec'>
                <h1>Contato</h1>
                <div className='content-separator'></div>
            </div>
            <div className='contact-list'>
                <div className='contact-item'>
                    <Link href='https://www.linkedin.com/in/ojaomarco/' color={'#000'} target="_blank">
                        <LinkedInIcon sx={{ fontSize: 80 }}/>
                    </Link>
                </div>
                <div className='contact-item'>
                    <Link href='https://api.whatsapp.com/send?phone=5544920024603' color={'#000'} target="_blank" >
                        <WhatsAppIcon sx={{ fontSize: 80 }} />
                    </Link>
                </div>
                <div className='contact-item'>
                    <Link href='https://www.instagram.com/ojaomarco/' color={'#000'} target="_blank" >
                        <InstagramIcon sx={{ fontSize: 80 }} />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Contact