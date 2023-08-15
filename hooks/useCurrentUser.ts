import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

//SWR is similar to react-query. Vercel developed package for fetching data. fetch once and catch
//means we don't need to use redux to manage data
const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);
  return { data, error, isLoading, mutate };
};
export default useCurrentUser;
