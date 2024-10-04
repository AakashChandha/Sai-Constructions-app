import { useEffect, useState } from "react";

const useDocTitle = title => {
  const [doctitle, setDocTitle] = useState(title);

  // useEffect(() => {
  //   // document.title = "Aakash"
  //   document.title = doctitle;
  // }, []);

  return [doctitle, setDocTitle];
};

export {useDocTitle};