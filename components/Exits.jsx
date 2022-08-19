import exits from '../data/exits'
import Link from 'next/link'
export default function Exits({ existsindex }) {
    return (
        <div>
            <div className="grid">
                <div className="card" key={exits.slug}>
                    {exits.exits.map((exits) =>(
                        <div className="card" key={exits.slug}>
                           <Link href={`/exits/${exits.slug}`} passHref>
                               <a>
                                   {exits.name}
                               </a>
                           </Link>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}