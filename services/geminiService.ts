import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // In production, this should be handled securely
const ai = new GoogleGenAI({ apiKey });

export const generateVendingAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "I'm currently offline (API Key missing). Please contact support for assistance.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `You are 'VendBot', a helpful, professional, and friendly AI assistant for 'Bernard's Vending', a vending machine service company. 
        
        Your goals:
        1. Explain that we provide FREE vending machines to qualified businesses (50+ employees or high traffic).
        2. We handle all stocking, maintenance, and support at no cost to the business.
        3. We offer Snack, Drink, Combo, and Healthy machines.
        4. Suggest popular snack mixes if asked (mix of healthy and sweet).
        5. Be concise and encourage them to "Request a Free Machine" via the form.
        
        Do not make up specific pricing for products inside the machine as it varies. 
        Keep answers under 100 words unless detailed explanation is requested.`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server. Please try again later.";
  }
};