import { createAction, props } from "@ngrx/store";
import { Pokemon } from "src/app/core/models/pokemon.model";


export const loadPokemons = createAction(
  '[Pokemon] Load Success',
  props<{ pokemons: Pokemon[] }>()
);

export const setModalView = createAction(
  '[Pokemon] Set Modal View',
);