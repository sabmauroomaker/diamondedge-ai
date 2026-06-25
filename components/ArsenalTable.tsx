import type { Pitch } from '@/lib/data'

export function ArsenalTable({ pitches }: { pitches: Pitch[] }) {
  return (
    <div className="glass overflow-hidden rounded-3xl">
      <div className="border-b border-white/10 p-4 font-black">Pitch Arsenal</div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead className="text-xs uppercase tracking-wider text-white/40"><tr>{['Pitch','Usage','PA','BA','xBA','Whiff','K%'].map(h=><th key={h} className="px-4 py-3">{h}</th>)}</tr></thead>
          <tbody>
            {pitches.map(p => <tr key={p.name} className="border-t border-white/5">
              <td className="px-4 py-3 font-bold">{p.name}</td><td className="px-4 py-3">{p.usage}%</td><td className="px-4 py-3">{p.pa}</td><td className="px-4 py-3"><span className="metric-red rounded-lg px-2 py-1">{p.ba}</span></td><td className="px-4 py-3">{p.xba}</td><td className="px-4 py-3"><span className="metric-green rounded-lg px-2 py-1">{p.whiff}</span></td><td className="px-4 py-3">{p.k}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}
