import { Injectable } from '@angular/core';
import { MapView } from '../models/map';

@Injectable({
  providedIn: 'root',
})
export class GrindingService {
  constructor() {}

  getExpPerHour(data: MapView, expBuff: number, playerLevel: number) {
    return (
      data.mobs.reduce(
        (acc, mob) =>
          acc +
          data.countPerHour *
            mob.exp *
            (1 + expBuff / 100 + data.burning / 10) *
            this.getLevelExpModifier(mob.level, playerLevel),
        0,
      ) / data.mobs.length
    );
  }

  private getLevelExpModifier(mobLevel: number, playerLevel: number) {
    if (playerLevel == null) {
      return 1;
    }

    const diff = playerLevel - mobLevel;
    if (diff >= 40) {
      return 0.7;
    }
    if (diff >= 21) {
      return 0.9 - (diff - 20) / 100;
    }
    if (diff >= 19) {
      return 0.95;
    }
    if (diff >= 17) {
      return 0.96;
    }
    if (diff >= 15) {
      return 0.97;
    }
    if (diff >= 13) {
      return 0.98;
    }
    if (diff >= 11) {
      return 0.99;
    }
    if (diff >= 10) {
      return 1;
    }
    if (diff >= 5) {
      return 1.05;
    }
    if (diff >= -4) {
      return 1.1;
    }
    if (diff >= -9) {
      return 1.05;
    }
    if (diff >= -20) {
      return 1 + (diff + 10) / 100;
    }
    if (diff >= -35) {
      return 0.7 + ((diff + 21) / 100) * 4;
    }
    if (diff >= -39) {
      return 0.1;
    }
    return 0;
  }

  getMesoPerHour(data: MapView, playerLevel: number) {
    return (
      data.mobs.reduce(
        (acc, mob) =>
          acc +
          data.countPerHour *
            mob.level *
            7.5 *
            this.getLevelMesoModifier(mob.level, playerLevel),
        0,
      ) / data.mobs.length
    );
  }

  private getLevelMesoModifier(mobLevel: number, playerLevel: number) {
    if (playerLevel == null) {
      return 1;
    }

    const diff = playerLevel - mobLevel;
    if (diff >= 30) {
      return 0;
    }
    if (diff >= 29) {
      return 0.03;
    }
    if (diff >= 28) {
      return 0.16;
    }
    if (diff >= 27) {
      return 0.24;
    }
    if (diff >= 26) {
      return 0.35;
    }
    if (diff >= 25) {
      return 0.45;
    }
    if (diff >= 24) {
      return 0.54;
    }
    if (diff >= 23) {
      return 0.62;
    }
    if (diff >= 22) {
      return 0.69;
    }
    if (diff >= 21) {
      return 0.75;
    }
    if (diff >= 11) {
      return 1 - ((diff - 10) / 100) * 2;
    }
    if (diff >= -10) {
      return 1;
    }
    if (diff >= -20) {
      return 1 + ((diff + 10) / 100) * 3;
    }
    if (diff >= -33) {
      return 0.7 + ((diff + 20) / 100) * 5;
    }
    return 0;
  }
}
