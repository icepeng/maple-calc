import { Injectable } from '@angular/core';
import { Stat, HyperStat, LevelStat } from '../models/charcacter.model';
import { UnionCard } from '../models/union.model';

@Injectable({
  providedIn: 'root',
})
export class StatService {
  constructor() {}

  addStats(base: Stat, stats: Partial<Stat>[]): Stat {
    const keys = Object.keys(base) as (keyof Stat)[];
    return stats.reduce((sum, stat) => {}, base);
  }

  convertLevelStat(levelStat: LevelStat): Partial<Stat> {
    return {
      STR: levelStat.STR,
      DEX: levelStat.DEX,
      INT: levelStat.INT,
      LUK: levelStat.LUK,
      maxHP: levelStat.maxHP * 15,
    };
  }

  convertHyperStat(hyperStat: HyperStat): Partial<Stat> {
    return {
      STRFixed: hyperStat.STR * 15,
      DEXFixed: hyperStat.DEX * 15,
      INTFixed: hyperStat.INT * 15,
      LUKFixed: hyperStat.LUK * 15,
      maxHPPercent: hyperStat.maxHP * 2,
      maxMPPercent: hyperStat.maxMP * 2,
      moveSpeed: hyperStat.moveSpeed * 4,
      jumpPower: hyperStat.jumpPower * 2,
      criticalRate:
        hyperStat.criticalRate + Math.max(hyperStat.criticalRate - 5, 0),
      criticalDamage: hyperStat.criticalDamage,
      ignoreDefense: hyperStat.ignoreDefense * 3,
      damage: hyperStat.damage * 3,
      bossDamage:
        hyperStat.bossDamage * 3 + Math.max(hyperStat.bossDamage - 5, 0),
      elementImmune: hyperStat.elementImmune * 4,
      ccImmune: hyperStat.ccImmune + Math.max(hyperStat.ccImmune - 5, 0),
      stance: hyperStat.stance * 2,
    };
  }

  convertUnionCard(unionCard: UnionCard) {
    
  }
}
