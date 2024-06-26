import Header from '@/components/header';
import HEAD from 'next/head'
export default function Contact(){
    return(
        <>
           <HEAD>
              <title>
                Contacter
              </title>
           </HEAD>
           <div className='entete'>
              <h1>Contacter Moi</h1>
              <Header />
            </div>
          
           
        </>
    );
}