import styled from 'styled-components'
import { ButtonSquare, ArrowDropUpIcon, Flex } from '@apeswapfinance/uikit'

export const FarmButton = styled(ButtonSquare)`
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  min-width: 129px;
  height: 44px;
`

export const NextArrow = styled(ArrowDropUpIcon)`
  transform: rotate(90deg);
`

export const Container = styled(Flex)`
  position: relative;
  margin-bottom: 100px;
  transform: translateY(-40px);
`
