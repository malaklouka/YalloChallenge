import { Component, OnInit } from '@angular/core';
import { AnimalsService } from './services/animals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  animals: any = [];


  constructor(private service: AnimalsService) { }

  ngOnInit() {
    this.service.getAnimals().subscribe((response: any) => {
      console.log(response)
      this.animals = response.items;
    })

  }
  exit() {
    window.location.reload();
  }
}


