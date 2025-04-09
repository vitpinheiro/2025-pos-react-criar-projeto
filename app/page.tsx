export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold mb-6">Atividade POS - Projeto React</h1>
      <p className="text-lg mb-4">
        Projeto criado como parte da disciplina de Programação Orientada a Serviços (POS), do curso Infoweb no IFRN - CNAT.
      </p>
      <p className="text-md text-gray-600 mb-8">
        Desenvolvido por Vitória Pinheiro <a href="https://github.com/vitpinheiro" target="_blank" className="text-blue-500 hover:underline">Seu Nome</a>
      </p>

      <ul className="text-left list-disc list-inside max-w-md text-sm sm:text-base">
        <li>Criação de projeto React com Next.js</li>
        <li>Configuração de repositório Git</li>
        <li>Conexão com repositório remoto (GitHub)</li>
        <li>Instalação de bibliotecas</li>
        <li>Execução e modificação do projeto</li>
      </ul>
    </main>
  );
}
