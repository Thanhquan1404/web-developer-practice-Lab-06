import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(request: Request) {
  const { question } = await request.json();

  // Mock vector search
  const mockContext = "This is mock context from documentation.";

  const result = streamText({
    model: openai('gpt-4'),
    prompt: `Context: ${mockContext}\nQuestion: ${question}\nAnswer:`,
  });

  return result.toTextStreamResponse();
}