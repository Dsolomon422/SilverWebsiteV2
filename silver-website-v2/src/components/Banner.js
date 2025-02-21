import { Col, Container, Row } from "react-bootstrap"

export const Banner = () => {
    return(
        <section className="banner" >
            <Container>
                <Row>
                    <Col>
                        <span className="tagline">Introducing SILVER: 
                            <br/>
                            Bringing technology to seniors</span>
                        <p>
                        Zero-effort access to the services seniors need. AI-powered voice assistants seamlessly connect users to an ecosystem of trusted companies for shopping, travel, and caregiving. No complex apps, no confusing interfaces—just simple voice interactions. Everything is tracked, monitored, and tailored to individual preferences. When seniors need something, it’s just a request away.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}