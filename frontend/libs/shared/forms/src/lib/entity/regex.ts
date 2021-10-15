export enum regexTitle {
  eng= 'მხოლოდ ინგლისური ასოები',
  geo = 'მხოლოდ ქართული ასოები',
  num = 'მხოლოდ ციფრები',
  email = 'email'
}

export const regexTemplate = {
  eng: new RegExp("^[A-Za-z][A-Za-z0-9]*$", "im"),
  // geo : /^[ა-ჰ\s]+$*$/im,
  // num : /[0-9]*/im,
  email: new RegExp(`^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$`)
}
