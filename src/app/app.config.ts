import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
