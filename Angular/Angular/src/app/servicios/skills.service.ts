import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../models/skills';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.apiServerUrl}/skills/skills`);     
  }

  public updateSkills(skills:Skills):Observable<Skills>{
    return this.http.put<Skills>(`${this.apiServerUrl}/skills/update`,skills);
  }

  public deleteSkills(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/skills/borrar/${id}`);
  }
  
  public crearSkills(skills:Skills):Observable<Skills>{
    return this.http.post<Skills>(`${this.apiServerUrl}/skills/crearskill`,skills);
  }
  

}
