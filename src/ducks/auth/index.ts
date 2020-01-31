import reducer from './reducers';

import * as authOperations from './operations';
import * as authTypes from './types';
import * as authSelectors from './selectors'
import * as authAction from './actions';

export {
    authOperations,
    authTypes,
    authSelectors,
    authAction
}

export default reducer;