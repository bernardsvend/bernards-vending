// N8N Webhook URL
const N8N_WEBHOOK_URL = 'https://hooks.h20crypto.vip/webhook/vendbot';

// Generate a unique session ID per browser session
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('vendbot-session');
  if (!sessionId) {
    sessionId = 'session-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('vendbot-session', sessionId);
  }
  return sessionId;
};

export const generateVendingAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userQuery,
        sessionId: getSessionId()
      }),
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
