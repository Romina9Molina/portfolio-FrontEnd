import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Persona} from "src/app/models/misdatos"
import { MisdatosService } from '../servicios/misdatos.service';

@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.component.html',
  styleUrls: ['./misdatos.component.css']
})
export class MisdatosComponent implements OnInit {


public persona: Persona |undefined;
public editPersona: Persona |undefined;
  constructor( private misdatosService : MisdatosService) { }

  ngOnInit(): void {
    this.getMisDatos();
    }
    public getMisDatos():void{
      this.misdatosService.getMisDatos().subscribe({
        next: (response: Persona) =>{
          this.persona=response;
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }


    /*public updateMisDatos():void{
      this.misdatosService.updateMisDatos(this.persona).subscribe({
        next: (response: Persona) =>{
          this.persona=response;
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }*/
  }


