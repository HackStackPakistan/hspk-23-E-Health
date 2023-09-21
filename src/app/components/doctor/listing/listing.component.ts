import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  doctors: any = [
    {
      img: "../../../../assets/img/d2.jpg",
      name: "Robert Cris",
      field: "Neurologist",
      education: "PHD, MBBS, FPS, CPS",
      rating: "4.8"
    },
    {
      img: "../../../../assets/img/d1.jpg",
      name: "Noel Haueg",
      field: "Otorhinolaryngology",
      education: "MD, PHD, MBBS, FPS, CPS",
      rating: "3.9"
    },
    {
      img: "../../../../assets/img/d3.jpg",
      name: "Kathryn Brawl",
      field: "Psychiatrist",
      education: "PHD, MBBS, FPS, CPS",
      rating: "4.1"
    },
    {
      img: "../../../../assets/img/d4.jpg",
      name: "Tanya Sale",
      field: "Endocrinologist",
      education: "MD, MBBS, FPS, CPS",
      rating: "5.0"
    },
    {
      img: "../../../../assets/img/d5.jpg",
      name: "Shaffer Rawl",
      field: "Cardiologist",
      education: "MBBS, FPS, CPS",
      rating: "4.8"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
