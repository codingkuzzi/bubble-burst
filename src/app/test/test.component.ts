import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import $ from "jquery";
import { MarsRoverApiPhotosService } from '../mars-rover-api-photos.service';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [ MarsRoverApiPhotosService ]
})
export class TestComponent implements OnInit {



  ngOnInit() {
  }

  //private start = false;
  // urls = [];
  photos = ["https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA14156-1920x1200.jpg", "https://www.nasa.gov/sites/default/files/thumbnails/image/pia19068-figa-gupta-2_mcam02310rsb_wscale.jpg"];
  // constructor(http: Http)

constructor(private marsRoverPhotos: MarsRoverApiPhotosService)
  {
          // http.get('/getcarousel')
          //     .subscribe(res => this.startCarousel(res.json()));
  }

  startCarousel(photos: string[]) {
      this.photos = photos;
      $('.carousel').carousel();
  }

  // isActive(photo: string) {
  //     return photo === this.photos[0];
  // }


  getRoverImages() {
    this.marsRoverPhotos.getByDateAndCamera().subscribe(response => {
        this.photos = response.json();
    });
  }
}
