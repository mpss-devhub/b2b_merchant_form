export function Section({ title, note, children }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex items-baseline md:justify-between mb-6 border-b border-gray-200 pb-3">
                <h4 className="text-2xl font-bold text-gray-800">{title}</h4>
                {note && (
                    <span className="text-sm text-yellow-500 font-normal">
                        {note}
                    </span>
                )}
            </div>
            <div className="space-y-4">{children}</div>
        </div>
    );
}
