export function TestAnimation() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="animate-bounce w-12 h-12 bg-blue-500 rounded-full" />
      <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full" />
      <div className="animate-pulse text-lg text-gray-600">Pulsando...</div>
    </div>
  );
}