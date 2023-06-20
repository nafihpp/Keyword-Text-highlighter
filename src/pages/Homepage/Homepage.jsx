import { useEffect, useRef, useState } from "react";
import { ReadingArea } from "../../components/ReadingArea";
import { SearchModal } from "../../components/SearchModal";
import styles from "./Homepage.module.css";

export const Homepage = () => {
    const [isModal, setModal] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (isModal) {
            const PageContent = PageRef.current.innerText;
            const regex = new RegExp(search, "gi");
            const highlightedContent = PageContent.replace(
                regex,
                (matchword) => {
                    return `<span class="highlighted">${matchword}</span>`;
                }
            );
            PageRef.current.innerHTML = highlightedContent;
        }
    }, [search]);

    //ref to Page content
    const PageRef = useRef();

    //function to toggle searchModal
    const handleKeyPress = (event) => {
        if (event.ctrlKey && event.key === "f") {
            setModal((prevModal) => !prevModal);
        }
    };
    //check for the event of keypress
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);
    return (
        <div>
            <div className={styles.wrapper}>
                <h1 className={styles.headLine}>
                    Custom Keyword Finder - Press "Ctrl+f"
                </h1>
                <SearchModal
                    isModal={isModal}
                    setModal={setModal}
                    setSearch={setSearch}
                    search={search}
                />
                <ReadingArea PageRef={PageRef} />
            </div>
        </div>
    );
};
