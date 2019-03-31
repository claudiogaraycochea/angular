import { Component, OnInit } from '@angular/core';
import { Player } from '../class/player';
import { DataService } from '../service/data.service';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  //playerList = ['Duncan','Parker','Ginobili'];
  active: boolean = true;
  team: string = 'Spurs';
  playerList: Player[];
  posts = [];

  constructor(private dataService: DataService) { 
    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
    this.playerList = [
      new Player(21, 'Tim', 'Duncan'),
      new Player(9, 'Tony', 'Parker'),
      new Player(20, 'Manu', 'Ginobili')
    ];
    
  }

  addPlayer(inpFirstName,inpLastName,inpNumber) {
    console.log('Add Player', inpFirstName.value, inpLastName.value, inpNumber.value);
    this.playerList.push(new Player(inpNumber.value, inpFirstName.value, inpLastName.value));
    inpNumber.value= '';
    inpFirstName.value= '';
    inpLastName.value= '';
    inpFirstName.focus();
    return false;
  }

  ngOnInit() {
    console.log('PlayerList: ngOnInit');
  }

}
