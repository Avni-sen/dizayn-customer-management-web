import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { authRoutes } from './pages/auth/auth.routing';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard-statistics/dashboard-statistics.module').then(m => m.DashboardStatisticsModule),
        pathMatch: 'full'
      },
      {
        path: 'dashboard/all-in-one',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'dashboard/crm',
        loadChildren: () => import('./pages/dashboard/dashboard-crm/dashboard-crm.module').then(m => m.DashboardCrmModule)
      },
      {
        path: 'apps/chat',
        loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: 'components',
        loadChildren: () => import('./pages/components/components.module').then(m => m.ComponentsModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./pages/forms/forms.module').then(m => m.FormModule)
      },
      {
        path: 'apps/inbox',
        loadChildren: () => import('./pages/inbox/inbox.module').then(m => m.InboxModule)
      },
      {
        path: 'pages/profile',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'tables/simple-table',
        loadChildren: () => import('./pages/tables/simple-table/simple-table.module').then(m => m.SimpleTableModule)
      },
      {
        path: 'tables/table-pagination',
        loadChildren: () => import('./pages/tables/table-pagination/table-pagination.module').then(m => m.TablePaginationModule)
      },
      {
        path: 'tables/table-sorting',
        loadChildren: () => import('./pages/tables/table-sorting/table-sorting.module').then(m => m.TableSortingModule)
      },
      {
        path: 'tables/table-filtering',
        loadChildren: () => import('./pages/tables/table-filtering/table-filtering.module').then(m => m.TableFilteringModule)
      },
      {
        path: 'tables/datatable',
        loadChildren: () => import('./pages/tables/datatable/datatable.module').then(m => m.DatatableModule)
      },
      {
        path: 'tables/all-in-one-table',
        loadChildren: () => import('./pages/tables/all-in-one-table/all-in-one-table.module').then(m => m.AllInOneTableModule)
      },
      {
        path: 'pages/projects',
        loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'pages/project-details',
        loadChildren: () => import('./pages/project-details/project-details.module').then(m => m.ProjectDetailsModule)
      },
      {
        path: 'material-icons',
        loadChildren: () => import('./pages/icon/icon.module').then(m => m.IconModule)
      },
      {
        path: 'editor',
        loadChildren: () => import('./pages/editor/editor.module').then(m => m.EditorModule)
      }
    ]
  },
  {
    path: 'auth',
    children: [
      ...authRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // initialNavigation: 'enabled',
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
