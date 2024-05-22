"use client";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "components/Input";

export const FormspreeForm = ({ formId }) => {
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return <p className="max-w-5xl mx-auto my-5">Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto min-w-max border border-slate-700 p-10">
<label for="email" className="block font-bold">Email Address</label>
      <Input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      
      <label for="message" className="block mt-5 font-bold">Message</label>
      <textarea
        className="border-2 border-slate-400 p-1 hover:border-slate-500"
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div>
        <button className="btn" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};