import { Component } from '@angular/core';
import { CaricareAutoService } from '../caricare-auto.service';
import { StorageReference, getDownloadURL, getStorage, ref, uploadBytes, } from 'firebase/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { getDatabase,  onValue } from "firebase/database";
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-carica-auto',
  templateUrl: './carica-auto.component.html',
  styleUrls: ['./carica-auto.component.css']
})
export class CaricaAutoComponent {

  addcarform!: FormGroup; 
  
  //imgRef: StorageReference | null = null;
  downloadURL: string | null = null;
  downloadURL1: string | null = null;
  downloadURL2: string | null = null;
  downloadURL3: string | null = null;
  downloadURL4: string | null = null;
  downloadURL5: string | null = null;
  downloadURL6: string | null = null;

  storage = getStorage();

  imgRef=ref(this.storage, "images/")
  imgRef1=ref(this.storage, "images/")
  imgRef2=ref(this.storage, "images/")
  imgRef3=ref(this.storage, "images/")
  imgRef4=ref(this.storage, "images/")
  imgRef5=ref(this.storage, "images/")
  imgRef6=ref(this.storage, "images/")
  
  //provare a spostare il ref fuori come fatto con downoald url
  
  constructor(private car:CaricareAutoService ){}


  uploadImage($event: any) {
    const file=$event.target.files[0];
    console.log(file)
    
    this.imgRef=ref(this.storage, "images/"+file.name)
    

  uploadBytes(this.imgRef,file).then(response=>console.log(response)).catch(error=>console.log(error));

  
}

uploadImage1($event: any) {
  const file=$event.target.files[0];
  console.log(file)
  
  this.imgRef1=ref(this.storage, "images/"+file.name)
  

uploadBytes(this.imgRef1,file).then(response=>console.log(response)).catch(error=>console.log(error));


}






uploadImage2($event: any) {
  const file=$event.target.files[0];
  console.log(file)
  
  this.imgRef2=ref(this.storage, "images/"+file.name)
  

uploadBytes(this.imgRef2,file).then(response=>console.log(response)).catch(error=>console.log(error));


}

uploadImage3($event: any) {
  const file=$event.target.files[0];
  console.log(file)
  
  this.imgRef3=ref(this.storage, "images/"+file.name)
  

uploadBytes(this.imgRef3,file).then(response=>console.log(response)).catch(error=>console.log(error));


}

uploadImage4($event: any) {
  const file=$event.target.files[0];
  console.log(file)
  
  this.imgRef4=ref(this.storage, "images/"+file.name)
  

uploadBytes(this.imgRef4,file).then(response=>console.log(response)).catch(error=>console.log(error));


}

uploadImage5($event: any) {
  const file=$event.target.files[0];
  console.log(file)
  
  this.imgRef5=ref(this.storage, "images/"+file.name)
  

uploadBytes(this.imgRef5,file).then(response=>console.log(response)).catch(error=>console.log(error));


}

uploadImage6($event: any) {
  const file=$event.target.files[0];
  console.log(file)
  
  this.imgRef6=ref(this.storage, "images/"+file.name)
  

uploadBytes(this.imgRef6,file).then(response=>console.log(response)).catch(error=>console.log(error));


}


getDownload(){
  getDownloadURL(this.imgRef)
.then((url) => {this.downloadURL=url
  
})
}

getDownload1(){
  getDownloadURL(this.imgRef)
.then((url) => {this.downloadURL1=url
  
})
}

getDownload2(){
  getDownloadURL(this.imgRef2)
.then((url) => {this.downloadURL2=url
  
})
}
getDownload3(){
  getDownloadURL(this.imgRef3)
.then((url) => {this.downloadURL3=url
  
})
}

getDownload4(){
  getDownloadURL(this.imgRef)
.then((url) => {this.downloadURL4=url
  
})
}

getDownload5(){
  getDownloadURL(this.imgRef)
.then((url) => {this.downloadURL5=url
  
})
}

getDownload6(){
  getDownloadURL(this.imgRef)
.then((url) => {this.downloadURL6=url
  
})
}

ngOnInit(): void {
  this.addcarform=new FormGroup({
    nome: new FormControl(null, Validators.required ),
    prezzo: new FormControl(null, Validators.required ),
    stato: new FormControl(null, Validators.required ),
    immatricolazione: new FormControl(null, Validators.required ),
    porte: new FormControl(null, Validators.required ),
    chilometri: new FormControl(null, Validators.required ),
    alimemtazione: new FormControl(null, Validators.required ),
    cambio: new FormControl(null, Validators.required ),
    colore: new FormControl(null, Validators.required ),
    interno: new FormControl(null, Validators.required ),
    cilindrata: new FormControl(null, Validators.required ),
    potenza: new FormControl(null, Validators.required ),
    descrizione_breve: new FormControl(null, Validators.required ),
    descrizione: new FormControl(null, Validators.required ),

    
    
    
  }) }

onSubmit(){
  console.log(this.addcarform);

  
  
  this.car.insertCar('https://carseller-fd4e8-default-rtdb.europe-west1.firebasedatabase.app/car.json' , 
  {nome:this.addcarform.value.nome,
    prezzo:this.addcarform.value.prezzo,
    stato:this.addcarform.value.stato,
    immatricolaione:this.addcarform.value.immatricolaione,
    porte:this.addcarform.value.porte,
    chilometri:this.addcarform.value.chilometri,
    alimentazione:this.addcarform.value.alimemtazione,
    cambio:this.addcarform.value.cambio,
    colore:this.addcarform.value.colore,
    interno:this.addcarform.value.interno,
    cilindrata:this.addcarform.value.cilindrata,
    potenza:this.addcarform.value.potenza,
    descrizione_breve:this.addcarform.value.descrizione_breve,
    descizione:this.addcarform.value.descizione,


   foto:this.downloadURL,
   foto1:this.downloadURL1,
   foto2:this.downloadURL2,
   foto3:this.downloadURL3,
   foto4:this.downloadURL4,
   foto5:this.downloadURL5,
   foto6:this.downloadURL6,
  
  
 }).subscribe(data =>{
    console.log(data)
  })
}
}