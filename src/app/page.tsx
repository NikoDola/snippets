import { db } from '@/db'
import Link from 'next/link'
import * as actions from '@/actions'
import Image from 'next/image'
import '@/components/listing.scss'
import ShowAll from '@/components/ShowAll'



export default async function SnippetLIst(){
  const data: any =  await db.snippet.findMany()
   return (
    <>
    <ShowAll data={data}/>
    </>
   )
}

