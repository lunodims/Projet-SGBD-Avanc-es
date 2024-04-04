import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    // Vos déclarations de composants
  ],
  imports: [
    CommonModule // Ajoutez CommonModule ici
  ],
  providers: [
    // Vos services
  ]
})
export class OpencardDataModule { }

// opencard-data.component.ts
import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-opencard-data',
  templateUrl: './opencard-data.component.html',
  styleUrls: ['./opencard-data.component.css']
})
export class OpencardDataComponent implements OnInit {
  data!: any[]; // Marquer la propriété comme étant définitivement assignée avec '!' 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('/api/opencarddata').subscribe(data => {
      this.data = data;
    });
  }
}

