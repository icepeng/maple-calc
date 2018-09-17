export interface UnionMember {
  type: string;
  amount: number;
}

export interface UnionControl {
  STR: number;
  DEX: number;
  INT: number;
  LUK: number;
  maxHP: number;
  maxMP: number;
  weaponAttack: number;
  magicAttack: number;
  criticalRate: number;
  criticalDamage: number;
  bossDamage: number;
  ignoreDefense: number;
  buffDuration: number;
  stance: number;
}
