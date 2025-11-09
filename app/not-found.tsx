'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <Card className="max-w-lg w-full">
        <CardContent className="p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <Search className="w-8 h-8 text-blue-600" />
          </div>

          <h1 className="text-6xl font-bold text-zinc-900 mb-3">404</h1>

          <h2 className="text-2xl font-bold text-zinc-900 mb-3">
            Sayfa Bulunamadı
          </h2>

          <p className="text-zinc-600 mb-6">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
            Ana sayfaya dönün veya diğer ülkeleri keşfedin.
          </p>

          <div className="flex gap-3 justify-center">
            <Link href="/">
              <Button className="gap-2">
                <Home className="w-4 h-4" />
                Ana Sayfa
              </Button>
            </Link>

            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Geri Dön
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
