import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    SaidaComponent,
    SaidaDetailComponent,
    SaidaUpdateComponent,
    SaidaDeletePopupComponent,
    SaidaDeleteDialogComponent,
    saidaRoute,
    saidaPopupRoute
} from './';

const ENTITY_STATES = [...saidaRoute, ...saidaPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [SaidaComponent, SaidaDetailComponent, SaidaUpdateComponent, SaidaDeleteDialogComponent, SaidaDeletePopupComponent],
    entryComponents: [SaidaComponent, SaidaUpdateComponent, SaidaDeleteDialogComponent, SaidaDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationSaidaModule {}
