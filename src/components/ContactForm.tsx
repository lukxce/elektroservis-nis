"use client";

import { useState, type FormEvent } from "react";

const reasonOptions = [
  { value: "elektroinstalacije", label: "Elektroinstalacije" },
  { value: "rasveta", label: "Ugradnja rasvete" },
  { value: "osiguraci-i-table", label: "Osigurači i table" },
  { value: "uticnice-i-prekidaci", label: "Utičnice i prekidači" },
  { value: "servis-uredjaja", label: "Servis kućnih uređaja" },
  { value: "klima-uredjaji", label: "Klima uređaji" },
  { value: "ev-punjaci", label: "EV punjači" },
  { value: "ostalo", label: "Ostalo" },
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Došlo je do greške.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Došlo je do greške.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-navy">Poruka je poslata</h2>
        <p className="mt-2 text-sm text-muted">
          Hvala, javićemo vam se u najkraćem roku. Ako je hitno, slobodno nas
          pozovite direktno.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-navy">Pošaljite nam poruku</h2>
      <p className="mt-1 text-sm text-muted">
        Odgovaramo obično u toku radnog dana.
      </p>

      {/* Honeypot polje — sakriveno od ljudi, botovi ga popunjavaju */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium text-navy">Ime i prezime *</span>
          <input
            type="text"
            name="name"
            required
            minLength={2}
            className="rounded-lg border border-black/10 px-3 py-2"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium text-navy">Telefon *</span>
          <input
            type="tel"
            name="phone"
            required
            minLength={5}
            className="rounded-lg border border-black/10 px-3 py-2"
          />
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-1 text-sm">
        <span className="font-medium text-navy">Email (opciono)</span>
        <input type="email" name="email" className="rounded-lg border border-black/10 px-3 py-2" />
      </label>

      <label className="mt-4 flex flex-col gap-1 text-sm">
        <span className="font-medium text-navy">Razlog kontakta</span>
        <select name="reason" defaultValue="montaza" className="rounded-lg border border-black/10 px-3 py-2">
          {reasonOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-4 flex flex-col gap-1 text-sm">
        <span className="font-medium text-navy">Poruka *</span>
        <textarea
          name="message"
          required
          minLength={5}
          rows={4}
          placeholder="Opišite ukratko šta vam treba, npr. kvar koji primećujete, prostor za montažu, ili termin koji vam odgovara."
          className="rounded-lg border border-black/10 px-3 py-2"
        />
      </label>

      {status === "error" && (
        <p className="mt-3 text-sm font-medium text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy transition hover:bg-accent-dark hover:text-white disabled:opacity-60"
      >
        {status === "loading" ? "Slanje..." : "Pošaljite poruku"}
      </button>
    </form>
  );
}
