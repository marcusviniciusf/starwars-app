import HorizontalBar from './HorizontalBar';
import {render} from 'tests/utils';

describe('HorizontalBar', () => {
  it('should render Correctly', () => {
    const {getByTestId} = render(<HorizontalBar enabled />);
    expect(getByTestId('horizontal-bar')).toBeDefined();
  });
  it('should return null', () => {
    const {queryByTestId} = render(<HorizontalBar enabled={false} />);
    expect(queryByTestId('horizontal-bar')).toBeNull();
  });
});
