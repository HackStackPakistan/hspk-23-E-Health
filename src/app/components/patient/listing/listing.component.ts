import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  patient: any = [
    {
      img: "../../../../assets/img/p2.jpg",
      name: "Robert",
      disease: "Blood poisoning",
      age: "35 Years",
      city: "Chicago",
    },
    {
      img: "../../../../assets/img/p1.jpg",
      name: "Noel",
      disease: "Yellow fever",
      age: "40 Years",
      city: "Houston",
    },
    {
      img: "../../../../assets/img/p5.jpg",
      name: "Kathryn",
      disease: "Lyme disease",
      age: "42 Years",
      city: "New York",
    },
    {
      img: "../../../../assets/img/p4.jpg",
      name: "Tanya",
      disease: "Chickenpox",
      age: "49 Years",
      city: "Los Angeles",
    },
    {
      img: "../../../../assets/img/p3.jpg",
      name: "Shaffer",
      disease: "Diabetes",
      age: "39 Years",
      city: "San Francisco",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
