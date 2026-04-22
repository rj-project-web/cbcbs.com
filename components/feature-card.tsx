type FeatureCardProps = {
  title: string;
  description: string;
  index: string;
};

export function FeatureCard({ title, description, index }: FeatureCardProps) {
  return (
    <div className="card-lift rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/20">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-sm font-semibold text-cyan-300">
        {index}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}
