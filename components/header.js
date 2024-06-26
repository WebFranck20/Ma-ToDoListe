import Link from 'next/link'
import css from '../styles/header.module.css'
export default function Header(){
    return(
        <>
          <ul className={css.Header}>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">ToDoListe</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/blog/contact">Contact</Link></li>
          </ul>
        </>
    )
}