import { Component, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VampireDowntimeElement } from 'src/app/interfaces/vampire-downtime-element';
import { RowService } from 'src/app/services/row.service';

@Component({
  selector: 'app-random-table',
  templateUrl: './random-table.component.html',
  styleUrls: ['./random-table.component.scss'],
})
export class RandomTableComponent {
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

  test() {
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
      }else if(element === 'Required Roll'){
        text += `${element}`;
      }
    });
    text += '\n';

    this.rowService.vampireDowntimeRows.forEach(element=>{
      text += `${element.turf};${element.eventType};${element.reward};${element.rewardNumberRoll};${element.npcFaction};${element.requiredRoll}\n`;
    })
    return text;
  }
}
