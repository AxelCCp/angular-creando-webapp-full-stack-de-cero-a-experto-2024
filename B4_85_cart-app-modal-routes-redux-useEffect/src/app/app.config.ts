import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { itemsReducer } from './store/items.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { productsReducer } from './store/product.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductsEffect } from './store/effect/product.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore(
      //aquí se registran manualmente los store de redux
      {
          items: itemsReducer,
          products: productsReducer,
      }
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), 
    provideEffects(ProductsEffect)
  ]
};