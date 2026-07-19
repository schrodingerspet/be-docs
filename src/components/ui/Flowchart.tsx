export function Flowchart({
  nodes,
}: {
  nodes: { id: string; label: string; desc?: string }[];
}) {
  return (
    <div className="flex flex-col gap-4 relative py-4">
      {nodes.map((node, i) => (
        <div key={node.id} className="relative flex flex-col items-center">
          <div className="border border-ink bg-panel p-4 w-full max-w-2xl text-center z-10">
            <h3 className="font-label uppercase text-sm tracking-wider font-bold">{node.label}</h3>
            {node.desc && <p className="text-muted mt-2 text-sm">{node.desc}</p>}
          </div>
          {i < nodes.length - 1 && (
            <div className="h-6 w-px bg-ink my-1 relative">
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 border-r border-b border-ink rotate-45"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
