import { useRef, useEffect } from 'react';

function useDocumentTitle(title, keepTitleOnUnmount = false) {
  // keepTitleOnUnmount: if True will maintain the same title when component is unmounted
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => () => {
    if (!keepTitleOnUnmount) {
      document.title = defaultTitle.current;
    }
  }, []);
}

export default useDocumentTitle;
