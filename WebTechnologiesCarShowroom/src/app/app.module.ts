import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlfaComponent } from './alfa/alfa.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { CarListComponent } from './car-list/car-list.component';
import { LoginComponent } from './login/login.component';
import { KiaComponent } from './kia/kia.component';
import { FiatComponent } from './fiat/fiat.component';
import { FordComponent } from './ford/ford.component';
import { OpelComponent } from './opel/opel.component';
import { ToyotaComponent } from './toyota/toyota.component';
import{HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { HomeAmministratoreComponent } from './home-amministratore/home-amministratore.component';
import { RisposteFormComponent } from './risposte-form/risposte-form.component';
import { CaricaAutoComponent } from './carica-auto/carica-auto.component';


const firebaseConfig = {
  apiKey: "AIzaSyAQzTs1qHvH9t4dF3CoGLD1oNIVnLQ8Ym4",
  authDomain: "carseller-fd4e8.firebaseapp.com",
  databaseURL: "https://carseller-fd4e8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "carseller-fd4e8",
  storageBucket: "gs://carseller-fd4e8.appspot.com",
  messagingSenderId: "339700463979",
  appId: "1:339700463979:web:596621eddb5c300222b42e"
};

@NgModule({
  declarations: [
    AppComponent,
    AlfaComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    InfoComponent,
    CarListComponent,
    LoginComponent,
    KiaComponent,
    FiatComponent,
    FordComponent,
    OpelComponent,
    ToyotaComponent,
    HomeAmministratoreComponent,
    RisposteFormComponent,
    CaricaAutoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
  const app = initializeApp(firebaseConfig);
  // Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

}
}
