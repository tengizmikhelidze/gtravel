import { Pipe, PipeTransform } from '@angular/core';
import {Georgian} from "./enum/georgian.interface";

@Pipe({name: 'Georgian'})
export class TranslateToGeoPipe implements PipeTransform {
  transform(string: string): string {
    // @ts-ignore
    return Georgian[string]? Georgian[string]: string
  }
}
