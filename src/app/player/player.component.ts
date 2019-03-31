import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player-data',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() playerItem;

  showPlayer(playerItem) {
    console.log('Show Player', playerItem);
  }

  deletePlayer(playerItem) {
    console.log('Delete Player', playerItem);
  }

  constructor() { }

  ngOnInit() {
  }

}
