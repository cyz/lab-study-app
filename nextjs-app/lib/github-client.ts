import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { ChatMessage, ChatCompletionOptions } from './types';

/**
 * Cliente para integração com GitHub Models API
 * Usa Azure OpenAI SDK que é compatível com GitHub Models
 */
export class GitHubModelsClient {
  private client: OpenAIClient;
  private readonly endpoint = 'https://models.inference.ai.azure.com';
  private readonly modelName = 'gpt-4o';

  constructor(token?: string) {
    const githubToken = token || process.env.GITHUB_TOKEN;
    
    if (!githubToken) {
      throw new Error('GITHUB_TOKEN is required');
    }

    this.client = new OpenAIClient(
      this.endpoint,
      new AzureKeyCredential(githubToken)
    );
  }

  /**
   * Gera uma resposta usando chat completion
   * @param options Opções de chat completion
   * @returns Conteúdo da resposta gerada
   */
  async chatCompletion(options: ChatCompletionOptions): Promise<string> {
    const {
      messages,
      temperature = 0.7,
      max_tokens = 2000,
    } = options;

    try {
      const result = await this.client.getChatCompletions(
        this.modelName,
        messages,
        {
          temperature,
          maxTokens: max_tokens,
        }
      );

      const content = result.choices[0]?.message?.content;
      
      if (!content) {
        throw new Error('No content in response');
      }

      return content;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`GitHub Models API error: ${error.message}`);
      }
      throw new Error('Unknown error occurred');
    }
  }
}
