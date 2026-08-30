import { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = e => {
    e.preventDefault()

    const newErrors = {}

    if (name.trim() === '') {
      newErrors.name = 'Name is required'
    }

    if (email.trim() === '') {
      newErrors.email = 'Email is required'
    } else if (!email.includes('@')) {
      newErrors.email = 'Please enter a valid email'
    }

    if (message.trim() === '') {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log('Form Submitted')

      console.log({
        name,
        email,
        message
      })

      setName('')
      setEmail('')
      setMessage('')
      setErrors({})
    }
  }

  return (
    <div className='contact-page'>
      <h1>Contact Us</h1>

      <p>Have a question? Fill out the form below and we'll get back to you.</p>

      <form className='contact-form' onSubmit={handleSubmit}>
        <label>Name</label>

        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Enter your name'
          className={errors.name ? 'input-error' : ''}
        />

        {errors.name && <p className='error-text'>{errors.name}</p>}

        <label>Email</label>

        <input
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Enter your email'
          className={errors.email ? 'input-error' : ''}
        />

        {errors.email && <p className='error-text'>{errors.email}</p>}

        <label>Message</label>

        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder='Enter your message'
          className={errors.message ? 'input-error' : ''}
        />

        {errors.message && <p className='error-text'>{errors.message}</p>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
