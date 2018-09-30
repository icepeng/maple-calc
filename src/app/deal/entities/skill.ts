import { Skill } from '../models/skill.model';
import * as Common from './skill/skill-common';
import * as Link from './skill/skill-link';
import * as Mechanic from './skill/skill-mechanic';
import * as VCommon from './skill/skill-v-common';
import * as VPirate from './skill/skill-v-pirate';

export const skillEntities: { [code: string]: Skill } = {
  ...Common.skillEntities,
  ...Link.skillEntities,
  ...VCommon.skillEntities,
  ...VPirate.skillEntities,
  ...Mechanic.skillEntities,
};
