import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ListaDeTarefasService } from 'src/app/service/lista.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  listaDeTarefas!: Array<Item>;
  itemParaSerEditado!: Item;

  constructor(private listaDeTarefasService: ListaDeTarefasService) {}

  ngOnInit(): void {
    this.listaDeTarefas = this.listaDeTarefasService.getListaDeItem();
    // console.log(this.listaDeTarefas);
  }

  ngDoCheck(): void {
    this.listaDeTarefasService.atualizarLocalStorage();
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }

  deletarItem(id: number) {
    const index = this.listaDeTarefas.findIndex((item) => {
      item.id === id;
    });
    this.listaDeTarefas.splice(index, 1);
  }

  limparLista() {
    this.listaDeTarefas = [];
    this.listaDeTarefasService.limparLocalStorage();
  }
}
