export default function Card({ owner, forks_count, html_url, updated_at, name, description }) {
  return (
    <div className="bg-purple-800 p-4 rounded-lg flex-1 ">
      <div className="flex items-center mb-2">
              <img
                src={owner.avatar_url}
                alt={owner.login}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-sm">{owner.login}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-300 mb-2">{description || "No description"}</p>
            <p className="text-sm text-gray-400 mb-1">Forks: {forks_count}</p>
            <p className="text-sm text-gray-400 mb-2">Atualização: {new Date(updated_at).toLocaleDateString()}</p>
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Ver no git Hub
            </a>
    </div>
  );
}
