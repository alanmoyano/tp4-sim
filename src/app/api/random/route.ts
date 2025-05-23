import { NextResponse } from 'next/server';

export async function GET() {
  const documentation = {
    title: "API de Números Aleatorios - SimQueue UTN FRC",
    description: "API para generar números aleatorios con diferentes distribuciones estadísticas",
    version: "1.0.0",
    endpoints: {
      "/api/random/poisson": {
        description: "Genera números aleatorios con distribución de Poisson",
        methods: ["GET", "POST"],
        parameters: {
          lambda: {
            type: "number",
            description: "Parámetro de tasa (λ) - debe ser > 0",
            default: 1,
            required: false
          },
          count: {
            type: "integer", 
            description: "Cantidad de números a generar",
            default: 1,
            min: 1,
            max: 1000,
            required: false
          }
        },
        examples: {
          get: "/api/random/poisson?lambda=2&count=5",
          post: {
            url: "/api/random/poisson",
            body: { lambda: 2, count: 5 }
          }
        }
      },
      "/api/random/normal": {
        description: "Genera números aleatorios con distribución normal (gaussiana)",
        methods: ["GET", "POST"],
        parameters: {
          mean: {
            type: "number",
            description: "Media (μ)",
            default: 0,
            required: false
          },
          stdDev: {
            type: "number",
            description: "Desviación estándar (σ) - debe ser > 0",
            default: 1,
            required: false
          },
          count: {
            type: "integer",
            description: "Cantidad de números a generar",
            default: 1,
            min: 1,
            max: 1000,
            required: false
          }
        },
        examples: {
          get: "/api/random/normal?mean=10&stdDev=2&count=5",
          post: {
            url: "/api/random/normal",
            body: { mean: 10, stdDev: 2, count: 5 }
          }
        }
      },
      "/api/random/exponential": {
        description: "Genera números aleatorios con distribución exponencial",
        methods: ["GET", "POST"],
        parameters: {
          lambda: {
            type: "number",
            description: "Parámetro de tasa (λ) - debe ser > 0",
            default: 1,
            required: false
          },
          count: {
            type: "integer",
            description: "Cantidad de números a generar",
            default: 1,
            min: 1,
            max: 1000,
            required: false
          }
        },
        examples: {
          get: "/api/random/exponential?lambda=0.5&count=5",
          post: {
            url: "/api/random/exponential",
            body: { lambda: 0.5, count: 5 }
          }
        }
      },
      "/api/random/uniform": {
        description: "Genera números aleatorios con distribución uniforme",
        methods: ["GET", "POST"],
        parameters: {
          min: {
            type: "number",
            description: "Valor mínimo del rango",
            default: 0,
            required: false
          },
          max: {
            type: "number",
            description: "Valor máximo del rango - debe ser > min",
            default: 1,
            required: false
          },
          count: {
            type: "integer",
            description: "Cantidad de números a generar",
            default: 1,
            min: 1,
            max: 1000,
            required: false
          }
        },
        examples: {
          get: "/api/random/uniform?min=1&max=10&count=5",
          post: {
            url: "/api/random/uniform",
            body: { min: 1, max: 10, count: 5 }
          }
        }
      }
    },
    responseFormat: {
      success: {
        distribution: "string - nombre de la distribución",
        parameters: "object - parámetros utilizados",
        count: "number - cantidad de números generados",
        data: "number|array - número único o array de números"
      },
      error: {
        error: "string - mensaje de error descriptivo"
      }
    },
    usage: {
      academicContext: "Sistema de simulación de colas - UTN FRC",
      course: "Simulación de Sistemas",
      purpose: "Generar números aleatorios para modelado y simulación"
    }
  };

  return NextResponse.json(documentation);
} 