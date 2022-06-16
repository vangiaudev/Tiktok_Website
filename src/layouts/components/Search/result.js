import { memo } from 'react';
import AccountItem from '~/components/AccountItem';

const Result = ({ searchResult }) => {
    return <div>{searchResult && searchResult.map((result) => <AccountItem key={result.id} data={result} />)}</div>;
};

export default memo(Result);
