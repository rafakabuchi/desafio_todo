export type Tarefas = {
  id: number;
  nome: string;
};

export type CadastrarTarefas = Omit<Tarefas, 'id'>;
