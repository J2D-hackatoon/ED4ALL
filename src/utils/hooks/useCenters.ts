import { useQuery } from '@tanstack/react-query';
import { fetchCenters } from '../apis/fetchCenters';

export const useCenters = ({ districtCode }: { districtCode: number }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['centers', districtCode],
    queryFn: () => fetchCenters(districtCode),
  });

  return {
    isLoading,
    isError,
    data,
  };
};
