import React, { useEffect, useRef } from "react";
import styles from "./SearchModal.module.css";

export const SearchModal = ({
    isModal,
    setModal,
    search,
    setSearch,
    TotalCount,
    currentIndex,
    setCurrentIndex,
}) => {
    const InputRef = useRef(null);

    const handlePrev = () => {
        if (!(currentIndex <= 0)) {
            setCurrentIndex((currentIndex) => currentIndex - 1);
        } else if (currentIndex === 0) {
            setCurrentIndex(TotalCount - 1);
        }
    };
    const handleNext = () => {
        if (currentIndex === TotalCount - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex((currentIndex) => currentIndex + 1);
        }
    };

    const handleModal = () => {
        setModal((prevModal) => !prevModal);
    };
    const handleSearch = (e) => {
        setSearch(e.target.value);
        if (e.target.value === "") {
            setSearch(e.target.value);
        }
    };
    useEffect(() => {
        if (isModal && InputRef.current) {
            InputRef.current.focus();
        }
    }, [isModal]);
    return (
        isModal && (
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search here"
                    className={styles.searchInput}
                    value={search}
                    onChange={handleSearch}
                    ref={InputRef}
                />
                {search.length > 0 && (
                    <span>
                        {currentIndex === -1 ? 0 : currentIndex}/{TotalCount}
                    </span>
                )}
                <button className={styles.Button} onClick={handleNext}>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="30"
                        width="30"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                    </svg>
                </button>
                <button onClick={handlePrev} className={styles.Button}>
                    Prev
                </button>
                <button onClick={handleModal} className={styles.Button}>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="18"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                    </svg>
                </button>
            </div>
        )
    );
};
