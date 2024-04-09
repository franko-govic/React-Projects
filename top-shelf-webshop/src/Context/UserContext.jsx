import {createContext} from 'react';

const UserContext = createContext({
  basket: {},
  setBasket: () => {}
}) 

export {UserContext}