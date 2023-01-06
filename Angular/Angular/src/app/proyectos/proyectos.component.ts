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



  public updateProyectos():void{
    this.proyectosService.updateProyectos(this.editProyectos!).subscribe({
      next: (response: Proyectos) =>{
        this.editProyectos=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }


  public createProyectos():void{
    this.proyectosService.crearProyectos(this.editProyectos!).subscribe({
      next: (response: Proyectos) =>{
        this.editProyectos=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public deleteProyectos(id:number):void{
    this.proyectosService.deleteProyectos(id).subscribe({
      next: (response: void) =>{
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }


  public openModal4(){

  
    // Ventana modal
  let modal:any = document.getElementById("ModalProyectosEditar");
  
  
  
  // Botón que abre el modal
  let boton:any = document.getElementById("abrirModalEditar4");
  
  
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
