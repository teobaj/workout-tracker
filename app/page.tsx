"use client";

import Image from 'next/image';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useId } from 'react';

export default function Home() {
  const router = useRouter();
  const handleNewSession = () => {
    const id = useId();
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1 className="text-xl font-bold">Workout Tracker 🏋️‍♀️</h1>
      <Link
        href="/workout"
        className="border-2 solid border-slate-400 p-4 rounded min-w-[260px] text-center hover:bg-sky-600 hover:border-white"
      >
        Past Workout Sessions
      </Link>
      <Link
        href="/workout/session/new/16"
        className="border-2 solid border-slate-400 p-4 rounded min-w-[260px] text-center hover:bg-sky-600 hover:border-white"
      >
        Create new session
      </Link>
    </main>
  );
}
