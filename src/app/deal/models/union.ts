import { JOB_CODE } from './job.model';
import { UnionCardEffect } from './union.model';

export const unionCardEffectEntities: {
  [job in JOB_CODE | 'M']?: UnionCardEffect
} = {
  HERO: {
    job: 'HERO',
    stat: [
      { STRFixed: 10 },
      { STRFixed: 20 },
      { STRFixed: 40 },
      { STRFixed: 80 },
      { STRFixed: 100 },
    ],
  },
  PALADIN: {
    job: 'PALADIN',
    stat: [
      { STRFixed: 10 },
      { STRFixed: 20 },
      { STRFixed: 40 },
      { STRFixed: 80 },
      { STRFixed: 100 },
    ],
  },
  DARK_KNIGHT: {
    job: 'DARK_KNIGHT',
    stat: [
      { maxHPPercent: 2 },
      { maxHPPercent: 3 },
      { maxHPPercent: 4 },
      { maxHPPercent: 5 },
      { maxHPPercent: 6 },
    ],
  },
  ARCHMAGE_FIRE_POISON: {
    job: 'ARCHMAGE_FIRE_POISON',
    stat: [
      { maxMPPercent: 2 },
      { maxMPPercent: 3 },
      { maxMPPercent: 4 },
      { maxMPPercent: 5 },
      { maxMPPercent: 6 },
    ],
  },
  ARCHMAGE_ICE_LIGHTNING: {
    job: 'ARCHMAGE_ICE_LIGHTNING',
    stat: [
      { INTFixed: 10 },
      { INTFixed: 20 },
      { INTFixed: 40 },
      { INTFixed: 80 },
      { INTFixed: 100 },
    ],
  },
  BISHOP: {
    job: 'BISHOP',
    stat: [
      { INTFixed: 10 },
      { INTFixed: 20 },
      { INTFixed: 40 },
      { INTFixed: 80 },
      { INTFixed: 100 },
    ],
  },
  BOWMASTER: {
    job: 'BOWMASTER',
    stat: [
      { DEXFixed: 10 },
      { DEXFixed: 20 },
      { DEXFixed: 40 },
      { DEXFixed: 80 },
      { DEXFixed: 100 },
    ],
  },
  MARKSMAN: {
    job: 'MARKSMAN',
    stat: [
      { criticalRate: 1 },
      { criticalRate: 2 },
      { criticalRate: 3 },
      { criticalRate: 4 },
      { criticalRate: 5 },
    ],
  },
  NIGHTLORD: {
    job: 'NIGHTLORD',
    stat: [
      { criticalRate: 1 },
      { criticalRate: 2 },
      { criticalRate: 3 },
      { criticalRate: 4 },
      { criticalRate: 5 },
    ],
  },
  SHADOWER: {
    job: 'SHADOWER',
    stat: [
      { LUKFixed: 10 },
      { LUKFixed: 20 },
      { LUKFixed: 40 },
      { LUKFixed: 80 },
      { LUKFixed: 100 },
    ],
  },
  DUALBLADE: {
    job: 'DUALBLADE',
    stat: [
      { LUKFixed: 10 },
      { LUKFixed: 20 },
      { LUKFixed: 40 },
      { LUKFixed: 80 },
      { LUKFixed: 100 },
    ],
  },
  VIPER: {
    job: 'VIPER',
    stat: [
      { STRFixed: 10 },
      { STRFixed: 20 },
      { STRFixed: 40 },
      { STRFixed: 80 },
      { STRFixed: 100 },
    ],
  },
  CAPTAIN: {
    job: 'CAPTAIN',
    stat: [
      { summonPersist: 4 },
      { summonPersist: 6 },
      { summonPersist: 8 },
      { summonPersist: 10 },
      { summonPersist: 12 },
    ],
  },
  CANNONSHOOTER: {
    job: 'CANNONSHOOTER',
    stat: [
      { STRFixed: 10 },
      { STRFixed: 20 },
      { STRFixed: 40 },
      { STRFixed: 80 },
      { STRFixed: 100 },
    ],
  },
  SOULMASTER: {
    job: 'SOULMASTER',
    stat: [
      { maxHPFixed: 250 },
      { maxHPFixed: 500 },
      { maxHPFixed: 1000 },
      { maxHPFixed: 2000 },
      { maxHPFixed: 2500 },
    ],
  },
  MIHILE: {
    job: 'MIHILE',
    stat: [
      { maxHPFixed: 250 },
      { maxHPFixed: 500 },
      { maxHPFixed: 1000 },
      { maxHPFixed: 2000 },
      { maxHPFixed: 2500 },
    ],
  },
  FLAMEWIZARD: {
    job: 'FLAMEWIZARD',
    stat: [
      { INTFixed: 10 },
      { INTFixed: 20 },
      { INTFixed: 40 },
      { INTFixed: 80 },
      { INTFixed: 100 },
    ],
  },
  WINDBREAKER: {
    job: 'WINDBREAKER',
    stat: [
      { DEXFixed: 10 },
      { DEXFixed: 20 },
      { DEXFixed: 40 },
      { DEXFixed: 80 },
      { DEXFixed: 100 },
    ],
  },
  NIGHTWALKER: {
    job: 'NIGHTWALKER',
    stat: [
      { LUKFixed: 10 },
      { LUKFixed: 20 },
      { LUKFixed: 40 },
      { LUKFixed: 80 },
      { LUKFixed: 100 },
    ],
  },
  STRIKER: {
    job: 'STRIKER',
    stat: [
      { STRFixed: 10 },
      { STRFixed: 20 },
      { STRFixed: 40 },
      { STRFixed: 80 },
      { STRFixed: 100 },
    ],
  },
  LUMINOUS: {
    job: 'LUMINOUS',
    stat: [
      { INTFixed: 10 },
      { INTFixed: 20 },
      { INTFixed: 40 },
      { INTFixed: 80 },
      { INTFixed: 100 },
    ],
  },
  MERCEDES: {
    job: 'MERCEDES',
    stat: [
      { cooldownReducePercent: 2 },
      { cooldownReducePercent: 3 },
      { cooldownReducePercent: 4 },
      { cooldownReducePercent: 5 },
      { cooldownReducePercent: 6 },
    ],
  },
  PHANTOM: {
    job: 'PHANTOM',
    stat: [
      { mesoGain: 1 },
      { mesoGain: 2 },
      { mesoGain: 3 },
      { mesoGain: 4 },
      { mesoGain: 5 },
    ],
  },
  EUNWOL: {
    job: 'EUNWOL',
    stat: [
      { criticalDamage: 1 },
      { criticalDamage: 2 },
      { criticalDamage: 3 },
      { criticalDamage: 5 },
      { criticalDamage: 6 },
    ],
  },
  BLASTER: {
    job: 'BLASTER',
    stat: [
      { ignoreDefense: 1 },
      { ignoreDefense: 2 },
      { ignoreDefense: 3 },
      { ignoreDefense: 5 },
      { ignoreDefense: 6 },
    ],
  },
  DEMONSLAYER: {
    job: 'DEMONSLAYER',
    stat: [
      { ccImmune: 1 },
      { ccImmune: 2 },
      { ccImmune: 3 },
      { ccImmune: 4 },
      { ccImmune: 5 },
    ],
  },
  DEMONAVENGER: {
    job: 'DEMONAVENGER',
    stat: [
      { bossDamage: 1 },
      { bossDamage: 2 },
      { bossDamage: 3 },
      { bossDamage: 5 },
      { bossDamage: 6 },
    ],
  },
  BATTLEMAGE: {
    job: 'BATTLEMAGE',
    stat: [
      { INTFixed: 10 },
      { INTFixed: 20 },
      { INTFixed: 40 },
      { INTFixed: 80 },
      { INTFixed: 100 },
    ],
  },
  MECHANIC: {
    job: 'MECHANIC',
    stat: [
      { buffPersist: 5 },
      { buffPersist: 10 },
      { buffPersist: 15 },
      { buffPersist: 20 },
      { buffPersist: 25 },
    ],
  },
  XENON: {
    job: 'XENON',
    stat: [
      { STRFixed: 5, DEXFixed: 5, LUKFixed: 5 },
      { STRFixed: 10, DEXFixed: 10, LUKFixed: 10 },
      { STRFixed: 20, DEXFixed: 20, LUKFixed: 20 },
      { STRFixed: 40, DEXFixed: 40, LUKFixed: 40 },
      { STRFixed: 50, DEXFixed: 50, LUKFixed: 50 },
    ],
  },
  KAISER: {
    job: 'KAISER',
    stat: [
      { STRFixed: 10 },
      { STRFixed: 20 },
      { STRFixed: 40 },
      { STRFixed: 80 },
      { STRFixed: 100 },
    ],
  },
  CADENA: {
    job: 'CADENA',
    stat: [
      { LUKFixed: 10 },
      { LUKFixed: 20 },
      { LUKFixed: 40 },
      { LUKFixed: 80 },
      { LUKFixed: 100 },
    ],
  },
  ANGELICBUSTER: {
    job: 'ANGELICBUSTER',
    stat: [
      { DEXFixed: 10 },
      { DEXFixed: 20 },
      { DEXFixed: 40 },
      { DEXFixed: 80 },
      { DEXFixed: 100 },
    ],
  },
  ZERO: {
    job: 'ZERO',
    stat: [
      { expGain: 4 },
      { expGain: 6 },
      { expGain: 8 },
      { expGain: 10 },
      { expGain: 12 },
    ],
  },
  KINESIS: {
    job: 'KINESIS',
    stat: [
      { INTFixed: 10 },
      { INTFixed: 20 },
      { INTFixed: 40 },
      { INTFixed: 80 },
      { INTFixed: 100 },
    ],
  },
  ILLIUM: {
    job: 'ILLIUM',
    stat: [
      { INTFixed: 10 },
      { INTFixed: 20 },
      { INTFixed: 40 },
      { INTFixed: 80 },
      { INTFixed: 100 },
    ],
  },
  ARK: {
    job: 'ARK',
    stat: [
      { STRFixed: 10 },
      { STRFixed: 20 },
      { STRFixed: 40 },
      { STRFixed: 80 },
      { STRFixed: 100 },
    ],
  },
  M: {
    job: 'M',
    stat: [
      { weaponAttack: 5, magicAttack: 5 },
      { weaponAttack: 10, magicAttack: 10 },
      { weaponAttack: 15, magicAttack: 15 },
      { weaponAttack: 20, magicAttack: 20 },
      { weaponAttack: 20, magicAttack: 20 },
    ],
  },
};
