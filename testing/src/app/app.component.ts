import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  widenIt = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0';

  proteinOptions: string [] = ['Beef' + this.widenIt, 'Chicken' + this.widenIt, 'Pork' + this.widenIt];
  protein = '';

  viewStates: string[] = ['active', 'pending', 'inactive'];
  viewState = 0;

  currentYear: string = '2018';
  yearsList: string[] = ['2001', '2002', '2003', '2004', '2005', '2006',
    '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];

  proteinSelected(protein: string): void {
    this.protein = protein;
  }

  onSelectedChanged(num: number) {
    this.viewState = num;
  }

  onYearChange(year: string) {
    this.currentYear = year;
  }
}
