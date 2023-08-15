import useBillboard from '@/hooks/useBillboard';
import React from 'react';

const Billboard = () => {
  const { data } = useBillboard();
  //   console.log(data);
  return <div className="">Billboard</div>;
};

export default Billboard;
