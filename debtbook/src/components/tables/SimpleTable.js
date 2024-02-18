
export default function SimpleTable({columns, data}){
    return (
        <table className="w-full ">
            <thead className="text-xl border-b-2">
            <tr>
                {columns.map((column, index) => (
                    <th key={index} className="px-4 py-2">
                        {column.header}
                    </th>
                ))}
            </tr>
            </thead>

            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-200 border-b-2">
                    {columns.map((column, colIndex) => (
                        <td key={colIndex} className="border px-4 py-2">
                            {row[column.accessor]}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}
