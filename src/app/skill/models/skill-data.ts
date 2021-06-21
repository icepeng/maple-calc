export interface Point {
  x: number;
  y: number;
}

export interface SkillData {
  name: string;
  location: string;
  job: string;
  lt: Point;
  rb: Point;
  lt2?: Point;
  rb2?: Point;
  lt3?: Point;
  rb3?: Point;
  hit_lt?: Point;
  hit_rb?: Point;
  offset?: Point;
  origin: Point;
  scale?: number;
}

export const bossSkillData: SkillData[] = [
  {
    name: '스우_전선더미 방출',
    location: 'assets/lotus1.png',
    job: '스우',
    lt: {
      x: -320,
      y: -200,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: -47 - 320,
      y: -151,
    },
    hit_rb: {
      x: 39 - 320,
      y: -15,
    },
    origin: {
      x: 732 - 465 + 320,
      y: 320,
    },
  },
  {
    name: '윌 1페_근거리 공격',
    location: 'assets/will_1_1.png',
    job: '윌',
    lt: {
      x: -275,
      y: -175,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: -46 - 275,
      y: -170,
    },
    hit_rb: {
      x: 102 - 275,
      y: 0,
    },
    origin: {
      x: 590 - 364 + 275,
      y: 254,
    },
  },
  {
    name: '윌 1페_밀쳐내기',
    location: 'assets/will_1_2.png',
    job: '윌',
    lt: {
      x: -390,
      y: -180,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: -46 - 390,
      y: -170,
    },
    hit_rb: {
      x: 102 - 390,
      y: 0,
    },
    origin: {
      x: 720 - 611 + 390,
      y: 256,
    },
  },
  {
    name: '윌 1페_원거리 공격',
    location: 'assets/will_1_3.png',
    job: '윌',
    lt: {
      x: -275,
      y: -175,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: -46 - 275,
      y: -170,
    },
    hit_rb: {
      x: 102 - 275,
      y: 0,
    },
    origin: {
      x: 658 - 532 + 275,
      y: 216,
    },
  },
  {
    name: '윌 2페_근거리 공격',
    location: 'assets/will_2_1.png',
    job: '윌',
    lt: {
      x: -275,
      y: -175,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: -45 - 275,
      y: -160,
    },
    hit_rb: {
      x: 85 - 275,
      y: -15,
    },
    origin: {
      x: 590 - 364 + 275,
      y: 254,
    },
  },
  {
    name: '윌 2페_밀쳐내기',
    location: 'assets/will_2_2.png',
    job: '윌',
    lt: {
      x: -390,
      y: -180,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: -45 - 390,
      y: -160,
    },
    hit_rb: {
      x: 85 - 390,
      y: -15,
    },
    origin: {
      x: 720 - 611 + 390,
      y: 256,
    },
  },
  {
    name: '윌 2페_밀쳐내기(거울)',
    location: 'assets/will_2_3.png',
    job: '윌',
    lt: {
      x: -550,
      y: -160,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: -45 - 550,
      y: -160,
    },
    hit_rb: {
      x: 85 - 550,
      y: -15,
    },
    origin: {
      x: 91 + 550,
      y: 170,
    },
  },
  {
    name: '윌 2페_원거리 공격',
    location: 'assets/will_2_4.png',
    job: '윌',
    lt: {
      x: -500,
      y: -250,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: -45 - 500,
      y: -160,
    },
    hit_rb: {
      x: 85 - 500,
      y: -15,
    },
    origin: {
      x: 658 - 532 + 500,
      y: 216,
    },
  },
  {
    name: '윌 2페_원거리 공격(거울)',
    location: 'assets/will_2_5.png',
    job: '윌',
    lt: {
      x: -550,
      y: -160,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: -45 - 550,
      y: -160,
    },
    hit_rb: {
      x: 85 - 550,
      y: -15,
    },
    origin: {
      x: 124 + 550,
      y: 170,
    },
  },
  {
    name: '윌 3페_근거리 공격',
    location: 'assets/will_3_1.png',
    job: '윌',
    lt: {
      x: -277,
      y: -232,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: 150 - 277,
      y: -180,
    },
    hit_rb: {
      x: -105 - 277,
      y: 0,
    },
    origin: {
      x: 592 - 338 + 277,
      y: 298,
    },
  },
  {
    name: '윌 3페_밀쳐내기',
    location: 'assets/will_3_2.png',
    job: '윌',
    lt: {
      x: -440,
      y: -165,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: 250 - 440,
      y: -175,
    },
    hit_rb: {
      x: -100 - 440,
      y: -5,
    },
    origin: {
      x: 784 - 596 + 440,
      y: 261,
    },
  },
  {
    name: '윌 3페_원거리 공격',
    location: 'assets/will_3_3.png',
    job: '윌',
    lt: {
      x: -277,
      y: -232,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: 180 - 277,
      y: -180,
    },
    hit_rb: {
      x: -90 - 277,
      y: 0,
    },
    origin: {
      x: 696 - 519 + 277,
      y: 207,
    },
  },
  {
    name: '진 힐라_속박',
    location: 'assets/verushilla1.png',
    job: '진 힐라',
    lt: {
      x: -600,
      y: -208,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: -71 - 600,
      y: -208,
    },
    hit_rb: {
      x: 72 - 600,
      y: 0,
    },
    origin: {
      x: 901 - 783 + 600,
      y: 440,
    },
  },
  {
    name: '진 힐라_낫 휘두르기',
    location: 'assets/verushilla2.png',
    job: '진 힐라',
    lt: {
      x: -415,
      y: -205,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: -71 - 415,
      y: -208,
    },
    hit_rb: {
      x: 72 - 415,
      y: 0,
    },
    origin: {
      x: 623 - 483 + 415,
      y: 199,
    },
  },
  {
    name: '진 힐라_영혼 찢기',
    location: 'assets/verushilla3.png',
    job: '진 힐라',
    lt: {
      x: -450 - 326,
      y: -288,
    },
    rb: {
      x: 0,
      y: 0,
    },
    hit_lt: {
      x: -71 - 450,
      y: -208,
    },
    hit_rb: {
      x: 72 - 450,
      y: 0,
    },
    origin: {
      x: 495 - 402 + 450,
      y: 303,
    },
  },
  {
    name: '검은 마법사_밀쳐내기',
    location: 'assets/blackmage1.png',
    job: '검은 마법사',
    lt: {
      x: -240 - 270,
      y: -450,
    },
    rb: {
      x: 0,
      y: -40,
    },
    hit_lt: {
      x: -75 - 240,
      y: -408,
    },
    hit_rb: {
      x: 80 - 240,
      y: -15,
    },
    origin: {
      x: 516 - 237 + 240,
      y: 576,
    },
  },
];

