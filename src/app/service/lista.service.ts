import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class ListaDeTarefasService {
  private listaDeTarefas: Item[] = [];

  constructor() {
    this.listaDeTarefas = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeItem() {
    return this.listaDeTarefas;
  }

  criarItem(nomeDoItem: string) {
    const id = this.listaDeTarefas.length + 1;
    const item: Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      concluida: false,
    };
    return item;
  }

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem);
    this.listaDeTarefas.push(item);
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      concluida: itemAntigo.concluida,
    };
    const id = itemAntigo.id;
    this.listaDeTarefas.splice(Number(id) - 1, 1, itemEditado);
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeTarefas));
  }

  limparLocalStorage() {
    localStorage.removeItem('itens');
  }
}
