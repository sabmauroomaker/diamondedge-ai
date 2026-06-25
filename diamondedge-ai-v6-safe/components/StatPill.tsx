export function StatPill({ label, value, tone='neutral' }: { label: string; value: string | number; tone?: 'green' | 'red' | 'neutral' }) {
  const toneClass = tone === 'green' ? 'metric-green' : tone === 'red' ? 'metric-red' : 'bg-white/5 text-white'
  return <span className={`rounded-xl px-2.5 py-1 text-xs font-bold ${toneClass}`}>{label} {value}</span>
}
