import type { LineupBatter } from '@/lib/data'

export function LineupTable({ lineup }: { lineup: LineupBatter[] }) {
  return (
    <div className="glass overflow-hidden rounded-3xl">
      <div className="border-b border-white/10 p-4">
        <div className="font-black">Expected Opposing Lineup</div>
        <div className="text-xs text-white/45">Split profile vs today&apos;s pitcher hand</div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="text-xs uppercase tracking-wider text-white/40"><tr>{['#','Batter','Hand','PA','AVG','K%','Whiff','Chase','BB%'].map(h=><th key={h} className="px-4 py-3">{h}</th>)}</tr></thead>
          <tbody>{lineup.map((b,i)=><tr key={b.name} className="border-t border-white/5"><td className="px-4 py-3 text-white/40">{i+1}</td><td className="px-4 py-3 font-bold">{b.name}</td><td className="px-4 py-3 text-white/50">{b.hand}</td><td className="px-4 py-3">{b.pa}</td><td className="px-4 py-3"><span className="metric-green rounded-lg px-2 py-1">{b.avg}</span></td><td className="px-4 py-3"><span className="metric-red rounded-lg px-2 py-1">{b.kRate}</span></td><td className="px-4 py-3">{b.whiff}</td><td className="px-4 py-3">{b.chase}</td><td className="px-4 py-3">{b.bb}</td></tr>)}</tbody>
        </table>
      </div>
    </div>
  )
}
