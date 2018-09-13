import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleApplicationEntradaModule } from './entrada/entrada.module';
import { JhipsterSampleApplicationSaidaModule } from './saida/saida.module';
import { JhipsterSampleApplicationClienteModule } from './cliente/cliente.module';
import { JhipsterSampleApplicationVendedorModule } from './vendedor/vendedor.module';
import { JhipsterSampleApplicationPedidoModule } from './pedido/pedido.module';
import { JhipsterSampleApplicationItemModule } from './item/item.module';
import { JhipsterSampleApplicationProdutoModule } from './produto/produto.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterSampleApplicationEntradaModule,
        JhipsterSampleApplicationSaidaModule,
        JhipsterSampleApplicationClienteModule,
        JhipsterSampleApplicationVendedorModule,
        JhipsterSampleApplicationPedidoModule,
        JhipsterSampleApplicationItemModule,
        JhipsterSampleApplicationProdutoModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityModule {}
