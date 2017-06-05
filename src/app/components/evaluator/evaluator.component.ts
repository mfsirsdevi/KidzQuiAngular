import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-evaluator',
  templateUrl: './evaluator.component.html',
  styleUrls: ['./evaluator.component.css']
})
export class EvaluatorComponent implements OnInit {

  public tableWidget: any;
  constructor() { }

  ngOnInit() {  }

 ngAfterViewInit() {
    this.initDatatable();
  }

  private initDatatable(): void {
    const exampleId: any = $('#datatable');
    this.tableWidget = exampleId.DataTable({
      select: true,
      ajax: 'http://www.kidzqui.com/controller/test.txt'
    });
  }

}
