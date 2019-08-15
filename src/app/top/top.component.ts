import {Component, Input} from '@angular/core';

@Component({
  selector: 'top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
  public collapsed = true;
  @Input() title: string;
}
