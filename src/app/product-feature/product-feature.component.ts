import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-feature',
  templateUrl: './product-feature.component.html',
  styles: []
})
export class ProductFeatureComponent implements OnInit {
  @Input() videoPath: string = '';
  constructor() { }

  ngOnInit() {
  }

}
