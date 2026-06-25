import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { bg:'#07070a', panel:'#111116', card:'#15151c', green:'#22c55e', red:'#ef4444', purple:'#8b5cf6' } } }, plugins: [] }
export default config
