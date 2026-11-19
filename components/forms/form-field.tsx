import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function fieldAria(
  id: string,
  error?: string,
  hint?: string,
): { "aria-invalid": true | undefined; "aria-describedby": string | undefined } {
  const ids = [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(
    Boolean,
  );

  return {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": ids.length ? ids.join(" ") : undefined,
  };
}

export function FormField({
  label,
  htmlFor,
  error,
  hint,
  optional = false,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <label
          htmlFor={htmlFor}
          className="text-sm font-semibold leading-5 text-ink"
        >
          {label}
        </label>
        {optional ? (
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Optional
          </span>
        ) : null}
      </div>
      {children}
      {hint ? (
        <p id={`${htmlFor}-hint`} className="text-xs leading-5 text-ink-soft">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p
          id={`${htmlFor}-error`}
          role="alert"
          className="text-xs font-semibold leading-5 text-danger"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
