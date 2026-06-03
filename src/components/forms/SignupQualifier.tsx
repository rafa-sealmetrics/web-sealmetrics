"use client";

import { useState } from "react";
import type {
  AdsSpendEnum,
  LostTrackingEnum,
  SectorEnum,
  StakeholdersEnum,
  TimelineEnum,
} from "@/lib/signup/payload";

export interface QualifierState {
  role: string;
  site_url: string;
  sector: SectorEnum | "";
  ads_spend_band: AdsSpendEnum | "";
  pain_score: number | null;
  lost_tracking: LostTrackingEnum | "";
  stakeholders: StakeholdersEnum | "";
  timeline: TimelineEnum | "";
}

export const EMPTY_QUALIFIER: QualifierState = {
  role: "",
  site_url: "",
  sector: "",
  ads_spend_band: "",
  pain_score: null,
  lost_tracking: "",
  stakeholders: "",
  timeline: "",
};

type Locale = "en" | "es";
type Theme = "light" | "dark";

interface Props {
  value: QualifierState;
  onChange: (next: QualifierState) => void;
  locale?: Locale;
  theme?: Theme;
  // If false, show all fields; if true (default), collapsed behind a toggle.
  collapsible?: boolean;
  // Hide fields that the parent form already captures elsewhere.
  hide?: Partial<Record<keyof QualifierState, boolean>>;
  idPrefix?: string;
}

interface Copy {
  toggleOpen: string;
  toggleClose: string;
  intro: string;
  fields: {
    role: string;
    site_url: string;
    site_url_placeholder: string;
    sector: string;
    ads_spend_band: string;
    pain_score: string;
    pain_score_helper: string;
    pain_low: string;
    pain_mid: string;
    pain_high: string;
    lost_tracking: string;
    stakeholders: string;
    timeline: string;
  };
  options: {
    sector: Array<{ value: SectorEnum; label: string }>;
    ads_spend_band: Array<{ value: AdsSpendEnum; label: string }>;
    lost_tracking: Array<{ value: LostTrackingEnum; label: string }>;
    stakeholders: Array<{ value: StakeholdersEnum; label: string }>;
    timeline: Array<{ value: TimelineEnum; label: string }>;
  };
  placeholderSelect: string;
}

const COPY: Record<Locale, Copy> = {
  en: {
    toggleOpen: "Add 4 details for priority handling (60 seconds)",
    toggleClose: "Hide priority questions",
    intro:
      "Optional. We use these to decide whether Rafa calls you personally vs queues you in the standard flow.",
    fields: {
      role: "Your role",
      site_url: "Your website",
      site_url_placeholder: "https://yourcompany.com",
      sector: "Which sector are you in?",
      ads_spend_band: "How much do you spend on paid media per month?",
      pain_score:
        "From 1 to 10, how much does NOT knowing the real ROAS of your campaigns hurt?",
      pain_score_helper:
        "1 = not a problem, 10 = it's a daily issue blocking decisions.",
      pain_low: "Manageable",
      pain_mid: "Important",
      pain_high: "Critical",
      lost_tracking:
        "Have you lost tracked conversions since Consent Mode v2 or iOS 14?",
      stakeholders: "Who else decides on this tool at your company?",
      timeline: "When do you want it running?",
    },
    options: {
      sector: [
        { value: "ecom", label: "E-commerce" },
        { value: "hotel", label: "Hotel / hospitality" },
        { value: "other", label: "Other" },
      ],
      ads_spend_band: [
        { value: "lt_10k", label: "Less than €10K / month" },
        { value: "10k_50k", label: "€10K – €50K / month" },
        { value: "50k_200k", label: "€50K – €200K / month" },
        { value: "gt_200k", label: "More than €200K / month" },
      ],
      lost_tracking: [
        { value: "yes_much", label: "Yes, a lot" },
        { value: "yes_some", label: "Yes, some" },
        { value: "no", label: "No" },
        { value: "dont_know", label: "Don't know" },
      ],
      stakeholders: [
        { value: "solo", label: "Just me" },
        { value: "marketing_founder", label: "Marketing + Founder" },
        { value: "marketing_cmo", label: "Marketing + CMO" },
        { value: "marketing_team", label: "Marketing team only" },
        { value: "committee", label: "Committee / multiple stakeholders" },
      ],
      timeline: [
        { value: "now", label: "I need it now" },
        { value: "1m", label: "Within 1 month" },
        { value: "3m", label: "Within 3 months" },
        { value: "exploring", label: "Just exploring" },
      ],
    },
    placeholderSelect: "Select…",
  },
  es: {
    toggleOpen: "Añade 4 detalles para priorización VIP (60 segundos)",
    toggleClose: "Ocultar preguntas de priorización",
    intro:
      "Opcional. Las usamos para decidir si Rafa te llama personalmente o entras al flujo estándar.",
    fields: {
      role: "Tu cargo",
      site_url: "URL de tu sitio",
      site_url_placeholder: "https://tuempresa.com",
      sector: "¿En qué sector estás?",
      ads_spend_band: "¿Cuánto inviertes en publicidad al mes?",
      pain_score:
        "Del 1 al 10, ¿cuánto te duele NO saber el ROAS real de tus campañas?",
      pain_score_helper:
        "1 = no es problema, 10 = es un dolor diario que bloquea decisiones.",
      pain_low: "Soportable",
      pain_mid: "Importante",
      pain_high: "Crítico",
      lost_tracking:
        "¿Has perdido conversiones tracked tras Consent Mode v2 o iOS 14?",
      stakeholders: "¿Quién más decide sobre esta herramienta en tu empresa?",
      timeline: "¿Cuándo lo quieres tener funcionando?",
    },
    options: {
      sector: [
        { value: "ecom", label: "E-commerce" },
        { value: "hotel", label: "Hotel / hospitality" },
        { value: "other", label: "Otro" },
      ],
      ads_spend_band: [
        { value: "lt_10k", label: "Menos de 10.000 €/mes" },
        { value: "10k_50k", label: "10.000 – 50.000 €/mes" },
        { value: "50k_200k", label: "50.000 – 200.000 €/mes" },
        { value: "gt_200k", label: "Más de 200.000 €/mes" },
      ],
      lost_tracking: [
        { value: "yes_much", label: "Sí, mucho" },
        { value: "yes_some", label: "Sí, algo" },
        { value: "no", label: "No" },
        { value: "dont_know", label: "No lo sé" },
      ],
      stakeholders: [
        { value: "solo", label: "Solo yo" },
        { value: "marketing_founder", label: "Marketing + Founder" },
        { value: "marketing_cmo", label: "Marketing + CMO" },
        { value: "marketing_team", label: "Solo el equipo de marketing" },
        { value: "committee", label: "Comité / varios stakeholders" },
      ],
      timeline: [
        { value: "now", label: "Lo necesito ya" },
        { value: "1m", label: "En 1 mes" },
        { value: "3m", label: "En 3 meses" },
        { value: "exploring", label: "Solo estoy explorando" },
      ],
    },
    placeholderSelect: "Selecciona…",
  },
};

