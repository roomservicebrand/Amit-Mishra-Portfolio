import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateInsights = async (): Promise<string> => {
  try {
    const prompt = `
      Provide a concise summary of three major emerging trends in the US behavioral healthcare industry for the coming year, 
      focusing on business development and revenue optimization. 
      Format the response as simple HTML using only <h3> for each trend title and <p> for each description. 
      Do not include any other HTML tags like <ul>, <li>, <b>, or <br>. Ensure the output is clean HTML.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error generating insights:", error);
    throw new Error("Failed to generate insights. Please try again later.");
  }
};

export const draftEmail = async (yourName: string, companyName: string, outreachPurpose: string): Promise<string> => {
  try {
    const fromClause = companyName ? `from ${yourName} at ${companyName}` : `from ${yourName}`;
    const prompt = `
      Draft a professional and concise outreach email to Amit Mishra ${fromClause}.
      The purpose of the outreach is: "${outreachPurpose}".
      Based on this purpose, craft a suitable and personalized email. Mention that you were impressed by his portfolio and expertise.
      The email should be ready to send, including a subject line, greeting, body, and closing. Format it as plain text.
      For example:
      Subject: [A relevant subject based on the purpose]

      Hi Amit,

      ...
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error drafting email:", error);
    throw new Error("Failed to draft email. Please try again later.");
  }
};


const AMIT_AI_SYSTEM_PROMPT = `You are a helpful AI assistant representing Amit Mishra on his personal portfolio website. Your goal is to answer questions from potential employers, recruiters, and collaborators based on the information provided below. Be professional, concise, and helpful. Do not invent information. If you don't know the answer, say that you don't have that information but can pass the question along to Amit.

**About Amit Mishra:**
Amit is a forward-thinking, results-driven healthcare executive with over 8 years of dedicated experience in the behavioral health sector. He has a proven track record of transforming organizations through strategic business development and operational excellence.

**Key Expertise:**
- Business Development & Strategic Partnerships
- Utilization Review (UR)
- Revenue Cycle Optimization & Financial Negotiations
- Building and Managing Referral Networks
- Private-Pay Models & Out-of-Network Benefits for high-net-worth clients

**Major Achievements:**
- Generated over $700,000 in monthly revenue for 8 consecutive fiscal quarters.
- Recognized as "Employee of the Year 2023" for outstanding leadership.
- Awarded "Employee of the Month" four times for consistent, exceptional contributions.

**Role:**
Your role is to act as a first point of contact, providing information about Amit's skills, experience, and achievements. You can answer questions like "What is Amit's experience with Utilization Review?" or "Can you detail his major achievements?". Be conversational and friendly.
`;

let chat: Chat; // Maintain chat session

export const chatWithAmitAI = async (message: string): Promise<string> => {
  try {
    if (!chat) {
      chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: AMIT_AI_SYSTEM_PROMPT,
        },
      });
    }

    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Error in chatWithAmitAI:", error);
    throw new Error("Failed to get a response from the AI assistant.");
  }
};
