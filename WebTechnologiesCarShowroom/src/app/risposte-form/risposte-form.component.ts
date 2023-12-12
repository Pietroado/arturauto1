import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-risposte-form',
  templateUrl: './risposte-form.component.html',
  styleUrls: ['./risposte-form.component.css']
})
export class RisposteFormComponent {
  
forms:any
  constructor(private form: FormService) {}


  ngOnInit(): void {
    this.form.getForm('https://carseller-fd4e8-default-rtdb.europe-west1.firebasedatabase.app/form.json').subscribe
    ((data:any)=>{this.forms=Object.keys(data).map((key)=>{data[key]['id']=key ;
    return data[key]})
   console.log(this.forms)})
  }


  onDeleteForm(id:string){
    this.form.deleteForm('https://carseller-fd4e8-default-rtdb.europe-west1.firebasedatabase.app/form',id).subscribe(data=>{console.log(data)});

  
    setTimeout(() => {
      // Il comando per ricaricare la pagina dopo 3 secondi
      console.log('Ricaricamento della pagina dopo 3 secondi');
      window.location.reload(); // Ricarica la pagina
    }, 1000); // Ricarica la pagina
  
  }
 
  
}
