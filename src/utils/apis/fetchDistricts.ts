export const fetchDistricts = async (): Promise<void> => {
  return await fetch(`http://localhost:3001/districts`)
    .then(async res => {
      if (!res.ok) throw new Error('Error in the petition');
      return await res.json();
    })
    .then(res => res.districts);
};
