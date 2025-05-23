'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface UniformResult {
  distribution: string;
  parameters: { min: number; max: number };
  count: number;
  data: number | number[];
}

export default function UniformPage() {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(1);
  const [count, setCount] = useState<number>(10);
  const [result, setResult] = useState<UniformResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const generateNumbers = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/random/uniform?min=${min}&max=${max}&count=${count}`);
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Error al generar números');
        setResult(null);
      } else {
        setResult(data);
      }
    } catch {
      setError('Error de conexión');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const formatData = (data: number | number[]) => {
    if (Array.isArray(data)) {
      return data.map(num => num.toFixed(4)).join(', ');
    }
    return data.toFixed(4);
  };

  const calculateStats = (data: number | number[]) => {
    if (!Array.isArray(data)) return null;

    const sum = data.reduce((acc, val) => acc + val, 0);
    const mean = sum / data.length;
    const variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length;
    const stdDev = Math.sqrt(variance);

    return {
      mean: mean.toFixed(4),
      variance: variance.toFixed(4),
      stdDev: stdDev.toFixed(4),
      min: Math.min(...data).toFixed(4),
      max: Math.max(...data).toFixed(4)
    };
  };

  const theoreticalMean = (min + max) / 2;
  const theoreticalVariance = Math.pow(max - min, 2) / 12;
  const theoreticalStdDev = Math.sqrt(theoreticalVariance);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Distribución Uniforme
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La distribución uniforme es una distribución continua donde todos los valores en un intervalo tienen
            la misma probabilidad de ocurrir. Es útil para modelar fenómenos donde todos los resultados son igualmente probables.
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Parámetros</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="min" className="block text-sm font-medium text-gray-700 mb-2">
                Mínimo (a)
              </label>
              <Input
                id="min"
                type="number"
                value={min}
                onChange={(e) => setMin(parseFloat(e.target.value) || 0)}
                step="0.1"
                className="w-full"
                placeholder="Ej: 0"
              />
              <p className="text-xs text-gray-500 mt-1">Límite inferior del intervalo</p>
            </div>

            <div>
              <label htmlFor="max" className="block text-sm font-medium text-gray-700 mb-2">
                Máximo (b)
              </label>
              <Input
                id="max"
                type="number"
                value={max}
                onChange={(e) => setMax(parseFloat(e.target.value) || 0)}
                step="0.1"
                className="w-full"
                placeholder="Ej: 1"
              />
              <p className="text-xs text-gray-500 mt-1">Límite superior (debe ser &gt; mínimo)</p>
            </div>

            <div>
              <label htmlFor="count" className="block text-sm font-medium text-gray-700 mb-2">
                Cantidad de números
              </label>
              <Input
                id="count"
                type="number"
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value) || 1)}
                min="1"
                max="1000"
                className="w-full"
                placeholder="Ej: 10"
              />
              <p className="text-xs text-gray-500 mt-1">Entre 1 y 1000</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-purple-800 mb-2">Información teórica</h3>
              <p className="text-xs text-purple-700">
                Media teórica: <span className="font-mono">{min < max ? theoreticalMean.toFixed(4) : 'N/A'}</span>
                {' | '}
                Varianza teórica: <span className="font-mono">{min < max ? theoreticalVariance.toFixed(4) : 'N/A'}</span>
                {' | '}
                Desv. estándar teórica: <span className="font-mono">{min < max ? theoreticalStdDev.toFixed(4) : 'N/A'}</span>
              </p>
            </div>
          </div>

          <Button
            onClick={generateNumbers}
            disabled={loading || min >= max}
            className="w-full md:w-auto bg-purple-600 hover:bg-purple-700"
          >
            {loading ? 'Generando...' : 'Generar Números'}
          </Button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Resultados</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Parameters and Data */}
              <div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Parámetros Utilizados</h3>
                  <p className="text-gray-600">Mínimo (a): <span className="font-mono font-semibold">{result.parameters.min}</span></p>
                  <p className="text-gray-600">Máximo (b): <span className="font-mono font-semibold">{result.parameters.max}</span></p>
                  <p className="text-gray-600">Cantidad: <span className="font-mono font-semibold">{result.count}</span></p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Números Generados</h3>
                  <div className="font-mono text-sm text-gray-700 break-all max-h-32 overflow-y-auto">
                    {formatData(result.data)}
                  </div>
                </div>
              </div>

              {/* Statistics */}
              {Array.isArray(result.data) && result.data.length > 1 && (
                <div>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Estadísticas</h3>
                    {(() => {
                      const stats = calculateStats(result.data);
                      return stats ? (
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Media:</span>
                            <span className="font-mono font-semibold">{stats.mean}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Varianza:</span>
                            <span className="font-mono font-semibold">{stats.variance}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Desv. Estándar:</span>
                            <span className="font-mono font-semibold">{stats.stdDev}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Mínimo:</span>
                            <span className="font-mono font-semibold">{stats.min}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Máximo:</span>
                            <span className="font-mono font-semibold">{stats.max}</span>
                          </div>
                        </div>
                      ) : null;
                    })()}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 