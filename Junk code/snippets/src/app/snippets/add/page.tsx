import { db } from '@/db'
import Image from 'next/image'
import {redirect} from 'next/navigation'

export default function AddSnippet(){
    async function snippet(formData:FormData) {
        "use server"

        const title = formData.get('title') as string
        const code = formData.get('code') as string

        const snippet = await db.snippet.create({
            data: {
                title,
                code
            }
        })
        redirect(`/snippets/${snippet.id}`)
        
    }

    return(
        <form className="main" action={snippet}>
            <img src="/images/code.png"
            style={{width:'200px', margin: '0 auto', marginTop:'6rem'}}/>
            <label htmlFor='title'>Enter Snippet Tittle</label>
            <input name="title" />
            <label htmlFor='code'>Enter Code</label>
            <textarea name="code" />
            <button>Submit</button>
        </form>
    )
}