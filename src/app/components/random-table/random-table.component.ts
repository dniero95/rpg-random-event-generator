import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VampireDowntimeElement } from 'src/app/interfaces/vampire-downtime-element';
import { RowService } from 'src/app/services/row.service';

@Component({
  selector: 'app-random-table',
  templateUrl: './random-table.component.html',
  styleUrls: ['./random-table.component.scss'],
})
export class RandomTableComponent  {
  displayedColumns: string[] = [
    'position',
    'Turf',
    'Event type',
    'Reward',
    'Reward Number Roll',
    'NPC Faction',
    'Required Roll',
  ];
  // dataSource!:VampireDowntimeElement[];
  dataSource = new MatTableDataSource<VampireDowntimeElement>([]);
  public rowService = inject(RowService);
  private cdr = inject(ChangeDetectorRef);


  test() {

    this.rowService.doSomething().subscribe((data: VampireDowntimeElement[]) => {
      this.dataSource.data = data;
    });
  }
}
