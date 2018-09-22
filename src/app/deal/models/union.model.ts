import { Stat } from './stat.model';
import { JOB_CODE } from './job.model';

export interface UnionCard {
  job: JOB_CODE | 'M';
  rank: 'SSS' | 'SS' | 'S' | 'A' | 'B';
}

export interface UnionCardEffect {
  job: JOB_CODE | 'M';
  stat: [
    Partial<Stat>,
    Partial<Stat>,
    Partial<Stat>,
    Partial<Stat>,
    Partial<Stat>
  ];
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
  buffPersist: number;
  stance: number;
  ccImmune: number;
  expGain: number;
}
