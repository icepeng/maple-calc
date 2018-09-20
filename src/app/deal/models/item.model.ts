export interface BaseItem {
  id: number;
  category:
    | 'CAP'
    | 'CLOTHES'
    | 'PANTS'
    | 'OVERALL'
    | 'SHOES'
    | 'GLOVES'
    | 'CAPE'
    | 'RING'
    | 'FOREHEAD'
    | 'EYEACC'
    | 'SHOULDER'
    | 'EARACC'
    | 'POKET'
    | 'BADGE'
    | 'MEDAL'
    | 'PENDANT'
    | 'BELT'
    | 'EMBLEM'
    | 'WEAPON'
    | 'SUBWEAPON'
    | 'HEART'
    | 'SHININGROD'
    | 'SOULSHOOTER'
    | 'DESPERADO'
    | 'ENERGYSWORD'
    | 'ONE-HANDED-SWORD'
    | string;
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
