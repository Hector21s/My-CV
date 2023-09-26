import { Component } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private headerService: HeaderService){}

  name : string = "Hector Emmanuel Mayahua Reyes";
  vision : string = "Sobrevivir";
  contacto1 : string = "hmayahua23@gmail.com";
  contacto2 : string = "272-122 86 771";
  contacto3 : string="gitHub";
  direccion : string="Ixhuatlancillo, Ver";
  foto : string = "https://firebasestorage.googleapis.com/v0/b/cvmy-a71af.appspot.com/o/descarga.png?alt=media&token=6e73875c-896a-4d54-a927-1fb00572b3af";
  redsocial: string ="TickTock";

  ngOnInit(): void{
    this.headerService.getHeader()
    .subscribe( (data: any) => {
      console.log(data)
      //alert(data)
      this.name = data.name;
      this.vision = data.mision;
      this.foto = data.foto; 
      this.contacto1 = data.email; 
      this.contacto2 = data.celular;
      this.contacto3 = data.redsocial;
      this.direccion = data.ubicacion;
      this.redsocial = data.redsocial;
    });
  }     
}
