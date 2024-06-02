import { createContext, useState } from "react";

export const BlogTravelContext = createContext();

function BlogTravelProvider({ children }) {
  //Hover
  const [isHover, setIsHover] = useState(false)
  
  return (
    <BlogTravelContext.Provider
    value={
      {
        isHover,
        setIsHover,
      }
    }>
      {children}
    </BlogTravelContext.Provider>
  )
}
export default BlogTravelProvider;