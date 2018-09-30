export type WARRIOR =
  | 'HERO'
  | 'PALADIN'
  | 'DARK_KNIGHT'
  | 'SOULMASTER'
  | 'MIHILE'
  | 'ARAN'
  | 'BLASTER'
  | 'DEMONSLAYER'
  | 'DEMONAVENGER'
  | 'KAISER'
  | 'ZERO';

export type MAGE =
  | 'ARCHMAGE_FIRE_POISON'
  | 'ARCHMAGE_ICE_LIGHTNING'
  | 'BISHOP'
  | 'FLAMEWIZARD'
  | 'EVAN'
  | 'LUMINOUS'
  | 'BATTLEMAGE'
  | 'KINESIS'
  | 'ILLIUM';

export type ARCHER =
  | 'BOWMASTER'
  | 'MARKSMAN'
  | 'WINDBREAKER'
  | 'MERCEDES'
  | 'WILDHUNTER';

export type ROGUE =
  | 'NIGHTLORD'
  | 'SHADOWER'
  | 'DUALBLADE'
  | 'NIGHTWALKER'
  | 'PHANTOM'
  | 'CADENA'
  | 'XENON';

export type PIRATE =
  | 'VIPER'
  | 'CAPTAIN'
  | 'CANNONSHOOTER'
  | 'STRIKER'
  | 'EUNWOL'
  | 'MECHANIC'
  | 'ANGELICBUSTER'
  | 'ARK'
  | 'XENON';

export type JOB_CODE = WARRIOR | MAGE | ARCHER | ROGUE | PIRATE;
export type JOB_CATEGORY = 'WARRIOR' | 'MAGE' | 'ARCHER' | 'ROGUE' | 'PIRATE';

export type MainStat = 'STR' | 'DEX' | 'INT' | 'LUK' | 'maxHP';

export interface Job {
  code: JOB_CODE;
  category: JOB_CATEGORY;
  name: string;
  mainStat: MainStat;
  mastery: number;
  skills: string[];
}
