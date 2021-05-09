import { Jumbotron, Container } from 'react-bootstrap'

const Banner = ({title}) => {
    return (
        <Jumbotron fluid>
            <Container>
                <h2 className='display-2 text-center'>{ title }</h2>
            </Container>
        </Jumbotron>
    )
}

export default Banner
