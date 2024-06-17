import { db } from '@/db'
import Link from 'next/link'
import * as actions from '@/actions'

export default async function SnippetLIst() {

  const snippets = await db.snippet.findMany()
  return(
    <>
    {snippets.map((snippet) =>{
      return (
        <div style={{background: 'black'}} className="main"key={snippet.id}>
         <Link href={`/snippets/${snippet.id}/edit`}><button>Edit</button></Link>
        
          
          <h4>{snippet.title}</h4>
          <p>{snippet.code.substring(0,40) + ' ...'}</p>

        </div>
      )
    })}
    </>
  )
}