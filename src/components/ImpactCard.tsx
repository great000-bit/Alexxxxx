export default function ImpactCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-grey-200 bg-white p-6">
      <h3 className="text-base font-semibold text-navy-950 mb-2">{title}</h3>
      <p className="text-sm text-grey-600 leading-relaxed">{description}</p>
    </div>
  );
}
