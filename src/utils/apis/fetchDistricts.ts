export const fetchDistricts = async (): Promise<any[]> => {
  try {
    const response = await fetch(`http://localhost:3001/districts`);

    const data = await response.json();

    console.log('Fetched data:', data);

    return data;
  } catch (error) {
    console.error('Error fetching districts:', error);
    throw error;
  }
};
