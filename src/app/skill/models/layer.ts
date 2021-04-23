export type NamePosition = '좌측 상단' | '우측 상단' | '좌측 하단' | '우측 하단';

export interface Layer {
  skill: string;
  color: string;
  namePosition: NamePosition;
  alpha: number;
  visible: boolean;
}
