import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateToGeoPipe} from "./translate/translate-to-geo.pipe";

const pipes = [TranslateToGeoPipe]

@NgModule({
  declarations:[...pipes],
  imports: [CommonModule],
  exports: [...pipes]
})
export class PipesHelperModule {}
