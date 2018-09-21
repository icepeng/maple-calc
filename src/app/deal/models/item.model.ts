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
  | 'ONE-HANDED-SWORD'
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
  id: number;
  category: ITEM_CATEGORY;
  STR: number;
  DEX: number;
  INT: number;
  LUK: number;
  maxHP: number;
  maxMP: number;
  maxHPPercent: number;
  maxMPPercent: number;
  defense: number;
  weaponAttack: number;
  magicAttack: number;
  damage: number;
  allStat: number;
  bossDamage: number;
  ignoreDefense: number;
  maxUpgrade: number;

  attackSpeed?: number;
  soul?: Soul;
}


export interface AdditionalStat {
  STR: number;
  DEX: number;
  INT: number;
  LUK: number;
  maxHP: number;
  maxMP: number;
  defense: number;
  weaponAttack: number;
  magicAttack: number;
  damage: number;
  allStat: number;
  bossDamage: number;
}

export interface AdditionalStatPreset extends AdditionalStat {
  id: number;
}

export interface UpgradeStat {
  STR: number;
  DEX: number;
  INT: number;
  LUK: number;
  maxHP: number;
  maxMP: number;
  defense: number;
  weaponAttack: number;
  magicAttack: number;
}

export interface UpgradeStatPreset extends UpgradeStat {
  id: number;
}

export interface Item {
  id: number;
  baseItemId: number;
  description: string;
  additionalStat: AdditionalStat;
  upgradeStat: UpgradeStat;
  upgrade: number;
  hammerApplied: boolean;
  starForce: number;
  potential: Potential[];
  additionalPotential: Potential[];
}

export interface Soul {
  prefix: string;
  boss: string;
  type: string;
  amount: number;
}

export interface Potential {
  type: string;
  amount: number;
}
