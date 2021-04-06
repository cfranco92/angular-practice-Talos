/* NgRx */
import { createReducer, on, createAction } from '@ngrx/store';

import * as AppState from '../../state/app.state';

// Extends the app state to include the pokemon feature.
// This is required because pokemons are lazy loaded.
// So the reference to PokemonState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
    products: PokemonState;
}

// State for this feature (User)
export interface PokemonState {
    pokemons: [],
    originalPokemons: [],
    showProductCode: boolean
}

const initialState: PokemonState = {
    pokemons: [],
    originalPokemons: [],
    showProductCode: true
}

export const pokemonReducer = createReducer<PokemonState>(
    initialState,
    on(createAction('[Product] Toggle Product Code'), (state): PokemonState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
            // showProductCode: state.showProductCode = false,
        };
    })
);

