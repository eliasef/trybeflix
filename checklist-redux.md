# Checklist do react-redux

*Antes de começar*
- [x] pensar como será o *formato* do seu estado global
- [x] pensar quais actions serão necessárias na sua aplicação

*Instalação*
- [x] npm i redux react-redux;
- [x] npm i redux-devtools-extension;

*Criar dentro do diretório src:*
- [ ] diretório `redux`

**Criar dentro do diretório `redux`**
- [ ] diretório `store`
- [ ] diretório `actions`
- [ ] diretório `reducers`

*Criar dentro do diretório `actions`:*
- [ ] arquivo `index.js`.

*Criar dentro do diretório `reducers`:*
- [ ] arquivo `index.js`.

*Criar dentro do diretório `store`:*
- [ ] arquivo `index.js`.

*Criar dentro do diretório `reducers`:*
- [ ] criar os reducers necessários
- [ ] criar `rootReducer` usando o `combineReducers` no arquivo index.js


exemplo:

*Seu reducer pode seguir esse modelo.*

```js
const INITIAL_STATE = {};

const nomeReducer1 = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   default:
    return state;
 }
}

export default nomeReducer1;

```

```js
import { combineReducers } from 'redux';
import nomeReducer1 from './nomeReducer1';
import nomeReducer2 from './nomeReducer2';

const rootReducer = combineReducers({
  nomeReducer1,
  nomeReducer2,
});

export default rootReducer;
```

*No arquivo store/index.js:*
- [ ] importar `rootReducer` e usá-lo na criação da `store`
- [ ] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)
- [ ] exportar a `store`

```js
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
```

*No arquivo App.js:*
- [ ] importar a `store`
- [ ] definir o Provider, `<Provider store={ store }>`, para fornecer os estados a todos os componentes encapsulados em `<App />`.

*Na pasta actions:*
- [ ] criar e exportar os actionTypes;`
- [ ] criar e exportar os actions creators necessários

*Exemplo de action types (arquivo actionTypes.js)*

```js
export const USER_LOGIN = 'USER_LOGIN';
```
*Exemplo action creator*

```js
import { USER_LOGIN } from '../actions/actionTypes';
export const minhaAction = (value) => ({ type: USER_LOGIN, value });
```

*Nos reducers:*
- [ ] criar os casos para cada action criada, retornando o devido estado atualizado

*Nos componentes que irão ler o estado:*
- [ ] criar a função `mapStateToProps`
- [ ] exportar usando o `connect`

*Nos componentes que irão modificar o estado:*
- [ ] criar a função `mapDispatchToProps`
- [ ] exportar usando o `connect`

```js
export default connect(mapStateToProps, mapDispatchToProps)(Component)
```