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

}
