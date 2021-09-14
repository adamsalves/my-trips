import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        laudantium at, ratione aliquam in necessitatibus optio doloremque
        aperiam voluptatem debitis! Corporis asperiores quia illo omnis vero qui
        voluptatum saepe magnam?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
