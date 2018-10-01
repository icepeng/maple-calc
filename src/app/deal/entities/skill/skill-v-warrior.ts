import { Skill } from '../../models/skill.model';

export const skillEntities: { [code: string]: Skill } = {
  BODY_OF_STEEL: {
    code: 'BODY_OF_STEEL',
    name: '바디 오브 스틸',
    maxLevel: 30,
    passive: level => ({ stat: { STR: level, maxHP: level * 50 } }),
  },
};

export const skillCodes = Object.keys(skillEntities);
