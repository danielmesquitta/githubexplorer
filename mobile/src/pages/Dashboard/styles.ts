import styled, { css } from 'styled-components/native'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { colors } from '../../styles/variables'

interface InputProps {
  hasError: boolean
}

interface ButtonProps {
  onPress: Function
}

export const Container = styled.SafeAreaView`
  padding: 20px;
`

export const Title = styled.Text`
  font-size: 34px;
  color: #3a3a3a;
  margin-top: 40px;
`

export const Form = styled.View`
  margin: 40px 0 0;
  max-width: 700px;
  flex-direction: row;
`

export const Input = styled.TextInput<InputProps>`
  font-size: 16px;
  flex: 1;
  height: 50px;
  padding: 0 16px;
  border: 0;
  color: #3a3a3a;
  border: 2px solid ${props => (props.hasError ? colors.error : '#fff')};
  background: #fff;
`

export const Error = styled.Text`
  color: ${colors.error};
  margin: 4px 16px;
`

export const Button = styled(TouchableOpacity)<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background: ${colors.button};
  border-radius: 5px;
`

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`

export const Repositories = styled(FlatList as new () => FlatList)`
  margin-top: 20px;
  max-width: 700px;
`

export const Repo = styled(TouchableOpacity)<ButtonProps>`
  margin-top: 20px;
  background: #fff;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`

export const Image = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`

export const Info = styled.View`
  margin: 0 16px;
  flex: 1;
`

export const Name = styled.Text`
  font-size: 16px;
  color: #3d3d4d;
`

export const Description = styled.Text`
  font-size: 14px;
  color: #a8a8b3;
  margin-top: 4px;
`

export const RightArrow = styled(Icon).attrs({
  name: 'chevron-right',
  size: 20,
})`
  margin-left: auto;
  color: #cbcbd6;
`
