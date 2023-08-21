import { Injectable } from '@angular/core';
import { dsv } from 'd3-fetch'
import { VampireDowntimeElement } from '../interfaces/vampire-downtime-element';
@Injectable({
  providedIn: 'root'
})
export class RowService {

  constructor() { }

  data = dsv(';','../../assets/tavola.csv');

  vampireDowntimeRows: VampireDowntimeElement[] = [
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

  generateRandomRow():VampireDowntimeElement{
    const row: VampireDowntimeElement = {
      position: 0,
      turf: '19th Floor',
      eventType: 'Assault',
      reward: 'Coin',
      rewardNumberRoll: 1,
      npcFaction: 'Werewolves',
      requiredRoll: 'Physical',
    };
    console.log(row);
    
    return row;
  }

}
