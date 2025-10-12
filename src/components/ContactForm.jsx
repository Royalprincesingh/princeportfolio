import React, { useState, useCallback } from 'react';
import { Form, Button, Alert, Container, Spinner } from 'react-bootstrap';

// ✅ Updated API URL (points to your Railway backend)
const API_URL = 'https://princeportfolio-production.up.railway.app/api/contact';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    message: '',
    type: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setStatus({ message: '', type: '' });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: '', type: '' });

    try {
      console.log(`📨 Sending request to: ${API_URL}`);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          message: data.message || 'Message sent successfully! I will get back to you soon.',
          type: 'success'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('❌ Contact form error:', error);
      setStatus({
        message: `Error: ${error.message}`,
        type: 'danger'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Form onSubmit={handleSubmit} className="contact-form">
        {status.message && (
          <Alert variant={status.type} className="mb-4">
            {status.message}
          </Alert>
        )}

        <Form.Group className="mb-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            className="form-input"
            rows={5}
          />
        </Form.Group>

        <Button 
          variant="primary" 
          type="submit" 
          disabled={loading}
          className="submit-btn w-100 position-relative"
        >
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              Sending...
            </>
          ) : 'Send Message'}
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
