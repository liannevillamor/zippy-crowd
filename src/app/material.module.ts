import { NgModule } from '@angular/core';

import {
    MatAutocompleteModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule
} from '@angular/material';

@NgModule({
    imports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatInputModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatIconModule
    ],
    exports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatInputModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatIconModule
    ]
})

export class MaterialModule { }
