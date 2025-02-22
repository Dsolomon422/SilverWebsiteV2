import Button from 'react-bootstrap/Button';

export const Footer = () => {
    return (
        <div>
            <span className='footer-connect'>
                We are excited to grow and connect with you
            </span>
            <br/>
            <Button href="https://form.typeform.com/to/VQ9lqaJt" variant="secondary" size="lg">
            Fill out this form and we will get back to you as soon as possible
            </Button>
        </div>
    )
}