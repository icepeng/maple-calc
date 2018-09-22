export interface Stat {
  STR: number;
  DEX: number;
  INT: number;
  LUK: number;
  STRPercent: number;
  DEXPercent: number;
  INTPercent: number;
  LUKPercent: number;
  allStatPercent: number;
  STRFixed: number;
  DEXFixed: number;
  INTFixed: number;
  LUKFixed: number;
  maxHP: number;
  maxHPPercent: number;
  maxHPFixed: number;
  maxMP: number;
  maxMPPercent: number;

  weaponAttack: number;
  magicAttack: number;
  weaponAttackPercent: number;
  magicAttackPercent: number;

  mastery: number;
  totalDamage: number;
  bossDamage: number;
  ignoreDefense: number;
  finalDamage: number;
  criticalRate: number;
  criticalDamage: number;

  attackSpeed: number;

  defense: number;
  stance: number;

  cooldownReduce: number;
  cooldownReducePercent: number;

  summonPersist: number;
  buffPersist: number;

  dropRate: number;
  mesoGain: number;
  expGain: number;

  ccImmune: number;
  elementImmune: number;
  elementReset: number;

  moveSpeed: number;
  jumpPower: number;

  starForce: number;
  arcaneForce: number;
}
