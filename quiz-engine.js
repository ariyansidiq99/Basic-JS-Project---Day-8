// Data - an array of question objects
const questions = [
      {
    id: 1,
    question: 'What does CSS stand for?',
    options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style System', 'Colorful Style Sheets'],
    correct: 1,  // index of correct option
    points: 10,
  },
  {
    id: 2,
    question: 'Which CSS property controls text size?',
    options: ['text-size', 'font-size', 'text-scale', 'size'],
    correct: 1,
    points: 10,
  },
  {
    id: 3,
    question: 'What does === check in JavaScript?',
    options: ['Only value', 'Only type', 'Value and type', 'Neither'],
    correct: 2,
    points: 15,
  },
  {
    id: 4,
    question: 'Which layout system handles both rows AND columns?',
    options: ['Flexbox', 'Float', 'CSS Grid', 'Position'],
    correct: 2,
    points: 15,
  },
  {
    id: 5,
    question: 'What is the correct way to declare a variable in modern JS?',
    options: ['var x = 1', 'const x = 1', 'variable x = 1', 'int x = 1'],
    correct: 1,
    points: 10,
  },
];

// Runs the quiz and returns a detailed result
function runQuiz(answers) {
  if (answers.length !== questions.length) {
    return { error: `Expected ${questions.length} answers, got ${answers.length}` };
  }

  let totalScore    = 0;
  let maxScore      = 0;
  const results     = [];

  for (let i = 0; i < questions.length; i++) {
    const q          = questions[i];
    const userAnswer = answers[i];
    const isCorrect  = userAnswer === q.correct;
    const earned     = isCorrect ? q.points : 0;

    totalScore += earned;
    maxScore   += q.points;

    results.push({
      questionId:     q.id,
      question:       q.question,
      userAnswer:     q.options[userAnswer],
      correctAnswer:  q.options[q.correct],
      isCorrect,
      pointsEarned:   earned,
      pointsPossible: q.points,
    });
  }

  const percentage = Math.round((totalScore / maxScore) * 100);
  const grade = percentage >= 90 ? 'A' :
                percentage >= 80 ? 'B' :
                percentage >= 70 ? 'C' :
                percentage >= 60 ? 'D' : 'F';

  return { results, totalScore, maxScore, percentage, grade };
}

function printResults(quiz) {
    if(quiz.error) {console.log(`Error: ${quiz.error}`); return;}

      console.log('\n══ QUIZ RESULTS ══════════════════');
      quiz.results.forEach((r, i) => {
       const icon = r.isCorrect ? '✓' : '✗';
           console.log(`\n${i + 1}. ${r.question}`);
    console.log(`   ${icon} Your answer: ${r.userAnswer}`);
    if (!r.isCorrect) console.log(`   ✓ Correct:    ${r.correctAnswer}`);
    console.log(`   Points: ${r.pointsEarned}/${r.pointsPossible}`);
  });

  console.log('\n══ SUMMARY ═══════════════════════');
  console.log(`Score:      ${quiz.totalScore}/${quiz.maxScore}`);
  console.log(`Percentage: ${quiz.percentage}%`);
  console.log(`Grade:      ${quiz.grade}`);
  console.log('══════════════════════════════════\n');
}

// Test: perfect score
printResults(runQuiz([1, 1, 2, 2, 1]));

// Test: all wrong
printResults(runQuiz([0, 0, 0, 0, 0]));

// Test: mixed answers
printResults(runQuiz([1, 0, 2, 1, 1]));
 