import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Skills} from "src/app/models/skills"
import { SkillsService } from '../servicios/skills.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  public skills: Skills []|undefined;
  public editSkills: Skills |undefined;
  
  constructor(private skillsService : SkillsService) { }

  ngOnInit(): void {

    this.getSkills();
    }
    public getSkills():void{
      this.skillsService.getSkills().subscribe({
        next: (response: Skills[]) =>{
          this.skills=response;
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
  }


  public updateSkills():void{
    this.skillsService.updateSkills(this.editSkills!).subscribe({
      next: (response: Skills) =>{
        this.editSkills=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public createSkills():void{
    this.skillsService.crearSkills(this.editSkills!).subscribe({
      next: (response: Skills) =>{
        this.editSkills=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public deleteSkills(id:number):void{
    this.skillsService.deleteSkills(id).subscribe({
      next: (response: void) =>{
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }


  public openModal3(){

  
    // Ventana modal
  let modal:any = document.getElementById("ModalSkillsEditar");
  
  
  
  // Botón que abre el modal
  let boton:any = document.getElementById("abrirModalEditar3");
  
  
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
