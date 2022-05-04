import styled from 'styled-components/native';
import {
  flexbox,
  space,
  layout,
  position,
  color,
  compose,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  ColorProps,
  PositionProps,
  BordersProps,
  borders,
  // BorderRadiusProps,
  // borderRadius,
} from 'styled-system';

type BoxInterface = FlexboxProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  BordersProps &
  PositionProps;

const boxProps = compose(space, color, layout, flexbox, position, borders);

const Box = styled.View<BoxInterface>`
  ${boxProps};
`;

export type {BoxInterface};
export {Box};
export default Box;
