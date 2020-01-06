// // ENZYME

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// // REACT TESTING LIBRARY

// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';