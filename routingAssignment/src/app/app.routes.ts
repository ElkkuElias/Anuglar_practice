import { Routes } from '@angular/router';
import {MeComponent} from './me/me.component';
import {SkillsComponent} from './skills/skills.component'
import {ExperienceComponent} from './experience/experience.component'

export const routes: Routes = [
    {path: '',component: MeComponent},
    {path: 'Skills',component: SkillsComponent},
    {path: 'Experience',component: ExperienceComponent},
];

