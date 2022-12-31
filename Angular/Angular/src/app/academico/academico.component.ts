import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Educacion} from "src/app/models/educacion"
import { EducacionService } from '../servicios/educacion.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-academico',
  templateUrl: './academico.component.html',
  styleUrls: ['./academico.component.css']
})
export class AcademicoComponent implements OnInit {
  public educaciones: Educacion []|undefined;
public editEducacion: Educacion |undefined;

  constructor(private educacionService : EducacionService) { }

  ngOnInit(): void {
    
    this.getEducacion();
    }
    public getEducacion():void{
      this.educacionService.getEducacion().subscribe({
        next: (response: Educacion[]) =>{
          this.educaciones=response;
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
  }


/*public  transformacion(date:Date):any{
   let latest_date=this.datepipe.transform(date,"dd/MM/yyyy");
  return latest_date;
} */

}
