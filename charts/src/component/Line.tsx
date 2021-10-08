import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [
    { year: '1991', value: 3, category: 'xm' },
    { year: '1992', value: 4, category: 'xm' },
    { year: '1993', value: 3.5, category: 'xm' },
    { year: '1994', value: 5, category: 'xm' },
    { year: '1995', value: 4.9, category: 'xm' },
    { year: '1996', value: 6, category: 'xm' },
    { year: '1997', value: 7, category: 'xm' },
    { year: '1998', value: 9, category: 'xm' },
    { year: '1999', value: 13, category: 'xm' },
    { year: '1991', value: 6, category: 'zs' },
    { year: '1992', value: 3, category: 'zs' },
    { year: '1993', value: 2, category: 'zs' },
    { year: '1994', value: 8, category: 'zs' },
    { year: '1995', value: 1, category: 'zs' },
    { year: '1996', value: 4, category: 'zs' },
    { year: '1997', value: 3, category: 'zs' },
    { year: '1998', value: 2, category: 'zs' },
    { year: '1999', value: 9, category: 'zs' },
    { year: '1991', value: 9, category: 'ls' },
    { year: '1992', value: 8, category: 'ls' },
    { year: '1993', value: 7, category: 'ls' },
    { year: '1994', value: 11, category: 'ls' },
    { year: '1995', value: 18, category: 'ls' },
    { year: '1996', value: 9, category: 'ls' },
    { year: '1997', value: 8, category: 'ls' },
    { year: '1998', value: 11, category: 'ls' },
    { year: '1999', value: 8, category: 'ls' },
  ];

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    point: {
      size: 5,
      shape: 'card',
    },
  };
  
  return <Line {...config} />;
};
export default Page;
