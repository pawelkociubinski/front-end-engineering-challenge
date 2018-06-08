/* @flow */
// Types
import type { DocumentAction } from '../types/actions';
import type { DocumentModel } from '../types/models';
// Constants
import * as actions from '../constants/actions';

const initialState = {
  documents: [],
  inProgress: false,
  error: false,
};

const documentsReducer = (state: DocumentModel = initialState, action: DocumentAction) => {
  switch (action.type) {
    case actions.FETCH_DOCUMENTS_STARTED: {
      return { ...state, inProgress: true };
    }

    case actions.FETCH_DOCUMENTS_SUCCEEDED: {
      return {
        ...state,
        documents: action.payload.documents,
      };
    }

    case actions.FETCH_DOCUMENTS_FINISHED: {
      return { ...state, inProgress: false };
    }

    case actions.FETCH_DOCUMENTS_FAILED: {
      return { ...state, error: action.payload.error };
    }

    default:
      return state;
  }
};

export default documentsReducer;
