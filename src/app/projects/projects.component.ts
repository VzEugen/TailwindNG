import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  progressBarWidth: number = 99;
  numbers = Array(3).fill(1).map((x,i)=>i);
  data = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', profession: 'Web Designer' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', profession: 'Doctor' },
    { id: 3, firstName: 'Larry', lastName: 'Wild', profession: 'Programmer' },
  ]
  columns = Object.keys(this.data[0])
  // @ts-ignore
  keepOrder = (a, b) => {
    if (a === 'id') {}
    return a;
  }
  constructor() {}

  ngOnInit(): void {
  }

}
