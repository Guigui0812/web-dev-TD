import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightService {

  private lightArray: any[] = [{
    id: 1,
    toggled: false,
    title: "Lampe 1"
  }, {
    id: 2,
    toggled: false,
    title: "Lampe 2"
  }, {
    id: 3,
    toggled: false,
    title: "Lampe 3"
  }];

  private nextId: number = 4;



  constructor() {
  }

  getAllLight() {
    return this.lightArray;
  }

  addLight(lightName: string) {
    let light = {
      id: this.nextId,
      toggled: false,
      title: lightName
    };

    this.lightArray.push(light);
    this.nextId++;
  }

  removeLight(id: number) {
    this.lightArray = this.lightArray.filter(light => light.id != id);
  }
}
