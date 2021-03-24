import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dmp-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css']
})
export class CostsComponent implements OnInit {

  @Input() costsStep: FormGroup;

  @Output() costToAdd = new EventEmitter();
  @Output() costToRemove = new EventEmitter<number>();

  // panelOpenState = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  get list() {
    return this.costsStep.get('list') as FormArray;
  }

  addCost() {
    this.costToAdd.emit();
  }

  removeCost(index: number) {
    this.costToRemove.emit(index);
  }

}
