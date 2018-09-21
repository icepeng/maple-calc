import { JOB_CODE, Job } from './charcacter.model';

export const jobEntities: { [code in JOB_CODE]?: Job } = {
  DEMONAVENGER: {
    code: 'DEMONAVENGER',
    category: 'WARRIOR',
    mainStat: 'maxHP',
    name: '데몬어벤져',
    skills: [],
  },
  MECHANIC: {
    code: 'MECHANIC',
    category: 'WARRIOR',
    mainStat: 'maxHP',
    name: '데몬어벤져',
    skills: [],
  },
};
