'use server';

import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function askAI(question: string) {
  // Mock vector search
  const mockContext = "This is mock context from documentation.";

  const result = await streamText({
    model: openai('gpt-4'),
    prompt: `Context: ${mockContext}\nQuestion: ${question}\nAnswer:`,
  });

  return result.toTextStreamResponse();
}