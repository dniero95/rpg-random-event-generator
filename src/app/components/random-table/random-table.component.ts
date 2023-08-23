import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { VampireDowntimeElement } from 'src/app/interfaces/vampire-downtime-element';
import { RowService } from 'src/app/services/row.service';

@Component({
  selector: 'app-random-table',
  templateUrl: './random-table.component.html',
  styleUrls: ['./random-table.component.scss'],
})
export class RandomTableComponent implements AfterViewInit {
  // lifecycle hooks

  ngAfterViewInit() {
    console.log(this.rowService.vampireDowntimeRows);
    for (let index = 0; index < 7; index++) {
      this.addRow();
    }
    console.log(this.rowService.vampireDowntimeRows);
    this.dataSource = new MatTableDataSource(
      this.rowService.vampireDowntimeRows
    );
    console.log(this.dataSource.data);
    this.dataSource.paginator = this.paginator;
  }

  // properties

  displayedColumns: string[] = [
    'position',
    'Turf',
    'Event type',
    'Reward',
    'Reward Number Roll',
    'NPC Faction',
    'Required Roll',
  ];

  dataSource = new MatTableDataSource<VampireDowntimeElement>();
  public rowService = inject(RowService);

  @ViewChild('paginator')
  paginator!: MatPaginator;

  // methods

  addRow() {
    this.rowService
      .getVampireDowntimeRows()
      .subscribe((data: VampireDowntimeElement[]) => {
        this.dataSource.data = data;
      });
  }

  copyTableContentAsCSV(): string {
    let text = '';
    this.displayedColumns.forEach((element) => {
      if (element !== 'position' && element !== 'Required Roll') {
        text += `${element};`;
      } else if (element === 'Required Roll') {
        text += `${element}`;
      }
    });
    text += '\n';

    this.rowService.vampireDowntimeRows.forEach((element) => {
      text += `${element.turf};${element.eventType};${element.reward};${element.rewardNumberRoll};${element.npcFaction};${element.requiredRoll}\n`;
    });
    return text;
  }
}
