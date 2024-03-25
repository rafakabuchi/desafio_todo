import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CadastrarTarefas, Tarefas } from '../interfaces/tarefas.model';

@Injectable({
  providedIn: 'root',
})
export class TarefasService {
  private url = `${environment.api}/tarefas`;
  constructor(private httpClient: HttpClient) {}

  obterTarefas() {
    return this.httpClient.get<Tarefas[]>(this.url);
  }

  cadastrarTarefa(tarefa: CadastrarTarefas) {
    return this.httpClient.post<Tarefas>(this.url, tarefa);
  }

  editarTarefa(tarefa: Tarefas) {
    return this.httpClient.put<Tarefas>(`${this.url}/${tarefa.id}`, tarefa);
  }

  remover(id: number) {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
