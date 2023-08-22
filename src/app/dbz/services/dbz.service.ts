import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] =[
    {id: uuid(), name: 'Krilin', power:39},
    {id: uuid(), name: 'Goku', power: 160},
    {id: uuid(), name: 'Trunks',power: 20},
];


 onNewCharacter(character: Character):void {
    this.characters.push(character);
}

onDeleteCharacter(index: number):void {
    this.characters.splice(index,1);
}
}
