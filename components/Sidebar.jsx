import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import React from 'react'

const links = [
    {
        content:'Accueil',
        link:'',
    },
    {
        content:'A propos',
        link:'a-propos',
    },
    {
        content:'Services & tarification',
        link:'mes-prestations',
    },
    {
        content:'Réservation',
        link:'reservation',
    },
    {
        content:'Témoignages',
        link:'temoignages',
    },
    {
        content:'Contact',
        link:'contact',
    },
]

export default function Sidebar(props) {
    return (
        <React.Fragment>
        <nav {...props}>
            <Image src={logo}/>
                { links.map(({content,link})=>(
              <Link key={content} href={`/${link}`}>
                  { content }
              </Link>
          )) }
        </nav>
        <div>

        </div>
        </React.Fragment>
    )
}
