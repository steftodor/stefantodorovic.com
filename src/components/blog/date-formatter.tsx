import React from 'react';

type Props = {
  dateString: string;
};

const DateFormatter: React.FC<Props> = ({ dateString }) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return <time dateTime={dateString}>{formattedDate}</time>;
};

export default DateFormatter;
