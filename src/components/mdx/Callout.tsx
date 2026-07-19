export function Callout({ children, type = "info" }: { children: React.ReactNode, type?: "info" | "warning" | "insight" }) {
  const bg = type === "warning" ? "bg-red-100" : type === "insight" ? "bg-green-100" : "bg-blue-100";
  const border = type === "warning" ? "border-red-500" : type === "insight" ? "border-green-500" : "border-blue-500";
  return (
    <div className={`p-4 my-4 border-l-4 ${bg} ${border}`}>
      {children}
    </div>
  )
}
