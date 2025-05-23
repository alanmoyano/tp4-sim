import { NextRequest, NextResponse } from 'next/server';
import random from 'random';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parámetros de la distribución normal
    const mean = parseFloat(searchParams.get('mean') || '0');
    const stdDev = parseFloat(searchParams.get('stdDev') || '1');
    const count = parseInt(searchParams.get('count') || '1');
    
    // Validaciones
    if (stdDev <= 0) {
      return NextResponse.json(
        { error: 'El parámetro stdDev (desviación estándar) debe ser mayor que 0' },
        { status: 400 }
      );
    }
    
    if (count <= 0 || count > 1000) {
      return NextResponse.json(
        { error: 'El parámetro count debe estar entre 1 y 1000' },
        { status: 400 }
      );
    }
    
    // Generar números aleatorios con distribución normal
    const numbers = Array.from({ length: count }, () => random.normal(mean, stdDev)());
    
    const response = {
      distribution: 'normal',
      parameters: { mean, stdDev },
      count,
      data: count === 1 ? numbers[0] : numbers
    };
    
    return NextResponse.json(response);
    
  } catch (error) {
    console.error('Error generating Normal random numbers:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { mean = 0, stdDev = 1, count = 1 } = body;
    
    // Validaciones
    if (stdDev <= 0) {
      return NextResponse.json(
        { error: 'El parámetro stdDev (desviación estándar) debe ser mayor que 0' },
        { status: 400 }
      );
    }
    
    if (count <= 0 || count > 1000) {
      return NextResponse.json(
        { error: 'El parámetro count debe estar entre 1 y 1000' },
        { status: 400 }
      );
    }
    
    // Generar números aleatorios con distribución normal
    const numbers = Array.from({ length: count }, () => random.normal(mean, stdDev)());
    
    const response = {
      distribution: 'normal',
      parameters: { mean, stdDev },
      count,
      data: count === 1 ? numbers[0] : numbers
    };
    
    return NextResponse.json(response);
    
  } catch (error) {
    console.error('Error generating Normal random numbers:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 