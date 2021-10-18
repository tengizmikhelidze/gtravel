import { isDate } from 'rxjs/internal-compatibility';

export enum Seasons {
  'winter',
  'spring',
  'summer',
  'autumn'
}
export function parseExactDate(dateString: string | Date){
  if(typeof dateString === 'string'){
    const dateParts = dateString.split('T')[0].split('-');
    return new Date(+dateParts[0], +dateParts[1]-1, +dateParts[2],0,0,0);
  } else {
    return new Date(dateString.getFullYear(), dateString.getMonth(), dateString.getDate(),0,0,0);
  }
}

export function numberToSeason(number: 0 | 1 | 2 | 3): string{
  if(typeof number === 'number'){
    return Seasons[number]
  } else {
    return 'InvalidSeasonNumber'
  }
}

export function getSeason(date: Date = new Date()): string{
  if(isDate(date)){
    if(date.getMonth()>=0 && date.getMonth()<=2){
      return numberToSeason(0);
    } else if(date.getMonth()>=3 && date.getMonth()<=5){
      return numberToSeason(1);
    } else if(date.getMonth()>=6 && date.getMonth()<=8){
      return numberToSeason(2);
    } else if(date.getMonth()>=9 && date.getMonth()<=11){
      return numberToSeason(3);
    } else return 'InvalidMonth'
  } else {
    return "InvalidDate"
  }
}
