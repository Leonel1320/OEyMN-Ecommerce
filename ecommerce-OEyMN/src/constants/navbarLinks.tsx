import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

export const navbarLinks=[
    {
        id:1,
        title: 'Inicio',
        href: '/'
    },
    {
        id:2,
        title: 'Productos',
        href: '/componentes' 
    },
    {
        id:3,
        title: 'Canje',
        href: '/canje'
    },
    {
        id:4,
        title: 'Membresia',
        href: '/membresia'
    },
    {
        id:5,
        title: 'SobreNosotros',
        href: '/nosotros'
    }
];


export const socilaLinks=[
    {
        id: 1,
        title: 'Facebook',
        href: 'https://www.facebook.com',
        icon:<FaFacebookF />

    },
    {
        id: 2,
        title: 'Instagram',
        href: 'https://www.instagram.com',
        icon:<FaInstagram />

    },
    {
        id: 3,
        title: 'Twiter',
        href: 'https://www.x.com',
        icon:<FaTwitterSquare />

    }
];