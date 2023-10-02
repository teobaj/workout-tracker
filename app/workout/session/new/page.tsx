import { Input } from '@/app/components/Input';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 p-24">
      <h1>Input your current Set</h1>

      <Input type="text" label="Exercise name" />
      <Input type="number" label="Sets" />
      <Input type="number" label="Reps" />
    </div>
  );
}
