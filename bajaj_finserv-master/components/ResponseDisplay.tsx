import { ResponseData } from "../types";

interface ResponseDisplayProps {
	responseData: ResponseData;
	selectedOptions: string[];
}

export default function ResponseDisplay({
	responseData,
	selectedOptions,
}: ResponseDisplayProps) {
	const { numbers, alphabets, highest_alphabet } = responseData;
	const showNumbers = selectedOptions.includes("Numbers");
	const showAlphabets = selectedOptions.includes("Alphabets");
	const showHighestAlphabet = selectedOptions.includes("Highest alphabet");

	return (
		<div className="mt-6 border-t border-gray-300 pt-4">
			<h2 className="text-blue-500 font-bold">Filtered Response</h2>
			<div>
				{showNumbers && numbers.length > 0 && (
					<div>
						<h3 className="text-lg font-semibold">Numbers:</h3>
						<ul className="list-disc list-inside">
							{numbers.map((num, index) => (
								<li key={index}>{num}</li>
							))}
						</ul>
					</div>
				)}
				{showAlphabets && alphabets.length > 0 && (
					<div>
						<h3 className="text-lg font-semibold">Alphabets:</h3>
						<ul className="list-disc list-inside">
							{alphabets.map((alpha, index) => (
								<li key={index}>{alpha}</li>
							))}
						</ul>
					</div>
				)}
				{showHighestAlphabet && highest_alphabet.length > 0 && (
					<div>
						<h3 className="text-lg font-semibold">Highest Alphabet:</h3>
						<ul className="list-disc list-inside">
							{highest_alphabet.map((alpha, index) => (
								<li key={index}>{alpha}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
