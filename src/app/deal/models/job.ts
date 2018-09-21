import { JOB_CODE, Job } from './charcacter.model';

export const jobEntities: { [code in JOB_CODE]?: Job } = {
  DEMONAVENGER: {
    code: 'DEMONAVENGER',
    category: 'WARRIOR',
    mainStat: 'maxHP',
    name: '데몬어벤져',
    mastery: 0.2,
    skills: [],
  },
  MECHANIC: {
    code: 'MECHANIC',
    category: 'PIRATE',
    mainStat: 'DEX',
    name: '메카닉',
    mastery: 0.15,
    skills: [],
  },
};