function painLabel(score: number, t: Copy): string {
  if (score <= 3) return t.fields.pain_low;
  if (score <= 7) return t.fields.pain_mid;
  return t.fields.pain_high;
}

export function SignupQualifier({
  value,
  onChange,
  locale = "en",
  theme = "light",
  collapsible = true,
  hide = {},
  idPrefix = "sq",
}: Props) {
  const t = COPY[locale];
  const [open, setOpen] = useState(!collapsible);

  const update = <K extends keyof QualifierState>(
    key: K,
    next: QualifierState[K],
  ) => {
    onChange({ ...value, [key]: next });
  };

  const isDark = theme === "dark";

  const labelClass = isDark
    ? "block text-[0.8rem] text-dark-text-secondary mb-1.5"
    : "block text-[12px] font-mono uppercase tracking-[0.08em] text-ink-soft font-semibold mb-1.5";

  const inputClass = isDark
    ? "w-full px-4 py-3 bg-white/5 border border-white/15 rounded-[4px] text-[0.95rem] text-dark-text placeholder:text-dark-text-tertiary focus:outline-none focus:border-green-muted/50 transition-colors"
    : "w-full px-4 py-3 text-[15px] border border-warm-200 rounded-md bg-white focus:border-brand focus:outline-none transition-colors";

  const radioRowClass = isDark
    ? "flex items-center gap-3 cursor-pointer text-[0.9rem] text-dark-text-secondary"
    : "flex items-center gap-3 cursor-pointer text-[14px] text-ink";

  if (collapsible && !open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          isDark
            ? "w-full text-left px-4 py-3 border border-dashed border-white/20 rounded-md text-[0.85rem] text-dark-text-secondary hover:border-green-muted/40 transition-colors"
            : "w-full text-left px-4 py-3 border border-dashed border-warm-200 rounded-md text-[13px] text-ink-soft hover:border-brand hover:text-ink transition-colors"
        }
      >
        + {t.toggleOpen}
      </button>
    );
  }

  return (
    <div
      className={
        isDark
          ? "space-y-5 pt-5 border-t border-white/10"
          : "space-y-5 pt-5 border-t border-warm-100"
      }
    >
      <div className="flex items-start justify-between gap-3">
        <p
          className={
            isDark
              ? "text-[0.85rem] text-dark-text-secondary leading-relaxed flex-1"
              : "text-[13px] text-ink-soft leading-relaxed flex-1"
          }
        >
          {t.intro}
        </p>
        {collapsible && (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className={
              isDark
                ? "text-[0.75rem] text-dark-text-tertiary underline hover:text-dark-text-secondary"
                : "text-[12px] text-ink-soft underline hover:text-ink"
            }
          >
            {t.toggleClose}
          </button>
        )}
      </div>

      {!hide.role && (
        <div>
          <label htmlFor={`${idPrefix}-role`} className={labelClass}>
            {t.fields.role}
          </label>
          <input
            id={`${idPrefix}-role`}
            type="text"
            value={value.role}
            onChange={(e) => update("role", e.target.value)}
            className={inputClass}
            autoComplete="organization-title"
          />
        </div>
      )}

      {!hide.site_url && (
        <div>
          <label htmlFor={`${idPrefix}-site_url`} className={labelClass}>
            {t.fields.site_url}
          </label>
          <input
            id={`${idPrefix}-site_url`}
            type="url"
            value={value.site_url}
            onChange={(e) => update("site_url", e.target.value)}
            placeholder={t.fields.site_url_placeholder}
            className={inputClass}
            autoComplete="url"
          />
        </div>
      )}

      {!hide.sector && (
        <div>
          <label htmlFor={`${idPrefix}-sector`} className={labelClass}>
            {t.fields.sector}
          </label>
          <select
            id={`${idPrefix}-sector`}
            value={value.sector}
            onChange={(e) => update("sector", e.target.value as SectorEnum | "")}
            className={inputClass}
          >
            <option value="">{t.placeholderSelect}</option>
            {t.options.sector.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {!hide.ads_spend_band && (
        <div>
          <label htmlFor={`${idPrefix}-ads_spend_band`} className={labelClass}>
            {t.fields.ads_spend_band}
          </label>
          <select
            id={`${idPrefix}-ads_spend_band`}
            value={value.ads_spend_band}
            onChange={(e) =>
              update("ads_spend_band", e.target.value as AdsSpendEnum | "")
            }
            className={inputClass}
          >
            <option value="">{t.placeholderSelect}</option>
            {t.options.ads_spend_band.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {!hide.pain_score && (
        <div>
          <label htmlFor={`${idPrefix}-pain_score`} className={labelClass}>
            {t.fields.pain_score}
          </label>
          <p
            className={
              isDark
                ? "text-[0.75rem] text-dark-text-tertiary mt-0 mb-3 leading-relaxed"
                : "text-[12px] text-ink-soft mt-0 mb-3 leading-relaxed"
            }
          >
            {t.fields.pain_score_helper}
          </p>
          <div className="flex items-center gap-4">
            <input
              id={`${idPrefix}-pain_score`}
              type="range"
              min={1}
              max={10}
              step={1}
              value={value.pain_score ?? 5}
              onChange={(e) => update("pain_score", Number(e.target.value))}
              className={
                isDark
                  ? "flex-1 accent-green-muted cursor-pointer"
                  : "flex-1 accent-brand cursor-pointer"
              }
            />
            <span
              className={
                isDark
                  ? "font-mono text-[14px] font-semibold text-dark-text w-8 text-right tabular-nums"
                  : "font-mono text-[14px] font-semibold text-ink w-8 text-right tabular-nums"
              }
            >
              {value.pain_score ?? "–"}
            </span>
          </div>
          {value.pain_score !== null && (
            <p
              className={
                isDark
                  ? "text-[0.75rem] text-dark-text-secondary mt-2 font-mono uppercase tracking-[0.08em]"
                  : "text-[12px] text-ink-soft mt-2 font-mono uppercase tracking-[0.08em] font-semibold"
              }
            >
              {painLabel(value.pain_score, t)}
            </p>
          )}
          {value.pain_score === null && (
            <button
              type="button"
              onClick={() => update("pain_score", 5)}
              className={
                isDark
                  ? "text-[0.75rem] text-dark-text-tertiary underline mt-2"
                  : "text-[12px] text-ink-soft underline mt-2"
              }
            >
              {locale === "es" ? "Tocar para responder" : "Tap to answer"}
            </button>
          )}
        </div>
      )}

      {!hide.lost_tracking && (
        <fieldset>
          <legend className={labelClass}>{t.fields.lost_tracking}</legend>
          <div className="flex flex-col gap-2 mt-2">
            {t.options.lost_tracking.map((o) => (
              <label key={o.value} className={radioRowClass}>
                <input
                  type="radio"
                  name={`${idPrefix}-lost_tracking`}
                  value={o.value}
                  checked={value.lost_tracking === o.value}
                  onChange={() => update("lost_tracking", o.value)}
                  className={
                    isDark
                      ? "accent-green-muted w-4 h-4 cursor-pointer"
                      : "accent-brand w-4 h-4 cursor-pointer"
                  }
                />
                <span>{o.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {!hide.stakeholders && (
        <div>
          <label htmlFor={`${idPrefix}-stakeholders`} className={labelClass}>
            {t.fields.stakeholders}
          </label>
          <select
            id={`${idPrefix}-stakeholders`}
            value={value.stakeholders}
            onChange={(e) =>
              update("stakeholders", e.target.value as StakeholdersEnum | "")
            }
            className={inputClass}
          >
            <option value="">{t.placeholderSelect}</option>
            {t.options.stakeholders.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {!hide.timeline && (
        <div>
          <label htmlFor={`${idPrefix}-timeline`} className={labelClass}>
            {t.fields.timeline}
          </label>
          <select
            id={`${idPrefix}-timeline`}
            value={value.timeline}
            onChange={(e) =>
              update("timeline", e.target.value as TimelineEnum | "")
            }
            className={inputClass}
          >
            <option value="">{t.placeholderSelect}</option>
            {t.options.timeline.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
