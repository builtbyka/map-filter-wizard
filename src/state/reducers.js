import { combineReducers } from 'redux';
import FilterReducer from '../1.components/organisms/filters/_state/FilterReducer';
import WizardFlowReducer from '../1.components/organisms/wizard/_state/WizardWrapFlowReducer';
import DataReducer from '../data/_state/DataReducer';

export default combineReducers({
  filters: FilterReducer,
  flow: WizardFlowReducer,
  properties: DataReducer,
});
