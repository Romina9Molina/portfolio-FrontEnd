import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/misdatos';

@Injectable({
  providedIn: 'root'
})
export class MisdatosService {
private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getMisDatos():Observable<Persona>{
    return this.http.get<Persona>(`${this.apiServerUrl}/usuario/id/1`);
  }

  public updateMisDatos(persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.apiServerUrl}/usuario/update`,persona);
  }
  
}
