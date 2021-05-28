import { Injectable } from '@angular/core';
import {Http,Respone} from '@angular/http';
@Injectable()
export class ProductService {

  _albumUrl: string ="../assets/album.json";

  constructor(private _http: Http) { }

  getAlbum(id: number){
this.http.get(_albumUrl);
  }
}
