import React from 'react'
import { images } from '../assets/images'
import { Facebook, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
    return (
        <div className=''>
            <div className='footerContent'>
                <div className="footerContentLeft">
                <img src={images.Logo} alt="Logo" />
                <p>its okay to buy what you feek like eating</p>
                <div className='socialIcons'>
                    <Facebook/>
                    <Twitter/>
                    <Youtube/>

                    
                </div>
                </div>
                <div className="footerContentCenter">

                </div>
                <div className="footerContentRight">

                </div>
                 
            </div>

        </div>
    )
}

export default Footer