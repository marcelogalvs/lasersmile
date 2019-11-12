import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'equipamentos', loadChildren: './equipamentos/equipamentos.module#EquipamentosPageModule' },
  { path: 'kits', loadChildren: './kits/kits.module#KitsPageModule' },
  { path: 'acessorios', loadChildren: './acessorios/acessorios.module#AcessoriosPageModule' },
  { path: 'manual', loadChildren: './manual/manual.module#ManualPageModule' },
  { path: 'informacoes', loadChildren: './manual/informacoes/informacoes.module#InformacoesPageModule' },
  { path: 'descricao', loadChildren: './manual/informacoes/descricao/descricao.module#DescricaoPageModule' },
  { path: 'instalacao', loadChildren: './manual/informacoes/instalacao/instalacao.module#InstalacaoPageModule' },
  { path: 'limpeza', loadChildren: './manual/informacoes/limpeza/limpeza.module#LimpezaPageModule' },
  { path: 'desinfeccao', loadChildren: './manual/informacoes/desinfeccao/desinfeccao.module#DesinfeccaoPageModule' },
  { path: 'advertencias', loadChildren: './manual/informacoes/advertencias/advertencias.module#AdvertenciasPageModule' },
  { path: 'manutencao', loadChildren: './manual/manutencao/manutencao.module#ManutencaoPageModule' },
  { path: 'corretiva', loadChildren: './manual/manutencao/corretiva/corretiva.module#CorretivaPageModule' },
  { path: 'instrucoes', loadChildren: './manual/instrucoes/instrucoes.module#InstrucoesPageModule' },
  { path: 'biocompatibilidade', loadChildren: './manual/instrucoes/biocompatibilidade/biocompatibilidade.module#BiocompatibilidadePageModule' },
  { path: 'compatibilidade', loadChildren: './manual/instrucoes/compatibilidade/compatibilidade.module#CompatibilidadePageModule' },
  { path: 'operacao', loadChildren: './manual/instrucoes/operacao/operacao.module#OperacaoPageModule' },
  { path: 'gerais', loadChildren: './gerais/gerais.module#GeraisPageModule' },
  { path: 'certificacoes', loadChildren: './certificacoes/certificacoes.module#CertificacoesPageModule' },
  { path: 'manual-menu', loadChildren: './manual-menu/manual-menu.module#ManualMenuPageModule' },
  { path: 'protocolos-menu', loadChildren: './protocolos-menu/protocolos-menu.module#ProtocolosMenuPageModule' },
  { path: 'protocolo-odonto', loadChildren: './protocolos-menu/protocolo-odonto/protocolo-odonto.module#ProtocoloOdontoPageModule' },
  { path: 'baixa-potencia', loadChildren: './protocolos-menu/protocolo-odonto/baixa-potencia/baixa-potencia.module#BaixaPotenciaPageModule' },
  { path: 'biosseguranca', loadChildren: './protocolos-menu/protocolo-odonto/biosseguranca/biosseguranca.module#BiossegurancaPageModule' },
  { path: 'parametros', loadChildren: './protocolos-menu/protocolo-odonto/parametros/parametros.module#ParametrosPageModule' },
  { path: 'terapia', loadChildren: './protocolos-menu/protocolo-odonto/terapia/terapia.module#TerapiaPageModule' },
  { path: 'protocolos', loadChildren: './protocolos-menu/protocolo-odonto/protocolos/protocolos.module#ProtocolosPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
