export type Pitch = { name:string; usage:number; pa:number; ba:number; xba:number; xwoba:number; whiff:number; k:number; hard:number }
export type Batter = { order:number; name:string; hand:string; pa:number; ba:number; k:number; weakness:string }
export type Prop = {
  id:string; player:string; team:string; opponent:string; game:string; market:string; line:string; odds:string; side:string;
  confidence:number; edge:number; projection:string; tag:'Favorable'|'Neutral'|'Risky'; type:'K'|'Outs'|'Hits'|'HRR'|'ER';
  headshot:string; summary:string; risk:string; recent:number[]; recentLine:number; statline:{label:string;value:string;avg?:string;good?:boolean}[];
  arsenal:Pitch[]; teamSplits:{title:string; items:{label:string; value:string; good?:boolean}[]}; lineup:Batter[]; writeup:string[]
}
