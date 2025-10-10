export default function Section({titulo, children}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{titulo}</h2>
      <div className="flex justify-center gap-6">
    		{children}
      </div>
    </div>
  );
}
