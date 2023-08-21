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
export class RandomTableComponent implements OnInit, OnChanges {
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

  ngOnInit(): void {
    // this.dataSource = this.rowService.vampireDowntimeRows;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      console.log(propName);
    }
  }

  test() {
    // this.rowService.generateRandomRow();
    // // this.dataSource = this.rowService.vampireDowntimeRows;
    // this.cdr.detectChanges();
    // console.log(this.dataSource);

    this.rowService.doSomething().subscribe((data: VampireDowntimeElement[]) => {
      this.dataSource.data = data;
    });
  }
}
