import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {

  /** Title text */
  @Input() title: string;
  /** Font size for the title text */
  @Input() titleFontSize: string | number;
  /** Description text */
  @Input() description: string;

  constructor() {}
}
