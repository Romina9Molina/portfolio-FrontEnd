import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/educaciones`);     
  }

  public updateEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/update`,educacion);
  }

  public deleteEducacion(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/borrar/${id}`);
  }
  
  public crearEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/crearedu`,educacion);
  }
  
  
}


