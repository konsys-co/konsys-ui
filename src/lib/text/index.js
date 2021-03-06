import styled, { css } from 'styled-components'
import { color, fonts, animate } from '../../styles/_variables'

export const textStyle = css`
  color: ${props => (props.color ? props.color : color.dark)};
  margin: ${props => (props.margin ? props.margin : 0)};
  padding: ${props => (props.padding ? props.padding : 0)};
  display: ${props => (props.display ? props.display : 'inline-block')};
  font-family: 'kanit';
  ${props => props.font && css`
    font-family: ${props.font};
  `}
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
`

export const H1 = styled.h1`
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.heading : fonts.size.heading)};
  font-weight: ${fonts.style.semiBold};
  ${textStyle};
`

export const H2 = styled.h2`
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.subHeading : fonts.size.subHeading)};
  font-weight: ${fonts.style.semiBold};
  ${textStyle};
`

export const H3 = styled.h3`
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.title : fonts.size.title)};
  font-weight: ${fonts.style.extraLight};
  ${props => props.bold && css`
    font-weight: ${fonts.style.medium};
  `}
  ${textStyle};
`

export const H4 = styled.h4`
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.subTitle : fonts.size.subTitle)};
  font-weight: ${fonts.style.extraLight};
  ${props => props.bold && css`
    font-weight: ${fonts.style.medium};
  `}
  ${textStyle};
`

export const P = styled.p`
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.normal : fonts.size.normal)};
  font-weight: ${fonts.style.extraLight};
  ${props => props.bold && css`
    font-weight: ${fonts.style.medium};
  `}
  line-height: 20px;
  ${textStyle};
`

export const SmallText = styled.span`
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.small : fonts.size.small)};
  font-weight: ${fonts.style.extraLight};
  ${props => props.bold && css`
    font-weight: ${fonts.style.medium};
  `}
  ${textStyle};
`

export const Label = styled.span`
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.label : fonts.size.label)};
  font-weight: ${fonts.style.extraLight};
  ${textStyle};
  ${props => props.bold && css`
    font-weight: ${fonts.style.medium};
  `}
`

export const TextLink = styled.a`
  color: ${props => (props.theme.color ? props.theme.color.secondaryColor : color.secondaryColor)};
  transition: ${animate.transition};
  &:hover {
    color: ${props => (props.theme.color ? `${props.theme.color.secondaryColor}CC` : `${color.secondaryColor}CC`)};
  }
  &:visited {
    color: ${props => (props.theme.color ? `${props.theme.color.secondaryColor}88` : `${color.secondaryColor}88`)};
  }
`
