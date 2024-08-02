// types/index.ts
export interface ResponseData {
	is_success: boolean;
	user_id: string;
	email: string;
	roll_number: string;
	numbers: number[];
	alphabets: string[];
	highest_alphabet: string[];
}
