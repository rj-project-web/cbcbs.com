import type { ReactNode } from "react";

type BaseFieldProps = {
  id: string;
  label: string;
  hint?: string;
  icon?: ReactNode;
};

type InputFieldProps = BaseFieldProps & {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export function InputField({
  id,
  label,
  hint,
  icon,
  value,
  placeholder,
  onChange,
}: InputFieldProps) {
  return (
    <label className="block space-y-2" htmlFor={id}>
      <span className="text-sm font-medium text-slate-100">{label}</span>
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
        {icon ? <span className="text-slate-500">{icon}</span> : null}
        <input
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
        />
      </div>
      {hint ? <p className="text-xs text-slate-400">{hint}</p> : null}
    </label>
  );
}

type TextAreaFieldProps = BaseFieldProps & {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  rows?: number;
};

export function TextAreaField({
  id,
  label,
  hint,
  value,
  placeholder,
  onChange,
  rows = 5,
}: TextAreaFieldProps) {
  return (
    <label className="block space-y-2" htmlFor={id}>
      <span className="text-sm font-medium text-slate-100">{label}</span>
      <textarea
        id={id}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
      />
      {hint ? <p className="text-xs text-slate-400">{hint}</p> : null}
    </label>
  );
}
