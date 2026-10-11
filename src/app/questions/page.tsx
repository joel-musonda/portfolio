const faqs = [
  {
    question: 'What is your primary tech stack?',
    answer: 'I primarily use Next.js (App Router), TypeScript, Tailwind CSS, and Supabase for building fast, full-stack web applications.'
  },
  {
    question: 'Are you available for freelance projects or collaborations?',
    answer: 'Yes! I am open to select frontend engineering work, full-stack web app development, and technical writing projects.'
  },
  {
    question: 'What tools do you use for your workflow?',
    answer: 'VS Code, Git/GitHub, Vercel for deployments, and Tailwind for styling. I love keeping toolchains clean and lightweight.'
  }
]

export default function QuestionsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-100">Questions & FAQ</h1>
        <p className="text-neutral-400 text-sm">
          Common questions about my workflow, stack, and availability.
        </p>
      </header>

      <div className="space-y-6 divide-y divide-neutral-900">
        {faqs.map((faq, idx) => (
          <div key={idx} className="pt-6 first:pt-0 space-y-2">
            <h2 className="font-medium text-neutral-200">
              {faq.question}
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}