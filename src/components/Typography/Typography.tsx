import styled, {css} from 'styled-components/native';
import {
  color,
  typography,
  space,
  compose,
  SpaceProps,
  TypographyProps,
  ColorProps,
} from 'styled-system';

const textProps = compose(space, color, typography);

type TextProps = SpaceProps &
  Omit<TypographyProps, 'fontFamily'> &
  ColorProps & {
    // variant?: 'primary' | 'secondary';
  };

const Text = styled.Text<TextProps>(
  ({theme}) => css`
    font-family: Matterhorn;
    color: ${theme.colors.primary};
    ${textProps};
  `,
);

export default Text;
