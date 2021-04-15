export interface Point {
  x: number;
  y: number;
}

export interface SkillData {
  name: string;
  location: string;
  lt: Point;
  rb: Point;
  origin: Point;
}

export const skillData: SkillData[] = [
  {
    name: '레이징 블로우',
    location: 'assets/ragingblow.png',
    lt: {
      x: -330,
      y: -240,
    },
    rb: {
      x: 70,
      y: 100,
    },
    origin: {
      x: 330,
      y: 166,
    },
  },
  {
    name: '블래스트',
    location: 'assets/blast.png',
    lt: {
      x: -320,
      y: -100,
    },
    rb: {
      x: 90,
      y: 40,
    },
    origin: {
      x: 282,
      y: 142,
    },
  },
  {
    name: '페럴라이즈',
    location: 'assets/paralyze.png',
    lt: {
      x: -430,
      y: -130,
    },
    rb: {
      x: 10,
      y: 20,
    },
    origin: {
      x: 463,
      y: 176,
    },
  },
  {
    name: '암살(1타)',
    location: 'assets/amsal1.png',
    lt: {
      x: -275,
      y: -100,
    },
    rb: {
      x: -10,
      y: 0,
    },
    origin: {
      x: 262,
      y: 123,
    },
  },
  {
    name: '암살(2타)',
    location: 'assets/amsal2.png',
    lt: {
      x: -275,
      y: -200,
    },
    rb: {
      x: -10,
      y: 0,
    },
    origin: {
      x: 377,
      y: 279,
    },
  },
  {
    name: '팬텀 블로우',
    location: 'assets/phantomblow.png',
    lt: {
      x: -250,
      y: -140,
    },
    rb: {
      x: 20,
      y: 10,
    },
    origin: {
      x: 225,
      y: 135,
    },
  },
  {
    name: '카르마 퓨리',
    location: 'assets/karmafury.png',
    lt: {
      x: -460,
      y: -530,
    },
    rb: {
      x: 460,
      y: 60,
    },
    origin: {
      x: 479,
      y: 541,
    },
  },
  {
    name: '피스트 인레이지',
    location: 'assets/fistenrage.png',
    lt: {
      x: -270,
      y: -130,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 286,
      y: 179,
    },
  },
  {
    name: '댄스 오브 문',
    location: 'assets/danceofmoon.png',
    lt: {
      x: -310,
      y: -280,
    },
    rb: {
      x: 10,
      y: 10,
    },
    origin: {
      x: 386,
      y: 296,
    },
  },
  {
    name: '스피딩 선셋',
    location: 'assets/speedingsunset.png',
    lt: {
      x: -310,
      y: -320,
    },
    rb: {
      x: 10,
      y: 10,
    },
    origin: {
      x: 314,
      y: 391,
    },
  },
  {
    name: '소울 어썰트',
    location: 'assets/soulassult.png',
    lt: {
      x: -255,
      y: -110,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 262,
      y: 124,
    },
  },
  {
    name: '벽력',
    location: 'assets/thunder.png',
    lt: {
      x: -450,
      y: -300,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 421,
      y: 356,
    },
  },
  {
    name: '태풍',
    location: 'assets/typoon.png',
    lt: {
      x: -440,
      y: -280,
    },
    rb: {
      x: 5,
      y: 45,
    },
    origin: {
      x: 515,
      y: 359,
    },
  },
  {
    name: '섬멸',
    location: 'assets/destroy.png',
    lt: {
      x: -360,
      y: -180,
    },
    rb: {
      x: 80,
      y: 20,
    },
    origin: {
      x: 337,
      y: 197,
    },
  },
  {
    name: '매그넘 펀치',
    location: 'assets/magnumpunch.png',
    lt: {
      x: -295,
      y: -95,
    },
    rb: {
      x: 0,
      y: 35,
    },
    origin: {
      x: 296,
      y: 140,
    },
  },
  {
    name: '더블 팡',
    location: 'assets/doublepang.png',
    lt: {
      x: -290,
      y: -215,
    },
    rb: {
      x: 120,
      y: 0,
    },
    origin: {
      x: 297,
      y: 314,
    },
  },
  {
    name: '데몬 임팩트',
    location: 'assets/demonimpact.png',
    lt: {
      x: -375,
      y: -165,
    },
    rb: {
      x: 67,
      y: 50,
    },
    origin: {
      x: 365,
      y: 156,
    },
  },
  {
    name: '강화 데몬 슬래시(1타)',
    location: 'assets/demonslash1.png',
    lt: {
      x: -460,
      y: -165,
    },
    rb: {
      x: 40,
      y: 70,
    },
    origin: {
      x: 403,
      y: 177,
    },
  },
  {
    name: '강화 데몬 슬래시(2타)',
    location: 'assets/demonslash2.png',
    lt: {
      x: -455,
      y: -120,
    },
    rb: {
      x: 60,
      y: 40,
    },
    origin: {
      x: 420,
      y: 93,
    },
  },
  {
    name: '강화 데몬 슬래시(3타)',
    location: 'assets/demonslash3.png',
    lt: {
      x: -455,
      y: -280,
    },
    rb: {
      x: 120,
      y: 40,
    },
    origin: {
      x: 437,
      y: 292,
    },
  },
  {
    name: '강화 데몬 슬래시(4타)',
    location: 'assets/demonslash4.png',
    lt: {
      x: -520,
      y: -300,
    },
    rb: {
      x: 200,
      y: 100,
    },
    origin: {
      x: 519,
      y: 310,
    },
  },
  {
    name: '익시드 : 엑스큐션',
    location: 'assets/exceedexecution.png',
    lt: {
      x: -360,
      y: -200,
    },
    rb: {
      x: 20,
      y: 50,
    },
    origin: {
      x: 527,
      y: 222,
    },
  },
  {
    name: '피니쉬 블로우',
    location: 'assets/finishblow.png',
    lt: {
      x: -230,
      y: -120,
    },
    rb: {
      x: 10,
      y: 10,
    },
    origin: {
      x: 157,
      y: 103,
    },
  },
  {
    name: '사신의 낫',
    location: 'assets/reaperscythe.png',
    lt: {
      x: -460,
      y: -185,
    },
    rb: {
      x: 85,
      y: 60,
    },
    origin: {
      x: 472,
      y: 195,
    },
  },
  {
    name: '파이널 블로우',
    location: 'assets/finalblow.png',
    lt: {
      x: -350,
      y: -232,
    },
    rb: {
      x: 0,
      y: 86,
    },
    origin: {
      x: 352,
      y: 238,
    },
  },
  {
    name: '비욘더(1타)',
    location: 'assets/beyonder1.png',
    lt: {
      x: -350,
      y: -230,
    },
    rb: {
      x: 0,
      y: 30,
    },
    origin: {
      x: 334,
      y: 456,
    },
  },
  {
    name: '비욘더(2타)',
    location: 'assets/beyonder2.png',
    lt: {
      x: -350,
      y: -230,
    },
    rb: {
      x: 0,
      y: 30,
    },
    origin: {
      x: 395,
      y: 251,
    },
  },
  {
    name: '비욘더(3타)',
    location: 'assets/beyonder3.png',
    lt: {
      x: -350,
      y: -230,
    },
    rb: {
      x: 0,
      y: 30,
    },
    origin: {
      x: 376,
      y: 444,
    },
  },
  {
    name: '펜릴 크래시',
    location: 'assets/penrilcrash.png',
    lt: {
      x: -495,
      y: -335,
    },
    rb: {
      x: 70,
      y: 25,
    },
    origin: {
      x: 630,
      y: 532,
    },
  },
  {
    name: '서클 오브 마나 IV(1타)',
    location: 'assets/circleofmana1.png',
    lt: {
      x: -365,
      y: -155,
    },
    rb: {
      x: 2,
      y: 66,
    },
    origin: {
      x: 413,
      y: 154,
    },
  },
  {
    name: '서클 오브 마나 IV(2타)',
    location: 'assets/circleofmana2.png',
    lt: {
      x: -365,
      y: -155,
    },
    rb: {
      x: 2,
      y: 66,
    },
    origin: {
      x: 434,
      y: 181,
    },
  },
  {
    name: '아포칼립스',
    location: 'assets/apocalypse.png',
    lt: {
      x: -471,
      y: -251,
    },
    rb: {
      x: -39,
      y: -1,
    },
    origin: {
      x: 548,
      y: 265,
    },
  },
  {
    name: '얼티밋 드라이브',
    location: 'assets/ultimatedrive.png',
    lt: {
      x: -280,
      y: -120,
    },
    rb: {
      x: 0,
      y: 5,
    },
    origin: {
      x: 283,
      y: 109,
    },
  },
  {
    name: '귀참',
    location: 'assets/gwicham.png',
    lt: {
      x: -400,
      y: -230,
    },
    rb: {
      x: 100,
      y: 50,
    },
    origin: {
      x: 397,
      y: 294,
    },
  },
  {
    name: '진 귀참',
    location: 'assets/jingwicham.png',
    lt: {
      x: -400,
      y: -460,
    },
    rb: {
      x: 300,
      y: 30,
    },
    origin: {
      x: 376,
      y: 618,
    },
  },
  {
    name: '기가 슬래셔(일반)',
    location: 'assets/gigaslasher.png',
    lt: {
      x: -380,
      y: -150,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 425,
      y: 200,
    },
  },
  {
    name: '기가 슬래셔(변신)',
    location: 'assets/gigaslasher_final.png',
    lt: {
      x: -380,
      y: -150,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 446,
      y: 254,
    },
  },
  {
    name: '스트라이크 애로우',
    location: 'assets/strikearrow1.png',
    lt: {
      x: -425,
      y: -125,
    },
    rb: {
      x: 10,
      y: 40,
    },
    origin: {
      x: 429,
      y: 90,
    },
  },
  {
    name: '스트라이크 애로우 II',
    location: 'assets/strikearrow2.png',
    lt: {
      x: -425,
      y: -125,
    },
    rb: {
      x: 10,
      y: 40,
    },
    origin: {
      x: 450,
      y: 106,
    },
  },
  {
    name: '스트라이크 애로우 III',
    location: 'assets/strikearrow3.png',
    lt: {
      x: -425,
      y: -125,
    },
    rb: {
      x: 10,
      y: 40,
    },
    origin: {
      x: 448,
      y: 123,
    },
  },
  {
    name: '[처형] 팬텀 블레이드',
    location: 'assets/phantomblade.png',
    lt: {
      x: -280,
      y: -180,
    },
    rb: {
      x: 30,
      y: 20,
    },
    origin: {
      x: 334,
      y: 191,
    },
  },
  {
    name: '[처형] 테어링 나이프',
    location: 'assets/tearingknife.png',
    lt: {
      x: -290,
      y: -210,
    },
    rb: {
      x: 20,
      y: 30,
    },
    origin: {
      x: 375,
      y: 351,
    },
  },
  {
    name: '[처형] 체인 시클(1타)',
    location: 'assets/chainsickle1.png',
    lt: {
      x: -280,
      y: -125,
    },
    rb: {
      x: 130,
      y: 20,
    },
    origin: {
      x: 456,
      y: 157,
    },
  },
  {
    name: '[처형] 체인 시클(2타)',
    location: 'assets/chainsickle2.png',
    lt: {
      x: -290,
      y: -245,
    },
    rb: {
      x: 90,
      y: 20,
    },
    origin: {
      x: 498,
      y: 516,
    },
  },
  {
    name: '[처형] 포이즌 니들(회전)',
    location: 'assets/poisonneedlespin.png',
    lt: {
      x: -290,
      y: -210,
    },
    rb: {
      x: 240,
      y: 30,
    },
    origin: {
      x: 328,
      y: 255,
    },
  },
  {
    name: '[처형] 포이즌 니들(사출)',
    location: 'assets/poisonneedleshoot.png',
    lt: {
      x: -290,
      y: -235,
    },
    rb: {
      x: 240,
      y: 130,
    },
    origin: {
      x: 275,
      y: 310,
    },
  },
  {
    name: '디바이드',
    location: 'assets/divide.png',
    lt: {
      x: -450,
      y: -205,
    },
    rb: {
      x: 35,
      y: 135,
    },
    origin: {
      x: 495,
      y: 290,
    },
  },
];

export const skillRecord: Record<string, SkillData> = skillData.reduce(
  (obj, x) => {
    obj[x.name] = x;
    return obj;
  },
  {},
);
