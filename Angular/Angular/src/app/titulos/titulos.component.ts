import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Acerca} from "src/app/models/acerca"
import { AcercaService } from '../servicios/acerca.service';


@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {

  public acerca: Acerca |undefined;
public editAcerca: Acerca |undefined;

  constructor(private acercaService : AcercaService) { }

  ngOnInit(): void {

    this.getAcerca();
  }
  public getAcerca():void{
    this.acercaService.getAcerca().subscribe({
      next: (response: Acerca) =>{
        this.acerca=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })


  }

}
