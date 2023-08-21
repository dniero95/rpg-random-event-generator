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

    const rewardValue = this.getRandomArrayElement(rewards);

    row = {
      position: this.vampireDowntimeRows.length,
      turf: this.getRandomArrayElement(turfes),
      eventType: this.getRandomArrayElement(eventTypes),
      reward: rewardValue,
      rewardNumberRoll: rewardValue.includes('and')
        ? [
            this.getRandomArrayElement(rewardNumberRolls),
            this.getRandomArrayElement(rewardNumberRolls),
          ]
        : this.getRandomArrayElement(rewardNumberRolls),
      npcFaction: this.getRandomArrayElement(npcFactions),
      requiredRoll: this.getRandomArrayElement(requiredRolls),
    };

    this.vampireDowntimeRows.push(row);
  }

  // use example at
  // https://stackblitz.com/edit/angular-mat-table-data-source-update-function?file=app%2Ftable-pagination-example.ts
  getVampireDowntimeRows(): Observable<VampireDowntimeElement[]> {
    this.generateRandomRow();
    return of(this.vampireDowntimeRows);
  }

  private getRandomArrayElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
