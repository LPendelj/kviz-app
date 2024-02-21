import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {

  }

  playersSelected: boolean = false;
  playersNumber: number = 0;

  playersArray: number[] = [0, 2, 3, 4, 5, 6]


  checkPlayersNumber(event: any){
    console.log(event);
    console.log(this.playersNumber)

    if(this.playersNumber > 0)  {
      this.playersSelected = true
    } else {
      this.playersSelected = false
    }
  }
}



