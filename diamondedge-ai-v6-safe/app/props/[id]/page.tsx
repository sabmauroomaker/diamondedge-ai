import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { TrendChart } from '@/components/TrendChart'
import { ArsenalTable } from '@/components/ArsenalTable'
import { LineupTable } from '@/components/LineupTable'
import { getProp, props } from '@/lib/data'

export function generateStaticParams() { return props.map((prop) => ({ id: prop.id })) }

export default function PropDetailPage({ params }: { params: { id: string } }) {
  const prop = getProp(params.id)
  if (!prop) notFound()
  const hitCount = prop.recent.filter((game) => prop.side === 'Over' ? game.value > prop.line : game.value < prop.line).length
  const hitRate = Math.round((hitCount / prop.recent.length) * 100)
  return (
    <main className="min-h-screen grid-bg">
      <Header />
      <section className="mx-auto max-w-7xl px-5 py-8">
        <Link href="/" className="pill inline-flex px-4 py-2 text-sm text-white/70">← Back to props</Link>
        <div className="mt-5 overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_18%_20%,rgba(16,185,129,.22),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(139,92,246,.28),transparent_34%),linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.03))] p-6 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl border border-white/10 bg-black/35 text-2xl font-black text-emerald-200">{prop.headshot}</div>
              <div>
                <h1 className="text-4xl font-black tracking-tight">{prop.player} <span className="text-white/40">({prop.hand})</span></h1>
                <div className="mt-1 text-white/60">{prop.team} vs {prop.opponent} · {prop.gameTime}</div>
                <div className="mt-3 text-2xl font-black">{prop.market} — {prop.side} {prop.line}</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center sm:min-w-[390px]">
              <HeroMetric label="Diamond" value={prop.diamondScore} suffix="/100" />
              <HeroMetric label="Confidence" value={prop.confidence} suffix="%" />
              <HeroMetric label="Edge" value={`+${prop.edge}`} suffix="%" />
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_360px]">
          <div className="space-y-5">
            <div className="glass rounded-3xl p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div><h2 className="text-2xl font-black">Recent Form</h2><p className="text-sm text-white/45">Last 10 results against the {prop.line} line</p></div>
                <div className="text-right"><div className="text-4xl font-black text-rose-300">{hitRate}%</div><div className="text-sm text-white/45">{hitCount} of {prop.recent.length}</div></div>
              </div>
              <div className="mt-5"><TrendChart data={prop.recent} line={prop.line} /></div>
            </div>
            <ArsenalTable pitches={prop.arsenal} />
            <LineupTable lineup={prop.lineup} />
          </div>
          <aside className="space-y-5">
            <div className="glass rounded-3xl p-5">
              <h3 className="font-black">Diamond Intelligence</h3>
              <div className="mt-3 rounded-2xl bg-emerald-300/10 p-4"><div className="text-xs uppercase tracking-widest text-emerald-200">Model Projection</div><div className="mt-1 text-4xl font-black">{prop.projection}</div></div>
              <p className="mt-4 text-sm leading-6 text-white/65">{prop.summary}</p>
            </div>
            <div className="glass rounded-3xl p-5">
              <h3 className="font-black">Risk Factors</h3>
              <div className="mt-3 space-y-2">{prop.risks.map(r=><div key={r} className="rounded-2xl bg-white/[.045] p-3 text-sm text-white/65">• {r}</div>)}</div>
            </div>
            <div className="glass rounded-3xl p-5">
              <h3 className="font-black">Best Books</h3>
              <div className="mt-3 space-y-2">{prop.books.map(book=><div key={book.book} className="flex justify-between rounded-2xl bg-white/[.045] p-3"><span>{book.book}</span><span className="font-black">{book.odds > 0 ? `+${book.odds}` : book.odds}</span></div>)}</div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

function HeroMetric({ label, value, suffix }: { label: string; value: string | number; suffix: string }) { return <div className="rounded-3xl border border-white/10 bg-black/30 p-4"><div className="text-[10px] uppercase tracking-widest text-white/40">{label}</div><div className="mt-1 text-3xl font-black">{value}<span className="text-base text-white/45">{suffix}</span></div></div> }
