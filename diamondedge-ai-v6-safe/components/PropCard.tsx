import Link from 'next/link'
import type { Prop } from '@/lib/data'

export function PropCard({ prop }: { prop: Prop }) {
  return (
    <Link href={`/props/${prop.id}`} className="glass group block rounded-3xl p-5 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:shadow-[0_0_60px_rgba(16,185,129,.12)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-950 font-black text-emerald-200">{prop.headshot}</div>
          <div><div className="font-black">{prop.player} <span className="text-white/40">({prop.hand})</span></div><div className="text-sm text-white/45">{prop.game} · {prop.gameTime}</div></div>
        </div>
        <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-black text-emerald-200">{prop.grade}</span>
      </div>
      <div className="mt-5 rounded-2xl bg-white/[.045] p-4">
        <div className="text-xs uppercase tracking-wider text-white/40">{prop.market}</div>
        <div className="mt-1 text-2xl font-black">{prop.side} {prop.line} <span className="text-base text-white/55">{prop.odds > 0 ? `+${prop.odds}` : prop.odds}</span></div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-2xl bg-black/25 p-3"><div className="text-[10px] uppercase text-white/35">Proj</div><div className="font-black">{prop.projection}</div></div>
        <div className="rounded-2xl bg-black/25 p-3"><div className="text-[10px] uppercase text-white/35">Conf</div><div className="font-black">{prop.confidence}%</div></div>
        <div className="rounded-2xl bg-black/25 p-3"><div className="text-[10px] uppercase text-white/35">Edge</div><div className="font-black text-emerald-300">+{prop.edge}%</div></div>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm"><span className="text-white/45">Diamond Score</span><span className="font-black text-violet-200">{prop.diamondScore}/100</span></div>
    </Link>
  )
}
