import { Component, OnInit } from '@angular/core';
import { AtendimentoService, Atendimento } from '../shared';

@Component({
  selector: 'app-listar-atendimento',
  templateUrl: './listar-atendimento.component.html',
  styleUrls: ['./listar-atendimento.component.css']
})
export class ListarAtendimentoComponent implements OnInit {

  atendimentos: Atendimento[];

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(){
    this.atendimentos = this.atendimentoService.listarTodos();
  }

  listarTodos(): Atendimento[]{
    return this.atendimentoService.listarTodos()
  }

  alterarStatus(atendimento: Atendimento): void{
    if(confirm('Deseja alterar o status da tarefa "' + atendimento.nome + '"?')){
      this.atendimentoService.alterarStatus(atendimento.id);
      this.atendimentos = this.listarTodos()
    }else {
      this.atendimentos = this.listarTodos();
    }
  }

}
