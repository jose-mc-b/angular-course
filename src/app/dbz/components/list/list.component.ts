import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {

@Input()
  public characterList: Character[] =[
{name: 'Vegeta',power: 130},
]

@Output()
onDelete: EventEmitter<number> = new EventEmitter(); 

onDeleteCharacter(index: number): void {
  console.log(index)
  this.onDelete.emit( index );

}
}
