/* globals jest */
jest.mock('../store/store', () => jest.fn(() => ({ storeKey: 'storeValue' }) ));
import configureStore from '../store/store';
import ReactDOM from 'react-dom';

describe('entry', () => {
  let Entry,
      Root,
      renderedRoot;

  beforeAll(() => {
    document.addEventListener = jest.fn();
    document.getElementById = jest.fn(id => id);
    ReactDOM.render = jest.fn();

    Root = require('../components/root');
    Entry = require('../reactA06');

    document.addEventListener.mock.calls[0][1]();
    renderedRoot = ReactDOM.render.mock.calls[0][0];
  });

  it('sets a listener for the DOMContentLoaded event', () => {
    const eventListenerCalls = document.addEventListener.mock.calls;

    expect(document.addEventListener).toBeCalled();
    expect(eventListenerCalls[0][0]).toEqual('DOMContentLoaded');
  });

  it('renders the Root component', () => {
    expect(renderedRoot.type).toEqual(Root.default);
  });

  it('queries for and renders into the root div', () => {
    expect(document.getElementById).toBeCalledWith("root");
    expect(ReactDOM.render.mock.calls[0][1]).toEqual("root");
  });

  it('invokes the configureStore function', () => {
    expect(configureStore).toBeCalled();
  });

  it('passes the store as a prop to the Root component', () => {
    expect(renderedRoot.props.store).toEqual({ storeKey: 'storeValue' });
  });
});
