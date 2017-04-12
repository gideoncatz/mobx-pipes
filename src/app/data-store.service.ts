import { Injectable } from '@angular/core';
import { observable } from 'mobx';


@Injectable()
export class DataStoreService {

  // private names: string[] = ['Mickey','Donald','Goofy','Pluto'];             // Works with the pipe
  @observable private names: string[] = ['Mickey','Donald','Goofy','Pluto'];    // Doesn't works with the pipe
  // private names = observable(['Mickey','Donald','Goofy','Pluto']);           // Doesn't works with the pipe

  public getNames() {
    return this.names;
  }
}
