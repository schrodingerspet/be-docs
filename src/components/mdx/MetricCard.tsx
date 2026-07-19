export function MetricCard({ title, value }: { title: string, value: string }) {
  return (
    <div className="border-2 border-ink p-4 bg-panel-strong text-center inline-block m-2 min-w-[200px]">
      <div className="text-sm font-label uppercase mb-2 text-muted tracking-widest">{title}</div>
      <div className="text-3xl font-bold text-accent font-heading">{value}</div>
    </div>
  )
}
