import { FC } from 'react';

interface MonthCounterProps {
    startDate: Date;
    title: string;
}

const MonthCounter: FC<MonthCounterProps> = ({ startDate, title }) => {
    const date = new Date();
    const monthDifference = date.getMonth() - startDate.getMonth() + (12 * (date.getFullYear() - startDate.getFullYear()));

    return (
        <abbr title={title}>
            { monthDifference } months
        </abbr>
    );
}

export default MonthCounter;