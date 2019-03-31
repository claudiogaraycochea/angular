import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player-data',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() playerName;
  constructor() { }

  ngOnInit() {
  }

}
