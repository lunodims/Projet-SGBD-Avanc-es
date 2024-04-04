// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Ajout de standalone: true
})
export class AppComponent {
  // Votre code AppComponent
}

// app.module.ts

// AppModule n'est plus nécessaire si AppComponent est le seul composant autonome

// Si vous avez d'autres composants ou des fournisseurs à gérer, vous pouvez conserver AppModule et importer AppComponent

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [],
  /*bootstrap: [AppComponent]*/
})
export class AppModule { }
