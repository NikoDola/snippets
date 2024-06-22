import { db } from '@/db'
import Image from 'next/image'
import {redirect} from 'next/navigation'

export default function AddSnippet(){
    async function snippet(formData:FormData) {
        "use server"

        const title = formData.get('title') as string
        const code = formData.get('code') as string
        const language = formData.get('language') as string
        const framework = formData.get('framework') as string

        const snippet = await db.snippet.create({
            data: {
                title,
                code,
                language,
                framework
            }
        })
        redirect(`/snippets/${snippet.id}`)
    }

    return(
        <form className="main" action={snippet}>
            <img src="/images/icon_code.png"
            style={{width:'200px', margin: '0 auto', marginTop:'6rem'}}/>
            <label htmlFor='language'>Enter language</label>
            <select name="language">
                <option value="javascript">javascript</option>
                <option value="python">python</option>
                <option value="html">html</option>
                <option value="css">css</option>
                <option value="powershell">powershell</option>
            </select>
            <select name="framework">
                <option value="undefined">undefined</option>
                <option value="node">node</option>
                <option value="react">react</option>
                <option value="next">next</option>
                <option value="canvas">canvas</option>
                <option value="git">git</option>
                <option value="Prisma">Prisma</option>
            </select>
            <label htmlFor='title'>Enter Snippet Tittle</label>
            <input name="title" />
            <label htmlFor='code'>Enter Code</label>
            <textarea name="code" />
            <button>Submit</button>
        </form>
    )
}