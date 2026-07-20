import React, { useState } from "react";
import { format, addDays } from "date-fns";
import { CalendarIcon, Loader2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { submitEnquiry } from "../lib/api";
import { CONTACT } from "../data";

const INTERESTS = [
  "Reserve a Stay",
  "Plan a Private Retreat",
  "Wellness Retreat",
  "Check Availability",
  "Schedule a Video Call",
];

const GUESTS = ["1 – 2 Guests", "3 – 4 Guests", "5 – 6 Guests", "7+ Guests"];

const inputBase =
  "w-full bg-transparent border-0 border-b border-ivory/20 py-3 font-body text-ivory placeholder:text-ivory/30 focus:border-gold focus:outline-none transition-colors duration-300";

function DateField({ value, onChange, placeholder, disabled, testid }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" data-testid={testid} className={`${inputBase} flex items-center justify-between text-left`}>
          <span className={value ? "text-ivory" : "text-ivory/30"}>
            {value ? format(value, "PPP") : placeholder}
          </span>
          <CalendarIcon className="h-4 w-4 text-gold" strokeWidth={1.5} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto border-gold/20 bg-forest p-0" align="start">
        <Calendar mode="single" selected={value} onSelect={onChange} disabled={disabled} initialFocus className="text-ivory" />
      </PopoverContent>
    </Popover>
  );
}

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [interest, setInterest] = useState("Reserve a Stay");
  const [guests, setGuests] = useState(null);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const today = new Date(new Date().setHours(0, 0, 0, 0));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please share your name, email and phone.");
      return;
    }
    setLoading(true);
    try {
      await submitEnquiry({
        ...form,
        interest,
        guests,
        check_in: checkIn ? format(checkIn, "yyyy-MM-dd") : null,
        check_out: checkOut ? format(checkOut, "yyyy-MM-dd") : null,
      });
      toast.success("Thank you. We'll hold the quiet for you and reply within the day.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setInterest("Reserve a Stay");
      setGuests(null);
      setCheckIn(null);
      setCheckOut(null);
    } catch (err) {
      toast.error("Something went wrong. Please try again or reach us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const waLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    "Hello Vedanta, I would like to reserve a stay at the residences."
  )}`;

  return (
    <form onSubmit={handleSubmit} data-testid="enquiry-form" className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <input data-testid="enquiry-name" className={inputBase} placeholder="Full Name" value={form.name} onChange={update("name")} />
        <input data-testid="enquiry-phone" className={inputBase} placeholder="Phone" value={form.phone} onChange={update("phone")} />
      </div>

      <input data-testid="enquiry-email" type="email" className={inputBase} placeholder="Email Address" value={form.email} onChange={update("email")} />

      <div className="grid gap-8 sm:grid-cols-2">
        <DateField
          testid="enquiry-checkin-trigger"
          value={checkIn}
          onChange={(d) => { setCheckIn(d); if (checkOut && d && checkOut <= d) setCheckOut(null); }}
          placeholder="Check-in Date"
          disabled={(d) => d < today}
        />
        <DateField
          testid="enquiry-checkout-trigger"
          value={checkOut}
          onChange={setCheckOut}
          placeholder="Check-out Date"
          disabled={(d) => d < (checkIn ? addDays(checkIn, 1) : today)}
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <Select value={interest} onValueChange={setInterest}>
          <SelectTrigger data-testid="enquiry-interest" className="w-full rounded-none border-0 border-b border-ivory/20 bg-transparent px-0 py-3 font-body text-ivory focus:ring-0 focus:border-gold">
            <SelectValue placeholder="I would like to" />
          </SelectTrigger>
          <SelectContent className="border-gold/20 bg-forest text-ivory">
            {INTERESTS.map((i) => (
              <SelectItem key={i} value={i} className="font-body focus:bg-forest-light focus:text-ivory">{i}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={guests ?? undefined} onValueChange={setGuests}>
          <SelectTrigger data-testid="enquiry-guests" className="w-full rounded-none border-0 border-b border-ivory/20 bg-transparent px-0 py-3 font-body text-ivory focus:ring-0 focus:border-gold">
            <SelectValue placeholder="Guests" />
          </SelectTrigger>
          <SelectContent className="border-gold/20 bg-forest text-ivory">
            {GUESTS.map((g) => (
              <SelectItem key={g} value={g} className="font-body focus:bg-forest-light focus:text-ivory">{g}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <textarea
        data-testid="enquiry-message"
        rows={3}
        className={`${inputBase} resize-none`}
        placeholder="Tell us a little about the stay you're planning (optional)"
        value={form.message}
        onChange={update("message")}
      />

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          data-testid="enquiry-submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-9 py-3.5 font-body text-xs uppercase tracking-[0.25em] text-forest transition-colors duration-300 hover:bg-ivory disabled:opacity-60"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? "Sending" : "Reserve Your Stay"}
        </button>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          data-testid="enquiry-whatsapp"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-9 py-3.5 font-body text-xs uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
          WhatsApp
        </a>
      </div>
    </form>
  );
}
