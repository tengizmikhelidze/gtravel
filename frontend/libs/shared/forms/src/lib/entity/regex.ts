export enum regexTitle {
  eng= 'მხოლოდ ინგლისური ასოები',
  geo = 'მხოლოდ ქართული ასოები',
  num = 'მხოლოდ ციფრები'
}

export const regexTemplate = {
  eng : /^[a-zA-Z\s]+$*$/im,
  geo : /^[ა-ჰ\s]+$*$/im,
  num : /[0-9]*/im,
}
