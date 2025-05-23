import { BarChart3, BookOpen, Calculator, Clock, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">SimQueue</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">UTN Facultad Regional Córdoba</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Ingeniería en Sistemas</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Simulación de Sistemas</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Sistema de <span className="text-blue-600 dark:text-blue-400">Colas</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Herramienta de simulación y análisis de sistemas de colas para estudiantes de Ingeniería en Sistemas
          </p>
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300">
              Desarrollado como proyecto académico para la materia de <strong>Simulación de Sistemas</strong> en la
              <strong> Universidad Tecnológica Nacional - Facultad Regional Córdoba</strong>
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Simulación de Llegadas</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Modela procesos de llegada de clientes con distribuciones estadísticas como Poisson, exponencial y normal.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Tiempos de Servicio</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Simula tiempos de atención con diferentes distribuciones y analiza el impacto en la eficiencia del sistema.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Métricas y Análisis</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Calcula indicadores clave como tiempo promedio de espera, utilización de servidores y longitud de cola.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
              <Calculator className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Modelos Teóricos</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Implementa modelos M/M/1, M/M/c, M/G/1 y otros sistemas de colas estudiados en la carrera.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Visualización</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Gráficos en tiempo real del comportamiento del sistema y evolución de las métricas de rendimiento.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Material Didáctico</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Ejemplos prácticos y ejercicios que complementan la teoría vista en clase de Simulación de Sistemas.
            </p>
          </div>
        </div>

        {/* Academic Context */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Contexto Académico</h3>
            <p className="text-lg mb-6">
              Este proyecto forma parte del plan de estudios de la carrera de Ingeniería en Sistemas de Información
              en la UTN Facultad Regional Córdoba, específicamente para la materia de Simulación de Sistemas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">4to</div>
                <div className="text-sm opacity-90">Año de la carrera</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">TP4</div>
                <div className="text-sm opacity-90">Trabajo Práctico</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2024</div>
                <div className="text-sm opacity-90">Año académico</div>
              </div>
            </div>
          </div>
        </div>

        {/* Distribution Tools */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Generadores de Distribuciones
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Herramientas interactivas para generar números aleatorios con diferentes distribuciones estadísticas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/poisson" className="group block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Poisson</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Modela el número de eventos en un intervalo de tiempo fijo
              </p>
            </a>

            <a href="/normal" className="group block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Normal</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Distribución gaussiana de campana simétrica
              </p>
            </a>

            <a href="/exponencial" className="group block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Exponencial</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Modela tiempos entre eventos independientes
              </p>
            </a>

            <a href="/uniforme" className="group block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                <Calculator className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Uniforme</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Probabilidad igual en todo el intervalo
              </p>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Comenzar Simulación
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Explora los diferentes modelos de colas y analiza su comportamiento mediante simulaciones interactivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Iniciar Simulación
              </button>
              <button className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Ver Documentación
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Desarrollado por estudiantes de Ingeniería en Sistemas
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Universidad Tecnológica Nacional - Facultad Regional Córdoba
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              Materia: Simulación de Sistemas - Trabajo Práctico 4
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
