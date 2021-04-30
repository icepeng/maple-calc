import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LayerService } from '../layer.service';
import { skillData, SkillData } from '../models/skill-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
      .search-container {
        border: solid 1px #ccc;
        border-radius: 0px 0px 4px;
        background: white;
        padding: 20px 10px;
        font-size: 14px;
      }

      form {
        display: flex;
      }

      input {
        border: none;
        border-bottom: 1px solid black;
        margin-left: 8px;
        margin-right: 8px;
      }

      .skill-input {
        flex: 1 1 auto;
      }

      .skill-list {
        height: 320px;
        overflow-y: scroll;
      }

      .clickable {
        cursor: pointer;
      }
      .clickable:hover {
        background: rgba(0, 0, 0, 0.04);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  layers$ = this.layerService.layers$;
  skillList$: Observable<SkillData[]>;
  formGroup = new FormGroup({
    job: new FormControl(''),
    skill: new FormControl(''),
  });

  constructor(private layerService: LayerService) {}

  ngOnInit(): void {
    this.skillList$ = combineLatest([
      this.layerService.layers$,
      this.formGroup.valueChanges.pipe(startWith(this.formGroup.value)),
    ]).pipe(
      map(([layers, form]) =>
        skillData.filter(
          s =>
            s.job.includes(form.job) &&
            s.name.includes(form.skill) &&
            !layers.find(x => x.skill === s.name),
        ),
      ),
    );
  }

  addLayer(skill: SkillData) {
    this.layerService.addLayer(skill);
  }
}
