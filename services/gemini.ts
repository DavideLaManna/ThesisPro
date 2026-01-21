
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getThesisAdvice = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Sei un consulente accademico esperto. L'utente ha bisogno di aiuto con questo argomento di tesi: "${topic}". Fornisci 3 suggerimenti su possibili titoli e una breve struttura in 5 punti. Rispondi in italiano in modo professionale.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Siamo spiacenti, il consulente AI è momentaneamente occupato. Prova a contattarci via form.";
  }
};
