import { NextRequest, NextResponse } from 'next/server';
import random from 'random';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parámetros de la distribución exponencial
    const lambda = parseFloat(searchParams.get('lambda') || '1');
    const count = parseInt(searchParams.get('count') || '1');
    
    // Validaciones
    if (lambda <= 0) {
      return NextResponse.json(
        { error: 'El parámetro lambda (tasa) debe ser mayor que 0' },
        { status: 400 }
      );
    }
    
    if (count <= 0 || count > 1000) {
      return NextResponse.json(
        { error: 'El parámetro count debe estar entre 1 y 1000' },
        { status: 400 }
      );
    }
    
    // Generar números aleatorios con distribución exponencial
    const numbers = Array.from({ length: count }, () => random.exponential(lambda)());
    
    const response = {
      distribution: 'exponential',
      parameters: { lambda },
      count,
      data: count === 1 ? numbers[0] : numbers
    };
    
    return NextResponse.json(response);
    
  } catch (error) {
    console.error('Error generating Exponential random numbers:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lambda = 1, count = 1 } = body;
    
    // Validaciones
    if (lambda <= 0) {
      return NextResponse.json(
        { error: 'El parámetro lambda (tasa) debe ser mayor que 0' },
        { status: 400 }
      );
    }
    
    if (count <= 0 || count > 1000) {
      return NextResponse.json(
        { error: 'El parámetro count debe estar entre 1 y 1000' },
        { status: 400 }
      );
    }
    
    // Generar números aleatorios con distribución exponencial
    const numbers = Array.from({ length: count }, () => random.exponential(lambda)());
    
    const response = {
      distribution: 'exponential',
      parameters: { lambda },
      count,
      data: count === 1 ? numbers[0] : numbers
    };
    
    return NextResponse.json(response);
    
  } catch (error) {
    console.error('Error generating Exponential random numbers:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 