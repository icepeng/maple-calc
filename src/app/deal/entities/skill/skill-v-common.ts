import { Skill } from '../../models/skill.model';

export const skillEntities: { [code: string]: Skill } = {
  DECENT_COMBAT_ORDERS: {
    code: 'DECENT_COMBAT_ORDERS',
    name: '쓸만한 컴뱃 오더스',
    maxLevel: 30,
    passive: level => ({ stat: { ccImmune: Math.ceil(level * 0.2) } }),
  },
  DECENT_SHARP_EYES: {
    code: 'DECENT_SHARP_EYES',
    name: '쓸만한 샤프 아이즈',
    maxLevel: 30,
    buff: level => ({
      persist: level * 3 + 180,
      cooldown: 180,
      stat: {
        criticalRate: 10,
        criticalDamage: 8,
      },
    }),
    passive: level => ({
      stat: {
        STR: Math.ceil(level * 0.2),
        DEX: Math.ceil(level * 0.2),
        INT: Math.ceil(level * 0.2),
        LUK: Math.ceil(level * 0.2),
      },
    }),
  },
  DECENT_HOLY_SYMBOL: {
    code: 'DECENT_HOLY_SYMBOL',
    name: '쓸만한 홀리 심볼',
    maxLevel: 30,
    buff: level => ({
      persist: level * 3 + 180,
      cooldown: 180,
      stat: {
        expGain: Math.floor(level / 2 + 20),
        dropRate: Math.floor(level / 3 + 14),
      },
    }),
  },
  DECENT_WIND_BOOSTER: {
    code: 'DECENT_WIND_BOOSTER',
    name: '쓸만한 윈드 부스터',
    maxLevel: 30,
    buff: level => ({
      persist: level * 3 + 180,
      cooldown: 180,
      stat: {
        attackSpeed: -1,
      },
    }),
  },
  DECENT_ADVANCED_BLESS: {
    code: 'DECENT_ADVANCED_BLESS',
    name: '쓸만한 어드밴스드 블레스',
    maxLevel: 30,
    buff: level => ({
      persist: level * 3 + 180,
      cooldown: 180,
      stat: {
        weaponAttack: 20,
        magicAttack: 20,
        defense: 425,
        maxHP: 475,
        maxMP: 475,
      },
    }),
  },
  DECENT_HYPER_BODY: {
    code: 'DECENT_HYPER_BODY',
    name: '쓸만한 하이퍼 바디',
    maxLevel: 30,
    buff: level => ({
      persist: level * 3 + 180,
      cooldown: 180,
      stat: {
        maxHPPercent: 40,
        maxMPPercent: 40,
      },
    }),
  },
  ROPE_CONNECT_V: {
    code: 'ROPE_CONNECT_V',
    name: '로프 커넥트',
    maxLevel: 30,
    passive: level => ({
      stat: {
        STR: level,
        DEX: level,
        INT: level,
        LUK: level,
      },
    }),
  },
};

export const skillCodes = Object.keys(skillEntities);
