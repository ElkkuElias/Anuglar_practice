import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CalculatorComponent} from './calculator/calculator.component'
import {TextEditorComponent} from './text-editor/textEditor.component'
import {EsportsresultsComponent} from './esportsresults/esportsresults.component'

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'Calculator',component: CalculatorComponent},
    {path: 'Experience',component: TextEditorComponent},
    {path: 'Esports', component: EsportsresultsComponent}
];

