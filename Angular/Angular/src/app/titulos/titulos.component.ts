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

  
  public updateAcerca():void{
    this.acercaService.updateAcerca(this.editAcerca!).subscribe({
      next: (response: Acerca) =>{
        this.editAcerca=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }


  public createAcerca():void{
    this.acercaService.crearAcerca(this.editAcerca!).subscribe({
      next: (response: Acerca) =>{
        this.editAcerca=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public deleteAcerca(id:number):void{
    this.acercaService.deleteAcerca(id).subscribe({
      next: (response: void) =>{
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }


public openModal(){

  
  // Ventana modal
let modal:any = document.getElementById("ModalAcercaEditar");



// Botón que abre el modal
let boton:any = document.getElementById("abrirModalEditar");


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