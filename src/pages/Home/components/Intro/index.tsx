import { Container, Content, Image, LeftElements, Title } from './styles'
import coffeeImg from '../../../../assets/coffee-banner.svg'

const Intro = () => {
  return (
    <Container>
      <Content>
        <LeftElements>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Title>
          <div>
            <span>Compra simples e segura</span>
            <span>Embalagem mantém o café intacto</span>
            <span>Entrega rápida e rastreada</span>
            <span>O café chega fresquinho até você</span>
          </div>
        </LeftElements>

        <Image src={coffeeImg} alt="imagem café da marca" draggable={false} />
      </Content>
    </Container>
  )
}

export default Intro
