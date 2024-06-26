import Header from '@/components/header'
import HEAD from 'next/head'
import css from '../styles/about.module.css'
import { useState, useEffect } from 'react';

export default function About(){
    //Declaration de ma variable 'tache' 
    const [tache, setTache] = useState("");

    //Methode de recuperation des donnees du formulaire
    const stockTache = (event) => {
        setTache(event.target.value)
    }

    //Tableau de recuperation des donnees du formulaire
    const [tab, setTab] = useState([])

    //Fonction d'ajoute (aj) des taches
    const ajTache = () => {
        setTab(prev => {
            return [...prev, {id: prev.length+1, stock: tache}]
        })
        setTache("")
    }
    //Fonction de suppression des taches
    const deleteTache = (id) => {
        const dell =tab.filter( (item) => item.id != id )
        setTab(dell)
    }

    return(
        <>
           <HEAD>
              <title>Apropos</title>
           </HEAD>
           <main className={css.corps}>
               <div className='entete'>
                   <h1 >ToDoListe</h1>
                   <Header />
               </div>
               <section className={css.form}>
                   <div className={css.todoliste}>
                       <label htmlFor='ajout'>Ajouter une nouvelle tache</label>
                       <input type='text' id='ajout' placeholder=" Champs de saisie..." value={tache} onChange={stockTache}/>
                       {tache && (<button onClick={ajTache}>Ajouter</button>)}
                   </div>
                   <div className={css.tabTache}>
                        <h2>Liste des taches ajoutees</h2>
                        <ol>
                            {tab.map((item) => {
                                return <li key={item.id}>{ item.stock} <button onClick={() => deleteTache(item.id)}>Supprimer</button></li>
                                }) 
                            }
                        </ol>
                   </div>
               </section>
           </main>
        </>
    );
}