import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () => import("./pages/welcome/welcome.module").then(m => m.WelcomeModule)
  },
  {
    path: "login",
    loadChildren: () => import("./pages/login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./pages/clients/clients/clients.module').then(m => m.ClientsModule),
  },
  {
    path: 'clients/newClient',
    loadChildren: () => import('./pages/clients/new-client/new-client.module').then(m => m.NewClientModule),
  },
  {
    path: 'lects',
    loadChildren: () => import('./pages/lect/lects/lect.module').then(m => m.LectModule),
  },
  {
    path: 'lects/newLect',
    loadChildren: () => import('./pages/lect/new-lect/new-lect.module').then(m => m.NewLectModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/user/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'users/newUser',
    loadChildren: () => import('./pages/user/new-user/new-user.module').then(m => m.NewUserModule),
  },
  {
    path: 'notes',
    loadChildren: () => import('./pages/notes/notes.module').then(m => m.NotesModule),
  },
  {
    path: 'salery',
    loadChildren: () => import('./pages/salery/salery.module').then(m => m.SaleryModule),
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingModule),
  },
  {
    path: "chat",
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: "**",
    loadChildren: () => import("./pages/notfound/notfound.module").then(m => m.NotfoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class appRoutingModule { }
