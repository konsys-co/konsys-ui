import styled, { css } from 'styled-components'
import { color, fonts } from '../../styles/_variables'

export const textStyle = css`
  font-weight: normal;
  color: ${props => (props.color ? props.color : color.dark)};
  margin: ${props => (props.margin ? props.margin : 0)};
  padding: ${props => (props.padding ? props.padding : 0)};
  ${props => props.font && css`
    font-family: ${props.font};
  `}
`

export const H1 = styled.h1`
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.heading : fonts.size.heading)};
  ${textStyle};
  font-family: ${fonts.style.semiBold};
`

export const H2 = styled.h2`
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.subHeading : fonts.size.subHeading)};
  ${textStyle};
  font-family: ${fonts.style.semiBold};
`

export const H3 = styled.h3`
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.title : fonts.size.title)};
  ${textStyle};
  ${props => props.bold && css`
    font-family: ${fonts.style.medium};
  `}
`

export const H4 = styled.h4`
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.subTitle : fonts.size.subTitle)};
  ${textStyle};
  ${props => props.bold && css`
    font-family: ${fonts.style.medium};
  `}
`

export const P = styled.p`
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.normal : fonts.size.normal)};
  ${textStyle};
  ${props => props.bold && css`
    font-family: ${fonts.style.medium};
  `}
  line-height: 20px;
`

export const SmallText = styled.span`
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.small : fonts.size.small)};
  ${textStyle};
  ${props => props.bold && css`
    font-family: ${fonts.style.medium};
  `}
`

export const Label = styled.span`
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.label : fonts.size.label)};
  ${textStyle};
  ${props => props.bold && css`
    font-family: ${fonts.style.medium};
  `}
`
