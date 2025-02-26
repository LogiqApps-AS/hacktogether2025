// Simulate OpenAI API response (since we can't make real API calls)
export const mockOpenAIResponse = (results: Record<string, number>): string => {
  // In a real application, this function would make an API call to OpenAI
  // using the 'results' data to generate a personalized summary.

  // Placeholder summary based on dominant traits (very basic example)
  const dominantTraits = [];
  for (const trait in results) {
    if (results[trait] > 75) {
      dominantTraits.push(trait);
    }
  }

  if (dominantTraits.length > 0) {
    return `Based on your results, you show strong tendencies towards the following traits: ${dominantTraits.join(', ')}.  This is a placeholder summary.  A real integration with OpenAI would provide a much more detailed and nuanced analysis.`;
  } else {
    return "Your results are fairly balanced across the different personality traits. This is a placeholder summary. A real integration with OpenAI would provide a much more detailed analysis.";
  }
};

export default mockOpenAIResponse;
