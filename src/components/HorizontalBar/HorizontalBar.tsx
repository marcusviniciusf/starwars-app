import styled, {css} from 'styled-components/native';

const HorizontalBar = styled.View(
  ({theme}) => css`
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -5px;
    background-color: ${theme.colors.barColor};
  `,
);

type BarProps = {
  enabled: boolean;
};

const Bar = (props: BarProps) => {
  const {enabled} = props;
  if (enabled) {
    return <HorizontalBar testID="horizontal-bar" />;
  }
  return null;
};

export default Bar;
