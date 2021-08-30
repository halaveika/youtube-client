import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public title = '';
  @Input() public description = '';
  @Input() public img = '';
  @Input() public linkVideo = '';
  @Input() public creatingDate: Date | null = null;
  @Input() public id = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
