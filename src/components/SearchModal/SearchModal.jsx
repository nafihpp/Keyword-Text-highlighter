import React, { useEffect, useRef } from "react";
import styles from "./SearchModal.module.css";

export const SearchModal = ({ isModal, setModal, search, setSearch }) => {
    const InputRef = useRef(null);

    const handleModal = () => {
        setModal((prevModal) => !prevModal);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
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
                <span>10/20</span>
                <button>Next</button>
                <button>Prev</button>
                <button onClick={handleModal}>Close</button>
            </div>
        )
    );
};
