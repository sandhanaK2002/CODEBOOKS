import { useEffect } from "react";

export const TitleChange = (title) => {

    useEffect(() => {
        document.title = `${title} - CodeBook`;
    }, [title]);

  return null;
}