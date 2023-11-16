export const fetchDistricts = async (): Promise<any[]> => {
  try {
    const response = await fetch(
      `https://silver-ladybug-cape.cyclic.app/districts`,
    );

    const data = await response.json();

    console.log('Fetched data:', data);

    return data;
  } catch (error) {
    console.error('Error fetching districts:', error);
    throw error;
  }
};
