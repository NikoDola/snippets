import { db } from '@/db'
import Link from 'next/link'
import * as actions from '@/actions'

export default async function SnippetLIst() {

  const snippets = await db.snippet.findMany()
  return(
    <>
    {snippets.map((snippet) =>{
      return (
        <div className='main'>
          <h4 className='snippetText'>{snippet.title}</h4>
         <Link href={`/snippets/${snippet.id}/edit`}><button className='snippetButton'>View Code</button></Link>
        </div>
      )
    })}
    </>
  )
}