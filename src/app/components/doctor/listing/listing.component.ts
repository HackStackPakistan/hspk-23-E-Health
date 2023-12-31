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
      name: "Dr. Robert Cris",
      field: "Neurologist",
      education: "PHD, MBBS, FPS, CPS",
      rating: "4.8",
      status: 'upcoming'
    },
    {
      img: "../../../../assets/img/d1.jpg",
      name: "Dr. Noel Haueg",
      field: "Otorhinolaryngology",
      education: "MD, PHD, MBBS, FPS, CPS",
      rating: "3.9",
      status: 'upcoming'
    },
    {
      img: "../../../../assets/img/d3.jpg",
      name: "Dr. Kathryn Brawl",
      field: "Psychiatrist",
      education: "PHD, MBBS, FPS, CPS",
      rating: "4.1",
      status: 'compeleted'
    },
    {
      img: "../../../../assets/img/d4.jpg",
      name: "Dr. Tanya Sale",
      field: "Endocrinologist",
      education: "MD, MBBS, FPS, CPS",
      rating: "5.0",
      status: 'compeleted'
    },
    {
      img: "../../../../assets/img/d5.jpg",
      name: "Dr. Shaffer Rawl",
      field: "Cardiologist",
      education: "MBBS, FPS, CPS",
      rating: "4.8",
      status: 'compeleted'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
