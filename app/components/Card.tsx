export default function Card({ children, className = "" }: any) {
  return <div className={`card p-6 ${className}`}>{children}</div>;
}
