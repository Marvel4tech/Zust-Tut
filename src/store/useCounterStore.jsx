import { create } from "zustand";

const useCounter = create((set) => {
    return {
        count : 5000,
        name : "Marvel Ayomike",
    };
});

export default useCounter;