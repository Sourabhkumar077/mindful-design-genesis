
import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 2500, label: 'Patients Helped' },
  { value: 35, label: 'Professional Therapists' },
  { value: 15000, label: 'Sessions Completed' },
  { value: 98, label: 'Satisfaction Rate (%)' }
];

const StatisticsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [countersStarted, setCountersStarted] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [countersStarted]);
  
  return (
    <section 
      id="statistics" 
      ref={sectionRef} 
      className="section-padding relative bg-lavender text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl sm:text-5xl font-bold mb-2">
                {countersStarted ? (
                  <CountUpNumber value={stat.value} duration={2} />
                ) : (
                  0
                )}
                {stat.label.includes('%') && '%'}
              </h3>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CountUp component
const CountUpNumber = ({ value, duration }: { value: number, duration: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const incrementTime = (duration * 1000) / value;
    const timer = setInterval(() => {
      start += 1;
      setCount(Math.floor(start));
      if (start >= value) {
        clearInterval(timer);
        setCount(value);
      }
    }, incrementTime);
    
    return () => {
      clearInterval(timer);
    };
  }, [value, duration]);
  
  return <>{count}</>;
};

export default StatisticsSection;
