import { render, screen } from '@testing-library/react';
import {App} from '../App';

it('render app component', () => {
  render(<App />);
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});
