import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
<<<<<<< HEAD
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { errorInterceptor } from './_interceptors/error.interceptor';
=======
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
>>>>>>> 4ebf750f0f5d433d8c813d21941ada0509b1bf59

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
<<<<<<< HEAD
    provideHttpClient(withInterceptors([errorInterceptor])),
=======
    provideHttpClient(),
>>>>>>> 4ebf750f0f5d433d8c813d21941ada0509b1bf59
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-bottom-right'
    })
  ]
};
