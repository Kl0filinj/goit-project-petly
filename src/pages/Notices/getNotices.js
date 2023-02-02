const BASE_URL = "https://goit-project-petly-backend.onrender.com/api";
	
	export const getNotices = async () => {
		const response = await fetch(`${BASE_URL}/notices`);
		const result = response.json();
		return result;
	};