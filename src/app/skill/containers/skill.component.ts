import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styles: [
    `
      .wrapper {
        margin: 20px;
        font-family: 'Noto sans KR';
      }

      .container {
        display: flex;
        align-items: flex-start;
        width: 1366px;
        margin-top: 12px;
      }

      .layer {
        width: 480px;
        box-sizing: border-box;
      }

      .search {
        flex: 1 1 auto;
        margin-left: 12px;
      }

      .canvas-setting {
        width: 480px;
        box-sizing: border-box;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
