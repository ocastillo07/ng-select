import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-select';

  selectedCar: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
      { id: 5, name: 'WV' },
      { id: 6, name: 'BMW' },
      { id: 7, name: 'Toyota' },
      { id: 8, name: 'Honda' },
      { id: 9, name: 'Ford' },
  ];

  onChange($event) {
    console.log($event)
  }

  onFocus($event: Event) {
    console.log($event)
  }

  onBlur($event: Event) {
    console.log($event)
  }

  onOpen() {
    console.log('open')
  }

  onClose() {
    console.log('close')
  }

  onAdd($event) {
    console.log($event)
  }

  onRemove($event) {
    console.log($event)
  }

  onClear() {
    console.log('clear')
  }

  onScrollToEnd($event) {
    console.log($event)
  }

  onSearch($event) {
    console.log($event)
  }
}
