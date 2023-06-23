import { useEffect, useRef, useState } from "react";

export function useSearch() {
    const [search, setSearch] = useState('');
    const [errorSearch, setErrorSearch] = useState(null);
    const isFirstInput = useRef(true);

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === '';
            return;
        }

        if(search === '') {
            setErrorSearch('No se puede buscar una película con texto vacío');
            return;
        }
        if(search.match(/^\d+$/)) {
            setErrorSearch('No se puede buscar una película con un número');
            return
        }

        setErrorSearch(null);
    }, [search]);

    return { search, setSearch, errorSearch };
}
