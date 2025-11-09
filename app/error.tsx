'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <Card className="max-w-lg w-full">
        <CardContent className="p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>

          <h2 className="text-2xl font-bold text-zinc-900 mb-3">
            Bir Hata Oluştu
          </h2>

          <p className="text-zinc-600 mb-6">
            Üzgünüz, bir şeyler yanlış gitti. Lütfen sayfayı yenilemeyi deneyin
            veya ana sayfaya dönün.
          </p>

          {error.message && (
            <div className="bg-zinc-100 rounded-lg p-4 mb-6 text-left">
              <p className="text-sm text-zinc-700 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}

          <div className="flex gap-3 justify-center">
            <Button
              onClick={reset}
              className="gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Tekrar Dene
            </Button>

            <Button
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="gap-2"
            >
              <Home className="w-4 h-4" />
              Ana Sayfa
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
