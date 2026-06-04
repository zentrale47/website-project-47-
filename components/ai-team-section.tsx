"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, Clock, Zap } from "lucide-react"

const conversations = [
  {
    title: "Luxury Sedan Inquiry & Test Drive Booking",
    messages: [
      { text: "Hi! I'm interested in the new Premium Sedan. Do you have any in stock?", sender: "customer", delay: 0 },
      {
        text: "We have several 2024 Premium Sedans available. Are you looking for a specific trim level or color?",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "I'd prefer the Premium Plus trim in black or white. What's the price range?",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "Great choice! The Premium Plus starts at €42,500. We have both black and white available. Would you like to schedule a test drive to experience it yourself?",
        sender: "ai",
        delay: 3500,
      },
      { text: "Yes, that would be perfect! When are you available?", sender: "customer", delay: 5000 },
      {
        text: "I can book you for tomorrow at 2pm, Thursday at 11am, or Friday at 4pm. All test drives are completely free and include a full vehicle walkthrough.",
        sender: "ai",
        delay: 6000,
      },
      { text: "Thursday at 11am works great!", sender: "customer", delay: 7500 },
      {
        text: "Perfect! I've booked your free test drive for Thursday at 11:00 AM. You'll receive a confirmation text shortly. Just bring your driver's license and we'll have the sedan ready for you!",
        sender: "ai",
        delay: 8500,
      },
    ],
  },
  {
    title: "Vehicle Features & Financing",
    messages: [
      { text: "What's the fuel economy on the Luxury SUV?", sender: "customer", delay: 0 },
      {
        text: "The 2024 Luxury SUV gets an EPA-estimated 23 city/28 highway MPG. It also comes with all-wheel drive standard!",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "That's good! What about financing options?",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "We have excellent financing available! Current rates start at 2.9% APR for qualified buyers, and we also offer lease options starting at €379/month.",
        sender: "ai",
        delay: 4000,
      },
      { text: "Can I get pre-approved online?", sender: "customer", delay: 5500 },
      {
        text: "I can start your pre-approval right now. It takes just 2 minutes and won't affect your credit score. Would you like me to send you the secure link?",
        sender: "ai",
        delay: 6500,
      },
    ],
  },
  {
    title: "After-Hours Service Inquiry",
    messages: [
      {
        text: "Hi, it's 11 PM. My car's check engine light just came on. What should I do?",
        sender: "customer",
        delay: 0,
      },
      {
        text: "I'm here to help! First, is the light solid or flashing? And is the car running normally?",
        sender: "ai",
        delay: 1000,
      },
      { text: "It's solid, and the car seems to be running fine", sender: "customer", delay: 2500 },
      {
        text: "That's good news! A solid light usually isn't urgent. You can continue driving normally, but I'd recommend bringing it in within the next few days. I can schedule your service appointment right now if you'd like.",
        sender: "ai",
        delay: 3500,
      },
      {
        text: "Yes please! And do you offer loaner cars?",
        sender: "customer",
        delay: 5000,
      },
      {
        text: "I've scheduled you for Tuesday at 9 AM and reserved a loaner vehicle. You'll get a confirmation email with all the details. Drive safely!",
        sender: "ai",
        delay: 6000,
      },
    ],
  },
]

export function AITeamSection() {
  const sectionRef = useRef<HTMLElement>(null) // Added section ref for intersection observer
  const [isVisible, setIsVisible] = useState(false)
  const [currentConversation, setCurrentConversation] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<any[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("[v0] AI Team Section is now visible")
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [displayedMessages, isTyping])

  useEffect(() => {
    const conversation = conversations[currentConversation]
    setDisplayedMessages([])
    setIsTyping(false)

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    let messageIndex = 0

    const showNextMessage = () => {
      if (messageIndex >= conversation.messages.length) {
        // Wait 3 seconds then move to next conversation
        timeoutRef.current = setTimeout(() => {
          setCurrentConversation((prev) => (prev + 1) % conversations.length)
        }, 3000)
        return
      }

      const message = conversation.messages[messageIndex]

      timeoutRef.current = setTimeout(() => {
        if (message.sender === "ai") {
          setIsTyping(true)
          timeoutRef.current = setTimeout(() => {
            setDisplayedMessages((prev) => [...prev, message])
            setIsTyping(false)
            messageIndex++
            showNextMessage()
          }, 800) // Reduced typing delay from 1500ms to 800ms for faster replies
        } else {
          setDisplayedMessages((prev) => [...prev, message])
          messageIndex++
          showNextMessage()
        }
      }, message.delay)
    }

    showNextMessage()

    // Cleanup timeout on unmount or conversation change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentConversation])

  return (
    <section id="ai-team" ref={sectionRef} className="relative z-10">
      
    </section>
  )
}
