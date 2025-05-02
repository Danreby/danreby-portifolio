import React from 'react';
import { Link } from '@inertiajs/react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <header className="bg-gray-900 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Meu App</h1>
          <nav className="space-x-4">
            <Link href="#" className="text-gray-300 hover:text-blue-400">Home</Link>
            <Link href="#" className="text-gray-300 hover:text-blue-400">Perfil</Link>
            <Link href="#" className="text-gray-300 hover:text-red-400">Sair</Link>
          </nav>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-gray-900 border-r border-gray-800 hidden md:block">
          <div className="p-6 text-xl font-semibold text-blue-400 border-b border-gray-800">Navegação</div>
          <nav className="p-6">
            <ul className="space-y-4">
              <li>
                <Link href="#" className="flex items-center text-gray-300 hover:text-blue-400">
                  <span>📊</span><span className="ml-2">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-300 hover:text-blue-400">
                  <span>👥</span><span className="ml-2">Usuários</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-300 hover:text-blue-400">
                  <span>📈</span><span className="ml-2">Relatórios</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-300 hover:text-blue-400">
                  <span>⚙️</span><span className="ml-2">Configurações</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 overflow-auto p-6 bg-gray-950">
          <div className="flex flex-wrap -mx-3 mb-6">
            {[
              { title: 'Vendas', value: 'R$ 12.340' },
              { title: 'Usuários', value: '1.234' },
              { title: 'Novos Leads', value: '56' },
              { title: 'Feedback', value: '89' }
            ].map((card, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6">
                <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition">
                  <p className="text-blue-400 text-sm">{card.title}</p>
                  <p className="mt-2 text-3xl font-bold text-white">{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow h-64 flex items-center justify-center text-gray-400">
              Gráfico de Vendas
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow h-64 flex items-center justify-center text-gray-400">
              Tabela de Usuários
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-gray-900 shadow-inner mt-auto">
        <div className="container mx-auto px-6 py-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Meu App. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
