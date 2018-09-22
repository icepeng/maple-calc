import { Skill } from './skill.model';

export const skillEntities: { [code: string]: Skill } = {
  HIDDEN_PIECE: {
    code: 'HIDDEN_PIECE',
    name: '히든 피스',
    maxLevel: 1,
    passive: level => ({ stat: { totalDamage: 10, maxHP: 10, maxMP: 10 } }),
  },
  METALARMOR_HUMAN: {
    code: 'METALARMOR_HUMAN',
    name: '메탈아머: 휴먼',
    maxLevel: 30,
    buff: level => ({
      stat: { moveSpeed: 20 },
    }),
  },
  MECHANIC_MASTERY: {
    code: 'MECHANIC_MASTERY',
    name: '메카닉 마스터리',
    maxLevel: 10,
    passive: level => ({
      stat: {
        weaponAttack: level * 2,
        mastery: 10 + level * 4,
        criticalRate: level,
        criticalDamage: Math.ceil(level * 0.5),
      },
    }),
  },
  PHYSICAL_TRAINING_STR_DEX: {
    code: 'PHYSICAL_TRAINING_STR_DEX',
    name: '피지컬 트레이닝',
    maxLevel: 5,
    passive: level => ({
      stat: {
        STR: level * 6,
        DEX: level * 6,
      },
    }),
  },
  MECHANIC_BOOSTER: {
    code: 'MECHANIC_BOOSTER',
    name: '메카닉 부스터',
    maxLevel: 10,
    buff: level => ({
      persist: level * 18,
      stat: {
        attackSpeed: -2,
      },
    }),
  },
  METALARMOR_TANK: {
    code: 'METALARMOR_TANK',
    name: '메탈아머: 탱크',
    maxLevel: 1,
    buff: level => ({
      stat: {
        criticalRate: 30,
      },
    }),
  },
  OVER_TUNING: {
    code: 'OVER_TUNING',
    name: '오버 튜닝',
    maxLevel: 15,
    passive: level => ({
      stat: {
        totalDamage: level * 2,
        criticalRate: level + 5,
        ignoreDefense: level * 2,
      },
    }),
  },
  MECHANIC_DEFENSE_SYSTEM: {
    code: 'MECHANIC_DEFENSE_SYSTEM',
    name: '메카닉 디펜스 시스템',
    maxLevel: 15,
    passive: level => ({
      stat: {
        maxHPPercent: level * 2,
        maxMPPercent: level * 2,
        defense: level * 50,
      },
    }),
  },
  LUCKY_DICE_4: {
    code: 'LUCKY_DICE_4',
    name: '럭키 다이스 4',
    maxLevel: 5,
    buff: level => ({
      persist: 180,
      cooldown: 200 - level * 4,
      stat: {
        criticalRate: 15,
      },
    }),
  },
  LUCKY_DICE_5: {
    code: 'LUCKY_DICE_5',
    name: '럭키 다이스 5',
    maxLevel: 5,
    buff: level => ({
      persist: 180,
      cooldown: 200 - level * 4,
      stat: {
        totalDamage: 20,
      },
    }),
  },
  LUCKY_DICE_6: {
    code: 'LUCKY_DICE_6',
    name: '럭키 다이스 6',
    maxLevel: 5,
    buff: level => ({
      persist: 180,
      cooldown: 200 - level * 4,
      stat: {
        expGain: 30,
      },
    }),
  },
  METALARMOR_EXTREME: {
    code: 'METALARMOR_EXTREME',
    name: '메탈아머 익스트림',
    maxLevel: 30,
    passive: level => ({
      stat: {
        weaponAttack: level + 40,
        defense: level * 10 + 300,
        maxHP: level * 20 + 1500,
        maxMP: level * 20 + 1500,
        mastery: Math.ceil(level * 0.5) + 5,
        maxHPPercent: level,
      },
    }),
  },
};

export const skillCodes = Object.keys(skillEntities);
