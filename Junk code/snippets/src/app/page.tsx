'use client'
import { db } from '@/db'
import Link from 'next/link'
import * as actions from '@/actions'
import Image from 'next/image'
import javascriptImage from 'images/code.png';
import '@/components/listing.scss'
import { useState } from 'react'


export default async function SnippetLIst() {

  const [filter, setFilter] = useState('all')
  const snippets = await db.snippet.findMany()

  return(
    <>
    <form>
      <select name="javascript" id="javascript">
        <option value="javascript">javascript</option>
        <option value="python">python</option>
        <option value="powershell">powershell</option>
      </select>
      <button className='snippetButton'  >Submit</button>
    </form>
    {snippets.map((snippet ) =>{
      let imagePath ='/images/icon_javascript.png'
      if (snippet.language === 'javascript'){
        imagePath = '/images/icon_javascript.png'
      }else if (snippet.language === 'python'){
        imagePath = '/images/icon_python.png'
      }else if (snippet.language === 'html'){
        imagePath = '/images/icon_html.png'
      }else if (snippet.language === 'css'){
        imagePath = '/images/icon_css.png'
      }else if (snippet.language === 'powershell'){
        imagePath = '/images/icon_powershell.png'
      }

      let frameImagePath = '/images/icon_node.png'
      if(snippet.framework === 'react'){
        frameImagePath = '/images/icon_react.png'
      }else if (snippet.framework === 'next'){
        frameImagePath = '/images/icon_next.png'
      }else if (snippet.framework === 'canvas'){
        frameImagePath = '/images/icon_canvas.png'
      }else if (snippet.framework === 'git'){
        frameImagePath = '/images/icon_git.png'
      }
      return (
        <div className='main' key={snippet.id}>
          <img src={imagePath} className='image'/>
          {snippet.framework !== 'undefined' && (
            <img src={frameImagePath} className='image'/>
          )}
          
          <p>{snippet.title}</p>
         <Link href={`/snippets/${snippet.id}/edit`}><button className='snippetButton'>View Code</button></Link>
        </div>
      )
    })}
    </>
  )
}