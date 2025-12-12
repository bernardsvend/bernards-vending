// N8N Webhook URL - replace with your actual n8n webhook URL after importing the workflow
const N8N_WEBHOOK_URL = 'https://hooks.h20crypto.vip/webhook/vendbot';

export const generateVendingAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userQuery }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.reply || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Chatbot API Error:", error);
    return "I'm having trouble connecting right now. Please call us at 630-474-5101 or email bernardsvending@gmail.com";
  }
};
