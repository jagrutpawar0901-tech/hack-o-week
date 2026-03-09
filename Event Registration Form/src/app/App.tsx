import { useEffect } from 'react';
import { EventRegistrationForm } from './components/EventRegistrationForm';

export default function App() {
  useEffect(() => {
    document.title = '🎤 Singing Competition 2026 - Register Now!';
  }, []);

  return (
    <div className="size-full flex items-center justify-center">
      <EventRegistrationForm />
    </div>
  );
}