import { NgModule } from '@angular/core';

import {
    MatAutocompleteModule,
    MatButtonModule
} from '@angular/material';

@NgModule({
    imports: [
        MatAutocompleteModule,
        MatButtonModule
    ],
    exports: [
        MatAutocompleteModule,
        MatButtonModule
    ]
})

export class MaterialModule { }
