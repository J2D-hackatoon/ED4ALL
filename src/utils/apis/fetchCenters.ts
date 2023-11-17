export const fetchCenters = async ({
  districtCode,
}: {
  districtCode: number;
}): Promise<any[]> => {
  try {
    const response = await fetch(
      `https://silver-ladybug-cape.cyclic.app/districts/${districtCode}/centers`,
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching districts:', error);
    throw error;
  }
};
