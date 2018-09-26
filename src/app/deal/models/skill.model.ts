import { Stat } from './stat.model';

export interface Skill {
  code: string;
  name: string;
  maxLevel: number;
  passive?: PassiveSkill;
  buff?: BuffSkill;
}

export type PassiveSkill = (
  level: number,
  options?: { stack?: number },
) => { stat: Partial<Stat> };

export type BuffSkill = (
  level: number,
  options?: { stack?: number },
) => { cooldown?: number; persist?: number; stat: Partial<Stat> };
