import { ListaDeTarefasService } from 'src/app/service/lista.service';

import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;
  editando = false;
  textoBtn = 'Salvar item';
  valorItem!: string;

  constructor(private listaService: ListaDeTarefasService) {}

  ngOnInit(): void {}

  adicionarItem() {
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Editar item';
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  editarItem() {
    this.listaService.editarItemDaLista(
      this.itemQueVaiSerEditado,
      this.valorItem
    );
    this.limparCampo();
    this.editando = false;
    this.textoBtn = 'Salvar Item';
  }

  limparCampo() {
    this.valorItem = '';
  }
}
