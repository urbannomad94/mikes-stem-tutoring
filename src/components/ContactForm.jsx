import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("xzbqzalb");
    if (state.succeeded) {
      return <p>Thanks for your message!</p>;
    }
    
    return (
        <form id='contact' onSubmit={handleSubmit}>
            <div className="form-input">
                <label htmlFor="name">
                    Full Name
                </label>
                <input
                    id="name"
                    type="text" 
                    name="name"
                />
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
            </div>
            <div className="form-input">
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="form-input">
                <label htmlFor="message">
                    Enter your message
                </label>
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div> 
            <button type="submit" className='btn' disabled={state.submitting}>
                Submit
            </button>
            <span>Reach out to me and I will get back to you as soon as possible.</span>
        </form>
    );
}