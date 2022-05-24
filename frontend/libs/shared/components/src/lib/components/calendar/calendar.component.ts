import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'frontend-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CalendarComponent {
  readonly faArrowCircleLeft = faArrowCircleLeft;
  months: {key: string, value: number}[] = [
    {
      key: 'Jan',
      value: 0
    },
    {
      key: 'Feb',
      value: 1
    },
    {
      key: 'Mar',
      value: 2
    },
    {
      key: 'Apr',
      value: 3
    },
    {
      key: 'May',
      value: 4
    },
    {
      key: 'Jun',
      value: 5
    },
    {
      key: 'Jul',
      value: 6
    },
    {
      key: 'Aug',
      value: 7
    },
    {
      key: 'Sep',
      value: 8
    },
    {
      key: 'Oct',
      value: 9
    },
    {
      key: 'Nov',
      value: 10
    },
    {
      key: 'Dec',
      value: 11
    },

  ];
  days: string[] = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  dateValue: Date = new Date();
  firstDayValue: Date = new Date();
  secondDayValue: Date | null = new Date();
  calendarViewMode: 'calendar' | 'year' | 'year-range' = 'calendar';
  pickedRange: string;

  constructor() {
  }

  get today(): Date {
    return new Date();
  }

  weeksInMonth(date: Date): number {
    let firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0);

    let used = (firstOfMonth.getDay() || 7) + lastOfMonth.getDate();

    return Math.ceil( used / 7);
  }

  calendarWeekView(date: Date): {[key : string] : (number | null)[]} {
    let firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0);
    let datesInWeeks : {[key : string] : (number | null)[]} = {};
    let weekIterator: number = 1;

    for(let i = 1; i <= lastOfMonth.getDate(); i++){
      if(datesInWeeks[weekIterator]) {
        datesInWeeks[weekIterator].push(i)
      } else {
        datesInWeeks[weekIterator] = [i];
      }
      if(firstOfMonth.getDay() % 7 === 0 ){
        if(i<8){
          let diff = 6 - datesInWeeks[weekIterator].length;
          let lastOfPreviousMonthDate = new Date(date.getFullYear(), date.getMonth()-1, 0).getDate();
          while(diff >= 0 ) {
            // datesInWeeks[weekIterator].unshift(lastOfPreviousMonthDate);
            datesInWeeks[weekIterator].unshift(null)
            --lastOfPreviousMonthDate;
            --diff;
          }
        }
        weekIterator++;
      }
      firstOfMonth.setDate(firstOfMonth.getDate() + 1);
    }

    return datesInWeeks
  }

  daysInMonth(date: Date): number[] {
    return Array(new Date(date.getFullYear(), date.getMonth(), 0).getDate())
  }

  arrayFromNumber(number: Number){
    return Array(number);
  }

  changeMonth(month: number) {
    this.dateValue.setMonth(month);
    this.dateValue = new Date(this.dateValue)
  }

  changeCalendarViewMode(mode: 'calendar' | 'year' | 'year-range') {
    this.calendarViewMode = mode;
  }

  getRangeStrings(range: [number, number], diff: number): string[]{
    let rangeString: string[] = [];
    let startRange = range[0] <= range[1] ? range[0] : range[1];
    let endRange = startRange === range[0]? range[1] : range[0];
    for(startRange; startRange < endRange; startRange += diff) {
      rangeString.push(`${startRange}-${startRange + diff}`);
    }
    return rangeString;
  }

  activeRange(range: string): boolean {
    let splitRangeString = range.split('-');
    let startRange = Number(splitRangeString[0]);
    let endRange = Number(splitRangeString[1]);
    return this.dateValue.getFullYear() >= startRange && this.dateValue.getFullYear() <= endRange
  }

  yearsFromYearRange(range: string): number[] {
    let splitRangeString = range.split('-');
    let startRange = Number(splitRangeString[0]);
    let endRange = Number(splitRangeString[1]);

    return [...Array(endRange - startRange).keys()].map(x => x + startRange);
  }

  changeYear(year: number) {
    this.dateValue.setFullYear(year);
    this.dateValue = new Date(this.dateValue);
    this.changeCalendarViewMode("calendar")
  }

  selectDate(day: number | null) {
    if(day){
      if(
        this.firstDayValue
        && this.firstDayValue.getFullYear() <= this.getDateFromDay(day).getFullYear()
        && this.firstDayValue.getMonth() <= this.getDateFromDay(day).getMonth()
        && this.firstDayValue.getDate() < day
      ){
        this.secondDayValue = new Date(this.dateValue)
        this.secondDayValue.setDate(day);
      } else {
        this.firstDayValue = new Date(this.dateValue)
        this.firstDayValue.setDate(day);
        this.secondDayValue = null;
      }
    }
  }

  getDateFromDay(day: number): Date {
    return new Date(this.dateValue.getFullYear(), this.dateValue.getMonth(), day);
  }

  setToday() {
    this.dateValue = new Date();
    this.firstDayValue = new Date();
  }
}
