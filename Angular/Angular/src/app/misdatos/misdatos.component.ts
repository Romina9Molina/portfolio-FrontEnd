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
public editPersona: Persona | undefined;
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


    public updateMisDatos():void{
      this.misdatosService.updateMisDatos(this.editPersona!).subscribe({
        next: (response: Persona) =>{
          this.persona=response;
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }



    public openModalPersona(){

  
      // Ventana modal
    let modal:any = document.getElementById("ModalPersonaEditar");
    
    
    
    // Botón que abre el modal
    let boton:any = document.getElementById("abrirModalEditarPersona");
    
    
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


