import { Suspense } from 'react';
import ClientPage from './ClientPage';

// Vous pouvez créer un composant de chargement plus joli si vous le souhaitez
function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>Loading...</div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <ClientPage />
    </Suspense>
  );
}
