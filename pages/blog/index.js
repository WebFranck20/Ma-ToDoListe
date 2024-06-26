import HEAD from "next/head";
import Header from "@/components/header";
export default function blog(){
    return(
        <>
           <HEAD>
             <title>blog</title>
           </HEAD>
           <div className="entete">
              <h1>Notre Blog</h1>
              <Header />
           </div>


        </>
    );
}