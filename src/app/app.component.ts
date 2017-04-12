import {Component, OnInit} from '@angular/core';
import {DataStoreService} from "./data-store.service";

@Component({
  selector: 'app-root',
  template: `
    <h3>Here are some names of Disney's characters:</h3>
    <ul>
      <li *ngFor="let name of dataStore.getNames() | slice:0:2">{{name}}</li>
      <!--<li *ngFor="let name of dataStore.getNames()">{{name}}</li>-->
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log(this.dataStore.getNames());
  }

  private dataStore: DataStoreService;

  constructor(dataStore: DataStoreService) {
    this.dataStore = dataStore;
  }
}
