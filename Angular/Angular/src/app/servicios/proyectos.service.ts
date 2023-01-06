import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../models/proyectos';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getProyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(`${this.apiServerUrl}/proyectos/proyectos`);     
  }

  public updateProyectos(proyectos:Proyectos):Observable<Proyectos>{
    return this.http.put<Proyectos>(`${this.apiServerUrl}/proyectos/update`,proyectos);
 
 }


 public deleteProyectos(id:number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/proyectos/borrar/${id}`);
}

public crearProyectos(proyectos:Proyectos):Observable<Proyectos>{
  return this.http.post<Proyectos>(`${this.apiServerUrl}/proyectos/crearpro`,proyectos);
}

}
