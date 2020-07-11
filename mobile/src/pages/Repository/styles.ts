import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { colors } from '../../styles/variables'

export const Container = styled.View`
  padding: 20px;
`

export const Info = styled.View``

export const InfoHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const HeaderImg = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`

export const HeaderView = styled.View`
  margin-left: 16px;
`

export const HeaderName = styled.Text`
  font-size: 25px;
  color: #3d3d4d;
`

export const HeaderDescription = styled.Text`
  font-size: 16px;
  color: #737380;
`

export const InfoUl = styled.View`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-around;
`

export const InfoLi = styled.View``

export const LiCount = styled.Text`
  font-size: 25px;
  color: #3d3d4d;
`

export const LiName = styled.Text`
  margin-top: 4px;
  color: #6c6c80;
`

export const Issues = styled.View`
  margin-top: 40px;
`

export const Issue = styled(TouchableOpacity)`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`

export const IssueView = styled.View`
  flex: 1;
`

export const IssueTitle = styled.Text`
  font-size: 20px;
  color: #3d3d4d;
`

export const IssueUser = styled.Text`
  font-size: 18px;
  color: #a8a8b3;
`

export const RightArrow = styled(Icon).attrs({
  name: 'chevron-right',
  size: 20,
})`
  margin-left: auto;
  color: #cbcbd6;
`

export const AllIssuesBtn = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  width: 210px;
  height: 55px;
  background: ${colors.button};
  border-radius: 5px;
  border: 0;
`

export const AllIssuesBtnText = styled.Text`
  color: #fff;
  font-size: 18px;
`
