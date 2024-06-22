
import { db } from '@/db'
import { notFound } from 'next/navigation'
import SnippetEditForm from '@/components/SnippetEditForm'

interface TypeCheck{
    params:{
        kole: string
    }
    
}

export default async function Pages(props: TypeCheck) {
    const snippet = await db.snippet.findFirst({
        where:{
            id: parseInt(props.params.kole)
        }
 
    }
    
)
    if(!snippet){
        return notFound()
    }
    return(
        <>
    <SnippetEditForm snippet={snippet}/>
        <div  style={{display: 'flex'}}>
            <button>Edit Snippet</button>
            <button>Delete</button>
        </div>
        </>
    )
}


















// import { db } from '@/db'; 

// import { notFound } from 'next/navigation';


// interface SnippetShowPageProps {
//     params: {
//         kole: string; 
//     }
// }

// export default async function SnippetShow(props: SnippetShowPageProps) {
//     const snippet = await db.snippet.findFirst({
//         where: {
//             id: parseInt(props.params.kole) 
//         }
//     });

//     if (!snippet) {
//         return notFound();
//     } else {
       
//         return (
//             <div>
//                 <h4>{snippet.title}</h4>
//                 <p>{snippet.code}</p>
//             </div>
//         );
//     }
// }
