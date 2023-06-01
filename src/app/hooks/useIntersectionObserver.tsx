import { MutableRefObject, useEffect } from "react"

const useIntersectionObserver = (
  activeSection: string,
  setActiveSection: (param: string) => void,
  DigitalIDSectionRef:  MutableRefObject<null>,
  FullDataSectionRef:  MutableRefObject<null>,
  TopPicksSectionRef:  MutableRefObject<null>
) => {
  
  useEffect(() => {
    const DigitalIDRef = DigitalIDSectionRef
    const FullDataRef = FullDataSectionRef
    const TopPicksRef = TopPicksSectionRef

    const handleIntersection = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0.25],
  }
    
    const observer = new IntersectionObserver(handleIntersection, observerOptions)
    if (DigitalIDRef.current) observer.observe(DigitalIDRef.current)
    if (FullDataRef.current) observer.observe(FullDataRef.current)
    if (TopPicksRef.current) observer.observe(TopPicksRef.current)
    return () => {
      if (DigitalIDRef.current) observer.unobserve(DigitalIDRef.current)
      if (FullDataRef.current) observer.unobserve(FullDataRef.current)
      if (TopPicksRef.current) observer.unobserve(TopPicksRef.current)
    }
  }, [setActiveSection, activeSection, DigitalIDSectionRef, FullDataSectionRef, TopPicksSectionRef])

}

export const handleCLick = (name: any) => {
  name.current.scrollIntoView({
    behavior: 'smooth'
  })
}

export default useIntersectionObserver

