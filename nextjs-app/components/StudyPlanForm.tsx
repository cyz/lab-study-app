'use client';

import { useState } from 'react';
import { StudyPlanRequest } from '@/lib/types';

interface StudyPlanFormProps {
  onSubmit: (data: StudyPlanRequest) => void;
  isLoading: boolean;
}

export function StudyPlanForm({ onSubmit, isLoading }: StudyPlanFormProps) {
  const [formData, setFormData] = useState<StudyPlanRequest>({
    area: 'backend',
    nivel: 'iniciante',
    tempo_semanal: 10,
    duracao_meses: 3,
    objetivos_especificos: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
            <i className="ri-code-box-line mr-1 text-primary-500"></i> Área
          </label>
          <select
            id="area"
            value={formData.area}
            onChange={(e) => setFormData({ ...formData, area: e.target.value as any })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            disabled={isLoading}
          >
            <option value="backend">Backend</option>
            <option value="frontend">Frontend</option>
            <option value="fullstack">Full-Stack</option>
            <option value="data_science">Data Science</option>
            <option value="ai_ml">AI/ML</option>
          </select>
        </div>

        <div>
          <label htmlFor="nivel" className="block text-sm font-medium text-gray-700 mb-1">
            <i className="ri-stack-line mr-1 text-primary-500"></i> Nível
          </label>
          <select
            id="nivel"
            value={formData.nivel}
            onChange={(e) => setFormData({ ...formData, nivel: e.target.value as any })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            disabled={isLoading}
          >
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="tempo_semanal" className="block text-sm font-medium text-gray-700 mb-1">
            <i className="ri-time-line mr-1 text-primary-500"></i> Horas/Semana
          </label>
          <input
            type="number"
            id="tempo_semanal"
            value={formData.tempo_semanal}
            onChange={(e) => setFormData({ ...formData, tempo_semanal: parseInt(e.target.value) })}
            min="1"
            max="40"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="duracao_meses" className="block text-sm font-medium text-gray-700 mb-1">
            <i className="ri-calendar-line mr-1 text-primary-500"></i> Duração (meses)
          </label>
          <input
            type="number"
            id="duracao_meses"
            value={formData.duracao_meses}
            onChange={(e) => setFormData({ ...formData, duracao_meses: parseInt(e.target.value) })}
            min="1"
            max="24"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
            disabled={isLoading}
          />
        </div>
      </div>

      <div>
        <label htmlFor="objetivos" className="block text-sm font-medium text-gray-700 mb-1">
          <i className="ri-target-line mr-1 text-primary-500"></i> Objetivos Específicos (Opcional)
        </label>
        <textarea
          id="objetivos"
          value={formData.objetivos_especificos}
          onChange={(e) => setFormData({ ...formData, objetivos_especificos: e.target.value })}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="Ex: Quero aprender a criar APIs RESTful..."
          disabled={isLoading}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? (
          <>
            <i className="ri-loader-4-line animate-spin mr-2"></i>
            Gerando plano...
          </>
        ) : (
          <>
            <i className="ri-magic-line mr-2"></i>
            Gerar Plano de Estudos
          </>
        )}
      </button>
    </form>
  );
}
