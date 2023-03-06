// import Sidebar from '../../src/components/Sidebar/Sidebar';
import { Provider } from 'react-redux';
import store from '../../src/redux/store/store';
import App from '../../src/App';

describe('Sidebar component', () => {
  it('should have a Dashboard item', () => {
    cy.mount(<Provider store={store}><App /></Provider>)
    // cy.mount()
  })
})