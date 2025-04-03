import { Routes } from '@angular/router';
import { HomeComponent } from './component/page/home/home.component';
import { ServiceComponent } from './component/page/service/service.component';
import { VenteComponent } from './component/page/vente/vente.component';
import { WindevComponent } from './component/page/windev/windev.component';


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "service", component: ServiceComponent},
    {path: "service/vente", component: VenteComponent},
    {path: "service/windev", component: WindevComponent}

];
