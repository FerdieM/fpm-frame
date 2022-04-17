import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
    {
        name: 'Facebook',
        icon: iconStyle(FaFacebook),
    },
    {
        name: 'Instagram',
        icon: iconStyle(FaInstagram),
    },
    {
        name: 'Youtube',
        icon: iconStyle(FaYoutube),
    },
    {
        name: 'Twitter',
        icon: iconStyle(FaTwitter),
    },
    {
        name: 'LinkedIn',
        icon: iconStyle(FaLinkedin)
    }
];

export const footerData = [
    {
        title: 'Main',
        links: ['Blog','FAQs','Support','About us'],
    },
    {
        title: 'Product',
        links: ['Login','Personal','Team']
    },
    {
        title: 'Press',
        links: ['Logos','Events','Stories','Office'],
    },
    {
        title: 'Legal',
        links: ['GDPR','Private Policy', 'Terms of Service', 'Disclaimer']
    }
];