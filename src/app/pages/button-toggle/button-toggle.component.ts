import { Component } from '@angular/core';
import {  MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss',
})
export class ButtonToggleComponent {
  fontStyle?: string = 'center';

  onSingleButtonToggle(val: MatButtonToggleChange) {
    console.log(val.source.checked);
  }
}
