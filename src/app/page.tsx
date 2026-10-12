"use client";

import { useEffect, useState } from "react";

// For GitHub Pages, set NEXT_PUBLIC_BASE_PATH=/emma-birthday if needed.
// With Next.js basePath configured, keep this empty to avoid a double prefix.
const BASE = process.env.GITHUB_PAGES === "true" ? "/emma-birthday" : "";
const EVENT_TIME = new Date("2026-10-24T15:00:00-06:00").getTime();
const MAPS_URL =
  "https://www.google.com/maps/place/Av.+del+Bronce+20,+El+Fort%C3%ADn,+45066+Zapopan,+Jal./@20.62408,-103.4689086,17z/data=!3m1!4b1!4m6!3m5!1s0x8428ab96d60f1689:0x2d03255d2dc1c1e4!8m2!3d20.62408!4d-103.4689086!16s%2Fg%2F11zcnjsrp3?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D";
const WHATSAPP_URL = `https://wa.me/523312308139?text=${encodeURIComponent("¡Hola! Confirmo nuestra asistencia al cumpleaños de Emma.\n #Adultos - \n #Niños - \n¡Nos vemos en la fiesta! 🐱🎉")}`;

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
const EMPTY: Remaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function getRemaining(): Remaining {
  const ms = Math.max(0, EVENT_TIME - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1_000) % 60),
  };
}

function NextZone({ href, label }: { href: string; label: string }) {
  return (
    <a className="zone-next" href={href} aria-label={label}>
      <span>{label}</span>
      <span className="zone-chevron" aria-hidden="true">
        ⌄
      </span>
    </a>
  );
}

export default function Home() {
  const [remaining, setRemaining] = useState<Remaining>(EMPTY);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const update = () => {
      setRemaining(getRemaining());
      setReady(true);
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="birthday-scroll">
      <section
        className="snap-scene birthday-hero"
        id="inicio"
        aria-label="Cumpleaños de Emma"
      >
        <picture className="hero-picture">
          <source
            media="(max-width: 699px)"
            srcSet={`${BASE}/images/gabby/hero-mobile.png`}
          />
          <source
            media="(max-width: 1100px)"
            srcSet={`${BASE}/images/gabby/hero-tablet.png`}
          />
          <img
            className="hero-art"
            src={`${BASE}/images/gabby/hero-desktop.png`}
            alt="Gabby y sus amigos rodean un cielo mágico"
            fetchPriority="high"
          />
        </picture>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="hero-eyebrow">CUMPLEAÑOS</p>
          <span className="hero-age">4</span>
          <h1 className="hero-name">EMMA</h1>
        </div>
        <NextZone href="#contador" label="Desliza para descubrir" />
      </section>

      <section
        className="snap-scene countdown-scene"
        id="contador"
        aria-labelledby="countdown-heading"
      >
        <div className="scene-stars" aria-hidden="true" />
        <div className="countdown-content">
          <h2 className="countdown-title" id="countdown-heading">
            ¡YA CASI ES HORA DE FESTEJAR!
          </h2>
          <div
            className="countdown-grid"
            role="timer"
            aria-label="Tiempo restante para el cumpleaños"
          >
            {(
              [
                ["DÍAS", remaining.days],
                ["HORAS", remaining.hours],
                ["MIN", remaining.minutes],
                ["SEG", remaining.seconds],
              ] as const
            ).map(([label, value]) => (
              <div className="countdown-unit" key={label}>
                <strong>{ready ? String(value).padStart(2, "0") : "--"}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <p className="countdown-date">Sábado 24 de octubre · 3:00 PM</p>
        </div>
        <img
          className="countdown-character"
          src={`${BASE}/images/gabby/cakey.png`}
          alt="Cakey, el gatito pastelito"
          loading="lazy"
        />
        <NextZone href="#ubicacion" label="Ubicación" />
      </section>

      <section
        className="snap-scene location-scene"
        id="ubicacion"
        aria-labelledby="location-heading"
      >
        <div className="scene-stars" aria-hidden="true" />
        <div className="location-shell">
          <h2 className="location-title" id="location-heading">
            UBICACIÓN
          </h2>
          <div className="location-card">
            <div className="location-icon" aria-hidden="true">
              📍
            </div>
            <img
              className="location-croquis"
              src={`${BASE}/images/gabby/croquis.png`}
              alt="Croquis de acceso a Casa Club en avenida del Bronce"
              loading="lazy"
            />
            <div className="location-text">
              <p className="location-place">Av Del Bronce #20</p>
              <p className="location-address">
                Casa Club · Zapopan, Jal. 45066
              </p>
            </div>
          </div>
          <a
            className="maps-button"
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ubicación en Maps
          </a>
        </div>
        <img
          className="location-character"
          src={`${BASE}/images/gabby/pandy-sticker.png`}
          alt="Pandy saluda junto a la ubicación"
          loading="lazy"
        />
        <NextZone href="#confirmacion" label="Confirma tu asistencia" />
      </section>

      <section
        className="snap-scene rsvp-scene"
        id="confirmacion"
        aria-labelledby="rsvp-heading"
      >
        <div className="scene-stars" aria-hidden="true" />
        <div className="rsvp-content">
          <h2 className="rsvp-title" id="rsvp-heading">
            CONFIRMA TU ASISTENCIA
          </h2>
          <div className="rsvp-character-container">
            <img
              className="rsvp-character"
              src={`${BASE}/images/gabby/hero-group.png`}
              alt="Gabby y sus amigos te esperan en la fiesta"
              loading="lazy"
            />
          </div>
          <a
            className="rsvp-button"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="rsvp-whatsapp"
              src={`${BASE}/images/gabby/whatsapp.png`}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <span>¡SÍ, AHÍ ESTARÉ!</span>
          </a>
        </div>
        <a className="rsvp-back" href="#inicio">
          ↑ Volver al inicio
        </a>
      </section>
    </main>
  );
}
