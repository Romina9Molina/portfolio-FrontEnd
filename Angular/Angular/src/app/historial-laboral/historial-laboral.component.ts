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


  public updateExperiencia():void{
    this.experienciaService.updateExperiencia(this.editExperiencia!).subscribe({
      next: (response: Experiencia) =>{
        this.editExperiencia=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }


  public createExperiencia():void{
    this.experienciaService.crearExperiencia(this.editExperiencia!).subscribe({
      next: (response: Experiencia) =>{
        this.editExperiencia=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public deleteExperiencia(id:number):void{
    this.experienciaService.deleteExperiencia(id).subscribe({
      next: (response: void) =>{
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }


   public openModal1(){

  
    // Ventana modal
  let modal:any = document.getElementById("ModalExperienciaEditar");
  
  
  
  // Botón que abre el modal
  let boton:any = document.getElementById("abrirModalEditar1");
  
  
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
