import { Core } from './core.model';
import { JOB_CODE } from './job.model';
import { Stat } from './stat.model';
import { UnionCard, UnionControl } from './union.model';

export interface HyperStat {
  STR: number;
  DEX: number;
  INT: number;
  LUK: number;
  maxHP: number;
  maxMP: number;
  DFTF: number;
  criticalRate: number;
  criticalDamage: number;
  ignoreDefense: number;
  totalDamage: number;
  bossDamage: number;
  stance: number;
  moveSpeed: number;
  jumpPower: number;
  ccImmune: number;
  elementImmune: number;
}

export interface Ability {
  stat?: Partial<Stat>;
}

export interface Disposition {
  charisma: number; // 카리스마
  sensivity: number; // 감성
  dexterity: number; // 손재주
  will: number; // 의지
  insight: number; // 통찰력
  charm: number; // 매력
}

export interface CharacterItems {
  weapon: number;
  subweapon: number;
  emblem: number;
  cap: number;
  clothes: number;
  pants: number;
  overall: number;
  shoes: number;
  gloves: number;
  cape: number;
  ring1: number;
  ring2: number;
  ring3: number;
  ring4: number;
  pendant1: number;
  pendant2: number;
  forehead: number;
  eyeacc: number;
  shoulder: number;
  earacc: number;
  poket: number;
  badge: number;
  medal: number;
  belt: number;
  heart: number;
}

export interface ArcaneSymbols {
  vanishing: number;
  chewchew: number;
  lacheln: number;
  arcana: number;
  morass: number;
  esfera: number;
}

export interface Character {
  job: JOB_CODE;
  level: number;
  hyperStat: HyperStat;
  abilities: Ability[];
  unionCards: UnionCard[];
  unionControl: UnionControl;
  disposition: Disposition;
  items: CharacterItems;
  arcaneSymbols: ArcaneSymbols;
  skillLevels: {
    [code: string]: number;
  };
  stacks: {
    [code: string]: number;
  };
  cores: Core[];
  buffs: string[];
}
