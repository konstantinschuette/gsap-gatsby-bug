import React from "react"

import gsap from "gsap-trial"
import { SplitText } from "gsap-trial/SplitText"
import { ScrollTrigger } from "gsap-trial/ScrollTrigger"

import Layout from "../components/layout"
import Seo from "../components/seo"

class IndexPage extends React.Component {
  componentDidMount() {
    gsap.registerPlugin(SplitText, ScrollTrigger)

    gsap.utils.toArray("h1, p").forEach(title => {
      const childSplit = new SplitText(title, {
        type: "lines",
        linesClass: "split-child",
      })
      new SplitText(title, {
        linesClass: "split-parent",
      })

      gsap.from(childSplit.lines, {
        scrollTrigger: title,
        start: "top center",
        duration: 2.5,
        yPercent: 110,
        ease: "power4",
        skewY: 5,
        stagger: 0.1,
        delay: 0.75,
      })
    })
  }

  render() {
    return (
      <Layout>
        <Seo title="Home" />

        <div className="h-screen backdrop-blur-md flex items-center text-white p-12" style={{width: '634px'}}>
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold mb-2.5 leading-snug">
              Test Title
            </h1>

            <p className="text-lg leading-loose">
              Ihr Ansprechpartner für alles rund ums Thema Metallbau und
              Eisenbau!
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
