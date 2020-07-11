import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Logo = styled(Icon).attrs({
  name: 'compass-outline',
  size: 25,
  color: '#fff',
})`
  margin-right: 10px;
`

export const Title = styled.Text`
  font-size: 25px;
  color: #fff;
`
