export interface Item {
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
  defense: number;
  weaponAttack: number;
  magicAttack: number;
  allStat: number;
  maxUpgrade: number;
  upgrade: number;
  hammerApplied: boolean;
  starForce: number;
  potential: Potential[];
  additionalPotential: Potential[];
}

export interface Weapon extends Item {
  attackSpeed: number;
  bossDamage: number;
  ignoreDefense: number;
  damage: number;
  soul: Soul;
}

export interface Armor extends Item {}

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
