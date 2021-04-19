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
  origin: Point;
}

export const skillData: SkillData[] = [
  {
    name: '레이징 블로우',
    location: 'assets/ragingblow.png',
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
];

export const skillEntries: [string, SkillData[]][] = Object.entries(
  skillData.reduce((obj, x) => {
    if (!obj[x.job]) {
      obj[x.job] = [];
    }
    obj[x.job].push(x);
    return obj;
  }, {}),
);
