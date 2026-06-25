import Header from '@/components/Header'
import PropCard from '@/components/PropCard'
import { props } from '@/lib/data'

export default function Home(){
 const markets=['All','Strikeouts','Pitching Outs','Hits','H+R+RBI','Earned Runs']
 return <main><Header/><section className="max-w-6xl mx-auto px-4 py-6"><div className="rounded-[2rem] p-6 bg-gradient-to-br from-emerald-900/50 via-zinc-900 to-purple-950/60 border border-white/10"><p className="text-purple font-bold uppercase tracking-[.25em] text-xs">MLB Player Props</p><h1 className="text-4xl font-black mt-2">Research board built like the apps you use</h1><p className="text-zinc-300 mt-3 leading-relaxed">No fake locks no forced picks just prop pages with hit rates pitch mix lineup splits and AI style matchup notes</p></div>
 <div className="flex gap-2 overflow-x-auto scrollbar py-5">{markets.map(m=><button key={m} className="pill whitespace-nowrap">{m}</button>)}</div>
 <div className="grid gap-4 md:grid-cols-2">{props.map(p=><PropCard key={p.id} p={p}/>)}</div>
 </section></main>
}
