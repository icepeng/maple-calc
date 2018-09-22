import { Stat } from './stat.model';

export type ARMOR_CATEGORY =
  | 'CAP'
  | 'CLOTHES'
  | 'PANTS'
  | 'OVERALL'
  | 'SHOES'
  | 'GLOVES'
  | 'CAPE';
export type ACC_CATEGORY =
  | 'RING'
  | 'FOREHEAD'
  | 'EYEACC'
  | 'SHOULDER'
  | 'EARACC'
  | 'POKET'
  | 'PENDANT'
  | 'BELT'
  | 'BADGE';
export type WEAPON_CATEGORY =
  | 'SHININGROD'
  | 'SOULSHOOTER'
  | 'DESPERADO'
  | 'ENERGYSWORD'
  | 'ONE_HANDED_SWORD'
  | 'GUN';

export type ITEM_CATEGORY =
  | ARMOR_CATEGORY
  | ACC_CATEGORY
  | WEAPON_CATEGORY
  | 'MEDAL'
  | 'EMBLEM'
  | 'SUBWEAPON'
  | 'HEART';

export interface BaseItem {
  code: string;
  name: string;
  category: ITEM_CATEGORY;
  requiredLevel: number;
  stat: Partial<Stat>;
  maxUpgrade: number;
  attackSpeed?: number;
}

export interface Item {
  id: number;
  baseItem: string;
  description: string;
  additionalStat: Partial<Stat>;
  upgradeStat: Partial<Stat>;
  upgrade: number;
  hammerApplied: boolean;
  starForce: number;
  potential?: Potential[];
  additionalPotential?: Potential[];
  soul?: Soul;
}

export interface Soul {
  prefix: string;
  boss: string;
  type: string;
  amount: number;
}

export interface Potential {
  stat?: Partial<Stat>;
}
