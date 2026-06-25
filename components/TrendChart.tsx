'use client'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, ReferenceLine } from 'recharts'
import type { TrendPoint } from '@/lib/data'

export function TrendChart({ data, line }: { data: TrendPoint[]; line: number }) {
  return (
    <div className="h-72 w-full rounded-3xl border border-white/10 bg-black/30 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid stroke="rgba(255,255,255,.08)" vertical={false} />
          <XAxis dataKey="label" tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: '#111', border: '1px solid rgba(255,255,255,.12)', borderRadius: 12 }} />
          <ReferenceLine y={line} stroke="rgba(110,231,183,.9)" strokeDasharray="5 5" />
          <Bar dataKey="value" radius={[8,8,0,0]} fill="rgba(16,185,129,.8)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
