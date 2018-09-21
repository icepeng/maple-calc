import { JOB_CODE } from './charcacter.model';

export interface UnionCard {
  job: JOB_CODE;
  rank: 'SSS' | 'SS' | 'S' | 'A' | 'B';
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
