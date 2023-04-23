import styled from 'styled-components'
import bg from '../../../../assets/background-banner.svg'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 56px;
  margin: 32px;

  max-width: 1120px;
  width: 100%;
`

export const LeftElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  height: 100%;
`

export const Title = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-family: 'Baloo 2';
    line-height: 130%;
    font-size: 48px;
    font-weight: 900;
  }

  p {
    font-size: 20px;
    font-weight: regular;
    line-height: 130%;
  }
`

export const Image = styled.img`
  user-select: none;
`
