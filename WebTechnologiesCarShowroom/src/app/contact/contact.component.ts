import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  homeform!: FormGroup; 
  formSubmitted = false;
  
  //form in questo caso si riferisce al service che ho creato
  constructor(private form: FormService) {}
  
 ngOnInit(): void {
  this.homeform=new FormGroup({
    nome: new FormControl(null, Validators.required ),
    cognome: new FormControl(null,Validators.required),
    email: new FormControl(null,Validators.required),
    messaggio: new FormControl(null,Validators.required)
  }) 

  
 }
onSubmit(){
  console.log(this.homeform);
  
  this.form.insertForm('https://carseller-fd4e8-default-rtdb.europe-west1.firebasedatabase.app/form.json' , 
  {nome:this.homeform.value.nome,
  cognome:this.homeform.value.cognome,
  email:this.homeform.value.email,
  messaggio:this.homeform.value.messaggio
 }).subscribe(data =>{
    console.log(data)
  })



  if (this.homeform.valid) {
    // Simulazione di invio dei dati del form (puoi effettuare qui una chiamata HTTP)
    // ...

    // Messaggio di invio completato e azzeramento dei campi del form
    this.formSubmitted = true;
    this.homeform.reset(); // Azzera i valori dei campi del form
  }

}

}
