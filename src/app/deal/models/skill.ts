import { Skill } from './skill.model';
import * as Mechanic from './skill-mechanic';
import * as Common from './skill-common';
import * as Link from './skill-link';

export const skillEntities: { [code: string]: Skill } = {
  ...Common.skillEntities,
  ...Link.skillEntities,
  ...Mechanic.skillEntities,
};
