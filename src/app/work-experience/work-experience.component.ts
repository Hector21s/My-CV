import { Component } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  
  work_experience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let work1 = {
          Fecha : "2018 - 2019",
          Ubicacion : "Orizaba, Ver",
          Puesto : "Ayudante de cocina y Lavatrastes",
          Empresa : "El mezon de Don camaron",
          Logros : [
            {Descripccion : "Ayudante del cocinero"},
            {Descripccion : "Lavar trastes"},
          ]
    };
    let work2 = {
      Fecha : "2019-2020",
      Ubicacion : "Orizaba, Ver",
      Puesto : "Obrero",
      Empresa : "Empacadora Cianca",
      Logros : [
        {Descripccion : "Elaboracion de prodcutos de origen animal a traves de maquinaria"},
        {Descripccion : "Carga y descarga de camiones"},
        
      ]
    };
    let work3 = {
      Fecha : "2020-Actual",
      Ubicacion : "Orizaba, Ver",
      Puesto : "Ayudante",
      Empresa : "Hot-Dogs Don Felipe",
      Logros : [
        {Descripccion : "Ayudante"},
      
      ]
    };
    let work4 = {
      Fecha : "2022-2023",
      Ubicacion : "Orizaba, Ver",
      Puesto : "Repartidor",
      Empresa : "Sistema de reparto Beep Beep",
      Logros : [
        {Descripccion : "Repartidor de comida"},
      
      ]
    };


    this.work_experience.push(work1);
    this.work_experience.push(work2);
    this.work_experience.push(work3);
    this.work_experience.push(work4);

  }


}