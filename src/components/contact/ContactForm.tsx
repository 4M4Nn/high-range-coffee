"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ContactFormData, ContactFormErrors } from "@/types";

const initialData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: ContactFormData): ContactFormErrors {
    const next: ContactFormErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!EMAIL_PATTERN.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (values.phone && values.phone.replace(/[^0-9+]/g, "").length < 7) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Please tell us a little more (at least 10 characters).";
    }
    return next;
  }

  function handleChange(field: keyof ContactFormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setData(initialData);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-forest" />
        <h3 className="mt-4 font-serif text-xl font-semibold text-primary">
          Thank You for Reaching Out
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Your enquiry has been received. Our export desk will get back to you within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-secondary hover:text-accent"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Full Name *
          </label>
          <Input
            id="name"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            placeholder="Your full name"
          />
          {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            placeholder="you@company.com"
          />
          {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            placeholder="+1 555 000 0000"
          />
          {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-foreground">
            Company Name
          </label>
          <Input
            id="company"
            value={data.company}
            onChange={(e) => handleChange("company", e.target.value)}
            placeholder="Your company"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="country" className="mb-1.5 block text-sm font-medium text-foreground">
            Country
          </label>
          <Input
            id="country"
            value={data.country}
            onChange={(e) => handleChange("country", e.target.value)}
            placeholder="Country of operation"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message *
        </label>
        <Textarea
          id="message"
          rows={5}
          value={data.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          placeholder="Tell us about the grade, volume and shipping window you're looking for..."
        />
        {errors.message ? <p className="mt-1 text-xs text-destructive">{errors.message}</p> : null}
      </div>

      <button
        type="submit"
        className={cn(buttonVariants({ size: "lg" }), "w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto")}
      >
        Send Enquiry
      </button>
    </form>
  );
}
