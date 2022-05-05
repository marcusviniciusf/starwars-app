import {render} from 'tests/utils';
import Loading from './Loading';

describe('Components Loading', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(<Loading />);
    expect(getByTestId('full-loading')).toBeDefined();
  });
});
