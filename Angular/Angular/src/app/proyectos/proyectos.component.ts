import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Proyectos} from "src/app/models/proyectos"
import { ProyectosService } from '../servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {


  public proyectos: Proyectos []|undefined;
  public editProyectos: Proyectos |undefined;

  constructor(private proyectosService : ProyectosService) { }

  ngOnInit(): void {

    this.getProyectos();
    }
    public getProyectos():void{
      this.proyectosService.getProyectos().subscribe({
        next: (response: Proyectos[]) =>{
          this.proyectos=response;
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
  }

}
