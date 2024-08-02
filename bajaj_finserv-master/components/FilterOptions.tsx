import { ChangeEvent } from "react";

interface FilterOptionsProps {
	selectedOptions: string[];
	handleOptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FilterOptions({
	selectedOptions,
	handleOptionChange,
}: FilterOptionsProps) {
	return (
		<div className="mt-6 border-t border-gray-300 pt-4">
			<h2 className="text-blue-500 font-bold">Multi Filter</h2>
			<div className="flex flex-col items-start space-y-2">
				<label>
					<input
						type="checkbox"
						value="Numbers"
						checked={selectedOptions.includes("Numbers")}
						onChange={handleOptionChange}
					/>
					Numbers
				</label>
				<label>
					<input
						type="checkbox"
						value="Alphabets"
						checked={selectedOptions.includes("Alphabets")}
						onChange={handleOptionChange}
					/>
					Alphabets
				</label>
				<label>
					<input
						type="checkbox"
						value="Highest alphabet"
						checked={selectedOptions.includes("Highest alphabet")}
						onChange={handleOptionChange}
					/>
					Highest alphabet
				</label>
			</div>
		</div>
	);
}
