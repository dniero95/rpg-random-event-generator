import { Injectable } from '@angular/core';
import { dsv } from 'd3-fetch';
import { VampireDowntimeElement } from '../interfaces/vampire-downtime-element';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RowService {
  constructor() {}

  vampireDowntimeRows: VampireDowntimeElement[] = [];

  async generateRandomRow() {
    const data = await dsv(';', '../../assets/tavola.csv');

    const turfes: string[] = [];
    const eventTypes: string[] = [];
    const rewards: string[] = [];
    const rewardNumberRolls: number[] = [];
    const npcFactions: string[] = [];
    const requiredRolls: string[] = [];

    let row: VampireDowntimeElement;

    data.forEach((row) => {
      if (typeof row['Turf'] === 'string' && row['Turf'] !== '') {
        turfes.push(row['Turf']);
      }
      if (typeof row['Event Type'] === 'string' && row['Event Type'] !== '') {
        eventTypes.push(row['Event Type']);
      }
      if (typeof row['Reward'] === 'string' && row['Reward'] !== '') {
        rewards.push(row['Reward']);
      }
      if (
        typeof row['Reward Number Roll'] === 'string' &&
        row['Reward Number Roll'] !== ''
      ) {
        rewardNumberRolls.push(+row['Reward Number Roll']);
      }
      if (typeof row['NPC Faction'] === 'string' && row['NPC Faction'] !== '') {
        npcFactions.push(row['NPC Faction']);
      }
      if (
        typeof row['Required Roll'] === 'string' &&
        row['Required Roll'] !== ''
      ) {
        requiredRolls.push(row['Required Roll']);
      }
    });

    row = {
      position: this.vampireDowntimeRows.length,
      turf: turfes[Math.floor(Math.random() * turfes.length)],
      eventType: eventTypes[Math.floor(Math.random() * eventTypes.length)],
      reward: rewards[Math.floor(Math.random() * rewards.length)],
      rewardNumberRoll:
        rewardNumberRolls[Math.floor(Math.random() * rewardNumberRolls.length)],
      npcFaction: npcFactions[Math.floor(Math.random() * npcFactions.length)],
      requiredRoll:
        requiredRolls[Math.floor(Math.random() * requiredRolls.length)],
    };

    this.vampireDowntimeRows.push(row);

    // console.log(this.vampireDowntimeRows);
    // console.log(this.data);

    // return row;
  }

  doSomething(): Observable<VampireDowntimeElement[]> {
    // commonly something like:
    // return this.httpClient.get('https://example.org/rest-api/items/');
    this.generateRandomRow();

    return of(this.vampireDowntimeRows);
  }
}
