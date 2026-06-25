import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-violet-500 font-black text-black">◆</div>
          <div>
            <div className="text-lg font-black tracking-tight">DiamondEdge</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-emerald-300">AI Prop Terminal</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {['Props','Models','Lineups','Steam','Weather'].map((item) => <span key={item} className="pill px-4 py-2 text-sm text-white/70">{item}</span>)}
        </nav>
      </div>
    </header>
  )
}
