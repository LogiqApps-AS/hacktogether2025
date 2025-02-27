import { IQuestion, QuestionType } from '../types/types';

export const mockQuestions: IQuestion[] = [
  // Openness to Experience (10 questions)
  { id: 1, textLeft: 'I dislike change', textRight: 'I embrace change', trait: 'Openness', type: QuestionType.Default },
  { id: 2, textLeft: 'I prefer routine', textRight: 'I enjoy novelty', trait: 'Openness', type: QuestionType.Default },
  { id: 3, textLeft: 'I am not very imaginative', textRight: 'I have a vivid imagination', trait: 'Openness', type: QuestionType.Default },
  { id: 4, textLeft: 'I avoid philosophical discussions', textRight: 'I enjoy philosophical discussions', trait: 'Openness', type: QuestionType.Default },
  { id: 5, textLeft: 'I am not interested in abstract ideas', textRight: 'I am interested in abstract ideas', trait: 'Openness', type: QuestionType.Default },
  { id: 6, textLeft: 'I prefer practical tasks', textRight: 'I enjoy creative tasks', trait: 'Openness', type: QuestionType.Default },
  { id: 7, textLeft: 'I am down-to-earth', textRight: 'I have a rich fantasy life', trait: 'Openness', type: QuestionType.Default },
  { id: 8, textLeft: 'I stick to what I know', textRight: 'I am curious about many things', trait: 'Openness', type: QuestionType.Default },
  { id: 9, textLeft: 'I avoid complex situations', textRight: 'I seek out complex situations', trait: 'Openness', type: QuestionType.Default },
  { id: 10, textLeft: 'I am not interested in art', textRight: 'I appreciate art and beauty', trait: 'Openness', type: QuestionType.Default },

  // Conscientiousness (10 questions)
  { id: 11, textLeft: 'I am often unprepared', textRight: 'I am always prepared', trait: 'Conscientiousness', type: QuestionType.Default },
  { id: 12, textLeft: 'I leave my belongings around', textRight: 'I like order and tidiness', trait: 'Conscientiousness', type: QuestionType.Default },
  { id: 13, textLeft: 'I neglect my duties', textRight: 'I follow through on plans', trait: 'Conscientiousness', type: QuestionType.Default },
  { id: 14, textLeft: 'I am easily distracted', textRight: 'I pay attention to details', trait: 'Conscientiousness', type: QuestionType.Default },
  { id: 15, textLeft: 'I make a mess of things', textRight: 'I am efficient and organized', trait: 'Conscientiousness', type: QuestionType.Default },
  { id: 16, textLeft: 'I postpone decisions', textRight: 'I am decisive and proactive', trait: 'Conscientiousness', type: QuestionType.Default },
  { id: 17, textLeft: 'I waste my time', textRight: 'I use my time effectively', trait: 'Conscientiousness', type: QuestionType.Default },
  { id: 18, textLeft: 'I do things haphazardly', textRight: 'I do things according to a plan', trait: 'Conscientiousness', type: QuestionType.Default },
  { id: 19, textLeft: 'I struggle to stay focused', textRight: 'I am persistent and focused', trait: 'Conscientiousness', type: QuestionType.Default },
  { id: 20, textLeft: 'I give up easily', textRight: 'I persevere through challenges', trait: 'Conscientiousness', type: QuestionType.Default },

  // Extraversion (10 questions)
  { id: 21, textLeft: 'I am quiet around strangers', textRight: 'I am the life of the party', trait: 'Extraversion', type: QuestionType.Default },
  { id: 22, textLeft: 'I prefer to keep to myself', textRight: 'I enjoy being the center of attention', trait: 'Extraversion', type: QuestionType.Default },
  { id: 23, textLeft: `I don't talk a lot`, textRight: 'I talk to a lot of different people', trait: 'Extraversion', type: QuestionType.Default },
  { id: 24, textLeft: 'I find it hard to approach others', textRight: 'I am comfortable around people', trait: 'Extraversion', type: QuestionType.Default },
  { id: 25, textLeft: 'I keep in the background', textRight: 'I take charge in social situations', trait: 'Extraversion', type: QuestionType.Default },
  { id: 26, textLeft: 'I am reserved and introverted', textRight: 'I am outgoing and sociable', trait: 'Extraversion', type: QuestionType.Default },
  { id: 27, textLeft: 'I avoid large gatherings', textRight: 'I enjoy large parties and events', trait: 'Extraversion', type: QuestionType.Default },
  { id: 28, textLeft: 'I feel drained after socializing', textRight: 'I feel energized by socializing', trait: 'Extraversion', type: QuestionType.Default },
  { id: 29, textLeft: 'I prefer one-on-one conversations', textRight: 'I enjoy meeting new people', trait: 'Extraversion', type: QuestionType.Default },
  { id: 30, textLeft: 'I am a good listener', textRight: 'I am a good talker', trait: 'Extraversion', type: QuestionType.Default },

  // Agreeableness (10 questions)
  { id: 31, textLeft: 'I am not interested in other people\'s problems', textRight: 'I sympathize with others\' feelings', trait: 'Agreeableness', type: QuestionType.Default },
  { id: 32, textLeft: 'I tend to criticize others', textRight: 'I am considerate and kind', trait: 'Agreeableness', type: QuestionType.Default },
  { id: 33, textLeft: 'I am skeptical of others\' intentions', textRight: 'I trust people easily', trait: 'Agreeableness', type: QuestionType.Default },
  { id: 34, textLeft: 'I hold grudges', textRight: 'I forgive others easily', trait: 'Agreeableness', type: QuestionType.Default },
  { id: 35, textLeft: 'I am competitive and assertive', textRight: 'I am cooperative and accommodating', trait: 'Agreeableness', type: QuestionType.Default },
  { id: 36, textLeft: 'I prioritize my own needs', textRight: 'I put others\' needs before my own', trait: 'Agreeableness', type: QuestionType.Default },
  { id: 37, textLeft: 'I am not easily impressed', textRight: 'I am easily impressed by others', trait: 'Agreeableness', type: QuestionType.Default },
  { id: 38, textLeft: 'I am demanding and blunt', textRight: 'I am gentle and understanding', trait: 'Agreeableness', type: QuestionType.Default },
  { id: 39, textLeft: 'I avoid conflict at all costs', textRight: 'I am willing to compromise', trait: 'Agreeableness', type: QuestionType.Default },
  { id: 40, textLeft: 'I am stubborn and unyielding', textRight: 'I am flexible and adaptable', trait: 'Agreeableness', type: QuestionType.Default },

  // Neuroticism (10 questions)
  { id: 41, textLeft: 'I am usually relaxed', textRight: 'I worry a lot', trait: 'Neuroticism', type: QuestionType.Default },
  { id: 42, textLeft: 'I rarely get irritated', textRight: 'I get irritated easily', trait: 'Neuroticism', type: QuestionType.Default },
  { id: 43, textLeft: 'I am calm under pressure', textRight: 'I get stressed out easily', trait: 'Neuroticism', type: QuestionType.Default },
  { id: 44, textLeft: 'I am emotionally stable', textRight: 'I have frequent mood swings', trait: 'Neuroticism', type: QuestionType.Default },
  { id: 45, textLeft: 'I am not easily bothered by things', textRight: 'I am easily disturbed by things', trait: 'Neuroticism', type: QuestionType.Default },
  { id: 46, textLeft: 'I am content with my life', textRight: 'I often feel blue', trait: 'Neuroticism', type: QuestionType.Default },
  { id: 47, textLeft: 'I rarely feel anxious', textRight: 'I often feel anxious', trait: 'Neuroticism', type: QuestionType.Default },
  { id: 48, textLeft: 'I am resilient and adaptable', textRight: 'I am sensitive and easily hurt', trait: 'Neuroticism', type: QuestionType.Default },
  { id: 49, textLeft: 'I handle stress well', textRight: 'I struggle to cope with stress', trait: 'Neuroticism', type: QuestionType.Default },
  { id: 50, textLeft: 'I am generally optimistic', textRight: 'I tend to be pessimistic', trait: 'Neuroticism', type: QuestionType.Default },

  // Open Question
  {
    id: 51, textLeft: 'In general, how would you describe your level of motivation to improve yourself and your life?', trait: 'Openness', type: QuestionType.Options, options: [
      'I am not willing to do much to improve myself or my life',
      'I am willing to make some effort to improve myself and my life',
      'I am willing to make a good deal of effort to improve myself and my life',
      'Improving myself and my life is my most important goal and top priority',
    ]
  },
  {
    id: 52, textLeft: 'What areas of your life are you most interested in improving? Select all that apply.', trait: 'Openness', type: QuestionType.MultipleOptions, options: [
      'Finding or maintaining a romantic partnership',
      'Using my strengths and talents to give back to the world around me',
      'Learning how to make the right decisions for me and my life',
      'Improving my ability to be productive and achieve my goals',
      'Finding my own sense of happiness and satisfaction',
      'Learning to live in accordance with my own values and individual gifts',
      'Progressing in my career',
      'Developing friendships and/or other social connections'
    ]
  },
  { id: 53, textLeft: 'If you could change one thing to improve your life right now, what would it be?', trait: 'Openness', type: QuestionType.OpenQuestion },

];
