import { Skill } from '../../models/skill.model';

export const skillEntities: { [code: string]: Skill } = {
  LOADED_DICE: {
    code: 'LOADED_DICE',
    name: '로디드 다이스',
    maxLevel: 30,
    passive: level => ({ stat: { weaponAttack: level + 10 } }),
  },
};

export const skillCodes = Object.keys(skillEntities);
