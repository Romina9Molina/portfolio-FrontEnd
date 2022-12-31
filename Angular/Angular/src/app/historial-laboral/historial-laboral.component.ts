import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Experiencia} from "src/app/models/experiencia"
import { ExperienciaService } from '../servicios/experiencia.service';


@Component({
  selector: 'app-historial-laboral',
  templateUrl: './historial-laboral.component.html',
  styleUrls: ['./historial-laboral.component.css']
})
export class HistorialLaboralComponent implements OnInit {

  public experiencias: Experiencia[] |undefined;
public editExperiencia: Experiencia |undefined;

  constructor(private experienciaService : ExperienciaService) { }

  ngOnInit(): void {

    this.getExperiencia();
    }
    public getExperiencia():void{
      this.experienciaService.getExperiencia().subscribe({
        next: (response: Experiencia[]) =>{
          this.experiencias=response;
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
  }
  }


