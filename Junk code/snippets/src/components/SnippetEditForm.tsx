'use client'
import type { Snippet } from '@prisma/client'
import Editor from '@monaco-editor/react'
import { useState } from 'react'
import * as actions from '@/actions'


interface SnippetEditFormProps{
    snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps ) {

    const [ code, setCode ] = useState(snippet.code)

    const handleEditorChange = (value: string = "") =>{
        setCode(value)

    }

    return(
        
        <div>
            <Editor 
            height= "40vh"
            theme="vs-dark"
            language={snippet.language}
            defaultValue={snippet.code}
            onChange={handleEditorChange}
            />
            <div className='main2'>

            <h4>{snippet.title}</h4>
            <button onClick={()=>{actions.editSnippet(snippet.id, code)}}> Update</button>
            <button onClick={()=> actions.deleteSnippet(snippet.id)}>Delete</button>
          
            </div>
        </div>
    )
}