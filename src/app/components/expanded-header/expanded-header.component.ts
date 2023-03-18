import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expanded-header',
  templateUrl: './expanded-header.component.html',
  styleUrls: ['./expanded-header.component.scss']
})
export class ExpandedHeaderComponent implements OnInit {

  @Input() component!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
