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

  public updateEducacion():void{
    this.educacionService.updateEducacion(this.editEducacion!).subscribe({
      next: (response: Educacion) =>{
        this.editEducacion=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })

  }

    
  public createEducacion():void{
    this.educacionService.crearEducacion(this.editEducacion!).subscribe({
      next: (response: Educacion) =>{
        this.editEducacion=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public deleteEducacion(id:number):void{
    this.educacionService.deleteEducacion(id).subscribe({
      next: (response: void) =>{
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }



  public openModal2(){

  
    // Ventana modal
  let modal:any = document.getElementById("ModalEducacionEditar");
  
  
  
  // Botón que abre el modal
  let boton:any = document.getElementById("abrirModalEditar2");
  
  
      // Hace referencia al elemento <span> que tiene la X que cierra la ventana
  let span: any = document.getElementsByClassName("cerrar")[0];
  
  // Cuando el usuario hace click en el botón, se abre la ventana
  boton.addEventListener("click",function() {
    modal.style.display = "block";
   
  });
  
  // Si el usuario hace click en la x, la ventana se cierra
  span.addEventListener("click",function() {
    modal.style.display = "none";
  });
  
  // Si el usuario hace click fuera de la ventana, se cierra.
  window.addEventListener("click",function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
  



  }






     }

/*public  transformacion(date:Date):any{
   let latest_date=this.datepipe.transform(date,"dd/MM/yyyy");
  return latest_date;
} */


