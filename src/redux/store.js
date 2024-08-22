import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from '@/redux/reducers';

// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
