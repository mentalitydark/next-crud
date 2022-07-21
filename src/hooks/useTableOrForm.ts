import { useState } from 'react';
export default function useTableOrForm() {
    const [showTable, setShowTable] = useState(true);

    const displayTable = () => setShowTable(true);
    const displayForm = () => setShowTable(false);

    return {
        showTable,
        displayTable,
        displayForm
    }
};
