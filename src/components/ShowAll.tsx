"use client";
import { useState } from "react";
import Image from 'next/image';
import '@/components/listing.scss';
import Link from 'next/link';
import '@/app/global.scss';

interface Snippet {
    title: string;
    id: string;
    language: string;
    framework: string;
    code: string;
}

interface TypeCorrection {
    data: Snippet[];
}

export default function ShowAll({ data }: TypeCorrection) {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    function onChanging(e: React.ChangeEvent<HTMLSelectElement>) {
        setFilter(e.target.value);
    }

    function onChanging2(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    return (
        <div> 
            <form>
            <div className="searchParrent">
                <img className="searchIcon" src="images/search.png"/>
                <input  className="searchBar" type="search" value={search} onChange={onChanging2} placeholder="Search by title" />
            </div>
                <select className="selector" value={filter} onChange={onChanging}>
                    <option value="all">All</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="powershell">PowerShell</option>
                </select>
                
            </form>
            {data.filter(snippet => 
                (filter === 'all' || snippet.language === filter) && 
                snippet.title.toLowerCase().includes(search.toLowerCase() 
            )
            ).map((snippet) => (
                <div className="main" key={snippet.id}>
                    <div className="title">
                        <Image src={`/images/icon_${snippet.language}.png`} alt={`${snippet.language} icon`} width={30} height={30} />
                        {snippet.framework !== 'undefined' && (<Image src={`/images/icon_${snippet.framework}.png`} alt={`${snippet.framework} icon`} width={30} height={30} />)}
                        <p>{snippet.title}</p>
                    </div>
                    <Link href={`/snippets/${snippet.id}/edit`}><button className='snippetButton'>View</button></Link>
                </div>
            ))}
        </div>
    );
}
