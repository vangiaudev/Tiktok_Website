import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        let timer = setTimeout(() => {
            setDebounce(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay, value]);

    return debounce;
};

export default useDebounce;
