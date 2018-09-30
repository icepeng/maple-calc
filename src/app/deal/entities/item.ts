import { BaseItem, Item } from '../models/item.model';

export const baseItemEntities: { [code: string]: BaseItem } = {
  HIGHNESS_WONDERERHAT: {
    code: 'HIGHNESS_WONDERERHAT',
    name: '하이네스 원더러햇',
    category: 'CAP',
    requiredLevel: 150,
    stat: {
      STR: 40,
      DEX: 40,
      maxHP: 360,
      defense: 300,
      ignoreDefense: 10,
    },
    maxUpgrade: 11,
  },
  EAGLEEYE_WONDERERCOAT: {
    code: 'EAGLEEYE_WONDERERCOAT',
    name: '이글아이 원더러코트',
    category: 'CLOTHES',
    requiredLevel: 150,
    stat: {
      STR: 30,
      DEX: 30,
      weaponAttack: 2,
      defense: 135,
      ignoreDefense: 5,
    },
    maxUpgrade: 7,
  },
  TRICKSTER_WONDERERPANTS: {
    code: 'TRICKSTER_WONDERERPANTS',
    name: '트릭스터 원더러팬츠',
    category: 'PANTS',
    requiredLevel: 150,
    stat: {
      STR: 30,
      DEX: 30,
      weaponAttack: 2,
      defense: 135,
      ignoreDefense: 5,
    },
    maxUpgrade: 7,
  },
};

export const itemEntities: { [id: number]: Item } = {
  1: {
    id: 1,
    baseItem: 'HIGHNESS_WONDERERHAT',
    description: '',
    additionalStat: {
      DEX: 48,
      INT: 48,
      LUK: 24,
      allStatPercent: 7,
    },
    upgradeStat: {
      STR: 62,
      DEX: 118,
      maxHP: 1215,
      weaponAttack: 20,
      magicAttack: 19,
      defense: 589,
    },
    hammerApplied: true,
    upgrade: 8,
    starForce: 17,
    potential: [
      {
        stat: {
          DEXPercent: 6,
        },
      },
      {
        stat: {
          INT: 12,
        },
      },
      {
        stat: {
          DEXPercent: 3,
        },
      },
    ],
    additionalPotential: [
      {
        stat: {
          DEXPercent: 4,
        },
      },
      {
        stat: {
          LUKPercent: 2,
        },
      },
      {
        stat: {
          weaponAttack: 11,
        },
      },
    ],
  },
  2: {
    id: 2,
    baseItem: 'EAGLEEYE_WONDERERCOAT',
    description: '',
    additionalStat: {
      DEX: 48,
      magicAttack: 4,
      allStatPercent: 5,
    },
    upgradeStat: {
      STR: 31,
      DEX: 59,
      maxHP: 670,
      weaponAttack: 1,
      defense: 177,
    },
    hammerApplied: true,
    upgrade: 7,
    starForce: 12,
    potential: [
      {
        stat: {
          DEXPercent: 6,
        },
      },
      {
        stat: {
          DEXPercent: 3,
        },
      },
      {
        stat: {
          DEXPercent: 3,
        },
      },
    ],
  },
  3: {
    id: 3,
    baseItem: 'TRICKSTER_WONDERERPANTS',
    description: '',
    additionalStat: {
      STR: 20,
      DEX: 52,
      INT: 40,
      allStatPercent: 6,
    },
    upgradeStat: {
      STR: 62,
      DEX: 118,
      maxHP: 1215,
      weaponAttack: 22,
      magicAttack: 19,
      defense: 368,
    },
    hammerApplied: true,
    upgrade: 7,
    starForce: 12,
    potential: [
      {
        stat: {
          DEXPercent: 6,
        },
      },
      {
        stat: {
          DEXPercent: 6,
        },
      },
      {
        stat: {
          DEXPercent: 6,
        },
      },
    ],
    additionalPotential: [
      {
        stat: {
          weaponAttack: 10,
        },
      },
      {
        stat: {
          INT: 6,
        },
      },
      {
        stat: {
          magicAttack: 3,
        },
      },
    ],
  },
};
