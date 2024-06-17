import { db } from '@/db/index'
import { notFound } from 'next/navigation'
import SnippetEditForm from '@/components/SnippetEditForm.tsx'

interface SnippetEditPageProps{
    params:{
        kole: string
    }
}

export default async function SnippetEditPage(props: SnippetEditPageProps){
    const kole = parseInt(props.params.kole);
    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(props.params.kole) }
    })
    if(!snippet){
        notFound()
    }
    
    return(
        <div>
            <SnippetEditForm snippet={snippet}/>
        </div>
    )
}