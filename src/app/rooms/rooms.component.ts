import { Component } from '@angular/core';
import { Room } from './rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  hotelName = 'MySelf';
  numberofRooms = 0;

  hideRooms = false;
  rooms:Room={
    totalRooms:20,
    availableRooms:10,
    bookedRooms:5,
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
