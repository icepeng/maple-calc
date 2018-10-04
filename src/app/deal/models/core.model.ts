export interface Core {
  type: 'UPGRADE' | 'SKILL' | 'SPECIAL';
  level: number;
  slotLevel: number;
  skillCode?: string;
}
