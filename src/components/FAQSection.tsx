import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I book a therapy session?',
    answer: 'You can book a therapy session through our website by selecting your preferred therapist, choosing an available time slot, and completing the booking process. You can also call our support team for assistance.',
  },
  {
    question: 'What types of therapy do you offer?',
    answer: 'We offer various types of therapy including individual counseling, couples therapy, family therapy, cognitive behavioral therapy (CBT), and online therapy sessions. Our therapists are trained in multiple therapeutic approaches.',
  },
  {
    question: 'How much does therapy cost?',
    answer: 'The cost of therapy sessions varies depending on the type of therapy and the therapist. We offer different pricing plans and packages. Please check our pricing page or contact our support team for detailed information.',
  },
  {
    question: 'Is online therapy effective?',
    answer: 'Yes, online therapy has been proven to be just as effective as in-person therapy for many mental health concerns. It offers convenience, accessibility, and the same level of professional care as traditional therapy.',
  },
  {
    question: 'How do I know if therapy is right for me?',
    answer: 'Therapy can be beneficial for anyone looking to improve their mental well-being, manage stress, or work through personal challenges. If you\'re unsure, you can schedule a free consultation with one of our therapists to discuss your needs.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We require at least 24 hours notice for cancellations. Cancellations made within 24 hours of the scheduled session may be subject to a cancellation fee. Please refer to our terms and conditions for detailed information.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our therapy services and how we can help you on your journey to better mental health.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="py-4 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 