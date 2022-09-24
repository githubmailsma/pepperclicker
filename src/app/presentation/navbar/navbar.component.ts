import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameDataRepository } from 'src/app/core/repositories/gamedata.repository';
import { PlayerDataRepository } from 'src/app/core/repositories/playerdata.repository';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() DoUpdateSubscriptions = new EventEmitter();

  constructor(private playerDataRepository: PlayerDataRepository, private gameDataRepository: GameDataRepository) { }

  ngOnInit(): void {
  }

  OnResetClick() {
    this.playerDataRepository.Reset();
    this.DoUpdateSubscriptions.emit(0);
  }
}
