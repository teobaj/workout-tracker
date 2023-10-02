'use client';

import { Input } from '@/app/components/Input';
import { FormEvent, FormEventHandler, useState } from 'react';

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const [exerciseName, setExerciseName] = useState<string>();
  const [sets, setSets] = useState<string>();
  const [reps, setReps] = useState<string>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    fetch('/api/session/id', {
      method: 'POST',
      body: JSON.stringify({
        sessionId: '',
        exerciseName,
        sets,
        reps,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 p-24">
      <h1>Input your current Set</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Exercise name"
          onChange={(e) => setExerciseName(e.target.value)}
        />
        <Input
          type="number"
          min="0"
          label="Sets"
          onChange={(e) => setSets(e.target.value)}
        />
        <Input
          type="number"
          label="Reps"
          min="0"
          onChange={(e) => setReps(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
