import reducer from './reducers';

import * as newsOperations from './operations';
import * as newsTypes from './types';
import * as newsSelectors from './selectors'
import * as newsAction from './actions';

export {
    newsOperations,
    newsTypes,
    newsSelectors,
    newsAction
}

export default reducer;