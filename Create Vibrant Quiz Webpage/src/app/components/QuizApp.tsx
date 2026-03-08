import { useState } from 'react';
import { Zap, Trophy, RotateCcw, Sparkles } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    category: "Geography"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    category: "Science"
  },
  {
    id: 3,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: 2,
    category: "Art"
  },
  {
    id: 4,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3,
    category: "Geography"
  },
  {
    id: 5,
    question: "In which year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: 2,
    category: "History"
  },
  {
    id: 6,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 2,
    category: "Math"
  },
  {
    id: 7,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
    correctAnswer: 1,
    category: "Science"
  },
  {
    id: 8,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
    correctAnswer: 2,
    category: "Literature"
  },
  {
    id: 9,
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correctAnswer: 1,
    category: "Nature"
  },
  {
    id: 10,
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    category: "Geography"
  },
  {
    id: 11,
    question: "What is the speed of light?",
    options: ["299,792 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
    correctAnswer: 0,
    category: "Science"
  },
  {
    id: 12,
    question: "Which country is home to the kangaroo?",
    options: ["New Zealand", "Australia", "South Africa", "Brazil"],
    correctAnswer: 1,
    category: "Geography"
  },
  {
    id: 13,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: 2,
    category: "Science"
  },
  {
    id: 14,
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
    correctAnswer: 1,
    category: "Science"
  },
  {
    id: 15,
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: 2,
    category: "Geography"
  },
  {
    id: 16,
    question: "How many bones are in the human body?",
    options: ["186", "206", "226", "246"],
    correctAnswer: 1,
    category: "Biology"
  },
  {
    id: 17,
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
    correctAnswer: 1,
    category: "Science"
  },
  {
    id: 18,
    question: "In which year did the Titanic sink?",
    options: ["1910", "1911", "1912", "1913"],
    correctAnswer: 2,
    category: "History"
  },
  {
    id: 19,
    question: "What is the currency of the United Kingdom?",
    options: ["Euro", "Dollar", "Pound Sterling", "Franc"],
    correctAnswer: 2,
    category: "General Knowledge"
  },
  {
    id: 20,
    question: "Who invented the telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Benjamin Franklin"],
    correctAnswer: 1,
    category: "History"
  },
  {
    id: 21,
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "95°C", "100°C", "105°C"],
    correctAnswer: 2,
    category: "Science"
  },
  {
    id: 22,
    question: "Which language has the most native speakers?",
    options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
    correctAnswer: 1,
    category: "General Knowledge"
  },
  {
    id: 23,
    question: "What is the smallest country in the world?",
    options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    correctAnswer: 2,
    category: "Geography"
  },
  {
    id: 24,
    question: "How many hearts does an octopus have?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    category: "Biology"
  },
  {
    id: 25,
    question: "What is the longest river in the world?",
    options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    correctAnswer: 1,
    category: "Geography"
  }
];

export function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false));

  const handleAnswerClick = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return;
    
    setSelectedAnswer(answerIndex);
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = true;
    setAnsweredQuestions(newAnsweredQuestions);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredQuestions(new Array(questions.length).fill(false));
  };

  const getAnswerClass = (index: number) => {
    if (!answeredQuestions[currentQuestion]) {
      return "bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 border-2 border-purple-200 hover:border-purple-400 hover:scale-105";
    }
    
    if (index === questions[currentQuestion].correctAnswer) {
      return "bg-gradient-to-r from-green-400 to-emerald-500 border-2 border-green-600 text-white scale-105";
    }
    
    if (index === selectedAnswer) {
      return "bg-gradient-to-r from-red-400 to-pink-500 border-2 border-red-600 text-white";
    }
    
    return "bg-gray-100 border-2 border-gray-300 opacity-50";
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center transform animate-bounce-in">
          <div className="mb-6">
            <Trophy className="w-24 h-24 mx-auto text-yellow-500 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Quiz Complete! 🎉
          </h2>
          
          <div className="my-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl">
            <p className="text-6xl font-bold text-purple-600 mb-2">{score}/{questions.length}</p>
            <p className="text-2xl text-gray-700">Score: {percentage}%</p>
          </div>
          
          <div className="mb-8">
            {percentage >= 80 ? (
              <p className="text-xl text-gray-700">🌟 Amazing! You're a quiz master! 🌟</p>
            ) : percentage >= 60 ? (
              <p className="text-xl text-gray-700">👏 Great job! Keep it up! 👏</p>
            ) : percentage >= 40 ? (
              <p className="text-xl text-gray-700">👍 Good effort! Try again to improve! 👍</p>
            ) : (
              <p className="text-xl text-gray-700">💪 Keep practicing! You'll get better! 💪</p>
            )}
          </div>
          
          <button
            onClick={restartQuiz}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
          >
            <RotateCcw className="w-6 h-6" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-3xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-2xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                QuizVibe
              </h1>
              <p className="text-sm text-gray-500">Test Your Knowledge!</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 px-4 py-2 rounded-full">
            <p className="text-white font-bold">Score: {score}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-semibold text-purple-600">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 h-full transition-all duration-500 ease-out"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            {questions[currentQuestion].category}
          </span>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {questions[currentQuestion].question}
          </h2>

          {/* Answer Options */}
          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={answeredQuestions[currentQuestion]}
                className={`${getAnswerClass(index)} p-5 rounded-2xl text-left font-semibold text-lg transition-all duration-300 shadow-md disabled:cursor-not-allowed`}
              >
                <span className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-gray-500 text-sm mt-6">
          <p>Select an answer to continue to the next question</p>
        </div>
      </div>
    </div>
  );
}
