import {renderToString} from 'react-dom/server';

import core from '../dist/main'

test('Button renders', () => {
  console.log('Core: ', core)

  const str = renderToString(Core.Button)
  console.log('Rendered El: ', str)

  expect(str).toBe('test')
});
