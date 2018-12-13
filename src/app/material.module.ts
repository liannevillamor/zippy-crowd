import { NgModule } from '@angular/core';

import {
    MatAutocompleteModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatSlideToggleModule
} from '@angular/material';

@NgModule({
    imports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatInputModule,
        MatSlideToggleModule
    ],
    exports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatInputModule,
        MatSlideToggleModule
    ]
})

export class MaterialModule { }
