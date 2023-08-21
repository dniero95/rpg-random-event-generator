import { Component, OnInit, inject } from '@angular/core';
import { VampireDowntimeElement } from 'src/app/interfaces/vampire-downtime-element';
import { RowService } from 'src/app/services/row.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const DATA: VampireDowntimeElement[] = [

  {
    position: 0,
    turf: '19th Floor',
    eventType: 'Assault',
    reward: 'Coin',
    rewardNumberRoll: 1,
    npcFaction: 'Werewolves',
    requiredRoll: 'Physical',
  },
];

@Component({
  selector: 'app-random-table',
  templateUrl: './random-table.component.html',
  styleUrls: ['./random-table.component.scss'],
})
export class RandomTableComponent implements OnInit {
  displayedColumns: string[] = ['position','Turf', 'Event type', 'Reward', 'Reward Number Roll', 'NPC Faction', 'Required Roll'];
  dataSource = DATA;
  public rowService = inject(RowService);

  ngOnInit(): void {
    console.log(this.rowService.data);
  }
}
