import { Question } from '../types/types';

export const mockQuestions: Question[] = [
  // Openness to Experience (10 questions)
  { id: 1, textLeft: 'I dislike change', textRight: 'I embrace change', trait: 'Openness' },
  { id: 2, textLeft: 'I prefer routine', textRight: 'I enjoy novelty', trait: 'Openness' },
  { id: 3, textLeft: 'I am not very imaginative', textRight: 'I have a vivid imagination', trait: 'Openness' },
  { id: 4, textLeft: 'I avoid philosophical discussions', textRight: 'I enjoy philosophical discussions', trait: 'Openness' },
  { id: 5, textLeft: 'I am not interested in abstract ideas', textRight: 'I am interested in abstract ideas', trait: 'Openness' },
  { id: 6, textLeft: 'I prefer practical tasks', textRight: 'I enjoy creative tasks', trait: 'Openness' },
  { id: 7, textLeft: 'I am down-to-earth', textRight: 'I have a rich fantasy life', trait: 'Openness' },
  { id: 8, textLeft: 'I stick to what I know', textRight: 'I am curious about many things', trait: 'Openness' },
  { id: 9, textLeft: 'I avoid complex situations', textRight: 'I seek out complex situations', trait: 'Openness' },
  { id: 10, textLeft: 'I am not interested in art', textRight: 'I appreciate art and beauty', trait: 'Openness' },

  // Conscientiousness (10 questions)
  { id: 11, textLeft: 'I am often unprepared', textRight: 'I am always prepared', trait: 'Conscientiousness' },
  { id: 12, textLeft: 'I leave my belongings around', textRight: 'I like order and tidiness', trait: 'Conscientiousness' },
  { id: 13, textLeft: 'I neglect my duties', textRight: 'I follow through on plans', trait: 'Conscientiousness' },
  { id: 14, textLeft: 'I am easily distracted', textRight: 'I pay attention to details', trait: 'Conscientiousness' },
  { id: 15, textLeft: 'I make a mess of things', textRight: 'I am efficient and organized', trait: 'Conscientiousness' },
  { id: 16, textLeft: 'I postpone decisions', textRight: 'I am decisive and proactive', trait: 'Conscientiousness' },
  { id: 17, textLeft: 'I waste my time', textRight: 'I use my time effectively', trait: 'Conscientiousness' },
  { id: 18, textLeft: 'I do things haphazardly', textRight: 'I do things according to a plan', trait: 'Conscientiousness' },
  { id: 19, textLeft: 'I struggle to stay focused', textRight: 'I am persistent and focused', trait: 'Conscientiousness' },
  { id: 20, textLeft: 'I give up easily', textRight: 'I persevere through challenges', trait: 'Conscientiousness' },

  // Extraversion (10 questions)
  { id: 21, textLeft: 'I am quiet around strangers', textRight: 'I am the life of the party', trait: 'Extraversion' },
  { id: 22, textLeft: 'I prefer to keep to myself', textRight: 'I enjoy being the center of attention', trait: 'Extraversion' },
  { id: 23, textLeft: `I don't talk a lot`, textRight: 'I talk to a lot of different people', trait: 'Extraversion' },
  { id: 24, textLeft: 'I find it hard to approach others', textRight: 'I am comfortable around people', trait: 'Extraversion' },
  { id: 25, textLeft: 'I keep in the background', textRight: 'I take charge in social situations', trait: 'Extraversion' },
  { id: 26, textLeft: 'I am reserved and introverted', textRight: 'I am outgoing and sociable', trait: 'Extraversion' },
  { id: 27, textLeft: 'I avoid large gatherings', textRight: 'I enjoy large parties and events', trait: 'Extraversion' },
  { id: 28, textLeft: 'I feel drained after socializing', textRight: 'I feel energized by socializing', trait: 'Extraversion' },
  { id: 29, textLeft: 'I prefer one-on-one conversations', textRight: 'I enjoy meeting new people', trait: 'Extraversion' },
  { id: 30, textLeft: 'I am a good listener', textRight: 'I am a good talker', trait: 'Extraversion' },

  // Agreeableness (10 questions)
  { id: 31, textLeft: 'I am not interested in other people\'s problems', textRight: 'I sympathize with others\' feelings', trait: 'Agreeableness' },
  { id: 32, textLeft: 'I tend to criticize others', textRight: 'I am considerate and kind', trait: 'Agreeableness' },
  { id: 33, textLeft: 'I am skeptical of others\' intentions', textRight: 'I trust people easily', trait: 'Agreeableness' },
  { id: 34, textLeft: 'I hold grudges', textRight: 'I forgive others easily', trait: 'Agreeableness' },
  { id: 35, textLeft: 'I am competitive and assertive', textRight: 'I am cooperative and accommodating', trait: 'Agreeableness' },
  { id: 36, textLeft: 'I prioritize my own needs', textRight: 'I put others\' needs before my own', trait: 'Agreeableness' },
  { id: 37, textLeft: 'I am not easily impressed', textRight: 'I am easily impressed by others', trait: 'Agreeableness' },
  { id: 38, textLeft: 'I am demanding and blunt', textRight: 'I am gentle and understanding', trait: 'Agreeableness' },
  { id: 39, textLeft: 'I avoid conflict at all costs', textRight: 'I am willing to compromise', trait: 'Agreeableness' },
  { id: 40, textLeft: 'I am stubborn and unyielding', textRight: 'I am flexible and adaptable', trait: 'Agreeableness' },

  // Neuroticism (10 questions)
  { id: 41, textLeft: 'I am usually relaxed', textRight: 'I worry a lot', trait: 'Neuroticism' },
  { id: 42, textLeft: 'I rarely get irritated', textRight: 'I get irritated easily', trait: 'Neuroticism' },
  { id: 43, textLeft: 'I am calm under pressure', textRight: 'I get stressed out easily', trait: 'Neuroticism' },
  { id: 44, textLeft: 'I am emotionally stable', textRight: 'I have frequent mood swings', trait: 'Neuroticism' },
  { id: 45, textLeft: 'I am not easily bothered by things', textRight: 'I am easily disturbed by things', trait: 'Neuroticism' },
  { id: 46, textLeft: 'I am content with my life', textRight: 'I often feel blue', trait: 'Neuroticism' },
  { id: 47, textLeft: 'I rarely feel anxious', textRight: 'I often feel anxious', trait: 'Neuroticism' },
  { id: 48, textLeft: 'I am resilient and adaptable', textRight: 'I am sensitive and easily hurt', trait: 'Neuroticism' },
  { id: 49, textLeft: 'I handle stress well', textRight: 'I struggle to cope with stress', trait: 'Neuroticism' },
  { id: 50, textLeft: 'I am generally optimistic', textRight: 'I tend to be pessimistic', trait: 'Neuroticism' },
];