export const chtrSkillData: SkillData[] = [
  {
    name: '파이렛 플래그',
    location: 'assets/pirateflag.png',
    job: '공용',
    lt: {
      x: -295,
      y: -415,
    },
    rb: {
      x: 295,
      y: 1,
    },
    origin: {
      x: 310,
      y: 432,
    },
  },
  {
    name: '레지스탕스 라인 인팬트리',
    location: 'assets/infantry.png',
    job: '공용',
    lt: {
      x: -450,
      y: -200,
    },
    rb: {
      x: 10,
      y: 100,
    },
    origin: {
      x: 212,
      y: 137,
    },
  },
  {
    name: '판테온',
    location: 'assets/pantheon.png',
    job: '공용',
    lt: {
      x: -550,
      y: -550,
    },
    rb: {
      x: 550,
      y: 50,
    },
    origin: {
      x: 367,
      y: 765,
    },
  },
  {
    name: '매직 서킷 풀드라이브',
    location: 'assets/fulldrive.png',
    job: '공용',
    lt: {
      x: -700,
      y: -500,
    },
    rb: {
      x: 400,
      y: 400,
    },
    origin: {
      x: 405,
      y: 248,
    },
  },
  {
    name: '레이징 블로우',
    location: 'assets/ragingblow.png',
    job: '히어로',
    lt: {
      x: -265,
      y: -215,
    },
    rb: {
      x: 10,
      y: 20,
    },
    origin: {
      x: 256,
      y: 96,
    },
  },
  {
    name: '레이징 블로우(강화)',
    location: 'assets/ragingblow_enrage.png',
    job: '히어로',
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
    name: '패닉',
    location: 'assets/panic.png',
    job: '히어로',
    lt: {
      x: -265,
      y: -200,
    },
    rb: {
      x: 10,
      y: 30,
    },
    origin: {
      x: 247,
      y: 151,
    },
  },
  {
    name: '인사이징',
    location: 'assets/ensizing.png',
    job: '히어로',
    lt: {
      x: -380,
      y: -310,
    },
    rb: {
      x: 120,
      y: 50,
    },
    origin: {
      x: 314,
      y: 240,
    },
  },
  {
    name: '레이지 업라이징',
    location: 'assets/rageuprizing.png',
    job: '히어로',
    lt: {
      x: -420,
      y: -600,
    },
    rb: {
      x: 100,
      y: 20,
    },
    origin: {
      x: 389,
      y: 625,
    },
  },
  {
    name: '소드 오브 버닝 소울',
    location: 'assets/swordofburningsoul.png',
    job: '히어로',
    lt: {
      x: -355,
      y: -195,
    },
    rb: {
      x: 90,
      y: 0,
    },
    origin: {
      x: 379,
      y: 210,
    },
  },
  {
    name: '소드 오브 버닝 소울(인레이지)',
    location: 'assets/swordofburningsoul_enrage.png',
    job: '히어로',
    lt: {
      x: -380,
      y: -210,
    },
    rb: {
      x: 90,
      y: 0,
    },
    origin: {
      x: 379,
      y: 210,
    },
  },
  {
    name: '콤보 데스폴트',
    location: 'assets/combodesfort.png',
    job: '히어로',
    lt: {
      x: -690,
      y: -350,
    },
    rb: {
      x: 520,
      y: 190,
    },
    origin: {
      x: 646,
      y: 268,
    },
  },
  {
    name: '콤보 인스팅트(1)',
    location: 'assets/comboinstinct1.png',
    job: '히어로',
    lt: {
      x: -365,
      y: -260,
    },
    rb: {
      x: -35,
      y: 65,
    },
    origin: {
      x: 457,
      y: 385,
    },
  },
  {
    name: '콤보 인스팅트(2)',
    location: 'assets/comboinstinct2.png',
    job: '히어로',
    lt: {
      x: -400,
      y: -245,
    },
    rb: {
      x: -50,
      y: 90,
    },
    origin: {
      x: 478,
      y: 264,
    },
  },
  {
    name: '콤보 인스팅트(3)',
    location: 'assets/comboinstinct3.png',
    job: '히어로',
    lt: {
      x: -445,
      y: -160,
    },
    rb: {
      x: 130,
      y: 130,
    },
    origin: {
      x: 519,
      y: 232,
    },
  },
  {
    name: '소드 일루전',
    location: 'assets/swordillusion.png',
    job: '히어로',
    lt: {
      x: -600,
      y: -300,
    },
    rb: {
      x: 5,
      y: 50,
    },
    origin: {
      x: 727,
      y: 360,
    },
  },
  {
    name: '블래스트',
    location: 'assets/blast.png',
    job: '팔라딘',
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
    name: '디바인 차지',
    location: 'assets/divinecharge.png',
    job: '팔라딘',
    lt: {
      x: -400,
      y: -165,
    },
    rb: {
      x: 15,
      y: 35,
    },
    origin: {
      x: 384,
      y: 263,
    },
  },
  {
    name: '생츄어리',
    location: 'assets/sanctuary.png',
    job: '팔라딘',
    lt: {
      x: -500,
      y: -400,
    },
    rb: {
      x: 400,
      y: 250,
    },
    origin: {
      x: 453,
      y: 403,
    },
  },
  {
    name: '그랜드 크로스(1)',
    location: 'assets/grandcrosssmall.png',
    job: '팔라딘',
    lt: {
      x: -210,
      y: -100,
    },
    rb: {
      x: 210,
      y: 30,
    },
    lt2: {
      x: -65,
      y: -245,
    },
    rb2: {
      x: 65,
      y: 175,
    },
    origin: {
      x: 194,
      y: 233,
    },
  },
  {
    name: '그랜드 크로스(2)',
    location: 'assets/grandcrossbig.png',
    job: '팔라딘',
    lt: {
      x: -300,
      y: -160,
    },
    rb: {
      x: 300,
      y: 90,
    },
    lt2: {
      x: -125,
      y: -335,
    },
    rb2: {
      x: 125,
      y: 265,
    },
    origin: {
      x: 315,
      y: 363,
    },
  },
  {
    name: '다크 임페일',
    location: 'assets/darkimpale.png',
    job: '다크나이트',
    lt: {
      x: -310,
      y: -195,
    },
    rb: {
      x: 30,
      y: 50,
    },
    origin: {
      x: 285,
      y: 182,
    },
  },
  {
    name: '궁그닐 디센트',
    location: 'assets/gungnirdescent.png',
    job: '다크나이트',
    lt: {
      x: -400,
      y: -150,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 127 + 400,
      y: 434,
    },
  },
  {
    name: '다크 스피어',
    location: 'assets/darkspear.png',
    job: '다크나이트',
    lt: {
      x: -5 - 280 / 2 - 1000,
      y: -63 - 220 / 2,
    },
    rb: {
      x: -5 + 280 / 2,
      y: -63 + 220 / 2,
    },
    origin: {
      x: 140 + 5,
      y: 52 + 63,
    },
  },
  {
    name: '피어스 사이클론',
    location: 'assets/piercecyclone.png',
    job: '다크나이트',
    lt: {
      x: -650,
      y: -400,
    },
    rb: {
      x: 100,
      y: 15,
    },
    origin: {
      x: 640,
      y: 405,
    },
  },
  {
    name: '다크니스 오라',
    location: 'assets/darknessaura.png',
    job: '다크나이트',
    lt: {
      x: -420,
      y: -225,
    },
    rb: {
      x: 420,
      y: 150,
    },
    origin: {
      x: 179,
      y: 168,
    },
  },
  {
    name: '다크니스 오라(막타)',
    location: 'assets/darknessaurafinal.png',
    job: '다크나이트',
    lt: {
      x: -600,
      y: -600,
    },
    rb: {
      x: 600,
      y: 300,
    },
    origin: {
      x: 452,
      y: 644,
    },
  },
  {
    name: '페럴라이즈',
    location: 'assets/paralyze.png',
    job: '불독',
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
    name: '메테오',
    location: 'assets/meteor.png',
    job: '불독',
    lt: {
      x: -400,
      y: -350,
    },
    rb: {
      x: 400,
      y: 250,
    },
    origin: {
      x: 78,
      y: 133,
    },
  },
  {
    name: '블리자드',
    location: 'assets/blizzard.png',
    job: '썬콜',
    lt: {
      x: -400,
      y: -350,
    },
    rb: {
      x: 400,
      y: 250,
    },
    origin: {
      x: 151,
      y: 172,
    },
  },
  {
    name: '라이트닝 스피어',
    location: 'assets/lightningsphere.png',
    job: '썬콜',
    lt: {
      x: -450,
      y: -350,
    },
    rb: {
      x: 50,
      y: 50,
    },
    origin: {
      x: 460,
      y: 355,
    },
  },
  {
    name: '아이스 에이지',
    location: 'assets/iceage.png',
    job: '썬콜',
    lt: {
      x: -750,
      y: -400,
    },
    rb: {
      x: 750,
      y: 300,
    },
    origin: {
      x: 741,
      y: 730,
    },
  },
  {
    name: '스피릿 오브 스노우',
    location: 'assets/spiritofsnow.png',
    job: '썬콜',
    lt: {
      x: -600,
      y: -600,
    },
    rb: {
      x: 600,
      y: 100,
    },
    origin: {
      x: 530,
      y: 776,
    },
  },
  {
    name: '제네시스',
    location: 'assets/genesis.png',
    job: '비숍',
    lt: {
      x: -400,
      y: -350,
    },
    rb: {
      x: 400,
      y: 250,
    },
    origin: {
      x: 245,
      y: 314,
    },
  },
  {
    name: '헤븐즈 도어',
    location: 'assets/heavensdoor.png',
    job: '비숍',
    lt: {
      x: -550,
      y: -550,
    },
    rb: {
      x: 550,
      y: 130,
    },
    origin: {
      x: 429,
      y: 618,
    },
  },
  {
    name: '프레이',
    location: 'assets/pray.png',
    job: '비숍',
    lt: {
      x: -320,
      y: -300,
    },
    rb: {
      x: 320,
      y: 30,
    },
    origin: {
      x: 453,
      y: 288,
    },
  },
  {
    name: '피스메이커(접촉)',
    location: 'assets/peacemaker.png',
    job: '비숍',
    lt: {
      x: -75 - 220 / 2 - 600,
      y: -65 - 220 / 2,
    },
    rb: {
      x: -75 + 220 / 2,
      y: -65 + 220 / 2,
    },
    origin: {
      x: 122 + 75,
      y: 143 + 65,
    },
  },
  {
    name: '피스메이커(신성한 빛)',
    location: 'assets/peacemaker_final.png',
    job: '비숍',
    lt: {
      x: -350 - 75 - 600,
      y: -350 - 65,
    },
    rb: {
      x: 430 - 75 - 600,
      y: 300 - 65,
    },
    origin: {
      x: 590 + 75 + 600,
      y: 590 + 65,
    },
  },
  {
    name: '디바인 퍼니시먼트',
    location: 'assets/divinepunishment.png',
    job: '비숍',
    lt: {
      x: -570,
      y: -380,
    },
    rb: {
      x: 40,
      y: 30,
    },
    origin: {
      x: 617,
      y: 530,
    },
  },
  {
    name: '언카운터블 애로우',
    location: 'assets/uncountablearrow.png',
    job: '보우마스터',
    lt: {
      x: -450,
      y: -160,
    },
    rb: {
      x: 10,
      y: 10,
    },
    origin: {
      x: 530,
      y: 267,
    },
  },
  {
    name: '윈드 오브 프레이',
    location: 'assets/windofpray.png',
    job: '보우마스터',
    lt: {
      x: -400,
      y: -435,
    },
    rb: {
      x: 400,
      y: 20,
    },
    origin: {
      x: 311,
      y: 389,
    },
  },
  {
    name: '카디널 디스차지',
    location: 'assets/cardinaldischarge.png',
    job: '패스파인더',
    lt: {
      x: -470,
      y: -150,
    },
    rb: {
      x: 30,
      y: 80,
    },
    origin: {
      x: 313,
      y: 205,
    },
  },
  {
    name: '카디널 블래스트',
    location: 'assets/cardinalblast.png',
    job: '패스파인더',
    lt: {
      x: 50 - 140 - 400,
      y: -30 - 215,
    },
    rb: {
      x: 50 + 140 - 400,
      y: -30 + 195,
    },
    origin: {
      x: 233 - 50 + 400,
      y: 358 + 30,
    },
  },
  {
    name: '카디널 트랜지션',
    location: 'assets/cardinaltransition.png',
    job: '패스파인더',
    lt: {
      x: -300,
      y: -130,
    },
    rb: {
      x: 300,
      y: 50,
    },
    origin: {
      x: 377,
      y: 255,
    },
  },
  {
    name: '엣지 오브 레조넌스',
    location: 'assets/edgeofresonance.png',
    job: '패스파인더',
    lt: {
      x: -300,
      y: -300,
    },
    rb: {
      x: 300,
      y: 250,
    },
    origin: {
      x: 272,
      y: 300,
    },
  },
  {
    name: '콤보 어썰트(활대)',
    location: 'assets/comboassult_discharge_bow.png',
    job: '패스파인더',
    lt: {
      x: -200,
      y: -220,
    },
    rb: {
      x: 200,
      y: 100,
    },
    origin: {
      x: 299,
      y: 379,
    },
  },
  {
    name: '콤보 어썰트(디스차지, 화살)',
    location: 'assets/comboassult_discharge_arrow.png',
    job: '패스파인더',
    lt: {
      x: -450,
      y: -450,
    },
    rb: {
      x: 450,
      y: 250,
    },
    origin: {
      x: 665,
      y: 642,
    },
  },
  {
    name: '콤보 어썰트(블래스트, 화살)',
    location: 'assets/comboassult_blast_arrow.png',
    job: '패스파인더',
    lt: {
      x: -400,
      y: -400,
    },
    rb: {
      x: 400,
      y: 200,
    },
    origin: {
      x: 499,
      y: 557,
    },
  },
  {
    name: '콤보 어썰트(트랜지션, 화살)',
    location: 'assets/comboassult_transition_arrow.png',
    job: '패스파인더',
    lt: {
      x: -400,
      y: -400,
    },
    rb: {
      x: 400,
      y: 200,
    },
    origin: {
      x: 499,
      y: 557,
    },
  },
  {
    name: '에인션트 아스트라(디스차지)',
    location: 'assets/ancientastra_discharge.png',
    job: '패스파인더',
    lt: {
      x: -650,
      y: -160,
    },
    rb: {
      x: 10,
      y: 90,
    },
    origin: {
      x: 658,
      y: 236,
    },
  },
  {
    name: '에인션트 아스트라(트랜지션)',
    location: 'assets/ancientastra_transition.png',
    job: '패스파인더',
    lt: {
      x: -650,
      y: -160,
    },
    rb: {
      x: 10,
      y: 90,
    },
    origin: {
      x: 710,
      y: 236,
    },
  },
  {
    name: '쇼다운 챌린지',
    location: 'assets/showdown.png',
    job: '나이트로드',
    lt: {
      x: -480,
      y: -180,
    },
    rb: {
      x: 5,
      y: 5,
    },
    origin: {
      x: 487,
      y: 265,
    },
  },
  {
    name: '써든레이드',
    location: 'assets/suddenraid.png',
    job: '나이트로드',
    lt: {
      x: -400,
      y: -350,
    },
    rb: {
      x: 400,
      y: 250,
    },
    origin: {
      x: 319,
      y: 536,
    },
  },
  {
    name: '포 시즌',
    location: 'assets/deathstar.png',
    job: '나이트로드',
    lt: {
      x: -300,
      y: -330,
    },
    rb: {
      x: 300,
      y: 50,
    },
    origin: {
      x: 318,
      y: 328,
    },
  },
  {
    name: '암살(1타)',
    location: 'assets/amsal1.png',
    job: '섀도어',
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
    job: '섀도어',
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
    name: '부메랑 스탭',
    location: 'assets/boomerangstab.png',
    job: '섀도어',
    lt: {
      x: -440,
      y: -130,
    },
    rb: {
      x: 40,
      y: 20,
    },
    origin: {
      x: 447,
      y: 145,
    },
  },
  {
    name: '연막탄',
    location: 'assets/smoke.png',
    job: '섀도어',
    lt: {
      x: -250,
      y: -150 - 150,
    },
    rb: {
      x: 250,
      y: 150 - 150,
    },
    origin: {
      x: 268,
      y: 302,
    },
  },
  {
    name: '소닉 블로우',
    location: 'assets/sonicblow.png',
    job: '섀도어',
    lt: {
      x: -500,
      y: -250,
    },
    rb: {
      x: 120,
      y: 50,
    },
    origin: {
      x: 473,
      y: 265,
    },
  },
  {
    name: '팬텀 블로우',
    location: 'assets/phantomblow.png',
    job: '듀얼블레이드',
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
    name: '아수라',
    location: 'assets/asura.png',
    job: '듀얼블레이드',
    lt: {
      x: -160,
      y: -180,
    },
    rb: {
      x: 140,
      y: 30,
    },
    origin: {
      x: 153,
      y: 151,
    },
  },
  {
    name: '블레이드 스톰(개시)',
    location: 'assets/bladestorminit.png',
    job: '듀얼블레이드',
    lt: {
      x: -665,
      y: -250,
    },
    rb: {
      x: 0,
      y: 45,
    },
    origin: {
      x: 802,
      y: 482,
    },
  },
  {
    name: '블레이드 스톰(키다운)',
    location: 'assets/bladestormrepeat.png',
    job: '듀얼블레이드',
    lt: {
      x: -515,
      y: -255,
    },
    rb: {
      x: 20,
      y: 50,
    },
    origin: {
      x: 619,
      y: 297,
    },
  },
  {
    name: '카르마 퓨리',
    location: 'assets/karmafury.png',
    job: '듀얼블레이드',
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
    name: '블레이드 토네이도',
    location: 'assets/bladetornado.png',
    job: '듀얼블레이드',
    lt: {
      x: -270,
      y: -450,
    },
    rb: {
      x: 270,
      y: 5,
    },
    origin: {
      x: 260,
      y: 431,
    },
  },
  {
    name: '블레이드 토네이도(태풍)',
    location: 'assets/bladetornado_shoot.png',
    job: '듀얼블레이드',
    lt: {
      x: 0 - 200 / 2 - 550,
      y: -185 - 370 / 2,
    },
    rb: {
      x: 0 + 200 / 2,
      y: -185 + 370 / 2,
    },
    origin: {
      x: 150 + 0 + 550,
      y: 258 + 185,
    },
  },
  {
    name: '헌티드 엣지-나찰',
    location: 'assets/hauntededge_nachal.png',
    job: '듀얼블레이드',
    lt: {
      x: -430,
      y: -205,
    },
    rb: {
      x: 20,
      y: 80,
    },
    origin: {
      x: 475,
      y: 249,
    },
  },
  {
    name: '피스트 인레이지',
    location: 'assets/fistenrage.png',
    job: '바이퍼',
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
    name: '드래곤 스트라이크',
    location: 'assets/dragonstrike.png',
    job: '바이퍼',
    lt: {
      x: -400,
      y: -100,
    },
    rb: {
      x: 25,
      y: 20,
    },
    origin: {
      x: 273,
      y: 193,
    },
  },
  {
    name: '유니티 오브 파워',
    location: 'assets/unityofpower.png',
    job: '바이퍼',
    lt: {
      x: -450,
      y: -450,
    },
    rb: {
      x: 100,
      y: 100,
    },
    origin: {
      x: 331,
      y: 363,
    },
  },
  {
    name: '서펜트 스크류',
    location: 'assets/serpantscrew.png',
    job: '바이퍼',
    lt: {
      x: -275,
      y: -145,
    },
    rb: {
      x: 275,
      y: 55,
    },
    origin: {
      x: 327,
      y: 136,
    },
  },
  {
    name: '하울링 피스트(충전)',
    location: 'assets/howlingfist.png',
    job: '바이퍼',
    lt: {
      x: -420,
      y: -330,
    },
    rb: {
      x: 100,
      y: 150,
    },
    origin: {
      x: 390,
      y: 398,
    },
  },
  {
    name: '하울링 피스트(발사)',
    location: 'assets/howlingfist_final.png',
    job: '바이퍼',
    lt: {
      x: -1000,
      y: -450,
    },
    rb: {
      x: 300,
      y: 200,
    },
    origin: {
      x: 277 + 250,
      y: 244,
    },
    scale: 200,
  },
  {
    name: '퍼실레이드',
    location: 'assets/persillade.png',
    job: '캡틴',
    lt: {
      x: -460,
      y: -145,
    },
    rb: {
      x: 0,
      y: 10,
    },
    origin: {
      x: 463,
      y: 135,
    },
  },
  {
    name: '스트레인지 봄',
    location: 'assets/strangebomb.png',
    job: '캡틴',
    lt: {
      x: -450,
      y: -480,
    },
    rb: {
      x: 50,
      y: 20,
    },
    origin: {
      x: 464,
      y: 502,
    },
  },
  {
    name: '불릿 파티',
    location: 'assets/bulletparty.png',
    job: '캡틴',
    lt: {
      x: -460,
      y: -460,
    },
    rb: {
      x: 460,
      y: 230,
    },
    origin: {
      x: 516,
      y: 502,
    },
  },
  {
    name: '노틸러스 어썰트(선체 공격)',
    location: 'assets/nautilusassult_ship.png',
    job: '캡틴',
    lt: {
      x: -580,
      y: -380,
    },
    rb: {
      x: 200,
      y: 50,
    },
    origin: {
      x: 651,
      y: 666,
    },
  },
  {
    name: '노틸러스 어썰트(일제 사격)',
    location: 'assets/nautilusassult_shot.png',
    job: '캡틴',
    lt: {
      x: -1100,
      y: -350,
    },
    rb: {
      x: 50,
      y: 150,
    },
    origin: {
      x: 1235,
      y: 449,
    },
  },
  {
    name: '데스 트리거',
    location: 'assets/deathtrigger.png',
    job: '캡틴',
    lt: {
      x: -500,
      y: -300,
    },
    rb: {
      x: -1,
      y: 150,
    },
    origin: {
      x: 509,
      y: 216,
    },
  },
  {
    name: '캐논 바주카',
    location: 'assets/cannonbazooka.png',
    job: '캐논슈터',
    lt: {
      x: -695,
      y: -90,
    },
    rb: {
      x: 1,
      y: 20,
    },
    origin: {
      x: 717,
      y: 149,
    },
  },
  {
    name: '롤링 캐논 레인보우',
    location: 'assets/rollingcannonrainbow.png',
    job: '캐논슈터',
    lt: {
      x: -550,
      y: -300,
    },
    rb: {
      x: 50,
      y: 20,
    },
    origin: {
      x: 604,
      y: 324,
    },
  },
  {
    name: '빅 휴즈 기간틱 캐논볼',
    location: 'assets/bfgcannonball.png',
    job: '캐논슈터',
    lt: {
      x: -180 - 300 / 2 - 1300,
      y: -75 - 240 / 2,
    },
    rb: {
      x: -180 + 300 / 2,
      y: -75 + 240 / 2,
    },
    origin: {
      x: 160 + 180,
      y: 155 + 75,
    },
  },
  {
    name: '크레센트 디바이드',
    location: 'assets/crescentdivide.png',
    job: '소울마스터',
    lt: {
      x: -320,
      y: -205,
    },
    rb: {
      x: 280,
      y: 60,
    },
    origin: {
      x: 236,
      y: 211,
    },
  },
  {
    name: '솔라 피어스',
    location: 'assets/solarpierce.png',
    job: '소울마스터',
    lt: {
      x: -400,
      y: -200,
    },
    rb: {
      x: 20,
      y: 100,
    },
    origin: {
      x: 502,
      y: 253,
    },
  },
  {
    name: '댄스 오브 문',
    location: 'assets/danceofmoon.png',
    job: '소울마스터',
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
    job: '소울마스터',
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
    name: '크로스 더 스틱스',
    location: 'assets/crossthestyx.png',
    job: '소울마스터',
    lt: {
      x: -600,
      y: -480,
    },
    rb: {
      x: 10,
      y: 40,
    },
    origin: {
      x: 526,
      y: 430,
    },
  },
  {
    name: '소울 이클립스',
    location: 'assets/souleclipse.png',
    job: '소울마스터',
    lt: {
      x: -700,
      y: -600,
    },
    rb: {
      x: 700,
      y: 200,
    },
    origin: {
      x: 502,
      y: 484,
    },
  },
  {
    name: '솔루나 디바이드',
    location: 'assets/solunardivide.png',
    job: '소울마스터',
    lt: {
      x: -700,
      y: -600,
    },
    rb: {
      x: 700,
      y: 200,
    },
    origin: {
      x: 521,
      y: 484,
    },
  },
  {
    name: '샤이닝 크로스',
    location: 'assets/shiningcross.png',
    job: '미하일',
    lt: {
      x: -400,
      y: -200,
    },
    rb: {
      x: 30,
      y: 130,
    },
    origin: {
      x: 426,
      y: 213,
    },
  },
  {
    name: '소울 어썰트',
    location: 'assets/soulassult.png',
    job: '미하일',
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
    name: '로얄 가드(피격)',
    location: 'assets/royalguard.png',
    job: '미하일',
    lt: {
      x: -90,
      y: -95,
    },
    rb: {
      x: 40,
      y: 10,
    },
    origin: {
      x: 122,
      y: 128,
    },
  },
  {
    name: '로얄 가드(5)',
    location: 'assets/royalguard5.png',
    job: '미하일',
    lt: {
      x: -370,
      y: -380,
    },
    rb: {
      x: 340,
      y: 200,
    },
    origin: {
      x: 381,
      y: 431,
    },
  },
  {
    name: '데들리 차지',
    location: 'assets/deadlycharge.png',
    job: '미하일',
    lt: {
      x: -500,
      y: -400,
    },
    rb: {
      x: 100,
      y: 60,
    },
    origin: {
      x: 425,
      y: 278,
    },
  },
  {
    name: '로 아이아스',
    location: 'assets/rhoaias.png',
    job: '미하일',
    lt: {
      x: -330,
      y: -300,
    },
    rb: {
      x: 330,
      y: 10,
    },
    origin: {
      x: 247,
      y: 326,
    },
  },
  {
    name: '클라우 솔라스(5)',
    location: 'assets/swordoflight5.png',
    job: '미하일',
    lt: {
      x: -400,
      y: -500,
    },
    rb: {
      x: 400,
      y: 240,
    },
    origin: {
      x: 670,
      y: 795,
    },
  },
  {
    name: '소울 라이트 슬래시',
    location: 'assets/soullightslash.png',
    job: '미하일',
    lt: {
      x: -420,
      y: -350,
    },
    rb: {
      x: 20,
      y: 70,
    },
    origin: {
      x: 423,
      y: 373,
    },
  },
  {
    name: '라이트 포스레이',
    location: 'assets/lightforceray.png',
    job: '미하일',
    lt: {
      x: -600,
      y: -210,
    },
    rb: {
      x: 100,
      y: 150,
    },
    origin: {
      x: 687,
      y: 215,
    },
  },
  {
    name: '버닝 리전',
    location: 'assets/burningregion.png',
    job: '플레임위자드',
    lt: {
      x: -300,
      y: -150,
    },
    rb: {
      x: 300,
      y: 150,
    },
    origin: {
      x: 273,
      y: 111,
    },
  },
  {
    name: '드래곤 슬레이브',
    location: 'assets/dragonslave.png',
    job: '플레임위자드',
    lt: {
      x: -801,
      y: -226,
    },
    rb: {
      x: 0,
      y: 30,
    },
    origin: {
      x: 819,
      y: 263,
    },
  },
  {
    name: '카타클리즘',
    location: 'assets/cataclysm.png',
    job: '플레임위자드',
    lt: {
      x: -650,
      y: -480,
    },
    rb: {
      x: 650,
      y: 300,
    },
    origin: {
      x: 708,
      y: 514,
    },
  },
  {
    name: '블레이징 오비탈 플레임',
    location: 'assets/blazingorbitalflame.png',
    job: '플레임위자드',
    lt: {
      x: -150 - 100 / 2 - 670,
      y: -25 - 100 / 2,
    },
    rb: {
      x: -150 + 100 / 2,
      y: -25 + 100 / 2,
    },
    origin: {
      x: 168 + 150 + 670,
      y: 159 + 25,
    },
  },
  {
    name: '플레임 디스차지',
    location: 'assets/flamedischarge.png',
    job: '플레임위자드',
    lt: {
      x: -1050,
      y: -450,
    },
    rb: {
      x: -280,
      y: 30,
    },
    origin: {
      x: 1265,
      y: 568,
    },
  },
  {
    name: '인피니티 플레임 서클',
    location: 'assets/infinityflamecircle.png',
    job: '플레임위자드',
    lt: {
      x: -380,
      y: -460,
    },
    rb: {
      x: 380,
      y: 300,
    },
    origin: {
      x: 343,
      y: 485,
    },
  },
  {
    name: '페어리 턴',
    location: 'assets/fairyturn.png',
    job: '윈드브레이커',
    lt: {
      x: -360,
      y: -170,
    },
    rb: {
      x: -10,
      y: 70,
    },
    origin: {
      x: 359,
      y: 170,
    },
  },
  {
    name: '천공의 노래',
    location: 'assets/songofsky.png',
    job: '윈드브레이커',
    lt: {
      x: -450,
      y: -150,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 185,
      y: 193,
    },
  },
  {
    name: '몬순',
    location: 'assets/monsoon.png',
    job: '윈드브레이커',
    lt: {
      x: -550,
      y: -300,
    },
    rb: {
      x: 550,
      y: 300,
    },
    origin: {
      x: 547,
      y: 457,
    },
  },
  {
    name: '벽력',
    location: 'assets/thunder.png',
    job: '스트라이커',
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
    job: '스트라이커',
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
    job: '스트라이커',
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
    name: '해신강림',
    location: 'assets/whale.png',
    job: '스트라이커',
    lt: {
      x: -550,
      y: -300,
    },
    rb: {
      x: 550,
      y: 300,
    },
    origin: {
      x: 543,
      y: 296,
    },
  },
  {
    name: '교아탄',
    location: 'assets/gioatan.png',
    job: '스트라이커',
    lt: {
      x: -180 - 300 / 2 - 650,
      y: -95 - 180 / 2,
    },
    rb: {
      x: -180 + 300 / 2,
      y: -95 + 180 / 2,
    },
    origin: {
      x: 320 + 180,
      y: 289 + 95,
    },
  },
  {
    name: '매그넘 펀치',
    location: 'assets/magnumpunch.png',
    job: '블래스터',
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
    job: '블래스터',
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
    name: '쇼크 웨이브 펀치',
    location: 'assets/shockwavepunch.png',
    job: '블래스터',
    lt: {
      x: -380,
      y: -120,
    },
    rb: {
      x: 50,
      y: 40,
    },
    origin: {
      x: 384,
      y: 182,
    },
  },
  {
    name: '쇼크 웨이브 펀치(충격파)',
    location: 'assets/shockwavepunch_wave.png',
    job: '블래스터',
    lt: {
      x: -385,
      y: -175,
    },
    rb: {
      x: 80,
      y: 110,
    },
    origin: {
      x: 376,
      y: 232,
    },
  },
  {
    name: '릴리즈 파일 벙커',
    location: 'assets/releasepilebunker.png',
    job: '블래스터',
    lt: {
      x: -875,
      y: -510,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 934,
      y: 484,
    },
  },
  {
    name: '릴리즈 파일 벙커(충격파A)',
    location: 'assets/releasepilebunker_a.png',
    job: '블래스터',
    lt: {
      x: -520,
      y: -250,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 601,
      y: 310,
    },
  },
  {
    name: '릴리즈 파일 벙커(충격파B)',
    location: 'assets/releasepilebunker_b.png',
    job: '블래스터',
    lt: {
      x: -705,
      y: -330,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 756,
      y: 407,
    },
  },
  {
    name: '릴리즈 파일 벙커(충격파C)',
    location: 'assets/releasepilebunker_c.png',
    job: '블래스터',
    lt: {
      x: -740,
      y: -385,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 829,
      y: 435,
    },
  },
  {
    name: '릴리즈 파일 벙커(충격파D)',
    location: 'assets/releasepilebunker_d.png',
    job: '블래스터',
    lt: {
      x: -875,
      y: -510,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 978,
      y: 584,
    },
  },
  {
    name: '발칸 펀치',
    location: 'assets/balkanpunch.png',
    job: '블래스터',
    lt: {
      x: -470,
      y: -120,
    },
    rb: {
      x: 15,
      y: 30,
    },
    origin: {
      x: 604,
      y: 142,
    },
  },
  {
    name: '데몬 익스플로젼(1)',
    location: 'assets/demonexplosion1.png',
    job: '데몬슬레이어',
    lt: {
      x: -385,
      y: -235,
    },
    rb: {
      x: 385,
      y: 0,
    },
    origin: {
      x: 414,
      y: 245,
    },
  },
  {
    name: '데몬 익스플로젼(2)',
    location: 'assets/demonexplosion2.png',
    job: '데몬슬레이어',
    lt: {
      x: -385,
      y: -305,
    },
    rb: {
      x: 385,
      y: 0,
    },
    origin: {
      x: 414,
      y: 342,
    },
  },
  {
    name: '데몬 임팩트',
    location: 'assets/demonimpact.png',
    job: '데몬슬레이어',
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
    job: '데몬슬레이어',
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
    job: '데몬슬레이어',
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
    job: '데몬슬레이어',
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
    job: '데몬슬레이어',
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
    name: '데빌 크라이',
    location: 'assets/devilcry.png',
    job: '데몬슬레이어',
    lt: {
      x: -400,
      y: -500,
    },
    rb: {
      x: 400,
      y: 180,
    },
    origin: {
      x: 310,
      y: 487,
    },
  },
  // {
  //   name: '메타모포시스',
  //   location: 'assets/metamorphosis.png',
  //   job: '데몬슬레이어',
  //   lt: {
  //     x: -150,
  //     y: -80,
  //   },
  //   rb: {
  //     x: 150,
  //     y: 0,
  //   },
  //   origin: {
  //     x: 115,
  //     y: 4,
  //   },
  // },
  {
    name: '서버러스',
    location: 'assets/cerberus.png',
    job: '데몬슬레이어',
    lt: {
      x: -350,
      y: -380,
    },
    rb: {
      x: 60,
      y: 50,
    },
    origin: {
      x: 426,
      y: 587,
    },
  },
  {
    name: '데몬 베인(1)',
    location: 'assets/demonbane1.png',
    job: '데몬슬레이어',
    lt: {
      x: -600,
      y: -275,
    },
    rb: {
      x: 100,
      y: 10,
    },
    origin: {
      x: 652,
      y: 366,
    },
  },
  {
    name: '데몬 베인(2)',
    location: 'assets/demonbane2.png',
    job: '데몬슬레이어',
    lt: {
      x: -670,
      y: -550,
    },
    rb: {
      x: 120,
      y: 10,
    },
    origin: {
      x: 811,
      y: 1098,
    },
  },
  {
    name: '익시드 : 문라이트 슬래시',
    location: 'assets/exceedmoonlightslash.png',
    job: '데몬어벤져',
    lt: {
      x: -300,
      y: -140,
    },
    rb: {
      x: 300,
      y: 70,
    },
    origin: {
      x: 361,
      y: 143,
    },
  },
  {
    name: '익시드 : 엑스큐션',
    location: 'assets/exceedexecution.png',
    job: '데몬어벤져',
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
    name: '아머 브레이크',
    location: 'assets/armorbreak.png',
    job: '데몬어벤져',
    lt: {
      x: -450,
      y: -200,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 585,
      y: 182,
    },
  },
  {
    name: '사우전드 소드',
    location: 'assets/thousandsword.png',
    job: '데몬어벤져',
    lt: {
      x: -400,
      y: -400,
    },
    rb: {
      x: 400,
      y: 200,
    },
    origin: {
      x: 452,
      y: 563,
    },
  },
  {
    name: '데몬 프렌지',
    location: 'assets/demonfrenzy.png',
    job: '데몬어벤져',
    lt: {
      x: -65,
      y: -80,
    },
    rb: {
      x: 65,
      y: 15,
    },
    origin: {
      x: 61,
      y: 121,
    },
  },
  {
    name: '블러드 피스트',
    location: 'assets/bloodfist.png',
    job: '데몬어벤져',
    lt: {
      x: -235,
      y: -270,
    },
    rb: {
      x: 235,
      y: 200,
    },
    origin: {
      x: 254,
      y: 293,
    },
  },
  {
    name: '디멘션 소드(1)',
    location: 'assets/dimensionsword1.png',
    job: '데몬어벤져',
    lt: {
      x: -520,
      y: -360,
    },
    rb: {
      x: 30,
      y: 20,
    },
    origin: {
      x: 183,
      y: 407,
    },
  },
  {
    name: '디멘션 소드(2)',
    location: 'assets/dimensionsword2.png',
    job: '데몬어벤져',
    lt: {
      x: -295,
      y: -235,
    },
    rb: {
      x: 295,
      y: 80,
    },
    origin: {
      x: 291,
      y: 227,
    },
  },
  {
    name: '레버넌트',
    location: 'assets/revenant.png',
    job: '데몬어벤져',
    lt: {
      x: -470,
      y: -300,
    },
    rb: {
      x: 200,
      y: 10,
    },
    origin: {
      x: 494,
      y: 321,
    },
  },
  {
    name: '다크 오라',
    location: 'assets/darkaura.png',
    job: '배틀메이지',
    lt: {
      x: -450,
      y: -250,
    },
    rb: {
      x: 450,
      y: 250,
    },
    origin: {
      x: 53,
      y: 57,
    },
  },
  {
    name: '디버프 오라',
    location: 'assets/debuffaura.png',
    job: '배틀메이지',
    lt: {
      x: -450,
      y: -330,
    },
    rb: {
      x: 450,
      y: 300,
    },
    origin: {
      x: 51,
      y: 88,
    },
  },
  {
    name: '유니온 오라',
    location: 'assets/unionaura.png',
    job: '배틀메이지',
    lt: {
      x: -500,
      y: -330,
    },
    rb: {
      x: 500,
      y: 300,
    },
    origin: {
      x: 76,
      y: 84,
    },
  },
  {
    name: '쉘터',
    location: 'assets/shelter.png',
    job: '배틀메이지',
    lt: {
      x: -200,
      y: -150,
    },
    rb: {
      x: 200,
      y: 30,
    },
    origin: {
      x: 194,
      y: 171,
    },
  },
  {
    name: '피니쉬 블로우',
    location: 'assets/finishblow.png',
    job: '배틀메이지',
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
    job: '배틀메이지',
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
    name: '배틀킹 바(1)',
    location: 'assets/battlekingbar1.png',
    job: '배틀메이지',
    lt: {
      x: -380,
      y: -200,
    },
    rb: {
      x: 50,
      y: 50,
    },
    origin: {
      x: 378,
      y: 197,
    },
  },
  {
    name: '배틀킹 바(2)',
    location: 'assets/battlekingbar2.png',
    job: '배틀메이지',
    lt: {
      x: -420,
      y: -500,
    },
    rb: {
      x: 100,
      y: 10,
    },
    origin: {
      x: 423,
      y: 502,
    },
  },
  {
    name: '와일드 발칸 Type X',
    location: 'assets/wildbalkantypex.png',
    job: '와일드헌터',
    lt: {
      x: -550,
      y: -200,
    },
    rb: {
      x: 50,
      y: 5,
    },
    origin: {
      x: 596,
      y: 243,
    },
  },
  {
    name: '호밍 미사일',
    location: 'assets/homingmissile.png',
    job: '메카닉',
    lt: {
      x: -500,
      y: -300,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 14,
      y: 112,
    },
  },
  {
    name: '서포트 웨이버 : H-EX',
    location: 'assets/supportwaver.png',
    job: '메카닉',
    lt: {
      x: -400,
      y: -400,
    },
    rb: {
      x: 400,
      y: 400,
    },
    origin: {
      x: 124,
      y: 166,
    },
  },
  {
    name: '디스토션 필드',
    location: 'assets/distortionfield.png',
    job: '메카닉',
    lt: {
      x: -500,
      y: -250,
    },
    rb: {
      x: -100,
      y: 120,
    },
    origin: {
      x: 457,
      y: 213,
    },
  },
  {
    name: '멀티플 옵션 : M-FL',
    location: 'assets/multipleoption.png',
    job: '메카닉',
    lt: {
      x: -300,
      y: -180,
    },
    rb: {
      x: 121,
      y: 10,
    },
    origin: {
      x: 416,
      y: 172,
    },
  },
  {
    name: '마이크로 미사일 컨테이너',
    location: 'assets/micromissilecontainer.png',
    job: '메카닉',
    lt: {
      x: -800,
      y: -500,
    },
    rb: {
      x: 800,
      y: 500,
    },
    origin: {
      x: 533,
      y: 486,
    },
  },
  {
    name: '메탈아머 전탄발사',
    location: 'assets/metalarmorfullburst.png',
    job: '메카닉',
    lt: {
      x: -800,
      y: -400,
    },
    rb: {
      x: 200,
      y: 30,
    },
    origin: {
      x: 901,
      y: 360,
    },
  },
  {
    name: '퍼지롭 매스커레이드 : 저격',
    location: 'assets/purgesnipe.png',
    job: '제논',
    lt: {
      x: -459,
      y: -220,
    },
    rb: {
      x: 1,
      y: 220,
    },
    origin: {
      x: 166 + 450,
      y: 163,
    },
  },
  {
    name: '퍼지롭 매스커레이드 : 포격',
    location: 'assets/purgebombard.png',
    job: '제논',
    lt: {
      x: -480,
      y: -145,
    },
    rb: {
      x: 100,
      y: 5,
    },
    origin: {
      x: 519,
      y: 199,
    },
  },
  {
    name: '퍼지롭 매스커레이드 : 폭격',
    location: 'assets/purgebombardment.png',
    job: '제논',
    lt: {
      x: -275,
      y: -235,
    },
    rb: {
      x: 250,
      y: 100,
    },
    origin: {
      x: 356,
      y: 272,
    },
  },
  {
    name: '블레이드 댄싱',
    location: 'assets/bladedancing.png',
    job: '제논',
    lt: {
      x: -225,
      y: -140,
    },
    rb: {
      x: 225,
      y: 10,
    },
    origin: {
      x: 250,
      y: 183,
    },
  },
  {
    name: '메가 스매셔',
    location: 'assets/megasmasher.png',
    job: '제논',
    lt: {
      x: -780,
      y: -265,
    },
    rb: {
      x: 90,
      y: 50,
    },
    origin: {
      x: 879,
      y: 436,
    },
  },
  {
    name: '오버로드 모드',
    location: 'assets/overloadmode.png',
    job: '제논',
    lt: {
      x: -275,
      y: -285,
    },
    rb: {
      x: 275,
      y: 175,
    },
    origin: {
      x: 243,
      y: 305,
    },
  },
  {
    name: '홀로그램 그래피티 : 융합',
    location: 'assets/hologramfusion.png',
    job: '제논',
    lt: {
      x: -320,
      y: -490,
    },
    rb: {
      x: 320,
      y: 40,
    },
    origin: {
      x: 437,
      y: 559,
    },
  },
  {
    name: '파이널 블로우',
    location: 'assets/finalblow.png',
    job: '아란',
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
    job: '아란',
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
    job: '아란',
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
    job: '아란',
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
    job: '아란',
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
    name: '브랜디쉬 마하',
    location: 'assets/brandishmaha.png',
    job: '아란',
    lt: {
      x: -480,
      y: -550,
    },
    rb: {
      x: 450,
      y: 190,
    },
    origin: {
      x: 896,
      y: 584,
    },
  },
  {
    name: '서클 오브 마나 IV(1타)',
    location: 'assets/circleofmana1.png',
    job: '에반',
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
    job: '에반',
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
    name: '서클 오브 윈드',
    location: 'assets/circleofwind.png',
    job: '에반',
    lt: {
      x: -407,
      y: -200,
    },
    rb: {
      x: -10,
      y: 25,
    },
    origin: {
      x: 406,
      y: 193,
    },
  },
  {
    name: '서클 오브 어스',
    location: 'assets/circleofearth.png',
    job: '에반',
    lt: {
      x: -400,
      y: -336,
    },
    rb: {
      x: -2,
      y: 18,
    },
    origin: {
      x: 411,
      y: 369,
    },
  },
  {
    name: '서클 오브 썬더',
    location: 'assets/circleofthunder.png',
    job: '에반',
    lt: {
      x: -275,
      y: -300,
    },
    rb: {
      x: 200,
      y: 6,
    },
    origin: {
      x: 241,
      y: 351,
    },
  },
  {
    name: '드래곤 스위프트',
    location: 'assets/dragonswift.png',
    job: '에반',
    lt: {
      x: -515,
      y: -165,
    },
    rb: {
      x: 36,
      y: 22,
    },
    origin: {
      x: 516,
      y: 183,
    },
  },
  {
    name: '스위프트 오브 윈드',
    location: 'assets/swiftofwind.png',
    job: '에반',
    lt: {
      x: -500 - 252,
      y: -450 - 63,
    },
    rb: {
      x: 500 - 252,
      y: 150 - 63,
    },
    origin: {
      x: 444,
      y: 191,
    },
  },
  {
    name: '스위프트 오브 썬더(1)',
    location: 'assets/swiftofthunder1.png',
    job: '에반',
    lt: {
      x: -580,
      y: -90,
    },
    rb: {
      x: -380,
      y: 110,
    },
    origin: {
      x: 596,
      y: 376,
    },
  },
  {
    name: '스위프트 오브 썬더(2)',
    location: 'assets/swiftofthunder2.png',
    job: '에반',
    lt: {
      x: -270,
      y: -295,
    },
    rb: {
      x: -70,
      y: -95,
    },
    origin: {
      x: 642,
      y: 378,
    },
  },
  {
    name: '스위프트 오브 썬더(3)',
    location: 'assets/swiftofthunder3.png',
    job: '에반',
    lt: {
      x: -680,
      y: -295,
    },
    rb: {
      x: -480,
      y: -95,
    },
    origin: {
      x: 624,
      y: 376,
    },
  },
  {
    name: '스위프트 오브 썬더(4)',
    location: 'assets/swiftofthunder4.png',
    job: '에반',
    lt: {
      x: -370,
      y: -90,
    },
    rb: {
      x: -170,
      y: 110,
    },
    origin: {
      x: 608,
      y: 375,
    },
  },
  {
    name: '스위프트 오브 썬더(5)',
    location: 'assets/swiftofthunder5.png',
    job: '에반',
    lt: {
      x: -475,
      y: -445,
    },
    rb: {
      x: -275,
      y: -245,
    },
    origin: {
      x: 610,
      y: 376,
    },
  },
  {
    name: '드래곤 다이브',
    location: 'assets/dragondive.png',
    job: '에반',
    lt: {
      x: -250 - 220,
      y: -239,
    },
    rb: {
      x: 251 - 220,
      y: 29,
    },
    origin: {
      x: 324 + 220,
      y: 346,
    },
  },
  {
    name: '다이브 오브 어스(1)',
    location: 'assets/diveofearth1.png',
    job: '에반',
    lt: {
      x: -620,
      y: -234,
    },
    rb: {
      x: 40,
      y: 8,
    },
    origin: {
      x: 603,
      y: 235,
    },
  },
  {
    name: '다이브 오브 어스(2)',
    location: 'assets/diveofearth2.png',
    job: '에반',
    lt: {
      x: -360,
      y: -214,
    },
    rb: {
      x: -54,
      y: 2,
    },
    origin: {
      x: 619,
      y: 293,
    },
  },
  {
    name: '다이브 오브 어스(3)',
    location: 'assets/diveofearth3.png',
    job: '에반',
    lt: {
      x: -510,
      y: -206,
    },
    rb: {
      x: -222,
      y: 2,
    },
    origin: {
      x: 619,
      y: 295,
    },
  },
  {
    name: '다이브 오브 어스(4)',
    location: 'assets/diveofearth4.png',
    job: '에반',
    lt: {
      x: -770,
      y: -220,
    },
    rb: {
      x: -408,
      y: 2,
    },
    origin: {
      x: 771,
      y: 295,
    },
  },
  {
    name: '드래곤 브레스',
    location: 'assets/dragonbreath.png',
    job: '에반',
    lt: {
      x: -641,
      y: -209,
    },
    rb: {
      x: 1,
      y: 33,
    },
    origin: {
      x: 678,
      y: 232,
    },
  },
  {
    name: '브레스 오브 어스',
    location: 'assets/breathofearth.png',
    job: '에반',
    lt: {
      x: -650,
      y: -334,
    },
    rb: {
      x: 39,
      y: 292,
    },
    origin: {
      x: 175,
      y: 454,
    },
  },
  {
    name: '브레스 오브 윈드',
    location: 'assets/breathofwind.png',
    job: '에반',
    lt: {
      x: -508,
      y: -252,
    },
    rb: {
      x: -2,
      y: 56,
    },
    origin: {
      x: 546,
      y: 250,
    },
  },
  {
    name: '드래곤 브레이크(1)',
    location: 'assets/dragonbreak1.png',
    job: '에반',
    lt: {
      x: -360,
      y: -260,
    },
    rb: {
      x: 100,
      y: 5,
    },
    origin: {
      x: 361,
      y: 509,
    },
  },
  {
    name: '드래곤 브레이크(2)',
    location: 'assets/dragonbreak2.png',
    job: '에반',
    lt: {
      x: -400,
      y: -245,
    },
    rb: {
      x: 100,
      y: 10,
    },
    origin: {
      x: 476,
      y: 416,
    },
  },
  {
    name: '드래곤 브레이크(3)',
    location: 'assets/dragonbreak3.png',
    job: '에반',
    lt: {
      x: -400,
      y: -400,
    },
    rb: {
      x: 100,
      y: 10,
    },
    origin: {
      x: 456,
      y: 790,
    },
  },
  {
    name: '드래곤 브레이크(4)',
    location: 'assets/dragonbreak4.png',
    job: '에반',
    lt: {
      x: -480,
      y: -430,
    },
    rb: {
      x: 210,
      y: 10,
    },
    origin: {
      x: 522,
      y: 743,
    },
  },
  {
    name: '브레이크-돌아와!',
    location: 'assets/breakback.png',
    job: '에반',
    lt: {
      x: -155,
      y: -275,
    },
    rb: {
      x: 155,
      y: 35,
    },
    origin: {
      x: 139,
      y: 295,
    },
  },
  {
    name: '엘리멘탈 블래스트',
    location: 'assets/elementalblast.png',
    job: '에반',
    lt: {
      x: -950,
      y: -350,
    },
    rb: {
      x: -150,
      y: 0,
    },
    origin: {
      x: 502,
      y: 207,
    },
    scale: 200,
  },
  {
    name: '임페리얼 브레스',
    location: 'assets/imperialbreath.png',
    job: '에반',
    lt: {
      x: -990,
      y: -500,
    },
    rb: {
      x: 20,
      y: 150,
    },
    origin: {
      x: 1496,
      y: 741,
    },
  },
  {
    name: '조디악 레이',
    location: 'assets/zodiacray.png',
    job: '에반',
    lt: {
      x: -420,
      y: -550,
    },
    rb: {
      x: 200,
      y: -100,
    },
    lt2: {
      x: -645,
      y: -395,
    },
    rb2: {
      x: -35,
      y: 50,
    },
    origin: {
      x: 344,
      y: 370,
    },
    scale: 200,
  },
  {
    name: '스파이럴 오브 마나',
    location: 'assets/spiralofmana.png',
    job: '에반',
    lt: {
      x: -640,
      y: -180,
    },
    rb: {
      x: 5,
      y: 60,
    },
    origin: {
      x: 736,
      y: 364,
    },
  },
  {
    name: '리프 토네이도',
    location: 'assets/leaptornado.png',
    job: '메르세데스',
    lt: {
      x: -250,
      y: -100,
    },
    rb: {
      x: 250,
      y: 280,
    },
    origin: {
      x: 246,
      y: 59,
    },
  },
  {
    name: '거스트 다이브',
    location: 'assets/gustdive.png',
    job: '메르세데스',
    lt: {
      x: -320,
      y: 0,
    },
    rb: {
      x: 0,
      y: 120,
    },
    origin: {
      x: 338,
      y: 178,
    },
  },
  {
    name: '유니콘 스파이크',
    location: 'assets/unicornspike.png',
    job: '메르세데스',
    lt: {
      x: -500,
      y: -150,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 515,
      y: 190,
    },
  },
  {
    name: '레전드리 스피어',
    location: 'assets/legendaryspear.png',
    job: '메르세데스',
    lt: {
      x: -600,
      y: -200,
    },
    rb: {
      x: 15,
      y: 50,
    },
    origin: {
      x: 610,
      y: 496,
    },
  },
  {
    name: '래쓰 오브 엔릴',
    location: 'assets/wrathofenril.png',
    job: '메르세데스',
    lt: {
      x: -450,
      y: -300,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 609,
      y: 328,
    },
  },
  {
    name: '이르칼라의 숨결',
    location: 'assets/irkallaswrath.png',
    job: '메르세데스',
    lt: {
      x: -650,
      y: -130,
    },
    rb: {
      x: 20,
      y: 50,
    },
    origin: {
      x: 714,
      y: 427,
    },
  },
  {
    name: '아포칼립스',
    location: 'assets/apocalypse.png',
    job: '루미너스',
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
    name: '앱솔루트 킬',
    location: 'assets/absolutekill.png',
    job: '루미너스',
    lt: {
      x: -400,
      y: -150,
    },
    rb: {
      x: 0,
      y: 0,
    },
    origin: {
      x: 133 + 400,
      y: 465,
    },
  },
  {
    name: '진리의 문',
    location: 'assets/gateoflight.png',
    job: '루미너스',
    lt: {
      x: -700,
      y: -450,
    },
    rb: {
      x: 700,
      y: 450,
    },
    origin: {
      x: 448,
      y: 732,
    },
  },
  {
    name: '퍼니싱 리소네이터(빛)',
    location: 'assets/punishingresonator_light.png',
    job: '루미너스',
    lt: {
      x: -390,
      y: -290,
    },
    rb: {
      x: 390,
      y: 50,
    },
    origin: {
      x: 468,
      y: 394,
    },
  },
  {
    name: '퍼니싱 리소네이터(어둠)',
    location: 'assets/punishingresonator_dark.png',
    job: '루미너스',
    lt: {
      x: -180,
      y: -530,
    },
    rb: {
      x: 180,
      y: 290,
    },
    origin: {
      x: 211,
      y: 601,
    },
  },
  {
    name: '퍼니싱 리소네이터(이퀄)',
    location: 'assets/punishingresonator_equalibrium.png',
    job: '루미너스',
    lt: {
      x: -390,
      y: -290,
    },
    rb: {
      x: 390,
      y: 50,
    },
    lt2: {
      x: -180,
      y: -530,
    },
    rb2: {
      x: 180,
      y: 290,
    },
    origin: {
      x: 473,
      y: 591,
    },
  },
  {
    name: '빛과 어둠의 세례',
    location: 'assets/lightanddarkness.png',
    job: '루미너스',
    lt: {
      x: -500,
      y: -300,
    },
    rb: {
      x: 500,
      y: 300,
    },
    origin: {
      x: 169,
      y: 361,
    },
  },
  {
    name: '얼티밋 드라이브',
    location: 'assets/ultimatedrive.png',
    job: '팬텀',
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
    name: '템페스트 오브 카드(최소)',
    location: 'assets/tempestofcard_small.png',
    job: '팬텀',
    lt: {
      x: -150,
      y: -150,
    },
    rb: {
      x: 150,
      y: 5,
    },
    origin: {
      x: 160,
      y: 167,
    },
  },
  {
    name: '템페스트 오브 카드(최대)',
    location: 'assets/tempestofcard_large.png',
    job: '팬텀',
    lt: {
      x: -250,
      y: -250,
    },
    rb: {
      x: 250,
      y: 5,
    },
    lt2: {
      x: -150,
      y: -150,
    },
    rb2: {
      x: 150,
      y: 5,
    },
    origin: {
      x: 263,
      y: 254,
    },
  },
  {
    name: '조커',
    location: 'assets/joker.png',
    job: '팬텀',
    lt: {
      x: -550,
      y: -300,
    },
    rb: {
      x: 10,
      y: 150,
    },
    origin: {
      x: 308,
      y: 216,
    },
  },
  {
    name: '마크 오브 팬텀',
    location: 'assets/markofphantom.png',
    job: '팬텀',
    lt: {
      x: -40,
      y: -475,
    },
    rb: {
      x: 650,
      y: 120,
    },
    origin: {
      x: 88,
      y: 479,
    },
  },
  {
    name: '리프트 브레이크',
    location: 'assets/riftbreak.png',
    job: '팬텀',
    lt: {
      x: -630,
      y: -390,
    },
    rb: {
      x: 230,
      y: 170,
    },
    origin: {
      x: 814,
      y: 469,
    },
  },
  {
    name: '폭류권(1)',
    location: 'assets/bombpunch1.png',
    job: '은월',
    lt: {
      x: -325,
      y: -220,
    },
    rb: {
      x: 5,
      y: 10,
    },
    origin: {
      x: 321,
      y: 327,
    },
  },
  {
    name: '폭류권(2)',
    location: 'assets/bombpunch2.png',
    job: '은월',
    lt: {
      x: -365,
      y: -290,
    },
    rb: {
      x: 5,
      y: 10,
    },
    origin: {
      x: 362,
      y: 280,
    },
  },
  {
    name: '폭류권(3)',
    location: 'assets/bombpunch3.png',
    job: '은월',
    lt: {
      x: -405,
      y: -265,
    },
    rb: {
      x: 5,
      y: 10,
    },
    origin: {
      x: 391,
      y: 263,
    },
  },
  {
    name: '폭류권(4)',
    location: 'assets/bombpunch4.png',
    job: '은월',
    lt: {
      x: -435,
      y: -215,
    },
    rb: {
      x: 5,
      y: 10,
    },
    origin: {
      x: 415,
      y: 243,
    },
  },
  {
    name: '파쇄철조-전',
    location: 'assets/dragpulling_front.png',
    job: '은월',
    lt: {
      x: -445,
      y: -170,
    },
    rb: {
      x: -5,
      y: 10,
    },
    origin: {
      x: 437,
      y: 173,
    },
  },
  {
    name: '소혼 장막(최소)',
    location: 'assets/soultent_small.png',
    job: '은월',
    lt: {
      x: -185,
      y: -155,
    },
    rb: {
      x: 185,
      y: 5,
    },
    origin: {
      x: 175,
      y: 167,
    },
  },
  {
    name: '소혼 장막(최대)',
    location: 'assets/soultent_large.png',
    job: '은월',
    lt: {
      x: -315,
      y: -300,
    },
    rb: {
      x: 315,
      y: 5,
    },
    origin: {
      x: 320,
      y: 310,
    },
  },
  {
    name: '귀참',
    location: 'assets/gwicham.png',
    job: '은월',
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
    job: '은월',
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
    name: '파쇄 연권',
    location: 'assets/smashingmultipunch.png',
    job: '은월',
    lt: {
      x: -530,
      y: -340,
    },
    rb: {
      x: 5,
      y: 20,
    },
    origin: {
      x: 439,
      y: 370,
    },
  },
  {
    name: '파쇄 연권(막타)',
    location: 'assets/smashingmultipunch_final.png',
    job: '은월',
    lt: {
      x: -620,
      y: -425,
    },
    rb: {
      x: 60,
      y: 30,
    },
    origin: {
      x: 605,
      y: 523,
    },
  },
  {
    name: '기가 슬래셔(일반)',
    location: 'assets/gigaslasher.png',
    job: '카이저',
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
    job: '카이저',
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
    name: '드라코 슬래셔(일반)',
    location: 'assets/dracoslasher.png',
    job: '카이저',
    lt: {
      x: -445,
      y: -225,
    },
    rb: {
      x: 20,
      y: 50,
    },
    origin: {
      x: 467,
      y: 213,
    },
  },
  {
    name: '드라코 슬래셔(일반, 투사체)',
    location: 'assets/dracoslasher_shoot.png',
    job: '카이저',
    lt: {
      x: -60 - 400 / 2 - 400,
      y: -68 - 150 / 2,
    },
    rb: {
      x: -60 + 400 / 2,
      y: -68 + 150 / 2,
    },
    origin: {
      x: 222 + 60 + 400,
      y: 134 + 68,
    },
  },
  {
    name: '드라코 슬래셔(변신)',
    location: 'assets/dracoslasher_final.png',
    job: '카이저',
    lt: {
      x: -600,
      y: -340,
    },
    rb: {
      x: 100,
      y: 100,
    },
    origin: {
      x: 567,
      y: 350,
    },
  },
  {
    name: '드라코 슬래셔(변신, 투사체)',
    location: 'assets/dracoslasher_final_shoot.png',
    job: '카이저',
    lt: {
      x: -90 - 500 / 2 - 600,
      y: -80 - 200 / 2,
    },
    rb: {
      x: -90 + 500 / 2,
      y: -80 + 200 / 2,
    },
    origin: {
      x: 272 + 90 + 600,
      y: 180 + 80,
    },
  },
  {
    name: '스트라이크 애로우',
    location: 'assets/strikearrow1.png',
    job: '카인',
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
    job: '카인',
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
    job: '카인',
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
    job: '카인',
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
    job: '카인',
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
    job: '카인',
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
    job: '카인',
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
    job: '카인',
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
    job: '카인',
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
    name: '[발현] 드래곤 버스트',
    location: 'assets/dragonburst.png',
    job: '카인',
    lt: {
      x: -740,
      y: -180,
    },
    rb: {
      x: 30,
      y: 50,
    },
    origin: {
      x: 978,
      y: 293,
    },
  },
  {
    name: '[처형] 페이탈 블리츠',
    location: 'assets/fatalblitz.png',
    job: '카인',
    lt: {
      x: -485,
      y: -220,
    },
    rb: {
      x: 80,
      y: 150,
    },
    origin: {
      x: 492,
      y: 229,
    },
  },
  {
    name: '체인아츠:스트로크(1)',
    location: 'assets/stroke1.png',
    job: '카데나',
    lt: {
      x: -135,
      y: -150,
    },
    rb: {
      x: 135,
      y: 50,
    },
    origin: {
      x: 107,
      y: 120,
    },
  },
  {
    name: '체인아츠:스트로크(2)',
    location: 'assets/stroke2.png',
    job: '카데나',
    lt: {
      x: -465,
      y: -220,
    },
    rb: {
      x: 20,
      y: 25,
    },
    origin: {
      x: 462,
      y: 212,
    },
  },
  {
    name: '서먼 커팅 시미터',
    location: 'assets/scimitar.png',
    job: '카데나',
    lt: {
      x: -450,
      y: -105,
    },
    rb: {
      x: 20,
      y: 5,
    },
    origin: {
      x: 442,
      y: 191,
    },
  },
  {
    name: '서먼 슈팅 샷건',
    location: 'assets/shotgun1.png',
    job: '카데나',
    lt: {
      x: -385,
      y: -220,
    },
    rb: {
      x: -285,
      y: 105,
    },
    lt2: {
      x: -285,
      y: -165,
    },
    rb2: {
      x: -185,
      y: 60,
    },
    lt3: {
      x: -185,
      y: -110,
    },
    rb3: {
      x: -60,
      y: 15,
    },
    origin: {
      x: 375,
      y: 227,
    },
  },
  {
    name: '서먼 슬래싱 나이프',
    location: 'assets/knife.png',
    job: '카데나',
    lt: {
      x: -250,
      y: -345,
    },
    rb: {
      x: 250,
      y: 25,
    },
    origin: {
      x: 227,
      y: 396,
    },
  },
  {
    name: '서먼 릴리싱 봄',
    location: 'assets/bomb.png',
    job: '카데나',
    lt: {
      x: -235,
      y: -300,
    },
    rb: {
      x: 235,
      y: 0,
    },
    origin: {
      x: 234,
      y: 350,
    },
  },
  {
    name: '서먼 스트라이킹 브릭',
    location: 'assets/brick.png',
    job: '카데나',
    lt: {
      x: -360,
      y: -350,
    },
    rb: {
      x: 120,
      y: 110,
    },
    origin: {
      x: 375,
      y: 410,
    },
  },
  {
    name: '서먼 비팅 니들배트(1)',
    location: 'assets/needlebat1.png',
    job: '카데나',
    lt: {
      x: -290,
      y: -200,
    },
    rb: {
      x: 55,
      y: 10,
    },
    origin: {
      x: 249,
      y: 203,
    },
  },
  {
    name: '서먼 비팅 니들배트(2)',
    location: 'assets/needlebat2.png',
    job: '카데나',
    lt: {
      x: -260,
      y: -205,
    },
    rb: {
      x: 95,
      y: 10,
    },
    origin: {
      x: 212,
      y: 217,
    },
  },
  {
    name: '서먼 비팅 니들배트(3)',
    location: 'assets/needlebat3.png',
    job: '카데나',
    lt: {
      x: -345,
      y: -330,
    },
    rb: {
      x: 135,
      y: 10,
    },
    origin: {
      x: 330,
      y: 402,
    },
  },
  {
    name: '웨폰 버라이어티 III',
    location: 'assets/weaponvariety.png',
    job: '카데나',
    lt: {
      x: -250,
      y: -260,
    },
    rb: {
      x: 250,
      y: 150,
    },
    origin: {
      x: 365,
      y: 420,
    },
  },
  {
    name: '체인아츠:크러시',
    location: 'assets/crush.png',
    job: '카데나',
    lt: {
      x: -400,
      y: -550,
    },
    rb: {
      x: 400,
      y: 5,
    },
    origin: {
      x: 529,
      y: 610,
    },
  },
  {
    name: 'A.D 오드넌스(응집)',
    location: 'assets/adordnance.png',
    job: '카데나',
    lt: {
      x: -335,
      y: -250,
    },
    rb: {
      x: -60,
      y: 0,
    },
    origin: {
      x: 331,
      y: 226,
    },
  },
  {
    name: 'A.D 오드넌스(발사)',
    location: 'assets/adordnance_shoot.png',
    job: '카데나',
    lt: {
      x: -194 - 280 / 2 - 800,
      y: -97 - 280 / 2,
    },
    rb: {
      x: -194 + 280 / 2,
      y: -97 + 280 / 2,
    },
    origin: {
      x: 170 + 194 + 800,
      y: 168 + 97,
    },
  },
  {
    name: '체인아츠:메일스트롬',
    location: 'assets/maelstrom.png',
    job: '카데나',
    lt: {
      x: -590,
      y: -265,
    },
    rb: {
      x: 205,
      y: 20,
    },
    origin: {
      x: 679,
      y: 375,
    },
  },
  {
    name: '웨폰 버라이어티 피날레',
    location: 'assets/weaponvarietyfinale.png',
    job: '카데나',
    lt: {
      x: -330,
      y: -390,
    },
    rb: {
      x: 330,
      y: 5,
    },
    origin: {
      x: 462,
      y: 568,
    },
  },
  {
    name: '소울 시커',
    location: 'assets/soulseeker.png',
    job: '엔젤릭버스터',
    lt: {
      x: -500,
      y: -400,
    },
    rb: {
      x: 500,
      y: 10,
    },
    origin: {
      x: 185,
      y: 223,
    },
  },
  {
    name: '프라이멀 로어',
    location: 'assets/primalroar.png',
    job: '엔젤릭버스터',
    lt: {
      x: -450,
      y: -250,
    },
    rb: {
      x: 100,
      y: 30,
    },
    origin: {
      x: 438,
      y: 316,
    },
  },
  {
    name: '트리니티(1)',
    location: 'assets/trinity1.png',
    job: '엔젤릭버스터',
    lt: {
      x: -380,
      y: -140,
    },
    rb: {
      x: 120,
      y: 40,
    },
    origin: {
      x: 407,
      y: 145,
    },
  },
  {
    name: '트리니티(2)',
    location: 'assets/trinity2.png',
    job: '엔젤릭버스터',
    lt: {
      x: -420,
      y: -340,
    },
    rb: {
      x: 30,
      y: 10,
    },
    origin: {
      x: 426,
      y: 346,
    },
  },
  {
    name: '트리니티(3)',
    location: 'assets/trinity3.png',
    job: '엔젤릭버스터',
    lt: {
      x: -440,
      y: -270,
    },
    rb: {
      x: 50,
      y: 10,
    },
    origin: {
      x: 514,
      y: 286,
    },
  },
  {
    name: '소울 레조넌스',
    location: 'assets/soulresonance.png',
    job: '엔젤릭버스터',
    lt: {
      x: -320,
      y: -550,
    },
    rb: {
      x: 320,
      y: 30,
    },
    origin: {
      x: 325,
      y: 519,
    },
  },
  {
    name: '피니투라 페투치아',
    location: 'assets/finaleribbon.png',
    job: '엔젤릭버스터',
    lt: {
      x: -430,
      y: -420,
    },
    rb: {
      x: 430,
      y: 40,
    },
    origin: {
      x: 412,
      y: 365,
    },
  },
  {
    name: '슈퍼 노바',
    location: 'assets/supernova.png',
    job: '엔젤릭버스터',
    lt: {
      x: -420,
      y: -500,
    },
    rb: {
      x: 420,
      y: 100,
    },
    origin: {
      x: 452,
      y: 547,
    },
  },
  {
    name: '트리니티 퓨전',
    location: 'assets/trinityfusion.png',
    job: '엔젤릭버스터',
    lt: {
      x: -540,
      y: -450,
    },
    rb: {
      x: 25,
      y: 50,
    },
    origin: {
      x: 674,
      y: 580,
    },
  },
  {
    name: '노빌리티',
    location: 'assets/nobility.png',
    job: '아델',
    lt: {
      x: -320,
      y: -320,
    },
    rb: {
      x: 320,
      y: 30,
    },
    origin: {
      x: 295,
      y: 354,
    },
  },
  {
    name: '오더',
    location: 'assets/order.png',
    job: '아델',
    lt: {
      x: -515,
      y: -265,
    },
    rb: {
      x: 515,
      y: 145,
    },
    origin: {
      x: 36,
      y: 72,
    },
  },
  {
    name: '크리에이션',
    location: 'assets/creation.png',
    job: '아델',
    lt: {
      x: -510,
      y: -215,
    },
    rb: {
      x: 30,
      y: 115,
    },
    origin: {
      x: 672,
      y: 198,
    },
  },
  {
    name: '테리토리',
    location: 'assets/territory.png',
    job: '아델',
    lt: {
      x: -280,
      y: -360,
    },
    rb: {
      x: 280,
      y: 10,
    },
    origin: {
      x: 308,
      y: 416,
    },
  },
  {
    name: '테리토리(막타)',
    location: 'assets/territory_final.png',
    job: '아델',
    lt: {
      x: -300,
      y: -385,
    },
    rb: {
      x: 300,
      y: 20,
    },
    origin: {
      x: 366,
      y: 441,
    },
  },
  {
    name: '블로섬',
    location: 'assets/blossom.png',
    job: '아델',
    lt: {
      x: -185,
      y: -185,
    },
    rb: {
      x: 185,
      y: 185,
    },
    origin: {
      x: 249,
      y: 210,
    },
  },
  {
    name: '디바이드',
    location: 'assets/divide.png',
    job: '아델',
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
  {
    name: '스콜',
    location: 'assets/squall.png',
    job: '아델',
    lt: {
      x: -500,
      y: -350,
    },
    rb: {
      x: 500,
      y: 50,
    },
    origin: {
      x: 287,
      y: 543,
    },
  },
  {
    name: '루인(1)',
    location: 'assets/ruin1.png',
    job: '아델',
    lt: {
      x: -350,
      y: -580,
    },
    rb: {
      x: 350,
      y: 30,
    },
    origin: {
      x: 531,
      y: 835,
    },
  },
  {
    name: '루인(2)',
    location: 'assets/ruin2.png',
    job: '아델',
    lt: {
      x: -420,
      y: -800,
    },
    rb: {
      x: 420,
      y: 90,
    },
    origin: {
      x: 497,
      y: 903,
    },
  },
  {
    name: '인피니트',
    location: 'assets/infinite.png',
    job: '아델',
    lt: {
      x: -550,
      y: -350,
    },
    rb: {
      x: 550,
      y: 225,
    },
    origin: {
      x: 46,
      y: 122,
    },
  },
  {
    name: '리스토어',
    location: 'assets/restore.png',
    job: '아델',
    lt: {
      x: -350,
      y: -175,
    },
    rb: {
      x: 350,
      y: 150,
    },
    origin: {
      x: 332,
      y: 245,
    },
  },
  {
    name: '스톰',
    location: 'assets/storm.png',
    job: '아델',
    lt: {
      x: -380,
      y: -235,
    },
    rb: {
      x: 380,
      y: 60,
    },
    origin: {
      x: 574,
      y: 440,
    },
  },
  {
    name: '끝나지 않는 악몽',
    location: 'assets/endlessnightmare.png',
    job: '아크',
    lt: {
      x: -425,
      y: -245,
    },
    rb: {
      x: 80,
      y: 25,
    },
    origin: {
      x: 470,
      y: 241,
    },
  },
  {
    name: '끝나지 않는 흉몽',
    location: 'assets/endlessdream.png',
    job: '아크',
    lt: {
      x: -425,
      y: -245,
    },
    rb: {
      x: 80,
      y: 25,
    },
    origin: {
      x: 470,
      y: 241,
    },
  },
  {
    name: '플레인 차지드라이브',
    location: 'assets/plainchargedrive.png',
    job: '아크',
    lt: {
      x: -285,
      y: -150,
    },
    rb: {
      x: 5,
      y: 20,
    },
    origin: {
      x: 270,
      y: 130,
    },
  },
  {
    name: '스칼렛 차지드라이브',
    location: 'assets/scarletchargedrive.png',
    job: '아크',
    lt: {
      x: -350,
      y: -105,
    },
    rb: {
      x: 20,
      y: 35,
    },
    origin: {
      x: 364,
      y: 107,
    },
  },
  {
    name: '지워지지 않는 상처',
    location: 'assets/greviouswound.png',
    job: '아크',
    lt: {
      x: -525,
      y: -155,
    },
    rb: {
      x: 20,
      y: 100,
    },
    origin: {
      x: 519,
      y: 163,
    },
  },
  {
    name: '멈출 수 없는 충동',
    location: 'assets/unstoppableimpulse.png',
    job: '아크',
    lt: {
      x: -425,
      y: -180,
    },
    rb: {
      x: 50,
      y: 80,
    },
    origin: {
      x: 457,
      y: 245,
    },
  },
  {
    name: '멈출 수 없는 본능',
    location: 'assets/tenaciousinstinct.png',
    job: '아크',
    lt: {
      x: -425,
      y: -180,
    },
    rb: {
      x: 50,
      y: 80,
    },
    origin: {
      x: 456,
      y: 245,
    },
  },
  {
    name: '거스트 차지드라이브',
    location: 'assets/gustchargedrive.png',
    job: '아크',
    lt: {
      x: -225,
      y: -250,
    },
    rb: {
      x: 80,
      y: 50,
    },
    origin: {
      x: 192,
      y: 294,
    },
  },
  {
    name: '채워지지 않는 굶주림',
    location: 'assets/insatiablehunger.png',
    job: '아크',
    lt: {
      x: -615,
      y: -360,
    },
    rb: {
      x: 100,
      y: 75,
    },
    origin: {
      x: 694,
      y: 647,
    },
  },
  {
    name: '심연의 공포',
    location: 'assets/abyssterror.png',
    job: '아크',
    lt: {
      x: -420,
      y: -550,
    },
    rb: {
      x: 420,
      y: 30,
    },
    origin: {
      x: 419,
      y: 596,
    },
  },
  {
    name: '어비스 차지드라이브(1)',
    location: 'assets/abysschargedrive1.png',
    job: '아크',
    lt: {
      x: -250,
      y: -320,
    },
    rb: {
      x: 230,
      y: 5,
    },
    origin: {
      x: 429,
      y: 428,
    },
  },
  {
    name: '어비스 차지드라이브(2)',
    location: 'assets/abysschargedrive2.png',
    job: '아크',
    lt: {
      x: -285,
      y: -320,
    },
    rb: {
      x: 275,
      y: 70,
    },
    origin: {
      x: 346,
      y: 537,
    },
  },
  {
    name: '걷잡을 수 없는 혼돈',
    location: 'assets/unbridledchaos.png',
    job: '아크',
    lt: {
      x: -380,
      y: -335,
    },
    rb: {
      x: 350,
      y: 110,
    },
    origin: {
      x: 367,
      y: 339,
    },
  },
  {
    name: '끝없는 고통',
    location: 'assets/endlesspain.png',
    job: '아크',
    lt: {
      x: -770,
      y: -240,
    },
    rb: {
      x: 140,
      y: 60,
    },
    origin: {
      x: 718,
      y: 223,
    },
  },
  {
    name: '심연의 파수꾼',
    location: 'assets/abysschaser.png',
    job: '아크',
    lt: {
      x: -760,
      y: -410,
    },
    rb: {
      x: 320,
      y: 60,
    },
    origin: {
      x: 756,
      y: 435,
    },
  },
  {
    name: '근원의 기억',
    location: 'assets/memoryofroot.png',
    job: '아크',
    lt: {
      x: -700,
      y: -600,
    },
    rb: {
      x: 700,
      y: 200,
    },
    origin: {
      x: 322,
      y: 377,
    },
    scale: 200,
  },
  {
    name: '새어 나오는 악몽',
    location: 'assets/deviousnightmare.png',
    job: '아크',
    lt: {
      x: -680,
      y: -420,
    },
    rb: {
      x: 200,
      y: 40,
    },
    origin: {
      x: 672,
      y: 428,
    },
  },
  {
    name: '새어 나오는 흉몽',
    location: 'assets/deviousdream.png',
    job: '아크',
    lt: {
      x: -680,
      y: -420,
    },
    rb: {
      x: 200,
      y: 40,
    },
    origin: {
      x: 655,
      y: 404,
    },
  },
  {
    name: '여의선 : 인(부채)',
    location: 'assets/yeouisun.png',
    job: '호영',
    lt: {
      x: -200,
      y: -180,
    },
    rb: {
      x: 70,
      y: 70,
    },
    origin: {
      x: 195,
      y: 187,
    },
  },
  {
    name: '여의선 : 인(바람)',
    location: 'assets/yeouisun_wind.png',
    job: '호영',
    lt: {
      x: -390,
      y: -120,
    },
    rb: {
      x: -201,
      y: 45,
    },
    origin: {
      x: 406,
      y: 156,
    },
  },
  {
    name: '마봉 호로부',
    location: 'assets/mabong.png',
    job: '호영',
    lt: {
      x: -700,
      y: -185,
    },
    rb: {
      x: 1,
      y: 110,
    },
    origin: {
      x: 723,
      y: 168,
    },
  },
  {
    name: '토파류 : 지',
    location: 'assets/topa.png',
    job: '호영',
    lt: {
      x: -530,
      y: -120,
    },
    rb: {
      x: 1,
      y: 1,
    },
    origin: {
      x: 678,
      y: 227,
    },
  },
  {
    name: '지진쇄 : 지',
    location: 'assets/earthquake.png',
    job: '호영',
    lt: {
      x: -400,
      y: -310,
    },
    rb: {
      x: 400,
      y: 20,
    },
    origin: {
      x: 486,
      y: 366,
    },
  },
  {
    name: '지진쇄 : 허/실',
    location: 'assets/earthquake2.png',
    job: '호영',
    lt: {
      x: -425,
      y: -300,
    },
    rb: {
      x: 425,
      y: 30,
    },
    origin: {
      x: 462,
      y: 450,
    },
  },
  {
    name: '멸화염 : 천',
    location: 'assets/flame.png',
    job: '호영',
    lt: {
      x: -360,
      y: -160,
    },
    rb: {
      x: 360,
      y: 105,
    },
    origin: {
      x: 565,
      y: 284,
    },
  },
  {
    name: '멸화염 : 허/실',
    location: 'assets/flame2.png',
    job: '호영',
    lt: {
      x: -300,
      y: -460,
    },
    rb: {
      x: 300,
      y: 50,
    },
    origin: {
      x: 476,
      y: 571,
    },
  },
  {
    name: '금고봉 : 인(1)',
    location: 'assets/bong1.png',
    job: '호영',
    lt: {
      x: -545,
      y: -230,
    },
    rb: {
      x: 40,
      y: 50,
    },
    origin: {
      x: 581,
      y: 262,
    },
  },
  {
    name: '금고봉 : 인(2)',
    location: 'assets/bong2.png',
    job: '호영',
    lt: {
      x: -570,
      y: -230,
    },
    rb: {
      x: 150,
      y: 80,
    },
    origin: {
      x: 678,
      y: 274,
    },
  },
  {
    name: '권술 : 흡성와류',
    location: 'assets/waryu.png',
    job: '호영',
    lt: {
      x: -480,
      y: -220,
    },
    rb: {
      x: 480,
      y: 35,
    },
    origin: {
      x: 390,
      y: 223,
    },
  },
  {
    name: '선기 : 분신 둔갑 태을선인',
    location: 'assets/clonesunin.png',
    job: '호영',
    lt: {
      x: -470,
      y: -350,
    },
    rb: {
      x: 430,
      y: 350,
    },
    origin: {
      x: 491,
      y: 385,
    },
  },
  {
    name: '권술 : 산령소환(일반)',
    location: 'assets/tiger1.png',
    job: '호영',
    lt: {
      x: -500,
      y: -450,
    },
    rb: {
      x: 400,
      y: 15,
    },
    origin: {
      x: 614,
      y: 664,
    },
  },
  {
    name: '권술 : 산령소환(포효)',
    location: 'assets/tiger2.png',
    job: '호영',
    lt: {
      x: -700,
      y: -550,
    },
    rb: {
      x: 480,
      y: 15,
    },
    origin: {
      x: 772,
      y: 673,
    },
  },
  {
    name: '문 스트라이크',
    location: 'assets/moonstrike.png',
    job: '제로',
    lt: {
      x: -320,
      y: -100,
    },
    rb: {
      x: 140,
      y: 10,
    },
    origin: {
      x: 322,
      y: 73,
    },
  },
  {
    name: '피어스 쓰러스트',
    location: 'assets/piercethrust.png',
    job: '제로',
    lt: {
      x: -315,
      y: -100,
    },
    rb: {
      x: 0,
      y: 10,
    },
    origin: {
      x: 303,
      y: 102,
    },
  },
  {
    name: '쉐도우 스트라이크',
    location: 'assets/shadowstrike.png',
    job: '제로',
    lt: {
      x: -355,
      y: -100,
    },
    rb: {
      x: -20,
      y: 35,
    },
    origin: {
      x: 359,
      y: 88,
    },
  },
  {
    name: '플래시 어썰터',
    location: 'assets/flashassulter.png',
    job: '제로',
    lt: {
      x: -460,
      y: -90,
    },
    rb: {
      x: 20,
      y: 20,
    },
    origin: {
      x: 462,
      y: 132,
    },
  },
  {
    name: '어드밴스드 스핀 커터',
    location: 'assets/advancedspincutter.png',
    job: '제로',
    lt: {
      x: -245,
      y: -95,
    },
    rb: {
      x: 245,
      y: 50,
    },
    origin: {
      x: 297,
      y: 185,
    },
  },
  {
    name: '어드밴스드 롤링 커브',
    location: 'assets/advancedrollingcurve.png',
    job: '제로',
    lt: {
      x: -430,
      y: -300,
    },
    rb: {
      x: 120,
      y: 140,
    },
    origin: {
      x: 146,
      y: 118,
    },
  },
  {
    name: '어드밴스드 롤링 어썰터',
    location: 'assets/advancedrollingassulter.png',
    job: '제로',
    lt: {
      x: -440,
      y: -140,
    },
    rb: {
      x: 210,
      y: 60,
    },
    origin: {
      x: 230,
      y: 146,
    },
  },
  {
    name: '윈드 커터',
    location: 'assets/windcutter.png',
    job: '제로',
    lt: {
      x: -315,
      y: -160,
    },
    rb: {
      x: 115,
      y: 15,
    },
    origin: {
      x: 300,
      y: 160,
    },
  },
  {
    name: '윈드 스트라이크',
    location: 'assets/windstrike.png',
    job: '제로',
    lt: {
      x: -435,
      y: -160,
    },
    rb: {
      x: 115,
      y: 25,
    },
    origin: {
      x: 453,
      y: 155,
    },
  },
  {
    name: '어드밴스드 스톰 브레이크',
    location: 'assets/advancedstormbreak.png',
    job: '제로',
    lt: {
      x: -465,
      y: -205,
    },
    rb: {
      x: 65,
      y: 55,
    },
    origin: {
      x: 457,
      y: 295,
    },
  },
  {
    name: '어퍼 슬래시',
    location: 'assets/upperslash.png',
    job: '제로',
    lt: {
      x: -235,
      y: -145,
    },
    rb: {
      x: 25,
      y: 65,
    },
    origin: {
      x: 236,
      y: 231,
    },
  },
  {
    name: '어드밴스드 파워 스텀프',
    location: 'assets/advancedpowerstomp.png',
    job: '제로',
    lt: {
      x: -230,
      y: -200,
    },
    rb: {
      x: 10,
      y: 10,
    },
    origin: {
      x: 251,
      y: 219,
    },
  },
  {
    name: '어드밴스드 파워 스텀프(충격파)',
    location: 'assets/advancedpowerstomp_shockwave.png',
    job: '제로',
    lt: {
      x: -125 - 300,
      y: -300,
    },
    rb: {
      x: 120 - 300,
      y: 10,
    },
    origin: {
      x: 142 + 300,
      y: 399,
    },
  },
  {
    name: '프론트 슬래시',
    location: 'assets/frontslash.png',
    job: '제로',
    lt: {
      x: -340,
      y: -130,
    },
    rb: {
      x: 20,
      y: 35,
    },
    origin: {
      x: 371,
      y: 120,
    },
  },
  {
    name: '터닝 드라이브',
    location: 'assets/turningdrive.png',
    job: '제로',
    lt: {
      x: -240,
      y: -100,
    },
    rb: {
      x: 240,
      y: 50,
    },
    origin: {
      x: 296,
      y: 150,
    },
  },
  {
    name: '어드밴스드 휠 윈드',
    location: 'assets/advancedwheelwind.png',
    job: '제로',
    lt: {
      x: -200,
      y: -125,
    },
    rb: {
      x: 210,
      y: 25,
    },
    origin: {
      x: 287,
      y: 140,
    },
  },
  {
    name: '기가 크래시',
    location: 'assets/gigacrash.png',
    job: '제로',
    lt: {
      x: -250,
      y: -200,
    },
    rb: {
      x: 0,
      y: 10,
    },
    origin: {
      x: 299,
      y: 265,
    },
  },
  {
    name: '점핑 크래시',
    location: 'assets/jumpingcrash.png',
    job: '제로',
    lt: {
      x: -320,
      y: -240,
    },
    rb: {
      x: -20,
      y: 10,
    },
    origin: {
      x: 412,
      y: 290,
    },
  },
  {
    name: '점핑 크래시(충격파)',
    location: 'assets/jumpingcrash_shockwave.png',
    job: '제로',
    lt: {
      x: -280,
      y: -320,
    },
    rb: {
      x: -30,
      y: 10,
    },
    origin: {
      x: 365,
      y: 439,
    },
  },
  {
    name: '어드밴스드 어스 브레이크',
    location: 'assets/advancedearthbreak.png',
    job: '제로',
    lt: {
      x: -350,
      y: -400,
    },
    rb: {
      x: 90,
      y: 35,
    },
    origin: {
      x: 409,
      y: 468,
    },
  },
  {
    name: '어드밴스드 어스 브레이크(충격파)',
    location: 'assets/advancedearthbreak_shockwave.png',
    job: '제로',
    lt: {
      x: -280,
      y: -490,
    },
    rb: {
      x: 0,
      y: 10,
    },
    origin: {
      x: 380,
      y: 655,
    },
  },
  {
    name: '조인트 어택(알파 1타)',
    location: 'assets/jointattack_alpha_1.png',
    job: '제로',
    lt: {
      x: -460,
      y: -90,
    },
    rb: {
      x: 20,
      y: 20,
    },
    origin: {
      x: 462,
      y: 132,
    },
  },
  {
    name: '조인트 어택(알파 2타)',
    location: 'assets/jointattack_alpha_2.png',
    job: '제로',
    lt: {
      x: -620,
      y: -260,
    },
    rb: {
      x: -60,
      y: 60,
    },
    origin: {
      x: 624,
      y: 232,
    },
  },
  {
    name: '조인트 어택(알파 3타)',
    location: 'assets/jointattack_alpha_3.png',
    job: '제로',
    lt: {
      x: -820,
      y: -240,
    },
    rb: {
      x: -220,
      y: 80,
    },
    origin: {
      x: 791,
      y: 295,
    },
  },
  {
    name: '조인트 어택(베타 1타)',
    location: 'assets/jointattack_beta_1.png',
    job: '제로',
    lt: {
      x: -300,
      y: -200,
    },
    rb: {
      x: 90,
      y: 85,
    },
    origin: {
      x: 236,
      y: 231,
    },
  },
  {
    name: '조인트 어택(베타 2타)',
    location: 'assets/jointattack_beta_2.png',
    job: '제로',
    lt: {
      x: -580,
      y: -210,
    },
    rb: {
      x: 30,
      y: 80,
    },
    origin: {
      x: 560,
      y: 153,
    },
  },
  {
    name: '조인트 어택(베타 3타)',
    location: 'assets/jointattack_beta_3.png',
    job: '제로',
    lt: {
      x: -790,
      y: -300,
    },
    rb: {
      x: -100,
      y: 130,
    },
    origin: {
      x: 748,
      y: 298,
    },
  },
  {
    name: '조인트 어택(협력 공격)',
    location: 'assets/jointattack_final.png',
    job: '제로',
    lt: {
      x: -1140,
      y: -1150,
    },
    rb: {
      x: 30,
      y: 100,
    },
    origin: {
      x: 1094,
      y: 1175,
    },
  },
  {
    name: '얼티메이트-메테리얼',
    location: 'assets/ultimate_material.png',
    job: '키네시스',
    lt: {
      x: -150 - 300,
      y: -540,
    },
    rb: {
      x: 150 - 300,
      y: 10,
    },
    origin: {
      x: 225 + 300,
      y: 335,
    },
  },
  {
    name: '싸이킥 스매싱2',
    location: 'assets/psychicsmashing2.png',
    job: '키네시스',
    lt: {
      x: -466,
      y: -165,
    },
    rb: {
      x: -65,
      y: 35,
    },
    origin: {
      x: 440,
      y: 301,
    },
  },
  {
    name: '싸이킥 그라운드2',
    location: 'assets/psychicground2.png',
    job: '키네시스',
    lt: {
      x: -220,
      y: -52,
    },
    rb: {
      x: 189,
      y: 18,
    },
    origin: {
      x: 228,
      y: 113,
    },
  },
  {
    name: '싸이코 브레이크',
    location: 'assets/psychobreak.png',
    job: '키네시스',
    lt: {
      x: -375,
      y: -140,
    },
    rb: {
      x: 375,
      y: 20,
    },
    origin: {
      x: 245,
      y: 113,
    },
  },
  {
    name: '얼티메이트-B.P.M',
    location: 'assets/ultimate_bpm.png',
    job: '키네시스',
    lt: {
      x: -348,
      y: -110,
    },
    rb: {
      x: 8,
      y: 18,
    },
    origin: {
      x: 359,
      y: 184,
    },
  },
  {
    name: '싸이코 메트리',
    location: 'assets/psychometry.png',
    job: '키네시스',
    lt: {
      x: -274,
      y: -292,
    },
    rb: {
      x: 292,
      y: 212,
    },
    origin: {
      x: 226,
      y: 269,
    },
  },
  {
    name: '싸이킥 토네이도',
    location: 'assets/psychictornado.png',
    job: '키네시스',
    lt: {
      x: -360,
      y: -600,
    },
    rb: {
      x: 360,
      y: 80,
    },
    origin: {
      x: 326,
      y: 592,
    },
  },
  {
    name: '얼티메이트-싸이킥 불릿',
    location: 'assets/ultimate_psychicbullet.png',
    job: '키네시스',
    lt: {
      x: -820,
      y: -225,
    },
    rb: {
      x: 100,
      y: 150,
    },
    origin: {
      x: 1119,
      y: 505,
    },
  },
  {
    name: '마이크로 블랙홀',
    location: 'assets/microblackhole.png',
    job: '키네시스',
    lt: {
      x: -900,
      y: -160,
    },
    rb: {
      x: -630,
      y: 110,
    },
    origin: {
      x: 1327,
      y: 441,
    },
  },
];

export const skillData = [...chtrSkillData, ...bossSkillData];

export const skillRecord: Record<string, SkillData> = skillData.reduce(
  (obj, x) => {
    obj[x.name] = x;
    return obj;
  },
  {},
);

export const skillEntries: [string, SkillData[]][] = Object.entries(
  skillData.reduce((obj, x) => {
    if (!obj[x.job]) {
      obj[x.job] = [];
    }
    obj[x.job].push(x);
    return obj;
  }, {}),
);
