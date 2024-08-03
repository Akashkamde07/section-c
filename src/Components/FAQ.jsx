import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      question: 'Can I access the courses on mobile devices?',
      answer: 'Yes, all our courses are accessible on mobile devices.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can cancel at any time.',
    },
    {
      question: 'Will I receive a certificate upon completion?',
      answer: 'Yes, you will receive a certificate upon successful completion of the course.',
    },
    {
      question: 'Can we select multiple workshops at a time?',
      answer: 'Yes, you can select multiple workshops at a time.',
    },
    {
      question: 'How do I sign up for a workshop?',
      answer: 'You can sign up for a workshop by visiting our website and selecting the workshop you want to attend.',
    },
  ];

  const toggleFaq = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto p-4 font-sans max-w-2xl">
      <h2 className="text-center text-3xl font-bold mb-5" style={{ fontWeight: '600', fontSize: '36px', lineHeight: '44px', marginTop: '31px' }}>
        Frequently asked questions
      </h2>
      <h4 className="text-center text-lg font-light mb-10" style={{ fontWeight: '400', fontSize: '20px', lineHeight: '30px' }}>
        Everything you need to know about Hubnex Educate.
      </h4>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 py-3">
          <div
            className="flex justify-between items-center cursor-pointer mb-3 mt-2"
            onClick={() => toggleFaq(index)}
            style={{ fontFamily: 'Inter', fontSize: '18px', fontWeight: '500', lineHeight: '28px', textAlign: 'left' }}
          >
            {faq.question}
            <span
              className={`text-base text-purple-700 border-2 border-purple-700 rounded-full flex items-center justify-center w-6 h-6`}>
              {openIndex === index ? '-' : '+'}
            </span>
          </div>
          {openIndex === index && (
            <div className="text-base font-normal" style={{
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '24px',
              textAlign: 'left'
            }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
