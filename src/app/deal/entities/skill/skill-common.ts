import { Skill } from '../../models/skill.model';

export const skillEntities: { [code: string]: Skill } = {
  BLESS_OF_SOUL: {
    code: 'BLESS_OF_SOUL',
    name: '정령의 축복',
    maxLevel: 20,
    passive: level => ({ stat: { weaponAttack: level, magicAttack: level } }),
  },
  BLESS_OF_EMPRESS: {
    code: 'BLESS_OF_EMPRESS',
    name: '여제의 축복',
    maxLevel: 30,
    passive: level => ({ stat: { weaponAttack: level, magicAttack: level } }),
  },
  ECHO_OF_HERO: {
    code: 'ECHO_OF_HERO',
    name: '영웅의 메아리',
    maxLevel: 1,
    buff: level => ({
      cooldown: 60 * 60 * 2,
      persist: 60 * 40,
      stat: {
        weaponAttackPercent: 4,
        magicAttackPercent: 4,
      },
    }),
  },
  MAPLE_WARRIOR: {
    code: 'MAPLE_WARRIOR',
    name: '메이플 용사',
    maxLevel: 30,
    buff: level => ({
      persist: 900,
      stat: {},
    }),
  },
  WILL_OF_LIBERTY: {
    code: 'WILL_OF_LIBERTY',
    name: '윌 오브 리버티',
    maxLevel: 1,
    buff: level => ({
      persist: 60,
      cooldown: 120,
      stat: {
        totalDamage: 10,
      },
    }),
  },
};

export const skillCodes = Object.keys(skillEntities);
