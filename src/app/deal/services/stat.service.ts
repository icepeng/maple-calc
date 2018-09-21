import { Injectable } from '@angular/core';
import {
  Stat,
  HyperStat,
  LevelStat,
  Character,
  MainStat,
} from '../models/charcacter.model';
import { UnionCard } from '../models/union.model';
import { jobEntities } from '../models/job';

@Injectable({
  providedIn: 'root',
})
export class StatService {
  constructor() {}

  getBaseStat(): Stat {
    return {
      STR: 4,
      DEX: 4,
      INT: 4,
      LUK: 4,
      STRPercent: 0,
      DEXPercent: 0,
      INTPercent: 0,
      LUKPercent: 0,
      STRFixed: 0,
      DEXFixed: 0,
      INTFixed: 0,
      LUKFixed: 0,
      maxHP: 50,
      maxHPPercent: 0,
      maxHPFixed: 0,
      maxMP: 50,
      maxMPPercent: 0,

      weaponAttack: 0,
      magicAttack: 0,
      weaponAttackPercent: 0,
      magicAttackPercent: 0,

      mastery: 0,
      damage: 0,
      bossDamage: 0,
      ignoreDefense: 0,
      finalDamage: 1,
      criticalRate: 0,
      criticalDamage: 0,

      defense: 0,
      stance: 0,

      cooldownReduce: 0,
      cooldownReducePercent: 0,

      summonPersist: 0,
      buffPersist: 0,

      dropRate: 0,
      mesoGain: 0,
      expGain: 0,

      ccImmune: 0,
      elementImmune: 0,

      moveSpeed: 100,
      jumpPower: 100,
    };
  }

  getStat(charcacter: Character): Stat {
    const baseStat = this.getBaseStat();
    const job = jobEntities[charcacter.job];
    const jobStat: Stat = {
      ...baseStat,
      mastery: job.mastery,
    };
    return baseStat;
  }

  addStats(base: Stat, stats: Partial<Stat>[]): Stat {
    const keys = Object.keys(base) as (keyof Stat)[];
    return stats.reduce((sum, stat) => {}, base);
  }

  getLevelStat(mainStat: MainStat, level: number): Partial<Stat> {
    if (mainStat === 'maxHP') {
      return {
        maxHP: (level - 1) * 75,
      };
    }
    return {
      [mainStat]: (level - 1) * 5,
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

  convertUnionCard(unionCard: UnionCard) {}
}
