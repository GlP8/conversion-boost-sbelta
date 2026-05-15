import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(25),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  notes: z.string().max(300).optional(),
});

const SERVICES = ["Lash Extensions", "Manicure & Pedicure", "Advanced Facial"];
const TIMES = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];

export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = encodeURIComponent(
      `Hello Sbeltas Beauty Spa! I'd like to book an appointment.\n\n` +
        `Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\n` +
        `Date: ${form.date}\nTime: ${form.time}` +
        (form.notes ? `\nNotes: ${form.notes}` : ""),
    );
    window.open(`https://wa.me/14374299450?text=${msg}`, "_blank");
    setSent(true);
  };

  const inputCls =
    "w-full bg-transparent border border-gold/30 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none transition-colors rounded-sm sm:px-4 sm:py-3";
  const labelCls =
    "block mb-2 text-[9px] uppercase tracking-[0.25em] text-gold sm:text-[10px] sm:tracking-[0.3em]";

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-xl px-4 text-left sm:mt-12 sm:px-6">
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        <div>
          <label className={labelCls} htmlFor="bf-name">Name</label>
          <input
            id="bf-name"
            className={inputCls}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
            maxLength={80}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="bf-phone">Phone</label>
          <input
            id="bf-phone"
            type="tel"
            className={inputCls}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+1 (___) ___-____"
            maxLength={25}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
        </div>
        <div className="md:col-span-2">
          <label className={labelCls} htmlFor="bf-service">Service</label>
          <select
            id="bf-service"
            className={inputCls}
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
          >
            <option value="" className="bg-background">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s} className="bg-background">{s}</option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-xs text-red-400">{errors.service}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="bf-date">Preferred Date</label>
          <input
            id="bf-date"
            type="date"
            className={inputCls}
            value={form.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => update("date", e.target.value)}
          />
          {errors.date && <p className="mt-1 text-xs text-red-400">{errors.date}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="bf-time">Preferred Time</label>
          <select
            id="bf-time"
            className={inputCls}
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
          >
            <option value="" className="bg-background">Select a time</option>
            {TIMES.map((t) => (
              <option key={t} value={t} className="bg-background">{t}</option>
            ))}
          </select>
          {errors.time && <p className="mt-1 text-xs text-red-400">{errors.time}</p>}
        </div>
        <div className="md:col-span-2">
          <label className={labelCls} htmlFor="bf-notes">Notes (optional)</label>
          <textarea
            id="bf-notes"
            className={inputCls}
            rows={3}
            maxLength={300}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Anything we should know?"
          />
        </div>
      </div>

      <button
        type="submit"
        className="group relative mt-6 inline-flex w-full items-center justify-center overflow-hidden rounded-sm gradient-gold px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] text-primary-foreground shadow-gold-sm transition-all duration-300 hover:shadow-gold sm:mt-8 sm:px-10 sm:py-4 sm:text-xs sm:tracking-[0.3em]"
      >
        <span className="relative z-10">Confirm My Reservation</span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </button>

      {sent && (
        <p className="mt-4 text-center text-[10px] uppercase tracking-[0.25em] text-gold sm:mt-5 sm:text-xs sm:tracking-[0.3em]">
          ✓ Opening WhatsApp to confirm your booking…
        </p>
      )}
      <p className="mt-3 text-center text-[9px] uppercase tracking-[0.25em] text-muted-foreground/70 sm:mt-4 sm:text-[10px] sm:tracking-[0.3em]">
        We'll confirm your appointment via WhatsApp with in minutes.
      </p>
    </form>
  );
}
