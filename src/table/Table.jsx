export const Table = ({ columns, data }) => {
    return (
        <div class="bg-white shadow-md rounded">
        <table class="w-full table-auto">
            <thead class="bg-gray-200 text-gray-700">
            <tr>
                {columns.map((column, index) => (
                    <th key={index} class="px-4 py-2 text-left">{column}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    {Object.values(row).map((value, index) => (
                        <td key={index} class="px-4 py-2">{value}</td>
                    ))}
                    <td class="px-4 py-2 flex justify-center gap-2">
                        {/* <button class="text-blue-500 hover:underline">Duplicar</button> */}
                        <div class="relative group">
                            <button class="text-gray-500 hover:text-gray-700">👥</button>
                            <span class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 text-sm text-white bg-gray-700 rounded shadow-lg">
                                Duplicar
                            </span>
                        </div>
                        <div class="relative group">
                            <button class="text-gray-500 hover:text-gray-700">📅</button>
                            <span class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 text-sm text-white bg-gray-700 rounded shadow-lg">
                                Persistir
                            </span>
                        </div>
                        <div class="relative group">
                            <button class="text-gray-500 hover:text-gray-700">🗑️</button>
                            <span class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 text-sm text-white bg-gray-700 rounded shadow-lg">
                                Eliminar
                            </span>
                        </div>
                        </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    )
}