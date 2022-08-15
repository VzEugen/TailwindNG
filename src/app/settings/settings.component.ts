import { Component, OnInit } from '@angular/core';
import {KeyValue} from "@angular/common";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  userData = { firstName: 'Mark', lastName: 'Otto', profession: 'Web Designer' }
  constructor() { }
  // @ts-ignore
  keepOrder = (a, b) => {
    if (a === 'id') {}
    return a;
  }

  ngOnInit(): void {
  }

}
