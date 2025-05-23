import { NextRequest, NextResponse } from 'next/server';
import random from 'random';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parámetros de la distribución uniforme
    const min = parseFloat(searchParams.get('min') || '0');
    const max = parseFloat(searchParams.get('max') || '1');
    const count = parseInt(searchParams.get('count') || '1');
    
    // Validaciones
    if (min >= max) {
      return NextResponse.json(
        { error: 'El parámetro min debe ser menor que max' },
        { status: 400 }
      );
    }
    
    if (count <= 0 || count > 1000) {
      return NextResponse.json(
        { error: 'El parámetro count debe estar entre 1 y 1000' },
        { status: 400 }
      );
    }
    
    // Generar números aleatorios con distribución uniforme
    const numbers = Array.from({ length: count }, () => random.uniform(min, max)());
    
    const response = {
      distribution: 'uniform',
      parameters: { min, max },
      count,
      data: count === 1 ? numbers[0] : numbers
    };
    
    return NextResponse.json(response);
    
  } catch (error) {
    console.error('Error generating Uniform random numbers:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { min = 0, max = 1, count = 1 } = body;
    
    // Validaciones
    if (min >= max) {
      return NextResponse.json(
        { error: 'El parámetro min debe ser menor que max' },
        { status: 400 }
      );
    }
    
    if (count <= 0 || count > 1000) {
      return NextResponse.json(
        { error: 'El parámetro count debe estar entre 1 y 1000' },
        { status: 400 }
      );
    }
    
    // Generar números aleatorios con distribución uniforme
    const numbers = Array.from({ length: count }, () => random.uniform(min, max)());
    
    const response = {
      distribution: 'uniform',
      parameters: { min, max },
      count,
      data: count === 1 ? numbers[0] : numbers
    };
    
    return NextResponse.json(response);
    
  } catch (error) {
    console.error('Error generating Uniform random numbers:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 