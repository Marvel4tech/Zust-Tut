import { create } from "zustand";

const useCounter = create((set) => {
    return {
        count : 5000,
    };
});

export default useCounter;