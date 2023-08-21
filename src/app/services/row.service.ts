import { Injectable } from '@angular/core';
import { dsv } from 'd3-fetch'
@Injectable({
  providedIn: 'root'
})
export class RowService {

  constructor() { }

  data = dsv(';','../../assets/tavola.csv');


}
