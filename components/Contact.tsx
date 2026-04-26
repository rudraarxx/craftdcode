"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contactEl", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-black border-t border-white/5">
      <div className="container mx-auto px-8 md:px-16">
        {/* Section label */}
        <h2 className="contactEl section-label">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40">
          {/* Left: statement + info */}
          <div className="contactEl flex flex-col justify-between gap-16">
            <h3 className="text-5xl md:text-7xl font-black text-white leading-none uppercase tracking-tighter">
              Let&rsquo;s craft<br />
              <span className="italic text-white/30">something</span><br />
              great.
            </h3>

            <div className="space-y-12">
              <div>
                <p className="text-[10px] text-grey tracking-[0.3em] font-medium uppercase mb-3">
                  Location
                </p>
                <p className="text-sm text-white">
                  Based worldwide · Available remote
                </p>
              </div>
              <div>
                <p className="text-[10px] text-grey tracking-[0.3em] font-medium uppercase mb-3">
                  Email
                </p>
                <a
                  href="mailto:hello@craftdcode.com"
                  className="text-base md:text-xl text-white underline underline-offset-8 decoration-white/20 hover:decoration-white transition-all duration-300"
                >
                  hello@craftdcode.com
                </a>
              </div>

              {/* Brand grid decoration */}
              <div className="grid grid-cols-3 gap-[3px] w-fit opacity-15">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-[7px] h-[7px] border border-white" />
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="contactEl">
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full gap-6 py-20">
                <div className="grid grid-cols-3 gap-[3px] opacity-80">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-[8px] h-[8px] bg-white" />
                  ))}
                </div>
                <h4 className="text-3xl font-black text-white tracking-tight">
                  Message received.
                </h4>
                <p className="text-sm text-grey">
                  We&rsquo;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] text-grey tracking-[0.3em] uppercase font-medium">
                    Full Name
                  </label>
                  <Input
                    {...register("name")}
                    placeholder="Your Name"
                    className={`bg-transparent border-white/15 text-white rounded-none border-t-0 border-x-0 border-b focus-visible:ring-0 focus-visible:border-white/60 transition-all h-12 text-base placeholder:text-grey/40 ${errors.name ? "border-red-500/70" : ""}`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-400 tracking-wide">{errors.name.message}</span>
                  )}
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] text-grey tracking-[0.3em] uppercase font-medium">
                    Email Address
                  </label>
                  <Input
                    {...register("email")}
                    placeholder="email@example.com"
                    className={`bg-transparent border-white/15 text-white rounded-none border-t-0 border-x-0 border-b focus-visible:ring-0 focus-visible:border-white/60 transition-all h-12 text-base placeholder:text-grey/40 ${errors.email ? "border-red-500/70" : ""}`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-400 tracking-wide">{errors.email.message}</span>
                  )}
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] text-grey tracking-[0.3em] uppercase font-medium">
                    Message
                  </label>
                  <Textarea
                    {...register("message")}
                    placeholder="Tell us about your project…"
                    rows={5}
                    className={`bg-transparent border-white/15 text-white rounded-none border-t-0 border-x-0 border-b focus-visible:ring-0 focus-visible:border-white/60 transition-all text-base resize-none placeholder:text-grey/40 ${errors.message ? "border-red-500/70" : ""}`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-400 tracking-wide">{errors.message.message}</span>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="self-start bg-white text-black hover:bg-grey hover:text-black transition-colors duration-300 px-10 py-6 h-auto rounded-none text-[10px] font-bold tracking-[0.3em] uppercase"
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
