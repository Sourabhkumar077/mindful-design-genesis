import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ClipboardCheck, LineChart } from 'lucide-react';

interface Question {
  id: number;
  text: string;
}

const gad7Questions: Question[] = [
  { id: 1, text: 'Feeling nervous, anxious, or on edge' },
  { id: 2, text: 'Not being able to stop or control worrying' },
  { id: 3, text: 'Worrying too much about different things' },
  { id: 4, text: 'Trouble relaxing' },
  { id: 5, text: 'Being so restless that it\'s hard to sit still' },
  { id: 6, text: 'Becoming easily annoyed or irritable' },
  { id: 7, text: 'Feeling afraid as if something awful might happen' },
];

const phq9Questions: Question[] = [
  { id: 1, text: 'Little interest or pleasure in doing things' },
  { id: 2, text: 'Feeling down, depressed, or hopeless' },
  { id: 3, text: 'Trouble falling or staying asleep, or sleeping too much' },
  { id: 4, text: 'Feeling tired or having little energy' },
  { id: 5, text: 'Poor appetite or overeating' },
  { id: 6, text: 'Feeling bad about yourself or that you are a failure' },
  { id: 7, text: 'Trouble concentrating on things' },
  { id: 8, text: 'Moving or speaking slowly, or being fidgety/restless' },
  { id: 9, text: 'Thoughts that you would be better off dead or of hurting yourself' },
];

const Assessment = () => {
  const [activeTest, setActiveTest] = useState<'gad7' | 'phq9' | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [results, setResults] = useState<{ gad7: number | null; phq9: number | null }>({
    gad7: null,
    phq9: null,
  });

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    const questions = activeTest === 'gad7' ? gad7Questions : phq9Questions;
    const score = questions.reduce((total, q) => total + (answers[q.id] || 0), 0);
    setResults(prev => ({ ...prev, [activeTest!]: score }));
    setAnswers({});
    setActiveTest(null);
  };

  const getScoreSeverity = (test: 'gad7' | 'phq9', score: number) => {
    if (test === 'gad7') {
      if (score <= 4) return { text: 'Minimal Anxiety', color: 'text-green-500' };
      if (score <= 9) return { text: 'Mild Anxiety', color: 'text-yellow-500' };
      if (score <= 14) return { text: 'Moderate Anxiety', color: 'text-orange-500' };
      return { text: 'Severe Anxiety', color: 'text-red-500' };
    } else {
      if (score <= 4) return { text: 'Minimal Depression', color: 'text-green-500' };
      if (score <= 9) return { text: 'Mild Depression', color: 'text-yellow-500' };
      if (score <= 14) return { text: 'Moderate Depression', color: 'text-orange-500' };
      if (score <= 19) return { text: 'Moderately Severe Depression', color: 'text-red-500' };
      return { text: 'Severe Depression', color: 'text-red-700' };
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <ClipboardCheck className="w-8 h-8 text-primary mr-3" />
          <h1 className="text-4xl font-bold gradient-text">Mental Health Assessment</h1>
        </div>

        {!activeTest ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>GAD-7 Assessment</CardTitle>
                <CardDescription>
                  Generalized Anxiety Disorder Assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The GAD-7 is a screening tool for anxiety. It takes about 2 minutes to complete.
                </p>
                <Button 
                  onClick={() => setActiveTest('gad7')}
                  className="w-full"
                >
                  Start GAD-7
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>PHQ-9 Assessment</CardTitle>
                <CardDescription>
                  Patient Health Questionnaire for Depression
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The PHQ-9 is a screening tool for depression. It takes about 3 minutes to complete.
                </p>
                <Button 
                  onClick={() => setActiveTest('phq9')}
                  className="w-full"
                >
                  Start PHQ-9
                </Button>
              </CardContent>
            </Card>

            {(results.gad7 !== null || results.phq9 !== null) && (
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LineChart className="w-5 h-5 mr-2" />
                    Your Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {results.gad7 !== null && (
                      <div>
                        <h3 className="font-semibold mb-2">GAD-7 Score: {results.gad7}</h3>
                        <p className={getScoreSeverity('gad7', results.gad7).color}>
                          {getScoreSeverity('gad7', results.gad7).text}
                        </p>
                      </div>
                    )}
                    {results.phq9 !== null && (
                      <div>
                        <h3 className="font-semibold mb-2">PHQ-9 Score: {results.phq9}</h3>
                        <p className={getScoreSeverity('phq9', results.phq9).color}>
                          {getScoreSeverity('phq9', results.phq9).text}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>
                {activeTest === 'gad7' ? 'GAD-7 Assessment' : 'PHQ-9 Assessment'}
              </CardTitle>
              <CardDescription>
                Over the last 2 weeks, how often have you been bothered by the following problems?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {(activeTest === 'gad7' ? gad7Questions : phq9Questions).map((question) => (
                  <div key={question.id} className="space-y-2">
                    <p className="font-medium">{question.text}</p>
                    <RadioGroup
                      value={answers[question.id]?.toString()}
                      onValueChange={(value) => handleAnswer(question.id, parseInt(value))}
                      className="flex space-x-4"
                    >
                      {[
                        { value: 0, label: 'Not at all' },
                        { value: 1, label: 'Several days' },
                        { value: 2, label: 'More than half the days' },
                        { value: 3, label: 'Nearly every day' },
                      ].map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value.toString()} id={`q${question.id}-${option.value}`} />
                          <Label htmlFor={`q${question.id}-${option.value}`}>{option.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}
                <div className="flex justify-end space-x-4 mt-6">
                  <Button variant="outline" onClick={() => {
                    setActiveTest(null);
                    setAnswers({});
                  }}>
                    Cancel
                  </Button>
                  <Button onClick={calculateScore}>
                    Submit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Assessment; 