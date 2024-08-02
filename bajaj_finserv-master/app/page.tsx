"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import FilterOptions from "../components/FilterOptions";
import ResponseDisplay from "../components/ResponseDisplay";
import { ResponseData } from "../types";

export default function Home() {
	const [inputValue, setInputValue] = useState<string>("");
	const [responseData, setResponseData] = useState<ResponseData | null>(null);
	const [error, setError] = useState<string>("");
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError("");
		setResponseData(null);
		setLoading(true);

		try {
			const parsedData = JSON.parse(inputValue);

			const response = await axios.post<ResponseData>(
				`${process.env.NEXT_PUBLIC_API_URL}/bfhl` ||
					"https://bajaj-finserv-backend-b2q9.onrender.com/bfhl",
				parsedData,
				{
					withCredentials: true,
				}
			);
			setResponseData(response.data);
		} catch (err) {
			setError("Failed to parse JSON or call API. Please check the format.");
		} finally {
			setLoading(false);
		}
	};

	const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = e.target;
		setSelectedOptions((prev) =>
			checked ? [...prev, value] : prev.filter((option) => option !== value)
		);
	};

	return (
		<div className="container mx-auto max-w-2xl p-8">
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label
						htmlFor="apiInput"
						className="text-blue-500 font-bold block mb-2"
					>
						API Input
					</label>
					<textarea
						id="apiInput"
						className="w-full border border-gray-300 rounded p-2"
						value={inputValue}
						onChange={handleInputChange}
						placeholder='{"data":["M","1","334","4","B"]}'
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Submit
				</button>
			</form>

			{loading && <Loader />}

			<FilterOptions
				selectedOptions={selectedOptions}
				handleOptionChange={handleOptionChange}
			/>

			{error && <p className="text-red-500 mt-4">{error}</p>}
			{responseData && (
				<ResponseDisplay
					responseData={responseData}
					selectedOptions={selectedOptions}
				/>
			)}
		</div>
	);
}
