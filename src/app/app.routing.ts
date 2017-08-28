import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'highscores',
    component: HighscoresComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
