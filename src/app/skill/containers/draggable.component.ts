import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styles: [
    `
      .handle {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ccc;
        cursor: move;
        width: 100%;
        height: 16px;
        box-sizing: border-box;
        border: solid 1px #ccc;
        border-bottom: none;
        border-radius: 4px 4px 0 0;
        background: #eee;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraggableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
