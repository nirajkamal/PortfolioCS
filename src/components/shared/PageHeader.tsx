interface PageHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function PageHeader({ label, title, className = "" }: PageHeaderProps) {
  return (
    <div className={`mb-12 inline-block border-2 border-border px-6 py-4 bg-background shadow-retro ${className}`}>
      <p className="font-mono text-muted-foreground mb-2">// {label}</p>
      <h1 className="font-bold">{title}</h1>
    </div>
  );
}
