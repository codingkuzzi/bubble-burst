import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MarsRoverApiPhotosService {

  constructor(private http: Http) {}

    getByDateAndCamera() {
  return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-01-01&camera=mast&api_key=YFcL2M7cMBQ8j1VRQTyCO1ejj1SDqgY3k2FJWdxc")
}



  }
