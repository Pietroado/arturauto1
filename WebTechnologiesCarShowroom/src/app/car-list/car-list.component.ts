import { Component } from '@angular/core';
import { CaricareAutoService } from '../caricare-auto.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {


  cars:any
  
  mostraParte: boolean = false;

  
  constructor( private car1:CaricareAutoService, private route:ActivatedRoute, private router: Router){}

  

  

  ngOnInit(): void {
    this.car1.getCar('https://carseller-fd4e8-default-rtdb.europe-west1.firebasedatabase.app/car.json').subscribe
    ((data:any)=>{this.cars=Object.keys(data).map((key)=>{return data[key]})})

    this.route.params.subscribe(params => {
      // Leggi il parametro dall'URL e gestisci la visualizzazione della parte specifica
      if (params['id'] === null) {
        console.log(this.mostraParte)
        this.mostraParte = true;
      } else {
        this.mostraParte = false;
      }
    });
  }

}
