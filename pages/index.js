import HEAD from 'next/head';
import Header from '../components/header';
import Link from 'next/link';
import { useState} from 'react';
import css from '../styles/home.module.css'

export default function home(){
 
  return(
  <>
    <HEAD>
      <title> Accueil </title>
    </HEAD>
    <div className='entete'>
      <h1> Accueil </h1>
      <Header />
    </div>
    <div className={css.accueil}>
      <p>Monsieur,<br /> soyez le bienvenue <span><Link href='/about'>chez-nous !</Link></span> </p>
    </div>
  </>
  );
}