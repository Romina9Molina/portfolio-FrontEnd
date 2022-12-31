import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Acerca } from '../models/acerca';


@Injectable({
  providedIn: 'root'
})
export class AcercaService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAcerca():Observable<Acerca>{
    return this.http.get<Acerca>(`${this.apiServerUrl}/acerca/id/4`);     //recordar que el id puede cambiar de numero
  }

  public updateAcerca(acerca:Acerca):Observable<Acerca>{
    return this.http.put<Acerca>(`${this.apiServerUrl}/acerca/update`,acerca);
  }
}

