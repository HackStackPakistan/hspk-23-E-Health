import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  history: any = [
    {
      docName: "Dr. Robert Cris",
      disease: "Blood Poisoning",
      date: "20-09-2023",
      status: "Up coming",
    },
    {
      docName: "Dr. Noel Haueg",
      disease: "Yellow fever",
      date: "12-08-2023",
      status: "Past",
    },
    {
      docName: "Dr. Kathryn Brawl",
      disease: "Lyme disease",
      date: "17-07-2023",
      status: "Past",
    },
    {
      docName: "Dr. Tanya Sale",
      disease: "Chickenpox",
      date: "10-10-2023",
      status: "Up coming",
    },
    {
      docName: "Dr. Shaffer Rawl",
      disease: "Diabetes",
      date: "20-05-2023",
      status: "Past",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
