export function parseExactDate(dateString: string | Date){
  if(typeof dateString === 'string'){
    const dateParts = dateString.split('T')[0].split('-');
    return new Date(+dateParts[0], +dateParts[1]-1, +dateParts[2],0,0,0);
  } else {
    return new Date(dateString.getFullYear(), dateString.getMonth(), dateString.getDate(),0,0,0);
  }

}
