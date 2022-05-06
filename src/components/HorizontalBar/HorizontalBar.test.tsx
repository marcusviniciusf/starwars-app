import HorizontalBar from './HorizontalBar';
import {render, waitFor} from 'tests/utils';

describe('HorizontalBar', () => {
  it('should render Correctly', () => {
    const {getByTestId} = render(<HorizontalBar enabled />);
    waitFor(() => {
      expect(getByTestId('horizontal-bar')).toBeDefined();
    });
  });
  it('should return null', () => {
    const {queryByTestId} = render(<HorizontalBar enabled={false} />);
    waitFor(() => {
      expect(queryByTestId('horizontal-bar')).toBeNull();
    });
  });
});
