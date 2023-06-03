import { RefObject, useEffect } from "react"

const useIntersectionObserver = (
  activeSection: string,
  setActiveSection: (param: string) => void,
  threshold: number,
  references: RefObject<HTMLDivElement>[],
) => {
  
  useEffect(() => {
    references.forEach(sectionRef => {
      const ref = sectionRef

      const handleIntersection: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      }

      const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [threshold],
    }
      
      const observer = new IntersectionObserver(handleIntersection, observerOptions)
      if (ref.current) observer.observe(ref.current)
      return () => {
        if (ref.current) observer.unobserve(ref.current)
      }
    })
  }, [setActiveSection, activeSection, references, threshold])

}

export const handleCLick = (name: RefObject<HTMLDivElement>) => {
  name?.current?.scrollIntoView({
    behavior: 'smooth'
  })
}

export default useIntersectionObserver

