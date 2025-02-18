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
        },
        
      },

      emotionalIntelligenceQuiz: {  
        id: 'emotionalIntelligenceQuiz',  
        title: 'Emotional Intelligence Quiz',
        type: quizTypes.CATEGORICAL,
        questions: [
          {
            id: 1,
            text: 'How do you usually respond when someone expresses frustration in front of you?',
            options: [
              { id: 'a', text: 'I get frustrated too and may start arguing', score: 'low' },
              { id: 'b', text: 'I remain calm and try to understand their perspective', score: 'high' },
              { id: 'c', text: 'I ignore it and try to avoid the situation', score: 'medium' }
            ]
          },
          {
            id: 2,
            text: 'When you’re feeling upset, how do you deal with your emotions?',
            options: [
              { id: 'a', text: 'I try to avoid my emotions and keep busy with other things', score: 'low' },
              { id: 'b', text: 'I allow myself to feel them, then reflect on what caused them', score: 'high' },
              { id: 'c', text: 'I talk to someone about it but have trouble controlling my emotions', score: 'medium' }
            ]
          },
          {
            id: 3,
            text: 'How do you feel when receiving feedback about your work?',
            options: [
              { id: 'a', text: 'I get defensive and feel criticized', score: 'low' },
              { id: 'b', text: 'I appreciate it and use it to improve', score: 'high' },
              { id: 'c', text: 'I feel neutral, neither happy nor upset', score: 'medium' }
            ]
          },
          {
            id: 4,
            text: 'How often do you check in with your emotions throughout the day?',
            options: [
              { id: 'a', text: 'Rarely, I focus more on tasks', score: 'low' },
              { id: 'b', text: 'I regularly check in and process how I’m feeling', score: 'high' },
              { id: 'c', text: 'Only when something happens that affects me deeply', score: 'medium' }
            ]
          }
        ],
        results: {
          high: "You have high emotional intelligence! You are adept at managing your own emotions and understanding others’ feelings.",
          medium: "You have a moderate level of emotional intelligence. You’re aware of your emotions but may sometimes struggle with handling them.",
          low: "You may need to work on your emotional intelligence. Developing empathy and emotional regulation can help in personal and professional relationships."
        }
      },

      leadershipStyleQuiz: {  
        id: 'leadershipStyleQuiz',  
        title: 'What is Your Leadership Style?',
        type: quizTypes.CATEGORICAL,
        questions: [
          {
            id: 1,
            text: 'How do you handle decision-making in a team?',
            options: [
              { id: 'a', text: 'I make decisions alone and inform the team afterward', score: 'autocratic' },
              { id: 'b', text: 'I discuss options with the team and then make a final decision', score: 'democratic' },
              { id: 'c', text: 'I guide the team to make decisions together', score: 'participative' }
            ]
          },
          {
            id: 2,
            text: 'When faced with conflict in the team, what’s your usual approach?',
            options: [
              { id: 'a', text: 'I resolve it by making a firm decision and moving on', score: 'autocratic' },
              { id: 'b', text: 'I facilitate a group discussion to resolve the issue collaboratively', score: 'democratic' },
              { id: 'c', text: 'I encourage the team to work through it on their own, offering guidance as needed', score: 'laissezfaire' }
            ]
          },
          {
            id: 3,
            text: 'How do you motivate your team to achieve their goals?',
            options: [
              { id: 'a', text: 'I set clear goals and expect results without much feedback', score: 'autocratic' },
              { id: 'b', text: 'I set goals and regularly check in, offering encouragement along the way', score: 'democratic' },
              { id: 'c', text: 'I trust the team to set their own goals and manage their progress independently', score: 'laissezfaire' }
            ]
          },
          {
            id: 4,
            text: 'How do you react when your team members make mistakes?',
            options: [
              { id: 'a', text: 'I expect them to learn from it and move on quickly', score: 'autocratic' },
              { id: 'b', text: 'I see it as an opportunity for learning and encourage a group discussion on how to avoid it in the future', score: 'democratic' },
              { id: 'c', text: 'I let them handle it and offer support if needed, but they’re responsible for their actions', score: 'laissezfaire' }
            ]
          }
        ],
        results: {
          autocratic: "You have an autocratic leadership style. You tend to make decisions independently and expect your team to follow your direction.",
          democratic: "You have a democratic leadership style. You value collaboration and input from your team before making decisions.",
          laissezfaire: "You have a laissez-faire leadership style. You give your team a high degree of freedom and autonomy, stepping in only when necessary."
        }
      },
  
      politicalIdeologyQuiz: {
        id: 'politicalIdeologyQuiz',
        title: 'What is Your Political Ideology?',
        type: quizTypes.CATEGORICAL,
        questions: [
          {
            id: 1,
            text: 'What is your stance on government regulation of the economy?',
            options: [
              { id: 'a', text: 'Government should heavily regulate the economy to ensure fairness and reduce inequality.', score: 'left' },
              { id: 'b', text: 'Government should regulate the economy to some extent, but the market should remain free.', score: 'center' },
              { id: 'c', text: 'Government should have minimal involvement in the economy and let the free market dictate outcomes.', score: 'right' }
            ]
          },
          {
            id: 2,
            text: 'How do you feel about taxation?',
            options: [
              { id: 'a', text: 'Higher taxes for the wealthy are necessary to fund social programs and reduce inequality.', score: 'left' },
              { id: 'b', text: 'Taxation should be progressive, but not excessive, and should encourage economic growth.', score: 'center' },
              { id: 'c', text: 'Lower taxes for everyone, especially the wealthy, will lead to more prosperity and innovation.', score: 'right' }
            ]
          },
          {
            id: 3,
            text: 'What is your view on universal healthcare?',
            options: [
              { id: 'a', text: 'Healthcare should be universally accessible and funded by the government.', score: 'left' },
              { id: 'b', text: 'Healthcare should be a mix of private and public systems, offering both options to the public.', score: 'center' },
              { id: 'c', text: 'Healthcare should be privatized, with minimal government involvement or regulation.', score: 'right' }
            ]
          },
          {
            id: 4,
            text: 'How do you view climate change and environmental policy?',
            options: [
              { id: 'a', text: 'Climate change is a major crisis, and the government should take aggressive action to reduce emissions.', score: 'left' },
              { id: 'b', text: 'Climate change is a concern, but we need to balance environmental protection with economic growth.', score: 'center' },
              { id: 'c', text: 'Climate change is exaggerated; economic growth should be prioritized over environmental concerns.', score: 'right' }
            ]
          },
          {
            id: 5,
            text: 'What is your opinion on immigration?',
            options: [
              { id: 'a', text: 'Immigration should be open, and people should have the right to live and work in any country.', score: 'left' },
              { id: 'b', text: 'Immigration should be regulated, with a focus on skilled workers and those who contribute to society.', score: 'center' },
              { id: 'c', text: 'Immigration should be restricted, and the government should prioritize the welfare of citizens over newcomers.', score: 'right' }
            ]
          },
          {
            id: 6,
            text: 'How do you feel about government involvement in education?',
            options: [
              { id: 'a', text: 'Education should be publicly funded and accessible to all, ensuring equal opportunities for everyone.', score: 'left' },
              { id: 'b', text: 'Education should be a mix of public and private, with government ensuring a basic standard.', score: 'center' },
              { id: 'c', text: 'Education should primarily be privatized, allowing market forces to improve quality and efficiency.', score: 'right' }
            ]
          },
          {
            id: 7,
            text: 'What is your stance on civil liberties and personal freedom?',
            options: [
              { id: 'a', text: 'Civil liberties should be protected at all costs, even if it means limiting certain government powers.', score: 'left' },
              { id: 'b', text: 'Civil liberties are important, but must be balanced with national security and law enforcement.', score: 'center' },
              { id: 'c', text: 'Government should have more power to ensure safety and security, sometimes at the expense of civil liberties.', score: 'right' }
            ]
          },
          {
            id: 8,
            text: 'How should the government approach social welfare?',
            options: [
              { id: 'a', text: 'The government should provide comprehensive welfare programs to support those in need, including unemployment benefits, food assistance, and housing.', score: 'left' },
              { id: 'b', text: 'The government should provide a safety net but also encourage self-reliance and personal responsibility.', score: 'center' },
              { id: 'c', text: 'Welfare programs should be minimized to reduce government spending; individuals should be responsible for their own welfare.', score: 'right' }
            ]
          },
          {
            id: 9,
            text: 'How do you view the role of the military?',
            options: [
              { id: 'a', text: 'The military should focus on defense and humanitarian missions, with minimal involvement in international conflicts.', score: 'left' },
              { id: 'b', text: 'The military should be strong and prepared to defend the country, but avoid unnecessary foreign interventions.', score: 'center' },
              { id: 'c', text: 'The military should prioritize national security and be willing to engage in international conflicts to protect national interests.', score: 'right' }
            ]
          },
          {
            id: 10,
            text: 'What is your stance on gun control?',
            options: [
              { id: 'a', text: 'Strict gun control laws are necessary to reduce violence and ensure public safety.', score: 'left' },
              { id: 'b', text: 'There should be reasonable gun control measures, but the right to bear arms should be respected.', score: 'center' },
              { id: 'c', text: 'Gun control should be minimal; individuals have the right to protect themselves without government interference.', score: 'right' }
            ]
          },
          {
            id: 11,
            text: 'What do you think about the role of religion in government?',
            options: [
              { id: 'a', text: 'Religion should not influence government policies, and there should be a clear separation of church and state.', score: 'left' },
              { id: 'b', text: 'Religion should be allowed to influence some aspects of policy, but government should remain secular in general.', score: 'center' },
              { id: 'c', text: 'Religion should play a significant role in shaping government policies and laws.', score: 'right' }
            ]
          },
          {
            id: 12,
            text: 'How do you view wealth inequality?',
            options: [
              { id: 'a', text: 'Wealth inequality is a major issue, and the government should take action to redistribute wealth through taxation and social programs.', score: 'left' },
              { id: 'b', text: 'Wealth inequality exists, but the focus should be on creating opportunities for individuals to improve their economic situation through hard work and innovation.', score: 'center' },
              { id: 'c', text: 'Wealth inequality is natural in a capitalist system, and the government should not interfere with wealth distribution.' , score: 'right' }
            ]
          },
          {
            id: 13,
            text: 'What is your opinion on free speech?',
            options: [
              { id: 'a', text: 'Free speech should be protected, but there should be limits to prevent hate speech and misinformation.', score: 'left' },
              { id: 'b', text: 'Free speech should be protected, but there should be reasonable regulations to prevent harm to others.', score: 'center' },
              { id: 'c', text: 'Free speech should be absolute, and the government should not regulate what people say or publish.', score: 'right' }
            ]
          },
          {
            id: 14,
            text: 'What is your position on social issues like LGBTQ+ rights?',
            options: [
              { id: 'a', text: 'The government should protect the rights of LGBTQ+ individuals and ensure equality for all citizens.', score: 'left' },
              { id: 'b', text: 'LGBTQ+ rights should be protected, but the focus should be on personal freedoms and not government intervention.', score: 'center' },
              { id: 'c', text: 'Social issues like LGBTQ+ rights should not be legislated; people should have the freedom to live as they choose without government interference.', score: 'right' }
            ]
          },
          {
            id: 15,
            text: 'How should the government address poverty?',
            options: [
              { id: 'a', text: 'The government should provide programs and services to help lift people out of poverty and reduce economic disparities.', score: 'left' },
              { id: 'b', text: 'The government should create opportunities for economic growth, but individuals should take responsibility for escaping poverty.', score: 'center' },
              { id: 'c', text: 'Poverty should be addressed through the free market; government interference only exacerbates the problem.', score: 'right' }
            ]
          },
          {
            id: 16,
            text: 'What is your opinion on the use of public funds?',
            options: [
              { id: 'a', text: 'Public funds should be used to support social welfare programs, education, healthcare, and environmental protection.', score: 'left' },
              { id: 'b', text: 'Public funds should be used efficiently, with a focus on necessary services and infrastructure, but not excessive spending on social programs.', score: 'center' },
              { id: 'c', text: 'Public funds should be used for national defense and maintaining law and order, but other government spending should be minimized.', score: 'right' }
            ]
          },
          {
            id: 17,
            text: 'What is your stance on trade and globalization?',
            options: [
              { id: 'a', text: 'Trade and globalization are beneficial, and the government should promote international cooperation and open borders.', score: 'left' },
              { id: 'b', text: 'Trade should be balanced to ensure fair opportunities for all nations, with attention to both local and international needs.', score: 'center' },
              { id: 'c', text: 'Trade should prioritize national interests, and globalization has hurt local industries and workers.', score: 'right' }
            ]
          },
          {
            id: 18,
            text: 'How do you view the role of technology in society?',
            options: [
              { id: 'a', text: 'Technology should be regulated to ensure privacy, security, and social responsibility, with government oversight.', score: 'left' },
              { id: 'b', text: 'Technology should be embraced and regulated to ensure fairness and opportunity, but innovation should be encouraged.', score: 'center' },
              { id: 'c', text: 'Technology should be free from government regulation, with a focus on innovation and market-driven solutions.', score: 'right' }
            ]
          },
          {
            id: 19,
            text: 'What is your view on education policy?',
            options: [
              { id: 'a', text: 'Education should be free and accessible to all, with government funding ensuring quality standards and opportunities for all students.', score: 'left' },
              { id: 'b', text: 'Education should be funded by both public and private sectors, allowing for school choice and competition.', score: 'center' },
              { id: 'c', text: 'Education should be privatized, with minimal government involvement and the market determining the best quality education.', score: 'right' }
            ]
          },
          {
            id: 20,
            text: 'What is your stance on national security?',
            options: [
              { id: 'a', text: 'National security should prioritize diplomacy and peaceful resolutions over military action, and be focused on protecting civil liberties.', score: 'left' },
              { id: 'b', text: 'National security should focus on a balance of diplomacy and military readiness, with an emphasis on protecting citizens from threats.', score: 'center' },
              { id: 'c', text: 'National security should prioritize military strength and preemptive action to protect national interests.', score: 'right' }
            ]
          }
        ],
        results: {
          left: "You align with progressive or left-wing ideologies. You advocate for government intervention in the economy, social welfare programs, and equal rights for all citizens.",
          center: "You align with moderate or centrist ideologies. You believe in balanced government intervention, with respect for both individual freedoms and social responsibility.",
          right: "You align with conservative or right-wing ideologies. You believe in limited government, free-market capitalism, and prioritizing national interests and security."
        }
      },

      exploringBusinessQuiz: {
        id: 'exploringBusinessQuiz',
        title: 'Exploring the Type of Business You Should Start',
        type: quizTypes.CATEGORICAL,
        questions: [
          {
            id: 1,
            text: 'How would you describe your risk tolerance?',
            options: [
              { id: 'a', text: 'I prefer a stable, low-risk environment.', score: 'lowRisk' },
              { id: 'b', text: 'I am open to moderate risk and growth potential.', score: 'moderateRisk' },
              { id: 'c', text: 'I’m comfortable taking high risks for potentially high rewards.', score: 'highRisk' }
            ]
          },
          {
            id: 2,
            text: 'How do you feel about working long hours in the beginning?',
            options: [
              { id: 'a', text: 'I’m looking for a work-life balance with a manageable workload.', score: 'lowCommitment' },
              { id: 'b', text: 'I’m ready to dedicate extra time to my business to make it successful.', score: 'highCommitment' },
              { id: 'c', text: 'I don’t mind working long hours if the work is engaging and fulfilling.', score: 'moderateCommitment' }
            ]
          },
          {
            id: 3,
            text: 'Which of the following best describes your skills?',
            options: [
              { id: 'a', text: 'I am good with people and have strong communication skills.', score: 'serviceBusiness' },
              { id: 'b', text: 'I have a technical skill or expertise that I could leverage in a business.', score: 'productBusiness' },
              { id: 'c', text: 'I am a creative thinker and can develop innovative concepts or ideas.', score: 'creativeBusiness' }
            ]
          },
          {
            id: 4,
            text: 'How important is it to you that your business has a social impact?',
            options: [
              { id: 'a', text: 'It’s essential for me to contribute positively to society.', score: 'socialImpact' },
              { id: 'b', text: 'I’d like to make a difference, but it’s not my top priority.', score: 'moderateImpact' },
              { id: 'c', text: 'I’m more focused on profitability and business success than social impact.', score: 'profitDriven' }
            ]
          },
          {
            id: 5,
            text: 'Do you prefer managing people or working alone?',
            options: [
              { id: 'a', text: 'I prefer working independently or with a small, manageable team.', score: 'solopreneur' },
              { id: 'b', text: 'I enjoy managing a team and leading others toward a shared goal.', score: 'teamLeader' },
              { id: 'c', text: 'I’m flexible and could go either way depending on the business needs.', score: 'flexible' }
            ]
          },
          {
            id: 6,
            text: 'How do you feel about technology and automation?',
            options: [
              { id: 'a', text: 'I prefer to focus on human connections and hands-on work.', score: 'lowTech' },
              { id: 'b', text: 'I’m open to using technology to streamline operations and improve efficiency.', score: 'moderateTech' },
              { id: 'c', text: 'I am passionate about integrating technology and automation into my business.', score: 'highTech' }
            ]
          },
          {
            id: 7,
            text: 'How do you handle failure or setbacks?',
            options: [
              { id: 'a', text: 'I tend to avoid risks that might lead to failure.', score: 'riskAvoider' },
              { id: 'b', text: 'I can bounce back from setbacks and see them as learning opportunities.', score: 'resilient' },
              { id: 'c', text: 'Failure is a learning experience, but I tend to focus on the emotional impact it has on me.', score: 'emotionallyVulnerable' }
            ]
          },
          {
            id: 8,
            text: 'Which of these best describes your financial situation?',
            options: [
              { id: 'a', text: 'I have limited financial resources to invest initially but am resourceful.', score: 'bootstrap' },
              { id: 'b', text: 'I have enough savings or capital to start a business with moderate investment.', score: 'moderateInvestment' },
              { id: 'c', text: 'I’m willing to invest a significant amount to get my business off the ground.', score: 'highInvestment' }
            ]
          },
          {
            id: 9,
            text: 'What kind of impact do you want your business to have?',
            options: [
              { id: 'a', text: 'I want to create a business that generates consistent, passive income.' , score: 'passiveIncome' },
              { id: 'b', text: 'I want a business that offers innovative products or services with a competitive edge.' , score: 'innovationDriven' },
              { id: 'c', text: 'I want to build a business that directly helps and improves people’s lives.' , score: 'helpOthers' }
            ]
          },
          {
            id: 10,
            text: 'How comfortable are you with marketing and promoting your business?',
            options: [
              { id: 'a', text: 'I am comfortable and confident in my marketing abilities.', score: 'marketingPro' },
              { id: 'b', text: 'I am willing to learn and improve my marketing skills as needed.', score: 'marketingLearner' },
              { id: 'c', text: 'I prefer to hire someone else to handle the marketing aspects of my business.', score: 'delegator' }
            ]
          },
          {
            id: 11,
            text: 'What’s your vision for business growth?',
            options: [
              { id: 'a', text: 'I prefer steady, sustainable growth that ensures long-term stability.', score: 'steadyGrowth' },
              { id: 'b', text: 'I aim for rapid growth and scalability, even if it means taking bigger risks.', score: 'scalableGrowth' },
              { id: 'c', text: 'I’m open to growth, but I want to prioritize maintaining the quality of my products or services.' , score: 'qualityFocused' }
            ]
          },
          {
            id: 12,
            text: 'Which best describes your approach to customer service?',
            options: [
              { id: 'a', text: 'I believe in offering a premium customer experience that exceeds expectations.', score: 'premiumService' },
              { id: 'b', text: 'I aim to provide good service, but I also want to focus on efficiency and cost-effectiveness.', score: 'balancedService' },
              { id: 'c', text: 'I believe in self-service and automation, keeping customer service costs low.' , score: 'selfService' }
            ]
          },
          {
            id: 13,
            text: 'Do you prefer physical products or digital services?',
            options: [
              { id: 'a', text: 'I prefer creating physical products and selling them in a tangible market.' , score: 'physicalProduct' },
              { id: 'b', text: 'I am more interested in offering digital services, such as consulting or online courses.', score: 'digitalService' },
              { id: 'c', text: 'I want to work with both physical and digital products or services.', score: 'hybridApproach' }
            ]
          },
          {
            id: 14,
            text: 'How do you view competition in business?',
            options: [
              { id: 'a', text: 'I believe in healthy competition but aim to differentiate myself through unique offerings.', score: 'competitive' },
              { id: 'b', text: 'I prefer to operate in a niche market with little competition.', score: 'nicheMarket' },
              { id: 'c', text: 'I don’t mind competition; it motivates me to do better.', score: 'competitiveSpirit' }
            ]
          },
          {
            id: 15,
            text: 'Which industry excites you the most?',
            options: [
              { id: 'a', text: 'Technology and innovation.', score: 'techIndustry' },
              { id: 'b', text: 'Health and wellness.', score: 'healthIndustry' },
              { id: 'c', text: 'Retail and e-commerce.' , score: 'retailIndustry' }
            ]
          },
          {
            id: 16,
            text: 'How do you prefer to deal with your finances?',
            options: [
              { id: 'a', text: 'I like to keep my finances in order and have clear financial goals and tracking systems.' , score: 'organized' },
              { id: 'b', text: 'I’m fairly good at managing finances but could improve with better tracking and planning.' , score: 'improving' },
              { id: 'c', text: 'I’m not very focused on finances and often handle them reactively.' , score: 'reactive' }
            ]
          },
          {
            id: 17,
            text: 'How do you approach failure?',
            options: [
              { id: 'a', text: 'I learn from it and use it as a stepping stone to success.' , score: 'resilient' },
              { id: 'b', text: 'I feel disappointed but try to move forward and improve.' , score: 'reflective' },
              { id: 'c', text: 'I tend to avoid situations where failure is a strong possibility.' , score: 'riskAvoidant' }
            ]
          },
          {
            id: 18,
            text: 'What type of customer do you want to attract?',
            options: [
              { id: 'a', text: 'I want to attract loyal, repeat customers.' , score: 'loyalCustomers' },
              { id: 'b', text: 'I want to attract a wide variety of customers and reach as many people as possible.' , score: 'massMarket' },
              { id: 'c', text: 'I prefer to target a niche audience with specific needs or interests.' , score: 'nicheMarket' }
            ]
          },
          {
            id: 19,
            text: 'What’s your approach to scalability?',
            options: [
              { id: 'a', text: 'I want a business that can scale quickly with minimal hands-on management.' , score: 'scalable' },
              { id: 'b', text: 'I prefer steady growth that doesn’t require too many changes to my business model.' , score: 'gradualGrowth' },
              { id: 'c', text: 'I want to keep my business small and personal, with no desire for large-scale expansion.' , score: 'localBusiness' }
            ]
          },
          {
            id: 20,
            text: 'Do you prefer innovation or stability?',
            options: [
              { id: 'a', text: 'I’m all about innovation, even if it involves taking risks.' , score: 'innovative' },
              { id: 'b', text: 'I appreciate both, and I aim to bring innovation within a stable framework.' , score: 'balanced' },
              { id: 'c', text: 'I prefer stability and minimizing risks.' , score: 'stable' }
            ]
          }
        ],
        results: {
          techIndustry: "You may be suited for a business in the tech industry, where innovation and rapid growth are key.",
          healthIndustry: "A business focused on health and wellness could be a great fit, offering opportunities for helping others while achieving success.",
          retailIndustry: "Consider starting a retail or e-commerce business that combines creativity and product sales."
          // Further results would follow based on different scoring combinations.
        }
      }
      

      
  
  };
