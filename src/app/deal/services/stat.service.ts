import { Injectable } from '@angular/core';
import {
  Ability,
  ArcaneSymbols,
  Character,
  CharacterItems,
  Disposition,
  HyperStat,
} from '../models/charcacter.model';
import { baseItemEntities, itemEntities } from '../entities/item';
import { jobEntities } from '../entities/job';
import { MainStat, JOB_CODE } from '../models/job.model';
import { skillEntities } from '../entities/skill';
import { Stat } from '../models/stat.model';
import { unionCardEffectEntities } from '../entities/union';
import { UnionCard, UnionControl } from '../models/union.model';

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
      allStatPercent: 0,
      STRFixed: 0,
      DEXFixed: 0,
      INTFixed: 0,
      LUKFixed: 0,
      maxHP: 50, // 데벤 3차전직때 체력 50 늘어남. 나머지는 확인 필요.
      maxHPPercent: 0,
      maxHPFixed: 0,
      maxMP: 50,
      maxMPPercent: 0,

      weaponAttack: 0,
      magicAttack: 0,
      weaponAttackPercent: 0,
      magicAttackPercent: 0,

      mastery: 0,
      totalDamage: 0,
      bossDamage: 0,
      ignoreDefense: 0,
      finalDamage: 100,
      criticalRate: 0,
      criticalDamage: 0,

      attackSpeed: 0,

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
      elementReset: 0,

      moveSpeed: 100,
      jumpPower: 100,

      starForce: 0,
      arcaneForce: 0,
    };
  }

  getStat(character: Character): Stat {
    const baseStat = this.getBaseStat();
    const job = jobEntities[character.job];
    const basicStat: Partial<Stat> = {
      mastery: job.mastery,
      attackSpeed:
        baseItemEntities[itemEntities[character.items.weapon].baseItem]
          .attackSpeed,
    };
    const levelStat = this.getLevelStat(
      character.job,
      character.level,
      !!character.buffs.includes('MAPLE_HERO'),
    );
    const hyperStat = this.convertHyperStat(character.hyperStat);
    const unionControlStat = this.convertUnionControl(character.unionControl);
    const unionCardStat = this.convertUnionCards(character.unionCards);
    const itemStat = this.convertItems(character.items);
    const dispositionStat = this.convertDisposition(character.disposition);
    const abilityStat = this.convertAbility(character.abilities);
    const arcaneSymbolStat = this.convertArcaneSymbols(
      character.job,
      character.arcaneSymbols,
    );
    const passiveSkillStat = this.convertPassiveSkills(character.skillLevels);
    const buffSkillStat = this.convertBuffSkills(
      character.skillLevels,
      character.buffs,
    );
    return this.addStats(
      baseStat,
      basicStat,
      levelStat,
      hyperStat,
      unionControlStat,
      unionCardStat,
      itemStat,
      dispositionStat,
      abilityStat,
      arcaneSymbolStat,
      passiveSkillStat,
      buffSkillStat,
    ) as Stat;
  }

  addStats(...stats: Partial<Stat>[]): Partial<Stat> {
    const obj = {} as Stat;
    stats.forEach(stat => {
      Object.keys(stat).forEach(key => {
        if (!obj[key]) {
          obj[key] = key === 'finalDamage' ? 100 : 0;
        }
        if (key === 'finalDamage') {
          obj[key] *= stat[key] / 100;
          return;
        }
        if (key === 'ignoreDefense') {
          obj[key] = (1 - (1 - obj[key] / 100) * (1 - stat[key] / 100)) * 100;
          return;
        }
        obj[key] += stat[key];
      });
    });
    return obj;
  }

  getLevelStat(
    jobCode: JOB_CODE,
    level: number,
    isMapleHero: boolean,
  ): Partial<Stat> {
    if (!jobCode || !level) {
      return {};
    }

    const mainStat = jobEntities[jobCode].mainStat;
    if (mainStat === 'maxHP') {
      return {
        maxHP: (level - 1) * 90,
      };
    }
    return {
      [mainStat]: (level - 1) * 5 * (isMapleHero ? 1.15 : 1),
      maxHP: (level - 1) * 15,
      maxMP: (level - 1) * 15,
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
      totalDamage: hyperStat.totalDamage * 3,
      bossDamage:
        hyperStat.bossDamage * 3 + Math.max(hyperStat.bossDamage - 5, 0),
      elementImmune: hyperStat.elementImmune * 4,
      ccImmune: hyperStat.ccImmune + Math.max(hyperStat.ccImmune - 5, 0),
      stance: hyperStat.stance * 2,
    };
  }

  convertUnionControl(unionControl: UnionControl): Partial<Stat> {
    return {
      STR: unionControl.STR * 5,
      DEX: unionControl.DEX * 5,
      INT: unionControl.INT * 5,
      LUK: unionControl.LUK * 5,
      maxHP: unionControl.maxHP * 250,
      maxMP: unionControl.maxMP * 250,
      weaponAttack: unionControl.weaponAttack,
      magicAttack: unionControl.magicAttack,
      ccImmune: unionControl.ccImmune,
      expGain: unionControl.expGain * 0.25,
      criticalRate: unionControl.criticalRate,
      criticalDamage: unionControl.criticalDamage * 0.5,
      bossDamage: unionControl.bossDamage,
      stance: unionControl.stance,
      buffPersist: unionControl.buffPersist,
      ignoreDefense: unionControl.ignoreDefense,
    };
  }

  convertUnionCards(unionCards: UnionCard[]): Partial<Stat> {
    const index = {
      B: 0,
      A: 1,
      S: 2,
      SS: 3,
      SSS: 4,
    };
    return this.addStats(
      ...unionCards.map(
        unionCard => unionCardEffectEntities['M'].stat[index[unionCard.rank]],
      ),
    );
  }

  convertItems(items: CharacterItems): Partial<Stat> {
    const itemStats = Object.values(items).map(item => {
      const baseItem = baseItemEntities[item.baseItem];
      return this.addStats(
        baseItem.stat,
        item.additionalStat,
        item.upgradeStat,
        {
          starForce: item.starForce,
        },
      );
    });
    return this.addStats(...itemStats);
  }

  convertDisposition(disposition: Disposition): Partial<Stat> {
    return {
      ignoreDefense: Math.floor(disposition.charisma / 5) * 0.5,
      buffPersist: Math.floor(disposition.sensivity / 10) * 1,
      maxMP: Math.floor(disposition.sensivity / 5) * 100, // maxMPFixed인지 확인 필요
      maxHP: Math.floor(disposition.will / 10) * 200, // maxHPFixed인지 확인 필요
      defense: Math.floor(disposition.will / 10) * 10,
      ccImmune: Math.floor(disposition.will / 10) * 2,
      elementReset: Math.floor(disposition.insight / 10) * 0.5,
    };
  }

  convertArcaneSymbols(
    jobCode: JOB_CODE,
    arcaneSymbols: ArcaneSymbols,
  ): Partial<Stat> {
    if (!jobCode) {
      return {};
    }

    const mainStat = jobEntities[jobCode].mainStat;
    return this.addStats(
      ...Object.values(arcaneSymbols).map(level => {
        switch (mainStat) {
          case 'maxHP':
            return {
              maxHPFixed: level ? (level + 2) * 1400 : 0,
              arcaneForce: level ? (level + 2) * 10 : 0,
            };
          case 'STR':
            return {
              STRFixed: level ? (level + 2) * 100 : 0,
              arcaneForce: level ? (level + 2) * 10 : 0,
            };
          case 'DEX':
            return {
              DEXFixed: level ? (level + 2) * 100 : 0,
              arcaneForce: level ? (level + 2) * 10 : 0,
            };
          case 'INT':
            return {
              INTFixed: level ? (level + 2) * 100 : 0,
              arcaneForce: level ? (level + 2) * 10 : 0,
            };
          case 'LUK':
            return {
              LUKFixed: level ? (level + 2) * 100 : 0,
              arcaneForce: level ? (level + 2) * 10 : 0,
            };
        }
      }),
    );
  }

  convertAbility(abilities: Ability[]) {
    return this.addStats(...abilities.map(x => x.stat).filter(x => !!x));
  }

  convertPassiveSkills(skillLevels: { [code: string]: number }) {
    const codes = Object.keys(skillLevels);
    const stats = codes
      .map(code => {
        const skill = skillEntities[code].passive;
        if (!skill) {
          return;
        }
        return skill(skillLevels[code]).stat;
      })
      .filter(x => !!x);
    return this.addStats(...stats);
  }

  convertBuffSkills(skillLevels: { [code: string]: number }, buffs: string[]) {
    const stats = buffs
      .map(buff => {
        const skill = skillEntities[buff].buff;
        if (!skill) {
          return;
        }
        return skill(skillLevels[buff]).stat;
      })
      .filter(x => !!x);
    return this.addStats(...stats);
  }
}
