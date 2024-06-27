"use client";

import "./formspreeform.css";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "components/Input";

export const FormspreeForm = ({ formId }) => {
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return <p className="max-w-5xl mx-auto my-5">Благодарим Ви, Вашето съобщение беше изпратено!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
<label for="name" className="label-contact">Име</label>
      <Input id="name" type="name" name="name"  className="input-contact name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />


<label for="email" className="block font-bold">Email</label>
      <Input id="email" type="email" name="email" className="input-contact email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      
      <label for="message" className="block mt-5 font-bold">Съобщение:</label>
      <textarea
       className="textarea-contact message"
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div>
        <button className="btn-contact" type="submit" disabled={state.submitting}>
          Изпрати
        </button>
      </div>
    </form>
  );
};