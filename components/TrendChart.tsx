'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { TrendPoint } from '@/lib/types';
export function TrendChart({data,line}:{data:TrendPoint[];line:number}){return <div className="glass rounded-3xl p-4"><h2 className="text-xl font-black">Recent Game Log</h2><div className="mt-4 h-64"><ResponsiveContainer width="100%" height="100%"><BarChart data={data}><XAxis dataKey="opponent" tick={{fill:'#777',fontSize:11}}/><YAxis tick={{fill:'#777'}}/><Tooltip contentStyle={{background:'#11121a',border:'1px solid #333',borderRadius:12}}/><ReferenceLine y={line} stroke="#8b5cf6" strokeDasharray="5 5"/><Bar dataKey="value" fill="#18c27c" radius={[8,8,0,0]}/></BarChart></ResponsiveContainer></div></div>}
