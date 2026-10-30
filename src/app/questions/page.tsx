const faqs = [
  {
    question: 'Why is teleportation hard?',
    answer: 'Teleportation is hard because it requires the ability to transmit the complete quantum state of a particle or object from one location to another without physically moving it. This involves overcoming several challenges, including the need for entanglement, precise measurement, and the no-cloning theorem, which states that it is impossible to create an identical copy of an arbitrary unknown quantum state. Teleportation of macroscopic objects would require an enormous amount of information to be transmitted, making it currently impractical with our existing technology.'
  },
  {
    question: 'Will we ever come up with better ways of measuring economic growth?',
    answer: 'It\'s a complex issue, but I believe we can develop more nuanced metrics that capture the true value created by innovation and technological advancement.'
  },
  {
    question: 'How can we aid machine to machine interactions?',
    answer: 'This is a fascinating area of research. I think we can improve machine-to-machine interactions by developing more sophisticated communication protocols, leveraging AI to enable machines to understand context and intent, and creating standardized frameworks for interoperability.'
  },

  {
    question: "Can we build neural networks with smaller amounts of labeled data?",
    answer: "One approach is to use transfer learning, where a pre-trained model is fine-tuned on a smaller dataset. Another approach is to use semi-supervised learning, where the model is trained on a combination of labeled and unlabeled data. Additionally, techniques like data augmentation and synthetic data generation can help increase the effective size of the training dataset. curious to explore other methods"
  },
  {
    question: "Why is Quntum computing so hard?",
    answer: "Quantum computing relies on the principles of quantum mechanics, which are fundamentally different from classical physics. Quantum systems are highly sensitive to their environment, making them prone to errors and decoherence. Building and controlling qubits, the basic units of quantum information, is a complex task that requires advanced technology and precise engineering. The field is still in its early stages, and researchers are actively working on developing more stable qubits and error-correction techniques."
  },
  {
    question: "Can we longitudinally study human beings so that we can predict when next they fall sick?",
    answer: "Longitudinal studies can provide valuable insights into human health and disease progression. By collecting data over time from a large cohort of individuals, identify patterns and risk factors associated with illness. Advances in wearable technology, electronic health records, and data analytics can facilitate the collection and analysis of longitudinal health data. However, predicting when an individual will fall sick is a complex challenge that requires a deep understanding of genetics, lifestyle factors, environmental influences, and the interplay between these variables. While we may not be able to predict illness with absolute certainty, longitudinal studies can help us develop more accurate risk assessments and early intervention strategies."
  },
  {
    question: "Can we use bio engineering to enhance human intelligence, and cure genetic diseases?",
    answer: "Bioengineering holds great promise for enhancing human intelligence and curing genetic diseases. Techniques like CRISPR-Cas9 allow for precise editing of genes, which could potentially be used to correct genetic mutations that cause diseases. Research into neurogenetics and brain-computer interfaces may lead to ways to enhance cognitive abilities. However, these advancements raise ethical considerations, including the potential for unintended consequences, equity of access, and the implications of altering human genetics. It is crucial to approach these technologies with caution and engage in thoughtful discussions about their responsible use."
  }
]

export default function QuestionsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-100">Questions</h1>
        <p className="text-neutral-400 text-sm">
          Interesting questions I've been thinking about
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