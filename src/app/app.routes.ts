import { Routes } from '@angular/router';
import { FairyComponent } from './touhou/fairy.component';
import { AutumnComponent } from './touhou/autumn.component';
import { IllusionComponent } from './touhou/illusion.component';
import { CobraComponent } from './magic/cobra.component';

export const routes: Routes = [
    { path: 'touhou/fairy/:pagenumber', component: FairyComponent},
    { path: 'touhou/autumn/:pagenumber', component: AutumnComponent},
    { path: 'touhou/illusion/:pagenumber', component: IllusionComponent},
    { path: 'magic/cobra/:pagenumber', component: CobraComponent},
];
