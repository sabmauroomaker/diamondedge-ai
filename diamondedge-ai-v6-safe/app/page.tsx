import { Header } from '@/components/Header'
import { PropCard } from '@/components/PropCard'
import { props, slateStats } from '@/lib/data'

export default function Home() {
  const top = [...props].sort((a,b)=>b.diamondScore-a.diamondScore)
  return (
    <main className="min-h-screen grid-bg">
      <Header />
      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="glass overflow-hidden rounded-[2rem] p-6 md:p-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-emerald-200">Live MLB Slate</div>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Professional MLB Prop Intelligence</h1>
            <p className="mt-4 text-lg text-white/60">AI-powered betting research combining projections, pitch arsenals, lineup splits, market pricing, recent form, and sportsbook odds into one clean terminal.</p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <StatBox label="Games" value={slateStats.games} />
            <StatBox label="Live Props" value={slateStats.props} />
            <StatBox label="Diamond Plays" value={slateStats.diamondPlays} />
            <StatBox label="Data Synced" value={slateStats.synced} />
          </div>
          <div className="mt-7 rounded-3xl border border-white/10 bg-black/30 p-4"><input className="w-full bg-transparent text-lg outline-none placeholder:text-white/30" placeholder="Search any player, team, market, or edge..." /></div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <div className="glass rounded-3xl p-5">
            <div className="flex items-center justify-between"><h2 className="text-2xl font-black">Today&apos;s Diamond Plays</h2><span className="text-sm text-white/45">Click any card</span></div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">{top.slice(0,4).map(prop=><PropCard key={prop.id} prop={prop} />)}</div>
          </div>
          <div className="space-y-4">
            <Panel title="Biggest Edges" items={top.map(p=>`${p.player} ${p.side} ${p.line} — +${p.edge}%`)} />
            <Panel title="Market Pulse" items={["Steam watch: Crochet K over", "Best value: Skenes over at FD", "Public fade: Lugo K line", "Leash model likes Wheeler outs"]} />
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4 flex flex-wrap gap-2">{['All','Pitcher Strikeouts','Pitching Outs','A+ Grade','Plus Money','High Confidence'].map(x=><button className="pill px-4 py-2 text-sm text-white/70" key={x}>{x}</button>)}</div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{props.map(prop=><PropCard key={prop.id} prop={prop} />)}</div>
        </div>
      </section>
    </main>
  )
}

function StatBox({ label, value }: { label: string; value: string | number }) { return <div className="rounded-3xl border border-white/10 bg-black/30 p-5"><div className="text-xs uppercase tracking-widest text-white/35">{label}</div><div className="mt-2 text-3xl font-black">{value}</div></div> }
function Panel({ title, items }: { title: string; items: string[] }) { return <div className="glass rounded-3xl p-5"><h3 className="font-black">{title}</h3><div className="mt-4 space-y-3">{items.slice(0,4).map(i=><div key={i} className="rounded-2xl bg-white/[.045] p-3 text-sm text-white/70">{i}</div>)}</div></div> }
