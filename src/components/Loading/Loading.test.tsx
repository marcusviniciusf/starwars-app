import {render, waitFor} from 'tests/utils';
import Loading from './Loading';

describe('Components Loading', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(<Loading />);
    waitFor(() => {
      expect(getByTestId('full-loading')).toBeDefined();
    });
  });
});
