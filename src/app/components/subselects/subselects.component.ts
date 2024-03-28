import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  ParentName,
  ResponseOptions,
  SelectsContent,
} from './interfaces/selects.interfaces';

@Component({
  selector: 'app-subselects',
  templateUrl: './subselects.component.html',
  styleUrls: ['./subselects.component.css'],
})
export class SubselectsComponent implements OnInit {
  public numberSerach: SelectsContent;
  private listSelects: ResponseOptions[] = [];
  private parentsNames: ParentName[] = [];
  public datatable: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getInfomationSelect(null);
  }

  getInfomationSelect(option: string | null): void {
    const selected = option ? '?selected=' + option : '';
    this.http
      .get(`http://localhost:3000/api/select/options${selected}`)
      .subscribe((data) => {
        const response: ResponseOptions = data as ResponseOptions;
        if (response.data.length === 0) return;
        this.listSelects.push(response);
        this.numberSerach = {
          selects: this.listSelects,
        };
        const indexLast = this.numberSerach.selects.length - 1;
        this.parentsNames = this.numberSerach.selects[indexLast].parentNames;
        // console.log(this.parentsNames);
      });
  }

  changeSelect(event: any, index: number) {
    const valueSelect = event.target.value;
    this.numberSerach.selects.splice(index + 1);
    this.datatable = [];
    this.getInfomationSelect(valueSelect);
  }

  searchContractsEntities() {
    console.log(this.parentsNames);
    this.http
      .post(
        'http://localhost:3000/api/contracting-entities/selected',
        this.parentsNames
      )
      .subscribe((data: any) => {
        this.datatable = data.data;
        console.log(this.datatable.length);
      });
  }

  clearFilters() {
    this.listSelects = [];
    this.datatable = [];
    this.getInfomationSelect(null);
  }
}
