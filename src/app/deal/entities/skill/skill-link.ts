import { Skill } from '../../models/skill.model';

export const skillEntities: { [code: string]: Skill } = {
  PIRATE_BLESS: {
    code: 'PIRATE_BLESS',
    name: '파이렛 블레스',
    maxLevel: 2,
    passive: level => ({
      stat: {
        STR: level * 10 + 5,
        DEX: level * 10 + 5,
        INT: level * 10 + 5,
        LUK: level * 10 + 5,
        maxHPPercent: level * 5,
        maxMPPercent: level * 5,
      },
    }),
  },
  BLESS_OF_ELF: {
    code: 'BLESS_OF_ELF',
    name: '엘프의 축복',
    maxLevel: 2,
    passive: level => ({
      stat: {
        expGain: level * 5 + 5,
      },
    }),
  },
  DEMONS_FURY: {
    code: 'DEMONS_FURY',
    name: '데몬스 퓨리',
    maxLevel: 2,
    passive: level => ({ stat: { bossDamage: level * 5 + 5 } }),
  },
  DEADLY_INSTINCT: {
    code: 'DEADLY_INSTINCT',
    name: '데들리 인스팅트',
    maxLevel: 2,
    passive: level => ({ stat: { criticalRate: level * 5 + 5 } }),
  },
  GUARD_OF_LIGHT: {
    code: 'GUARD_OF_LIGHT',
    name: '빛의 수호',
    maxLevel: 2,
    buff: level => ({
      persist: level * 20 + 70,
      cooldown: 180,
      stat: { stance: 100 },
    }),
  },
  PERMEATE: {
    code: 'PERMEATE',
    name: '퍼미에이트',
    maxLevel: 2,
    passive: level => ({ stat: { ignoreDefense: level * 5 + 5 } }),
  },
  IRON_WILL: {
    code: 'IRON_WILL',
    name: '아이언 윌',
    maxLevel: 2,
    passive: level => ({ stat: { maxHPPercent: level * 5 + 5 } }),
  },
  SOUL_CONTRACT_LINK: {
    code: 'SOUL_CONTRACT_LINK',
    name: '소울 컨트랙트',
    maxLevel: 2,
    buff: level => ({
      persist: 10,
      cooldown: 90,
      stat: { totalDamage: level * 15 + 15 },
    }),
  },
  WILD_RAGE: {
    code: 'WILD_RAGE',
    name: '와일드 레이지',
    maxLevel: 2,
    passive: level => ({ stat: { totalDamage: level * 5 } }),
  },
  HYBRID_LOGIC: {
    code: 'HYBRID_LOGIC',
    name: '하이브리드 로직',
    maxLevel: 2,
    passive: level => ({ stat: { allStatPercent: level * 5 } }),
  },
  CYGNUS_BLESS: {
    code: 'CYGNUS_BLESS',
    name: '시그너스 블레스',
    maxLevel: 10,
    passive: level => ({
      stat: { ccImmune: level * 3 - 1, elementImmune: level * 3 - 1 },
    }),
  },
  BLESS_OF_RHINNE: {
    code: 'BLESS_OF_RHINNE',
    name: '륀느의 축복',
    maxLevel: 5,
    passive: level => ({ stat: { ignoreDefense: level * 2 } }),
  },
  JUDGEMENT: {
    code: 'JUDGEMENT',
    name: '판단',
    maxLevel: 2,
    passive: level => ({ stat: { criticalDamage: level * 2 } }),
  },
  TIDE_OF_BATTLE: {
    code: 'TIDE_OF_BATTLE',
    name: '전투의 흐름',
    maxLevel: 2,
    passive: (level, { stack }) => ({
      stat: stack ? { totalDamage: level * stack } : {},
    }),
  },
  SELFLESS: {
    code: 'SELFLESS',
    name: '무아',
    maxLevel: 2,
    passive: (level, { stack }) => ({
      stat: stack ? { totalDamage: level * stack } : {},
    }),
  },
};

// TODO: 은월, 아란, 에반, 카데나 빠짐. 제로에 뎀감 빠짐.

export const skillCodes = Object.keys(skillEntities);
export const linkSkills = skillCodes.map(code => skillEntities[code]);
