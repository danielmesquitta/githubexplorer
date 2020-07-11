import React from 'react'
import {
  Container,
  Info,
  InfoHeader,
  HeaderImg,
  HeaderView,
  HeaderName,
  HeaderDescription,
  InfoUl,
  InfoLi,
  LiCount,
  LiName,
  Issues,
  Issue,
  IssueView,
  IssueTitle,
  IssueUser,
  RightArrow,
  AllIssuesBtn,
  AllIssuesBtnText,
} from './styles'

const Repository: React.FC = () => {
  return (
    <Container>
      <Info>
        <InfoHeader>
          <HeaderImg
            source={{
              uri:
                'https://avatars3.githubusercontent.com/u/60039311?s=460&u=46adc3921b562ab005d764b5dadbeee5649a8195&v=4',
            }}
          />
          <HeaderView>
            <HeaderName>repo.full_name</HeaderName>
            <HeaderDescription>repo.description</HeaderDescription>
          </HeaderView>
        </InfoHeader>

        <InfoUl>
          <InfoLi>
            <LiCount>1651</LiCount>
            <LiName>Stars</LiName>
          </InfoLi>

          <InfoLi>
            <LiCount>845</LiCount>
            <LiName>Forks</LiName>
          </InfoLi>

          <InfoLi>
            <LiCount>158</LiCount>
            <LiName>Issues abertos</LiName>
          </InfoLi>
        </InfoUl>
      </Info>

      <Issues>
        <Issue>
          <IssueView>
            <IssueTitle>issue.title</IssueTitle>
            <IssueUser>issue.user.login</IssueUser>
          </IssueView>
          <RightArrow />
        </Issue>
      </Issues>

      <AllIssuesBtn>
        <AllIssuesBtnText>Ver todos os issues</AllIssuesBtnText>
      </AllIssuesBtn>
    </Container>
  )
}

export default Repository
