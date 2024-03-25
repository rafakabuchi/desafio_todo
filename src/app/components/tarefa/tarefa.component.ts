import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Tarefas } from 'src/app/interfaces/tarefas.model';
import { TarefasService } from 'src/app/service/tarefas.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss'],
})
export class TarefaComponent implements OnInit {
  tarefas$ = new Observable<Tarefas[]>();
  id = '';
  nome = '';

  constructor(
    private tarefasService: TarefasService,
    private httpClient: HttpClient
  ) {
    this.obterTarefasCadastradas();
  }

  ngOnInit() {}

  toggleColor(event: any) {
    const target = event.target;
    if (target.type === 'checkbox') {
      const tr = target.closest('tr');
      if (tr) {
        tr.classList.toggle('checked');
      }
    }
  }
  obterTarefasCadastradas() {
    this.tarefas$ = this.tarefasService.obterTarefas();
  }

  cadastrarTarefa() {
    if (this.id) {
      this.atualizar();
      return;
    }
    this.tarefasService
      .cadastrarTarefa({ nome: this.nome })
      .subscribe((_) => this.obterTarefasCadastradas());
  }

  preencherCampos(tarefa: Tarefas) {
    this.id = tarefa.id!.toString();
    this.nome = tarefa.nome;
  }

  atualizar() {
    this.tarefasService
      .editarTarefa({ id: parseInt(this.id), nome: this.nome })
      .subscribe((_) => this.obterTarefasCadastradas());
  }

  remover(id: number) {
    this.tarefasService
      .remover(id)
      .subscribe((_) => this.obterTarefasCadastradas());
  }
}
