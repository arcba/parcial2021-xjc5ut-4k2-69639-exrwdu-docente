import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { of } from 'rxjs';
import { Articulo } from '../models/articulo';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'https://pymesbackend.azurewebsites.net/api/productos/';
    //this.resourceUrl = 'https://localhost:44349/api/articulos/';
  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }

  post(obj: Productos) {
    return this.httpClient.post(this.resourceUrl, obj);
  }
}
