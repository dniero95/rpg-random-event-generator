import { Component, OnInit, inject } from '@angular/core';
import { VampireDowntimeElement } from 'src/app/interfaces/vampire-downtime-element';
import { RowService } from 'src/app/services/row.service';


@Component({
  selector: 'app-random-table',
  templateUrl: './random-table.component.html',
  styleUrls: ['./random-table.component.scss'],
})
export class RandomTableComponent implements OnInit {
  displayedColumns: string[] = ['position','Turf', 'Event type', 'Reward', 'Reward Number Roll', 'NPC Faction', 'Required Roll'];
  dataSource!:VampireDowntimeElement[];
  public rowService = inject(RowService);

  ngOnInit(): void {
    this.dataSource = this.rowService.vampireDowntimeRows;
  }
}
