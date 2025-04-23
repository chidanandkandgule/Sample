import { Routes } from '@angular/router';
import { SampageComponent } from './sampage/sampage.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { FrameworkTableComponent } from './framework-table/framework-table.component';
import { TotalcontrolTableComponent } from './totalcontrol-table/totalcontrol-table.component';
import { CommoncontrolTableComponent } from './commoncontrol-table/commoncontrol-table.component';
import { NoncommoncontrolTableComponent } from './noncommoncontrol-table/noncommoncontrol-table.component';
import { AggridTableComponent } from './aggrid-table/aggrid-table.component';

export const routes: Routes = [
    { path:'', component:LoginComponent},
    { path:"home", component:SampageComponent},
    { path:"chart", component:ChatComponent},
    { path:"login", component:LoginComponent},
    {path:"dashboard",component:HomeComponent},
    {path:"framework-table",component:FrameworkTableComponent},
    {path:"total-control",component:TotalcontrolTableComponent},
    {path:"common-control",component:CommoncontrolTableComponent},
    {path:"noncommon-control",component:NoncommoncontrolTableComponent},
    {path:"aggrid-table",component:AggridTableComponent},

];
