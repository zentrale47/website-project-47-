"use client"
import React from "react"
import { motion } from "framer-motion"

interface Testimonial {
  text: string
  name: string
  role: string
}

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  return (
    <div className={`relative overflow-hidden h-[700px] ${props.className}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div
                  className="p-10 rounded-3xl border border-green-700 shadow-lg bg-green-700 backdrop-blur-sm max-w-xs w-full"
                  style={{
                    boxShadow: "0 4px 20px rgba(21, 128, 61, 0.25), 0 0 0 1px rgba(21, 128, 61, 0.2)",
                  }}
                  key={i}
                >
                  <div className="text-white text-xl font-bold leading-relaxed font-sans mb-2">{name}</div>
                  <div className="text-gray-300 text-sm font-medium mb-4">{role}</div>
                  <div className="text-white text-sm leading-relaxed font-sans">{text}</div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}
