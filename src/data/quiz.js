export const quizTypes = {
    CATEGORICAL: 'categorical',
    SCORED: 'scored'
  };
  
  export const sampleQuizzes = {
    personalityQuiz: {  // This key is what should be used in the URL
      id: 'personalityQuiz', // Updated to match the key
      title: 'Personality Type Quiz',
      type: quizTypes.CATEGORICAL,
      questions: [
        {
          id: 1,
          text: 'How do you prefer to spend your weekends?',
          options: [
            { id: 'a', text: 'Alone reading or relaxing', score: 'introvert' },
            { id: 'b', text: 'Going out with friends', score: 'extrovert' },
            { id: 'c', text: 'Mix of both', score: 'ambivert' }
          ]
        },
        {
          id: 2,
          text: 'In group projects, you usually:',
          options: [
            { id: 'a', text: 'Take the lead', score: 'extrovert' },
            { id: 'b', text: 'Prefer specific tasks', score: 'introvert' },
            { id: 'c', text: 'Adapt to what\'s needed', score: 'ambivert' }
          ]
        }
      ],
      results: {
        introvert: "You're more introverted! You gain energy from quiet reflection and solo activities.",
        extrovert: "You're more extroverted! You thrive on social interaction and group activities.",
        ambivert: "You're an ambivert! You have a good balance of both introverted and extroverted traits."
      }
    },
    
    historyQuiz: {  // This key is what should be used in the URL
      id: 'historyQuiz', // Updated to match the key
      title: 'World History Quiz',
      type: quizTypes.SCORED,
      questions: [
        {
          id: 1,
          text: 'When did World War II end?',
          options: [
            { id: 'a', text: '1945', score: 1 },
            { id: 'b', text: '1944', score: 0 },
            { id: 'c', text: '1946', score: 0 }
          ]
        },
        {
          id: 2,
          text: 'Who was the first President of the United States?',
          options: [
            { id: 'a', text: 'Thomas Jefferson', score: 0 },
            { id: 'b', text: 'George Washington', score: 1 },
            { id: 'c', text: 'John Adams', score: 0 }
          ]
        }
      ],
      getResult: (score, totalQuestions) => {
        const percentage = (score / totalQuestions) * 100;
        return `You scored ${percentage.toFixed(1)}%`;
      }
    },

    areYouGayQuiz: {  // This key should be used in the URL
        id: 'areYouGayQuiz',  // Updated to match the key
        title: 'Exploring Your Sexuality',
        type: quizTypes.CATEGORICAL,
        questions: [
          {
            id: 1,
            text: 'How do you feel when you see someone of the same gender?',
            options: [
              { id: 'a', text: 'Neutral, it doesn\'t really matter to me', score: 'none' },
              { id: 'b', text: 'I feel a special attraction or connection', score: 'gay' },
              { id: 'c', text: 'I feel more interested in the opposite gender', score: 'hetero' }
            ]
          },
          {
            id: 2,
            text: 'Which of these describes your ideal partner?',
            options: [
              { id: 'a', text: 'Someone of the opposite gender', score: 'hetero' },
              { id: 'b', text: 'Someone of the same gender', score: 'gay' },
              { id: 'c', text: 'It could be anyone, regardless of gender', score: 'bi' }
            ]
          },
          {
            id: 3,
            text: 'Have you ever had romantic or emotional feelings for someone of the same gender?',
            options: [
              { id: 'a', text: 'Yes, but I haven\'t explored it further', score: 'gay' },
              { id: 'b', text: 'No, I\'ve always been interested in the opposite gender', score: 'hetero' },
              { id: 'c', text: 'I\'m still figuring it out', score: 'none' }
            ]
          },
          {
            id: 4,
            text: 'How do you identify in terms of your sexual attraction?',
            options: [
              { id: 'a', text: 'I am primarily attracted to the opposite gender', score: 'hetero' },
              { id: 'b', text: 'I am primarily attracted to the same gender', score: 'gay' },
              { id: 'c', text: 'I am attracted to both genders', score: 'bi' },
              { id: 'd', text: 'I am still exploring and learning about my attractions', score: 'none' }
            ]
          }
        ],
        results: {
          gay: "You may have feelings for people of the same gender, suggesting that you are gay. Sexuality can be complex and it's okay to explore these feelings further.",
          hetero: "You seem to feel more attracted to the opposite gender, which may indicate you're straight. Remember, sexuality can evolve over time.",
          bi: "You may feel attracted to both genders, which could suggest you're bisexual. It's important to recognize that attraction can be fluid.",
          none: "It's completely okay to be unsure! Sexuality is a personal journey, and it’s normal to need time to understand yourself better."
        }
      },

      politicalAffiliationQuiz: {  // This key should be used in the URL
        id: 'politicalAffiliationQuiz',  // Updated to match the key
        title: 'What’s Your Political Affiliation?',
        type: quizTypes.CATEGORICAL,
        questions: [
          {
            id: 1,
            text: 'On the role of government in the economy, which of these best describes your view?',
            options: [
              { id: 'a', text: 'The government should regulate the economy, ensure fair wages, and provide social safety nets for all.', score: 'democrat' },
              { id: 'b', text: 'The government should have a minimal role, allowing the free market to determine wages and opportunities.', score: 'republican' },
              { id: 'c', text: 'I believe the government should provide support for those in need but also encourage individual responsibility.', score: 'independent' }
            ]
          },
          {
            id: 2,
            text: 'How do you feel about healthcare?',
            options: [
              { id: 'a', text: 'I support universal healthcare programs funded by the government to ensure all citizens have access to care.', score: 'democrat' },
              { id: 'b', text: 'Healthcare should be privatized and driven by the free market to offer competition and innovation.', score: 'republican' },
              { id: 'c', text: 'I believe in a mixed approach with a combination of private and public healthcare options.', score: 'independent' }
            ]
          },
          {
            id: 3,
            text: 'What is your stance on climate change?',
            options: [
              { id: 'a', text: 'Climate change is a major crisis, and the government should take aggressive action to reduce carbon emissions and transition to renewable energy sources.', score: 'democrat' },
              { id: 'b', text: 'While climate change is a concern, government action should not impede economic growth, and the free market should be allowed to find solutions.', score: 'republican' },
              { id: 'c', text: 'Climate change is an issue, but the focus should be on scientific research and voluntary innovation rather than government mandates.', score: 'independent' }
            ]
          },
          {
            id: 4,
            text: 'What are your views on social issues like LGBTQ+ rights, racial equality, and gender equality?',
            options: [
              { id: 'a', text: 'I believe in active government intervention to protect the rights of marginalized groups and to promote equality for all citizens.', score: 'democrat' },
              { id: 'b', text: 'I believe in personal freedoms and that government should not mandate social issues; individuals and communities should address them.', score: 'republican' },
              { id: 'c', text: 'I support equality but believe that solutions should come from societal changes and not be enforced through government mandates.', score: 'independent' }
            ]
          },
          {
            id: 5,
            text: 'What should the U.S. foreign policy focus on?',
            options: [
              { id: 'a', text: 'The U.S. should be a global leader in promoting democracy, human rights, and international cooperation, even at the cost of economic sacrifices.', score: 'democrat' },
              { id: 'b', text: 'The U.S. should prioritize national security and focus on military strength to protect its interests, with a preference for unilateral action.', score: 'republican' },
              { id: 'c', text: 'The U.S. should focus on diplomacy, trade, and cooperation while maintaining a strong military but avoiding unnecessary interventions.', score: 'independent' }
            ]
          }
        ],
        results: {
          democrat: "You align more with the Democratic Party, supporting government intervention for social safety nets, environmental protection, and active civil rights promotion.",
          republican: "You lean toward the Republican Party, favoring a limited role of government in the economy, national defense, and individual liberties.",
          independent: "Your views do not strongly align with either party and reflect a more independent or moderate stance on various issues."
        }
      }
  };