import Button from 'react-bootstrap/Button';

export const Footer = () => {
    return (
        <div>
            <span className='footer-connect'>
                We are excited to grow and connect with you
            </span>
            <br/>
            <Button href="https://form.typeform.com/to/VQ9lqaJt" onclick="return !window.open(this.href, 'Google', 'width=500,height=500')" target="_blank" variant="secondary">
            Fill out this form and we will get back to you as soon as possible
            </Button>
        </div>
    )
}